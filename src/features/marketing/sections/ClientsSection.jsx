import { TRUSTED_CLIENTS } from '@/data/marketing/clients';

export default function ClientsSection() {
  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-10" aria-label="Trusted companies">
      <p className="mb-7 text-center text-[13px] tracking-[0.15em] text-nexa-gray uppercase">
        Trusted by leading companies
      </p>
      <div className="mx-auto flex max-w-[900px] flex-wrap justify-center gap-4">
        {TRUSTED_CLIENTS.map((client) => (
          <div
            key={client.name}
            className="flex items-center gap-2.5 rounded-xl border border-[rgba(83,74,183,0.3)] bg-nexa-card px-7 py-4 transition-colors hover:border-nexa-purple-light"
          >
            <span
              className="flex h-9 w-9 items-center justify-center rounded-lg font-display text-sm font-extrabold text-white"
              style={{ background: client.color }}
              aria-hidden
            >
              {client.initial}
            </span>
            <span className="text-sm font-semibold text-nexa-gray">{client.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
