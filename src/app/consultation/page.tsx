export const metadata = { title: "Book a Consultation" };

export default function ConsultationPage() {
  return (
    <section className="mx-auto max-w-[720px] px-6 py-16">
      <h1 className="font-display text-4xl font-medium tracking-[-0.03em] text-navy">
        Book a Consultation
      </h1>
      <p className="mt-4 text-[15px] leading-7 text-muted">
        Share the brief. We will come back with a clear view of whether — and
        how — Cettle can help.
      </p>
      <form className="mt-10 grid gap-4">
        <label className="text-xs font-semibold uppercase tracking-wide text-muted">
          Name
          <input
            required
            className="mt-1 h-12 w-full border border-line px-3 text-sm outline-none focus:border-navy"
          />
        </label>
        <label className="text-xs font-semibold uppercase tracking-wide text-muted">
          Organisation
          <input className="mt-1 h-12 w-full border border-line px-3 text-sm outline-none focus:border-navy" />
        </label>
        <label className="text-xs font-semibold uppercase tracking-wide text-muted">
          Email
          <input
            required
            type="email"
            className="mt-1 h-12 w-full border border-line px-3 text-sm outline-none focus:border-navy"
          />
        </label>
        <label className="text-xs font-semibold uppercase tracking-wide text-muted">
          What is at stake?
          <textarea
            required
            rows={5}
            className="mt-1 w-full border border-line px-3 py-3 text-sm outline-none focus:border-navy"
          />
        </label>
        <button
          type="submit"
          className="h-12 bg-navy text-sm font-semibold text-white hover:bg-navy-mid"
        >
          Request a conversation
        </button>
      </form>
    </section>
  );
}
