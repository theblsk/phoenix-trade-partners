export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="[font-family:var(--font-body)] text-sm text-neutral-600">
          © {year} Phoenix Trade Partners. All rights reserved.
        </p>
        <nav className="text-sm [font-family:var(--font-body)] text-neutral-600 flex gap-4">
          
        </nav>
      </div>
    </footer>
  );
}
