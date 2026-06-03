import Link from "next/link";

const stats = [
  { label: "P&L total", value: "—", hint: "Regista apostas para ver" },
  { label: "Total apostado", value: "—", hint: "" },
  { label: "ROI", value: "—", hint: "" },
  { label: "Apostas em aberto", value: "0", hint: "" },
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <header className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-[var(--muted)]">
            Bet Ledger
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            Controlo pessoal de apostas
          </h1>
          <p className="mt-2 max-w-xl text-[var(--muted)]">
            Regista apostas simples e múltiplas, acompanha lucros e perdas, e
            percebe onde o teu dinheiro vai — sem promoções nem conflitos de
            interesse.
          </p>
        </div>
        <Link
          href="/bets/new"
          className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
        >
          Nova aposta
        </Link>
      </header>

      <section className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5"
          >
            <p className="text-sm text-[var(--muted)]">{stat.label}</p>
            <p className="mt-1 text-2xl font-semibold tabular-nums">{stat.value}</p>
            {stat.hint ? (
              <p className="mt-1 text-xs text-[var(--muted)]">{stat.hint}</p>
            ) : null}
          </div>
        ))}
      </section>

      <section className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
        <h2 className="text-lg font-medium">Próximos passos (MVP)</h2>
        <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
          <li>• Formulário de aposta simples e múltipla com cálculo automático</li>
          <li>• Lista de apostas com filtros e liquidação</li>
          <li>• Gráficos de P&L e volume ao longo do tempo</li>
          <li>• Rankings por equipa (melhor / pior desempenho)</li>
        </ul>
        <p className="mt-6 text-xs text-[var(--muted)]">
          Repositório privado — ver{" "}
          <code className="rounded bg-[var(--background)] px-1.5 py-0.5">
            docs/ROADMAP.md
          </code>
        </p>
      </section>
    </main>
  );
}
