import Image from "next/image";
export default function Hero() {
  return (
    <section className="grain relative overflow-hidden border-b border-neutral-200">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/hero-bg.webp)" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/60 to-white/70"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="[font-family:var(--font-display)] text-4xl sm:text-5xl tracking-wide leading-tight font-semibold">
              International Trade,{" "}
              <span className="text-neutral-700">Made Certain</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg [font-family:var(--font-body)] text-neutral-700 text-balance font-medium">
              Phoenix Trade Partners facilitates global procurement and deal
              execution with precision, confidentiality, and speed, so
              counterparties can focus on outcomes.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href="#contact"
                className="rounded-2xl bg-neutral-900 text-white px-6 py-3 [font-family:var(--font-body)] hover:opacity-90"
              >
                Request a Callback
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-neutral-900 px-6 py-3 [font-family:var(--font-body)] hover:bg-neutral-900 hover:text-white"
              >
                View Services
              </a>
            </div>
            <ul className="mt-8 grid grid-cols-1 md:grid-cols-3 max-w-xl text-center text-base [font-family:var(--font-body)] text-neutral-800 gap-3">
              <li className="py-4 px-4 flex items-center justify-center gap-2 font-semibold rounded-2xl backdrop-blur-md supports-[backdrop-filter]:bg-white/40 bg-white/60 ring-1 ring-white/50 border border-white/60 shadow-lg hover:bg-white/70 transition-colors duration-200">
                <Image src="/window.svg" alt="" aria-hidden="true" width={16} height={16} />
                Procurement
              </li>
              <li className="py-4 px-4 flex items-center justify-center gap-2 font-semibold rounded-2xl backdrop-blur-md supports-[backdrop-filter]:bg-white/40 bg-white/60 ring-1 ring-white/50 border border-white/60 shadow-lg hover:bg-white/70 transition-colors duration-200">
                <Image src="/globe.svg" alt="" aria-hidden="true" width={16} height={16} />
                Deal Facilitation
              </li>
              <li className="py-4 px-4 flex items-center justify-center gap-2 font-semibold rounded-2xl backdrop-blur-md supports-[backdrop-filter]:bg-white/40 bg-white/60 ring-1 ring-white/50 border border-white/60 shadow-lg hover:bg-white/70 transition-colors duration-200">
                <Image src="/file.svg" alt="" aria-hidden="true" width={16} height={16} />
                Quality Assurance
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
