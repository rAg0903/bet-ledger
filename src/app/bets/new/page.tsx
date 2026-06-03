import Link from "next/link";

export default function NewBetPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <Link
        href="/"
        className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]"
      >
        ← Voltar
      </Link>
      <h1 className="mt-6 text-2xl font-semibold">Nova aposta</h1>
      <p className="mt-2 text-[var(--muted)]">
        Formulário em construção. O modelo de dados e a lógica de cálculo já
        estão definidos em{" "}
        <code className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-sm">
          src/lib/betting.ts
        </code>
        .
      </p>
    </main>
  );
}
