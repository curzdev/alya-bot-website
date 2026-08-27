import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page">
      <header className="page-intro">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>
          That route is not part of the Alya placeholder dashboard.{" "}
          <Link href="/" className="text-link">
            Return home
          </Link>
          .
        </p>
      </header>
    </main>
  );
}
