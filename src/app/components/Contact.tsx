export default function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="[font-family:var(--font-display)] text-3xl tracking-wide">
          Begin a Conversation
        </h2>
        <p className="mt-3 [font-family:var(--font-body)] text-neutral-700">
          Send a brief about your requirement and preferred timelines. We’ll
          reply with next steps and a call time.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3 [font-family:var(--font-body)]">
          <a
            href="mailto:contact@phoenixtradepartners.com"
            className="rounded-2xl border border-neutral-900 px-4 py-3 hover:bg-neutral-900 hover:text-white"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com"
            className="rounded-2xl border border-neutral-900 px-4 py-3 hover:bg-neutral-900 hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="tel:+0000000000"
            className="rounded-2xl border border-neutral-900 px-4 py-3 hover:bg-neutral-900 hover:text-white"
          >
            Call
          </a>
        </div>
        <p className="mt-6 text-sm text-neutral-500">
          By contacting us you consent to being reached for business purposes.
        </p>
      </div>
    </section>
  );
}
