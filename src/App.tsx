import { Show, createMemo, createSignal, For } from "solid-js";
import { TIME_SLOTS, timetableData, type ClassData, type Timetable } from "./data";
import html2canvas from 'html2canvas-pro';

type TimetableProps = {
  data: Timetable;
  groupName?: string; // title for the timetable
  setRef?: (el: HTMLDivElement) => void; // wrapper ref to include legend in export
};
const Timetable = (props: TimetableProps) => {
  const DAY_ORDER = ['السبت', 'الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'];
  const days = createMemo(() => {
    const keys = Object.keys(props.data || {});
    return keys.sort((a, b) => DAY_ORDER.indexOf(a) - DAY_ORDER.indexOf(b));
  });

  // Determine visible time slots: hide trailing slots unused by this group's timetable
  const visibleSlots = createMemo(() => {
    const slots = TIME_SLOTS;
    const ds = days();
    let lastUsed = -1;
    for (let i = slots.length - 1; i >= 0; i--) {
      const slot = slots[i];
      const used = ds.some((d) => !!props.data[d]?.[slot]);
      if (used) { lastUsed = i; break; }
    }
    return lastUsed >= 0 ? slots.slice(0, lastUsed + 1) : slots;
  });

  // Get class type color
  const getClassTypeColor = (type: string) => {
    switch (type?.toLowerCase()) {
      case 'lecture':
        return 'bg-blue-100 border-blue-300 text-blue-800';
      case 'lab':
        return 'bg-green-100 border-green-300 text-green-800';
      // case 'tutorial':
      //   return 'bg-yellow-100 border-yellow-300 text-yellow-800';
      // case 'practical':
      //   return 'bg-purple-100 border-purple-300 text-purple-800';
      // case 'project':
      //   return 'bg-red-100 border-red-300 text-red-800';
      default:
        return 'bg-gray-100 border-gray-300 text-gray-800';
    }
  };

  return (
    <div class="w-fit p-4 bg-white rounded-lg shadow-sm mx-auto" ref={props.setRef}>
      <h2 id="timetable-title" class="text-2xl font-bold text-gray-800 mb-6 text-center">{props.groupName || 'الجدول الجامعي'}</h2>
      <div class="shadow-lg rounded-lg mx-auto">
        <table class="border-collapse bg-white mx-auto" aria-labelledby="timetable-title">
          <caption class="sr-only">الجدول: {props.groupName || 'الجدول الجامعي'}</caption>
          {/* Header */}
          <thead>
            <tr class="bg-gray-800 text-white">
              <th scope="col" class="border border-gray-300 p-3 text-left font-semibold ">اليوم</th>
              <For each={visibleSlots()}>
                {(timeSlot) => (
                  <th scope="col" class="border border-gray-300 p-3 text-center font-semibold">
                    {timeSlot}
                  </th>
                )}
              </For>
            </tr>
          </thead>
          {/* Body */}
          <tbody>
            <For each={days()}>
              {(day) => (
                <tr class="hover:bg-gray-50 transition-colors">
                  <th scope="row" class="border border-gray-300 p-3 bg-gray-100 font-medium text-sm text-gray-700 text-right">
                    {day}
                  </th>
                  <For each={visibleSlots()}>
                    {(timeSlot) => {
                      const classData = props.data[day]?.[timeSlot];
                      // Skip rendering continuation cells (they're covered by colspan)
                      if (classData === 'continue') {
                        return null;
                      }
                      const spanCount = (classData as ClassData)?.span || 1;
                      // Clamp colspan so it doesn't exceed visible columns
                      const remaining = visibleSlots().length - visibleSlots().indexOf(timeSlot);
                      const colSpan = Math.max(1, Math.min(spanCount, remaining));
                      return (
                        <td
                          class="border border-gray-300 p-2 align-top"
                          colspan={colSpan}
                          style={{
                            width: `${colSpan * 120}px`
                          }}
                        >
                          {classData && typeof classData === 'object' ? (
                            <div class={`p-2 rounded-md border-l-4 h-full flex flex-col justify-center ${getClassTypeColor(classData.type)}`}>
                              <div class="font-semibold text-sm mb-1">
                                {classData.subject}
                              </div>
                              <div class="text-xs opacity-75">
                                {classData.type}
                              </div>
                            </div>
                          ) : (
                            <div class="h-full" aria-hidden="true"></div>
                          )}
                        </td>
                      );
                    }}
                  </For>
                </tr>
              )}
            </For>
          </tbody>
        </table>
      </div>
      {/* Legend */}
      {/* <div class="mt-6 flex flex-wrap gap-4 justify-center" aria-label="الشرح" role="group"> */}
      {/*   <ul class="flex flex-wrap gap-4 justify-center" role="list"> */}
      {/*     <li class="flex items-center gap-2"> */}
      {/*       <span class="w-4 h-4 bg-blue-100 border border-blue-300 rounded" aria-hidden="true"></span> */}
      {/*       <span class="text-sm text-gray-700">Lecture</span> */}
      {/*     </li> */}
      {/*     <li class="flex items-center gap-2"> */}
      {/*       <span class="w-4 h-4 bg-green-100 border border-green-300 rounded" aria-hidden="true"></span> */}
      {/*       <span class="text-sm text-gray-700">Lab</span> */}
      {/*     </li> */}
      {/*   </ul> */}
      {/* </div> */}
    </div>
  );
};

export default function App() {
  // Group selection
  const groups = Object.keys(timetableData);
  const [selectedGroup, setSelectedGroup] = createSignal(groups[0] || "");

  // Display helper: show only the numeric range for the group (e.g., "1-2")
  const displayGroup = (g: string) => {
    // Prefer extracting numbers and hyphens in case format changes slightly
    const match = g.match(/\d+(?:-\d+)?/);
    return match ? match[0] : g.replace(/^المجموعة\s*/, '').trim();
  };

  // Wrapper ref to include legend + table in export
  let captureRef: HTMLDivElement | undefined;

  const exportToPNG = async () => {
    if (captureRef) {
      try {
        const canvas = await html2canvas(captureRef, {
          backgroundColor: '#ffffff',
          scale: 2,
          useCORS: true,
          allowTaint: false
        });

        const link = document.createElement('a');
        link.download = `${selectedGroup() || 'group'}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      } catch (error) {
        console.error('Error generating PNG:', error);
      }
    }
  };

  return (
    <div class="min-h-screen bg-gray-50 py-8 flex flex-col items-center" >
      {/* Controls */}
      <div class="w-full max-w-5xl px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div class="flex w-full sm:w-auto items-center gap-2">
          <label for="group-select" class="text-sm text-gray-700">اختر المجموعة:</label>
          <select
            id="group-select"
            class="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 w-full sm:w-48 md:w-64"
            onChange={(e) => setSelectedGroup((e.target as HTMLSelectElement).value)}
            value={selectedGroup()}
          >
            <For each={groups}>{(g) => <option value={g}>{displayGroup(g)}</option>}</For>
          </select>
        </div>

        <div class="w-full sm:w-auto sm:ml-auto">
          <button
            onClick={exportToPNG}
            type="button"
            aria-label={`تصدير الجدول كصورة للمجموعة ${selectedGroup()}`}
            class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 w-full sm:w-auto"
            id="export-button"
            data-umami-event="Export button"
          >
            📸 حفظ كصورة
          </button>
        </div>
      </div>

      {/* Timetable */}
      <div class="w-full px-4 mt-4 overflow-auto">
        <Show when={selectedGroup()} keyed>
          {(g) => (
            <Timetable groupName={g} data={timetableData[g] as Timetable} setRef={(el) => (captureRef = el)} />
          )}
        </Show>
      </div>
    </div>
  );
}
