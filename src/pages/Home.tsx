import {
  ArrowRight,
  Users,
  CalendarDays,
  BookOpen,
  Network,
  Sparkles,
  GraduationCap,
  TrendingUp,
} from 'lucide-react';
import type { Page } from '@/data';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const FEATURES = [
  {
    icon: Users,
    title: 'Student Directory',
    description: 'Browse and connect with fellow students across all colleges and year levels at CPSU Main Campus.',
  },
  {
    icon: CalendarDays,
    title: 'Campus Events',
    description: 'Stay updated on upcoming university events, academic activities, sports festivals, and cultural nights.',
  },
  {
    icon: BookOpen,
    title: 'Academic Resources',
    description: 'Access course information, student organizations, and academic calendars all in one place.',
  },
  {
    icon: Network,
    title: 'Build Connections',
    description: 'Find study partners, join organizations, and grow your professional network before you graduate.',
  },
];

const STATS = [
  { value: '12,000+', label: 'Active Students' },
  { value: '8', label: 'Colleges' },
  { value: '50+', label: 'Student Organizations' },
  { value: '100+', label: 'Campus Events / Year' },
];

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-800 via-navy-800 to-navy-900">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-navy-500/30 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,200,252,0.12),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex animate-fade-in-down items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold text-sky-300">
              <Sparkles className="h-3.5 w-3.5" />
              Welcome to StudentConnect
            </span>
            <h1 className="mt-6 animate-fade-in-up text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Connect. Learn.{' '}
              <span className="bg-gradient-to-r from-sky-300 to-sky-500 bg-clip-text text-transparent">
                Grow.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl animate-fade-in-up text-lg leading-relaxed text-navy-100" style={{ animationDelay: '0.1s' }}>
              StudentConnect is the official student platform for CPSU Main Campus — your hub for
              discovering classmates, staying on top of campus events, and building the connections
              that shape your university journey.
            </p>
            <div className="mt-10 flex animate-fade-in-up flex-col items-center justify-center gap-4 sm:flex-row" style={{ animationDelay: '0.2s' }}>
              <button
                onClick={() => onNavigate('students')}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:bg-sky-400 hover:shadow-xl hover:shadow-sky-500/30 hover:-translate-y-0.5"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <svg className="relative block w-full text-white" viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ height: '60px' }}>
          <path fill="currentColor" d="M0,32L60,37.3C120,43,240,53,360,53.3C480,53,600,43,720,37.3C840,32,960,32,1080,37.3C1200,43,1320,53,1380,58.7L1440,64L1440,80L0,80Z" />
        </svg>
      </section>

      {/* Stats */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="animate-fade-in-up text-center"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <p className="text-3xl font-extrabold text-navy-800 sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-navy-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-600">What We Offer</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl">
              Everything you need to make the most of campus life
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-500">
              StudentConnect brings the CPSU Main Campus community into one place. Whether you're
              looking for a study partner, tracking the next campus event, or exploring student
              organizations, we make it easy to stay connected and informed.
            </p>
          </div>

          {/* Feature grid */}
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feature, i) => (
              <div
                key={feature.title}
                className="card-base group p-6 hover:-translate-y-1 hover:shadow-card-hover"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-50 to-sky-50 text-navy-700 transition-all duration-300 group-hover:from-navy-600 group-hover:to-navy-800 group-hover:text-white">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy-800">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-navy-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-700 to-navy-900 px-6 py-14 text-center shadow-xl sm:px-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-navy-500/30 blur-3xl" />
            <div className="relative">
              <GraduationCap className="mx-auto h-12 w-12 text-sky-400" />
              <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
                Ready to join the community?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-navy-100">
                Create your account today and start connecting with students across CPSU Main Campus.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button
                  onClick={() => onNavigate('login')}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:bg-sky-400 hover:-translate-y-0.5"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => onNavigate('events')}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5"
                >
                  View Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[
              { icon: Users, title: 'Connect', text: 'Find and reach out to students who share your courses, interests, and goals.' },
              { icon: BookOpen, title: 'Learn', text: 'Stay informed about academic resources, events, and opportunities on campus.' },
              { icon: TrendingUp, title: 'Grow', text: 'Build relationships and skills that will serve you well beyond graduation.' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-50 text-navy-700">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy-800">{item.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-navy-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
