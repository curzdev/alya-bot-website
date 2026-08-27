import Image from "next/image";
import Link from "next/link";
import { categories, commandCount } from "@/lib/commands";

const pillars = [
  {
    title: "Server management",
    body: "Moderation, roles, nicknames, slowmode, and a full config suite so staff can run the room without leaving Discord.",
  },
  {
    title: "Security stack",
    body: "AutoMod plus a dedicated protection layer for raids, bot waves, anti-nuke, lockdowns, and staff whitelists.",
  },
  {
    title: "Engagement",
    body: "Leveling, achievements, giveaways, events, invite tracking, and chat activity keep communities warm — not noisy.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Premium multi-utility bot</p>
            <p className="brand-hero">Alya</p>
            <h1>
              An advanced, premium multi-utility Discord bot built for complete
              server management, security, and engagement.
            </h1>
            <div className="hero-ctas">
              <a className="btn-primary" href="#invite">
                Invite Bot
              </a>
              <a className="btn-ghost" href="#support">
                Support Server
              </a>
            </div>
          </div>
          <div className="hero-portrait">
            <div className="portrait-ring">
              <Image
                src="/alya.jpg"
                alt="Alya bot avatar"
                width={520}
                height={520}
                className="portrait-img"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="band-inner">
          <p>
            {commandCount} slash commands across {categories.length} systems —
            moderation to server intelligence.
          </p>
          <Link href="/commands" className="text-link">
            Open the commands directory
          </Link>
        </div>
      </section>

      <section className="page home-features">
        <header className="page-intro">
          <p className="eyebrow">What Alya is for</p>
          <h2 className="section-title">Built like a control room, styled like her avatar</h2>
          <p>
            Deep charcoal glass, soft lavender glow, and rose highlights — the
            same palette as Alya’s portrait.
          </p>
        </header>
        <ul className="glass-grid">
          {pillars.map((item) => (
            <li key={item.title} className="glass-card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>

        <header className="page-intro systems-intro">
          <p className="eyebrow">Systems</p>
          <h2 className="section-title">Every category in the wiki</h2>
        </header>
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
