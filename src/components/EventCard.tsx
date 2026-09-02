import { Calendar, Clock, MapPin } from 'lucide-react';
import type { EventItem } from '@/data';

interface EventCardProps {
  event: EventItem;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <article className="card-base group flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-card-hover">
      {/* Banner */}
      <div className={`relative h-32 bg-gradient-to-br ${event.imageColor}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.18),transparent_60%)]" />
        <span className="absolute left-4 top-4 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {event.category}
        </span>
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/90">
          <Calendar className="h-4 w-4" />
          <span className="text-sm font-semibold">{event.date}</span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold leading-snug text-navy-800 transition-colors group-hover:text-navy-600">
          {event.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-navy-500">
          {event.description}
        </p>

        <div className="mt-4 flex flex-col gap-2 border-t border-navy-100 pt-4 text-sm">
          <div className="flex items-center gap-2 text-navy-600">
            <Clock className="h-4 w-4 shrink-0 text-sky-500" />
            <span className="font-medium">{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-navy-600">
            <MapPin className="h-4 w-4 shrink-0 text-sky-500" />
            <span className="font-medium">{event.location}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
