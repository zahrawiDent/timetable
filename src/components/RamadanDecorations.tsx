import { Star, Lantern } from "./icons";

export const RamadanDecorations = () => (
  <>
    <Star class="absolute top-10 left-[10%] w-4 h-4 opacity-40" delay={0} />
    <Star
      class="absolute top-20 right-[15%] w-3 h-3 opacity-30"
      delay={0.5}
    />
    <Star class="absolute top-32 left-[20%] w-2 h-2 opacity-50" delay={1} />
    <Star
      class="absolute top-16 right-[25%] w-3 h-3 opacity-35"
      delay={1.5}
    />
    <Star
      class="absolute bottom-20 left-[8%] w-4 h-4 opacity-40"
      delay={0.7}
    />
    <Star
      class="absolute bottom-32 right-[12%] w-2 h-2 opacity-45"
      delay={1.2}
    />

    <div class="absolute top-8 right-[5%] floating opacity-60">
      <Lantern class="w-12 h-12" />
    </div>
    <div
      class="absolute top-24 left-[3%] floating opacity-50"
      style={{ "animation-delay": "2s" }}
    >
      <Lantern class="w-10 h-10" />
    </div>
  </>
);
