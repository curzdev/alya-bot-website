import { CommandExplorer } from "@/components/CommandExplorer";
import { commandCount } from "@/lib/commands";

export const metadata = {
  title: "Commands Directory",
  description: "Every Alya slash command, grouped by category, with syntax and purpose.",
};

export default function CommandsPage() {
  return (
    <main className="page">
      <header className="page-intro">
        <p className="eyebrow">Wiki</p>
        <h1>Commands directory</h1>
        <p>
          {commandCount} commands. Search by name or purpose, then expand a
          category to see syntax — required arguments in{" "}
          <code>&lt;angle brackets&gt;</code>, optional in{" "}
          <code>[square brackets]</code>.
        </p>
      </header>
      <CommandExplorer />
    </main>
  );
}
