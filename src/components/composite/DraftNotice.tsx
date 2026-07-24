export function DraftNotice() {
  return (
    <div className="rounded-[12px] border border-amber-500/30 bg-amber-500/[0.06] px-6 py-5">
      <p className="text-[13px] font-semibold uppercase tracking-[1.5px] text-amber-400">
        Draft — Not Legally Reviewed
      </p>
      <p className="mt-2 text-[13.5px] leading-[1.7] text-gray-2">
        This page is a working draft, structured around common practices for a digital
        agency. It has not been reviewed by a lawyer and should not be relied on as legal
        advice or a finished policy. It will be reviewed and finalized before public launch.
      </p>
    </div>
  );
}
