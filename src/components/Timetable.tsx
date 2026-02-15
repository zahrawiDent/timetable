import { Show, createMemo, For } from "solid-js";
import { TIME_SLOTS, type ClassData, type Timetable as TimetableData } from "../data";

type TimetableProps = {
  data: TimetableData;
  groupName?: string;
  daysFilter?: string[];
  timeSlots?: string[];
};

const DAY_ORDER = [
  "السبت",
  "الأحد",
  "الإثنين",
  "الثلاثاء",
  "الأربعاء",
  "الخميس",
  "الجمعة",
];

export const Timetable = (props: TimetableProps) => {
  const slots = () => props.timeSlots || TIME_SLOTS;
  const days = createMemo(() => {
    const keys = Object.keys(props.data || {});
    const filtered = props.daysFilter
      ? keys.filter((d) => props.daysFilter!.includes(d))
      : keys;
    return filtered.sort((a, b) => DAY_ORDER.indexOf(a) - DAY_ORDER.indexOf(b));
  });

  const visibleSlots = createMemo(() => {
    const s = slots();
    const ds = days();
    let lastUsed = -1;
    for (let i = s.length - 1; i >= 0; i--) {
      const slot = s[i];
      const used = ds.some((d) => !!props.data[d]?.[slot]);
      if (used) {
        lastUsed = i;
        break;
      }
    }
    return lastUsed >= 0 ? s.slice(0, lastUsed + 1) : s;
  });

  const getClassTypeStyles = (type: string) => {
    switch (type?.toLowerCase()) {
      case "lecture":
        return "lecture-cell";
      case "lab":
        return "lab-cell";
      default:
        return "bg-gray-800/50 border-gray-600";
    }
  };

  const reverseTimeSlot = (slot: string) => {
    const [start, end] = slot.split("-");
    return `${end}-${start}`;
  };

  return (
    <div class="w-fit p-4 table-container-ramadan mx-auto mb-4">
      <Show when={props.groupName}>
        <div class="text-center mb-4">
          <div class="flex items-center justify-center gap-3">
            <h2 class="ramadan-title text-3xl font-bold">{props.groupName}</h2>
          </div>
        </div>
      </Show>
      <div class="rounded-lg overflow-hidden">
        <table class="border-collapse mx-auto" dir="rtl">
          <thead>
            <tr class="table-header-ramadan text-[var(--ramadan-cream)]">
              <th
                scope="col"
                class="p-4 text-right font-bold border-b-2 border-[var(--ramadan-gold)] border-l border-l-[var(--ramadan-gold)]/20"
              >
                <span class="flex items-center gap-2">
                  <svg
                    class="w-5 h-5 text-[var(--ramadan-gold)]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
                  </svg>
                  اليوم
                </span>
              </th>
              <For each={visibleSlots()}>
                {(timeSlot) => (
                  <th
                    scope="col"
                    class="p-4 text-center font-bold border-b-2 border-[var(--ramadan-gold)] border-l border-l-[var(--ramadan-gold)]/20 whitespace-nowrap"
                  >
                    {reverseTimeSlot(timeSlot)}
                  </th>
                )}
              </For>
            </tr>
          </thead>
          <tbody>
            <For each={days()}>
              {(day, index) => (
                <tr
                  class={`transition-colors ${index() % 2 === 0 ? "bg-[var(--ramadan-deep-blue)]/50" : "bg-[var(--ramadan-royal)]/30"}`}
                >
                  <th
                    scope="row"
                    class="p-4 font-bold text-[var(--ramadan-gold)] text-right border-b border-[var(--ramadan-gold)]/20 border-l border-l-[var(--ramadan-gold)]/15"
                  >
                    {day}
                  </th>
                  <For each={visibleSlots()}>
                    {(timeSlot) => {
                      const classData = props.data[day]?.[timeSlot];
                      if (classData === "continue") {
                        return null;
                      }
                      const spanCount = (classData as ClassData)?.span || 1;
                      const remaining =
                        visibleSlots().length -
                        visibleSlots().indexOf(timeSlot);
                      const colSpan = Math.max(
                        1,
                        Math.min(spanCount, remaining),
                      );
                      return (
                        <td
                          class="p-2 align-top border-b border-[var(--ramadan-gold)]/10 border-l border-l-[var(--ramadan-gold)]/15"
                          colspan={colSpan}
                          style={{ width: `${colSpan * 110}px` }}
                        >
                          {classData && typeof classData === "object" ? (
                            <div
                              class={`p-3 rounded-lg h-full flex flex-col justify-center ${getClassTypeStyles(classData.type)}`}
                            >
                              <div class="font-bold text-[var(--ramadan-cream)] text-sm mb-1">
                                {classData.subject}
                              </div>
                              <div class="text-xs text-[var(--ramadan-gold)] opacity-80">
                                {classData.type}
                              </div>
                            </div>
                          ) : (
                            <div class="h-12"></div>
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
    </div>
  );
};
