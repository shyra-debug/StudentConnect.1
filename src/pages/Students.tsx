import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal, Users, XCircle } from 'lucide-react';
import StudentCard from '@/components/StudentCard';
import { STUDENTS, COURSES } from '@/data';

export default function Students() {
  const [query, setQuery] = useState('');
  const [courseFilter, setCourseFilter] = useState('All');
  const [yearFilter, setYearFilter] = useState('All');

  const YEARS = ['All', '1st Year', '2nd Year', '3rd Year', '4th Year'];

  const filtered = useMemo(() => {
    return STUDENTS.filter((s) => {
      const matchesQuery =
        query.trim() === '' ||
        s.name.toLowerCase().includes(query.toLowerCase()) ||
        s.studentId.toLowerCase().includes(query.toLowerCase()) ||
        s.email.toLowerCase().includes(query.toLowerCase()) ||
        s.interests.some((i) => i.toLowerCase().includes(query.toLowerCase()));
      const matchesCourse = courseFilter === 'All' || s.course === courseFilter;
      const matchesYear = yearFilter === 'All' || s.yearLevel === yearFilter;
      return matchesQuery && matchesCourse && matchesYear;
    });
  }, [query, courseFilter, yearFilter]);

  const hasFilters = query !== '' || courseFilter !== 'All' || yearFilter !== 'All';

  const clearFilters = () => {
    setQuery('');
    setCourseFilter('All');
    setYearFilter('All');
  };

  return (
    <div>
      {/* Page header */}
      <section className="border-b border-navy-100 bg-gradient-to-br from-navy-50 to-white pt-24 pb-12 sm:pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-700 text-white shadow-md">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl">Students</h1>
              <p className="mt-1 text-sm text-navy-500">
                Discover and connect with {STUDENTS.length}+ students across CPSU Main Campus
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 border-b border-navy-100 bg-white/90 backdrop-blur-md py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-300" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, ID, email, or interest..."
                className="input-field pl-11"
              />
            </div>

            {/* Course filter */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 shrink-0 text-navy-400" />
              <select
                value={courseFilter}
                onChange={(e) => setCourseFilter(e.target.value)}
                className="rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm font-medium text-navy-700 transition-all duration-200 focus:border-navy-500 focus:outline-none focus:ring-4 focus:ring-navy-500/10"
              >
                <option value="All">All Courses</option>
                {COURSES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Year filter */}
            <select
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
              className="rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm font-medium text-navy-700 transition-all duration-200 focus:border-navy-500 focus:outline-none focus:ring-4 focus:ring-navy-500/10"
            >
              {YEARS.map((y) => (
                <option key={y} value={y}>{y === 'All' ? 'All Years' : y}</option>
              ))}
            </select>

            {hasFilters && (
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-1.5 rounded-xl px-4 py-3 text-sm font-medium text-navy-500 transition-colors hover:bg-navy-50 hover:text-navy-700"
              >
                <XCircle className="h-4 w-4" />
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-navy-50/50 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-sm font-medium text-navy-500">
            Showing <span className="font-bold text-navy-700">{filtered.length}</span> of {STUDENTS.length} students
          </p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((student, i) => (
                <div key={student.id} className="animate-fade-in-up" style={{ animationDelay: `${Math.min(i, 8) * 0.05}s` }}>
                  <StudentCard student={student} />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-navy-200 bg-white py-20 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-50 text-navy-300">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy-700">No students found</h3>
              <p className="mt-1 text-sm text-navy-400">Try adjusting your search or filters.</p>
              <button onClick={clearFilters} className="btn-secondary mt-6">
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
