// type TimetableProps = {
//   data: Timetable
//   ref: HTMLTableElement | undefined
// };
// const Timetable = (props: TimetableProps) => {
//   const days = createMemo(() => Object.keys(props.data || {}));
//
//   // Get class type color
//   const getClassTypeColor = (type: string) => {
//     switch (type?.toLowerCase()) {
//       case 'lecture':
//         return 'bg-blue-100 border-blue-300 text-blue-800';
//       case 'lab':
//         return 'bg-green-100 border-green-300 text-green-800';
//       case 'tutorial':
//         return 'bg-yellow-100 border-yellow-300 text-yellow-800';
//       case 'practical':
//         return 'bg-purple-100 border-purple-300 text-purple-800';
//       case 'project':
//         return 'bg-red-100 border-red-300 text-red-800';
//       default:
//         return 'bg-gray-100 border-gray-300 text-gray-800';
//     }
//   };
//
//   return (
//     <div class="w-full p-4 bg-white">
//       <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">الجدول الجامعي</h2>
//       <div class="overflow-x-auto shadow-lg rounded-lg" >
//         <table class="border-collapse bg-white " ref={props.ref}>
//           {/* Header */}
//           <thead>
//             <tr class="bg-gray-800 text-white">
//               <th class="border border-gray-300 p-3 text-left font-semibold ">اليوم</th>
//               <For each={TIME_SLOTS}>
//                 {(timeSlot) => (
//                   <th class="border border-gray-300 p-3 text-center font-semibold">
//                     {timeSlot}
//                   </th>
//                 )}
//               </For>
//             </tr>
//           </thead>
//           {/* Body */}
//           <tbody>
//             <For each={days()}>
//               {(day) => (
//                 <tr class="hover:bg-gray-50 transition-colors">
//                   <td class="border border-gray-300 p-3 bg-gray-100 font-medium text-sm text-gray-700">
//                     {day}
//                   </td>
//                   <For each={TIME_SLOTS}>
//                     {(timeSlot) => {
//                       const classData = props.data[day]?.[timeSlot];
//                       // Skip rendering continuation cells (they're covered by colspan)
//                       if (classData === 'continue') {
//                         return null;
//                       }
//                       const spanCount = (classData as ClassData)?.span || 1;
//                       return (
//                         <td
//                           class="border border-gray-300 p-2 align-top"
//                           colspan={spanCount}
//                           style={{
//                             width: `${spanCount * 120}px`
//                           }}
//                         >
//                           {classData && typeof classData === 'object' ? (
//                             <div class={`p-2 rounded-md border-l-4 h-full flex flex-col justify-center ${getClassTypeColor(classData.type)}`}>
//                               <div class="font-semibold text-sm mb-1">
//                                 {classData.subject}
//                               </div>
//                               <div class="text-xs opacity-75">
//                                 {classData.type}
//                               </div>
//                             </div>
//                           ) : (
//                             <div class="h-full"></div>
//                           )}
//                         </td>
//                       );
//                     }}
//                   </For>
//                 </tr>
//               )}
//             </For>
//           </tbody>
//         </table>
//       </div>
//       {/* Legend */}
//       <div class="mt-6 flex flex-wrap gap-4 justify-center">
//         <div class="flex items-center gap-2">
//           <div class="w-4 h-4 bg-blue-100 border border-blue-300 rounded"></div>
//           <span class="text-sm text-gray-600">Lecture</span>
//         </div>
//         <div class="flex items-center gap-2">
//           <div class="w-4 h-4 bg-green-100 border border-green-300 rounded"></div>
//           <span class="text-sm text-gray-600">Lab</span>
//         </div>
//       </div>
//     </div>
//   );
// };
