import { MapPin, Briefcase, Search } from 'lucide-react';
import { SEARCH_SUGGESTIONS } from '@/data/marketing/candidates';
import Button from '@/components/ui/Button';

export default function SearchSection() {
  return (
    <section className="px-4 pb-14 sm:px-6 lg:px-10" aria-label="Talent search">
      <div className="mx-auto max-w-[900px] rounded-2xl border border-[rgba(83,74,183,0.3)] bg-nexa-card p-6">
        <div className="flex flex-wrap gap-3">
          <SearchField icon={Search} placeholder="Job title, skill, keyword…" />
          <SearchField icon={MapPin} placeholder="Location — Hyderabad, Remote…" />
          <SearchField icon={Briefcase} placeholder="Experience (years)" />
          <Button variant="blue" className="shrink-0 self-stretch sm:self-auto">
            Search
          </Button>
        </div>
        <div className="mt-3.5 flex flex-wrap gap-2">
          {SEARCH_SUGGESTIONS.map((tag) => (
            <button
              key={tag}
              type="button"
              className="cursor-pointer rounded-full border border-[rgba(55,138,221,0.25)] bg-[rgba(55,138,221,0.12)] px-3 py-1 text-xs text-nexa-blue-light transition-colors hover:bg-[rgba(55,138,221,0.22)]"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function SearchField({ icon: Icon, placeholder }) {
  return (
    <label className="flex min-w-[200px] flex-1 items-center gap-2.5 rounded-[10px] border border-[rgba(83,74,183,0.2)] bg-nexa-navy px-4 py-3">
      <Icon className="h-4 w-4 shrink-0 opacity-50" aria-hidden />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border-0 bg-transparent text-sm text-white outline-none placeholder:text-nexa-gray-dark"
      />
    </label>
  );
}
