import Link from "next/link";
import { categories } from "@/lib/commands";

const highlights = [
  {
    title: "Security first",
    body: "Moderation, AutoMod, and a dedicated protection layer for raids, bots, and nuke attempts.",
  },
  {
    title: "Engagement that compounds",
    body: "Leveling, achievements, giveaways, events, and chat activity keep servers alive without spam.",
  },
  {
    title: "Server Intelligence",
    body: "Alya’s unique diagnostics — health scores, reports, and ranked recommendations for staff.",
  },
];

export const metadata = {
  title: "Features",
  description: "What Alya covers: protection, engagement, analytics, and server intelligence.",
};

export default function FeaturesPage() {
  return (
    <main className="page">
      <header className="page-intro">
        <p className="eyebrow">Capabilities</p>
        <h1>Built for complete server operations</h1>
        <p>
          One bot for management, security, and engagement — with a diagnostic
          layer that tells you what to fix next.
        </p>
      </header>

      <ul className="glass-grid">
        {highlights.map((item) => (
          <li key={item.title} className="glass-card">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>

      <section className="systems">
        <h2>Every system</h2>
        <p>Open a category in the commands wiki to see usage and syntax.</p>
        <ul className="system-grid">
          {categories.map((cat) => (
            <li key={cat.id}>
              <Link href={`/commands#${cat.id}`}>
                <span>
                  {cat.icon} {cat.title}
                </span>
                <em>{cat.commands.length} commands</em>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
