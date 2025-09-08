export default function AboutValues() {
  return (
    <section id="about" className="bg-neutral-50 border-y border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-8">
          <h2 className="[font-family:var(--font-display)] text-3xl tracking-wide font-medium">
            Why Phoenix Trade Partners
          </h2>
          <p className="mt-2 [font-family:var(--font-body)] text-neutral-700 max-w-2xl">
            Focused on outcomes with disciplined communication and reliable
            execution.
          </p>
        </header>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="[font-family:var(--font-body)] text-neutral-700 text-lg leading-relaxed">
              Phoenix Trade Partners aligns counterparties and logistics into
              one streamlined flow. Expect disciplined communication,
              contractual clarity, and reliable execution.
            </p>
            <ul className="mt-6 space-y-3 [font-family:var(--font-body)] text-neutral-800">
              <li>• Clear single point of contact</li>
              <li>• Transparent milestone tracking</li>
              <li>• Vendor neutrality and confidentiality</li>
            </ul>
          </div>
          <div
            id="values"
            className="rounded-2xl border border-neutral-200 p-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-neutral-200 p-4">
                <p className="[font-family:var(--font-display)]">Speed</p>
                <p className="[font-family:var(--font-body)] text-neutral-700">
                  Fast responses and decision‑ready options.
                </p>
              </div>
              <div className="rounded-xl border border-neutral-200 p-4">
                <p className="[font-family:var(--font-display)]">Assurance</p>
                <p className="[font-family:var(--font-body)] text-neutral-700">
                  Diligence, inspections, and clear acceptance criteria.
                </p>
              </div>
              <div className="rounded-xl border border-neutral-200 p-4">
                <p className="[font-family:var(--font-display)]">Trust</p>
                <p className="[font-family:var(--font-body)] text-neutral-700">
                  Contracts that protect both parties and relationships.
                </p>
              </div>
              <div className="rounded-xl border border-neutral-200 p-4">
                <p className="[font-family:var(--font-display)]">Global</p>
                <p className="[font-family:var(--font-body)] text-neutral-700">
                  Coverage across MENA, Europe, and Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
