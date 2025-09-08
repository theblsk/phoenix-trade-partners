export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-8">
          <h2 className="[font-family:var(--font-display)] text-3xl tracking-wide font-medium">Our Services</h2>
          <p className="mt-2 [font-family:var(--font-body)] text-neutral-700 max-w-2xl">
           {` Practical, outcomes-driven solutions from sourcing through delivery.`}
          </p>
        </header>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-neutral-200 p-6">
            <h3 className="[font-family:var(--font-display)] text-xl tracking-wide">Strategic Sourcing</h3>
            <p className="mt-2 [font-family:var(--font-body)] text-neutral-700">{"End-to-end supplier search, vetting, and negotiation for reliable delivery timelines and costs."}</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-6">
            <h3 className="[font-family:var(--font-display)] text-xl tracking-wide">Deal Facilitation</h3>
            <p className="mt-2 [font-family:var(--font-body)] text-neutral-700">Term sheets, documentation flow, and milestone management across jurisdictions and time zones.</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-6">
            <h3 className="[font-family:var(--font-display)] text-xl tracking-wide">Quality & Compliance</h3>
            <p className="mt-2 [font-family:var(--font-body)] text-neutral-700">Independent inspection coordination and compliance checks to ensure product and contract integrity.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

