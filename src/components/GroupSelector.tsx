import { For } from "solid-js";

interface GroupSelectorProps {
  groups: string[];
  selectedGroup: string;
  onGroupChange: (group: string) => void;
}

const displayGroup = (g: string) => {
  const match = g.match(/\d+(?:-\d+)?/);
  return match ? match[0] : g.replace(/^المجموعة\s*/, "").trim();
};

export const GroupSelector = (props: GroupSelectorProps) => (
  <div class="flex w-full sm:w-auto items-center gap-3">
    <label
      for="group-select"
      class="text-[var(--ramadan-gold)] font-bold"
    >
      اختر المجموعة:
    </label>
    <select
      id="group-select"
      class="select-ramadan rounded-lg px-4 py-3 text-sm w-full sm:w-48 focus-visible:outline-none"
      onChange={(e) =>
        props.onGroupChange((e.target as HTMLSelectElement).value)
      }
      value={props.selectedGroup}
    >
      <For each={props.groups}>
        {(g) => <option value={g}>{displayGroup(g)}</option>}
      </For>
    </select>
  </div>
);
