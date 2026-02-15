import { CrescentMoon, OrnateDivider } from "./icons";

export const Header = () => (
  <div class="text-center mb-8 px-4">
    <div class="flex items-center justify-center gap-4 mb-4">
      <CrescentMoon />
      <h1 class="ramadan-title text-5xl md:text-6xl font-bold p-2">
        رمضان كريم
      </h1>
      <CrescentMoon />
    </div>
    <OrnateDivider />
  </div>
);
