import Link from "next/link";

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className="flex flex-col leading-none text-white">
      <span aria-hidden="true" className="mb-1.5 h-1 w-7 rounded-sm bg-accent" />
      <span className="text-xl font-extrabold tracking-tight">Shadowfax</span>
      <span className="mt-1 text-xs text-[#9FB0BF]">Learning &amp; Development</span>
    </Link>
  );
}
