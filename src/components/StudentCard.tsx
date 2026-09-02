import { Mail, BookOpen, Calendar, Hash } from 'lucide-react';
import type { Student } from '@/data';

interface StudentCardProps {
  student: Student;
}

export default function StudentCard({ student }: StudentCardProps) {
  const initials = student.name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('');

  return (
    <article className="card-base group p-5 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="flex items-start gap-4">
        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${student.avatarColor} text-lg font-bold text-white shadow-md`}
        >
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-bold text-navy-800">{student.name}</h3>
          <p className="mt-0.5 flex items-center gap-1.5 text-xs font-medium text-sky-600">
            <Hash className="h-3 w-3" />
            {student.studentId}
          </p>
        </div>
      </div>

      <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-navy-500">{student.bio}</p>

      <dl className="mt-4 space-y-2 text-sm">
        <div className="flex items-center gap-2 text-navy-600">
          <BookOpen className="h-4 w-4 shrink-0 text-navy-400" />
          <dd className="truncate font-medium">{student.course}</dd>
        </div>
        <div className="flex items-center gap-2 text-navy-600">
          <Calendar className="h-4 w-4 shrink-0 text-navy-400" />
          <dd className="font-medium">{student.yearLevel}</dd>
        </div>
        <div className="flex items-center gap-2 text-navy-600">
          <Mail className="h-4 w-4 shrink-0 text-navy-400" />
          <dd className="truncate font-medium">{student.email}</dd>
        </div>
      </dl>

      <div className="mt-4 flex flex-wrap gap-1.5 border-t border-navy-100 pt-4">
        {student.interests.map((interest) => (
          <span
            key={interest}
            className="rounded-full bg-navy-50 px-2.5 py-1 text-xs font-medium text-navy-600"
          >
            {interest}
          </span>
        ))}
      </div>
    </article>
  );
}
