import { useMemo, useState } from 'react';
import { CalendarDays, Search } from 'lucide-react';
import EventCard from '@/components/EventCard';
import { EVENTS } from '@/data';

const CATEGORIES = ['All', 'University Event', 'Academic', 'Sports', 'Career', 'Community', 'Organization', 'Cultural'];

export default function Events() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = useMemo(() => {
    return EVENTS.filter((e) => {
      const matchesQuery =
        query.trim() === '' ||
        e.title.toLowerCase().includes(query.toLowerCase()) ||
        e.description.toLowerCase().includes(query.toLowerCase()) ||
        e.location.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === 'All' || e.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <div>
      {/* Page header */}
      <section className="border-b border-navy-100 bg-gradient-to-br from-navy-50 to-white pt-24 pb-12 sm:pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-700 text-white shadow-md">
              <CalendarDays className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl">Campus Events</h1>
              <p className="mt-1 text-sm text-navy-500">
                Upcoming events and activities at CPSU Main Campus
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-navy-100 bg-white py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative flex-1 lg:max-w-md">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-300" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search events..."
                className="input-field pl-11"
              />
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                    category === cat
                      ? 'bg-navy-700 text-white shadow-sm'
                      : 'bg-navy-50 text-navy-600 hover:bg-navy-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events grid */}
      <section className="bg-navy-50/50 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((event, i) => (
                <div key={event.id} className="animate-fade-in-up" style={{ animationDelay: `${Math.min(i, 8) * 0.05}s` }}>
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-navy-200 bg-white py-20 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-50 text-navy-300">
                <CalendarDays className="h-8 w-8" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy-700">No events found</h3>
              <p className="mt-1 text-sm text-navy-400">Try a different search or category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
