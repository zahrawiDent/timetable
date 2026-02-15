export const CrescentMoon = () => (
  <svg
    class="crescent-moon w-16 h-16 text-[var(--ramadan-gold)]"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
  </svg>
);

export const Star = ({
  class: cls = "",
  delay = 0,
}: {
  class?: string;
  delay?: number;
}) => (
  <svg
    class={`star text-[var(--ramadan-gold)] ${cls}`}
    style={`animation-delay: ${delay}s`}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export const Lantern = ({ class: cls = "" }: { class?: string }) => (
  <svg
    class={`lantern text-[var(--ramadan-gold)] ${cls}`}
    viewBox="0 0 64 64"
    fill="currentColor"
  >
    <path d="M32 8c-1.1 0-2 .9-2 2v4h-4l-6 8v20l6 8h4v4c0 1.1.9 2 2 2s2-.9 2-2v-4h4l6-8V22l-6-8h-4v-4c0-1.1-.9-2-2-2zm-4 10h8l4 5.33V42l-4 5.33h-8L24 42V23.33L28 18zm4 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" />
  </svg>
);

export const OrnateDivider = () => (
  <div class="flex items-center justify-center gap-4 my-6">
    <div class="h-px w-20 bg-gradient-to-r from-transparent to-[var(--ramadan-gold)]"></div>
    <svg
      class="w-8 h-8 text-[var(--ramadan-gold)]"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16l-6.4 5.2 2.4-7.2-6-4.8h7.6L12 2z" />
    </svg>
    <div class="h-px w-20 bg-gradient-to-l from-transparent to-[var(--ramadan-gold)]"></div>
  </div>
);
