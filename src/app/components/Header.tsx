import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-0">
            <Image
              src="/logo.webp"
              alt="Phoenix Trade Partners"
              width={168}
              height={56}
              priority
              sizes="(min-width: 768px) 168px, 128px"
              className="h-12 md:h-14 w-auto"
            />
            {/* Desktop wordmark */}
            <span className="hidden md:inline [font-family:var(--font-display)] tracking-[0.12em] text-2xl">Phoenix Trade Partners</span>
            {/* Mobile wordmark (smaller, wraps nicely) */}
            <span className="md:hidden [font-family:var(--font-display)] text-sm leading-tight text-neutral-900">Phoenix Trade Partners</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 ml-auto [font-family:var(--font-body)]">
            <a href="#services" className="hover:text-neutral-600">Services</a>
            <a href="#about" className="hover:text-neutral-600">About</a>
            <a href="#values" className="hover:text-neutral-600">Why Us</a>
            <a href="#contact" className="hover:text-neutral-600">Contact</a>
          </nav>
          <a href="#contact" className="ml-4 rounded-2xl border border-neutral-900 px-4 py-2 text-sm [font-family:var(--font-body)] hover:bg-neutral-900 hover:text-white transition">Start a Deal</a>
        </div>
      </div>
    </header>
  );
}


