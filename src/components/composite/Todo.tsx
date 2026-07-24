export function Todo({ children }: { children: string }) {
  return (
    <span className="rounded-[4px] border border-amber-500/30 bg-amber-500/10 px-1.5 py-0.5 font-mono text-[13px] text-amber-400">
      [TODO: {children}]
    </span>
  );
}
