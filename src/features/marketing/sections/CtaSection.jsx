import Button from '@/components/ui/Button';

export default function CtaSection() {
  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-10" aria-label="Get started">
      <div className="mx-auto max-w-5xl rounded-[20px] border border-[rgba(83,74,183,0.3)] bg-nexa-navy-2 px-6 py-14 text-center sm:px-10">
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
          Ready to hire in <span className="text-nexa-amber">4 days?</span>
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-base text-nexa-gray">
          Join companies using NexaTalentHire for pre-screened talent and a faster hiring cycle.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3.5">
          <Button size="lg">Get started</Button>
          <Button variant="outline" size="lg">
            Book a demo
          </Button>
        </div>
      </div>
    </section>
  );
}
