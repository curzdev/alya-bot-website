"use client";

import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { categories } from "@/lib/commands";

export function CommandExplorer() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("all");
  const deferredQuery = useDeferredValue(query);

  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (!id) return;
    if (categories.some((c) => c.id === id)) {
      setActive(id);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, []);

  const filtered = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    return categories
      .filter((cat) => active === "all" || cat.id === active)
      .map((cat) => ({
        ...cat,
        commands: cat.commands.filter((cmd) => {
          if (!q) return true;
          return (
            cmd.name.toLowerCase().includes(q) ||
            cmd.syntax.toLowerCase().includes(q) ||
            cmd.purpose.toLowerCase().includes(q) ||
            cat.title.toLowerCase().includes(q)
          );
        }),
      }))
      .filter((cat) => cat.commands.length > 0);
  }, [active, deferredQuery]);

  const visibleCount = filtered.reduce((n, c) => n + c.commands.length, 0);

  return (
    <div className="wiki">
      <div className="wiki-toolbar">
        <label className="search-field">
          <span className="sr-only">Search commands</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search commands, syntax, or purpose…"
            autoComplete="off"
          />
        </label>
        <p className="wiki-count">
          {visibleCount} command{visibleCount === 1 ? "" : "s"}
        </p>
      </div>

      <div className="cat-rail" role="tablist" aria-label="Command categories">
        <button
          type="button"
          className={active === "all" ? "cat-chip is-on" : "cat-chip"}
          onClick={() => setActive("all")}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={active === cat.id ? "cat-chip is-on" : "cat-chip"}
            onClick={() => setActive(cat.id)}
          >
            <span suppressHydrationWarning>{cat.icon}</span> {cat.title}
          </button>
        ))}
      </div>

      <div className="wiki-body">
        {filtered.length === 0 ? (
          <p className="empty">No commands match that search.</p>
        ) : (
          filtered.map((cat) => (
            <section key={cat.id} className="cat-block" id={cat.id}>
              <header className="cat-head">
                <h2>
                  <span aria-hidden="true" suppressHydrationWarning>
                    {cat.icon}
                  </span>{" "}
                  {cat.title}
                </h2>
                <p>{cat.blurb}</p>
                <p className="cat-usage">
                  <strong>How to use:</strong> {cat.usage}
                </p>
              </header>
              <ul className="cmd-list">
                {cat.commands.map((cmd) => (
                  <li key={cmd.name} className="cmd-row">
                    <code className="cmd-syntax">{cmd.syntax}</code>
                    <p>{cmd.purpose}</p>
                  </li>
                ))}
              </ul>
            </section>
          ))
        )}
      </div>
    </div>
  );
}
