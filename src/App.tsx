import { Show, createSignal } from "solid-js";
import {
  TIME_SLOTS,
  LECTURE_TIME_SLOTS,
  timetableData,
  type Timetable as TimetableData,
} from "./data";
import { domToPng } from "modern-screenshot";
import { Header } from "./components/Header";
import { GroupSelector } from "./components/GroupSelector";
import { ExportButton } from "./components/ExportButton";
import { Timetable } from "./components/Timetable";
import { RamadanDecorations } from "./components/RamadanDecorations";
import { Footer } from "./components/Footer";

export default function App() {
  const groups = Object.keys(timetableData);
  const [selectedGroup, setSelectedGroup] = createSignal(groups[0] || "");

  let captureRef: HTMLDivElement | undefined;

  const exportToPNG = async () => {
    if (captureRef) {
      try {
        await domToPng(captureRef, {
          scale: 2,
          backgroundColor: "#0a1628",
          style: {
            backgroundImage: `
              radial-gradient(ellipse at 20% 20%, rgba(212, 175, 55, 0.03) 0%, transparent 50%), 
              radial-gradient(ellipse at 80% 80%, rgba(26, 95, 74, 0.05) 0%, transparent 50%), 
              radial-gradient(circle at 50% 50%, rgba(30, 58, 95, 0.5) 0%, transparent 70%), 
              url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
            `,
          },
        }).then((dataUrl) => {
          const link = document.createElement("a");
          link.download = `${selectedGroup() || "group"}.png`;
          link.href = dataUrl;
          link.click();
        });
      } catch (error) {
        console.error("Error generating PNG:", error);
      }
    }
  };

  const labDays = ["السبت", "الثلاثاء", "الأربعاء", "الخميس"];
  const lectureDays = ["الأحد", "الإثنين"];

  return (
    <div class="min-h-screen islamic-pattern py-8 flex flex-col items-center relative overflow-hidden">
      <RamadanDecorations />
      <Header />

      <div class="w-full max-w-5xl px-4 flex flex-col sm:flex-row sm:items-center justify-center gap-4 mb-6">
        <GroupSelector
          groups={groups}
          selectedGroup={selectedGroup()}
          onGroupChange={setSelectedGroup}
        />
        <ExportButton onExport={exportToPNG} />
      </div>

      <div class="w-full px-4 overflow-auto flex justify-center">
        <Show when={selectedGroup()} keyed>
          {(g) => {
            const data = timetableData[g] as TimetableData;
            return (
              <div
                ref={(el) => (captureRef = el)}
                class="inline-block flex flex-col gap-4 p-8"
              >
                <Timetable
                  groupName={g}
                  data={data}
                  daysFilter={labDays}
                  timeSlots={TIME_SLOTS}
                />
                <Timetable
                  data={data}
                  daysFilter={lectureDays}
                  timeSlots={LECTURE_TIME_SLOTS}
                />
              </div>
            );
          }}
        </Show>
      </div>

      <Footer />
    </div>
  );
}
