interface ExportButtonProps {
  onExport: () => void;
}

export const ExportButton = (props: ExportButtonProps) => (
  <button
    onClick={props.onExport}
    type="button"
    class="button-ramadan py-3 px-8 rounded-lg shadow-lg focus-visible:outline-none w-full sm:w-auto"
    id="export-button"
  >
    حفظ كصورة
  </button>
);
