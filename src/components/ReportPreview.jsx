// Keep the native Power BI screenshots unchanged. This viewport shows the report
// canvas without the Desktop ribbon/panes; the full-size link opens the original.
export default function ReportPreview({ page, loading }) {
  return (
    <div className="relative w-full overflow-hidden rounded-lg border border-gray-200 bg-slate-50" style={{ aspectRatio: '1206 / 812' }}>
      <img
        data-report-preview
        src={page.image}
        width={1920}
        height={1032}
        alt={`${page.name} Power BI report with fictional example data in USD. ${page.description}`}
        loading={loading}
        decoding="async"
        className="absolute h-auto max-w-none"
        style={{ width: `${1920 / 1206 * 100}%`, left: `${-96 / 1206 * 100}%`, top: `${-160 / 812 * 100}%` }}
      />
    </div>
  );
}
