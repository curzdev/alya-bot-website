import Link from "next/link";
import { commandCount } from "@/lib/commands";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-brand">Alya</p>
        <p className="footer-copy">
          Placeholder dashboard · {commandCount} documented commands
        </p>
        <nav className="footer-links">
          <Link href="/commands">Commands</Link>
          <Link href="/features">Features</Link>
        </nav>
      </div>
    </footer>
  );
}
