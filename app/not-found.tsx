import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center gap-4 px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-accent">404</p>
      <h1 className="text-3xl font-extrabold">Page not found</h1>
      <p className="text-muted">The page you are looking for has moved or does not exist.</p>
      <Link href="/" className="rounded-lg bg-primary px-5 py-3 font-semibold text-white hover:bg-primary-hover">
        Back to home
      </Link>
    </section>
  );
}
