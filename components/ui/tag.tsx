export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none md:text-xs">
      {children}
    </span>
  );
}
