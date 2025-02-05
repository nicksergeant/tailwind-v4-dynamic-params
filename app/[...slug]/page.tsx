export default function CatchAllSegmentsPage() {
  return (
    <>
    <div className="bg-blue-500">
      CatchAllSegments Page - this background should be bg-blue-500, but it does not work because of the catch all segments `[...slug]/` directory.
    </div>
    <code>{`
      @import 'tailwindcss' source(none);
      @source './**/*.{js,ts,jsx,tsx,mdx}';
    `}</code>
</>
  );
}
