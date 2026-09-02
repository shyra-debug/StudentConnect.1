import {
  Target,
  Eye,
  HandHeart,
  Users,
  BookOpen,
  TrendingUp,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import type { Page } from '@/data';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

const GOALS = [
  'Foster a connected and inclusive student community at CPSU Main Campus',
  'Provide easy access to student directories and campus event information',
  'Support academic growth through shared resources and peer connections',
  'Encourage participation in campus life, organizations, and activities',
];

const VALUES = [
  { icon: Users, title: 'Community', text: 'We believe strong connections make for a richer university experience.' },
  { icon: BookOpen, title: 'Learning', text: 'We support every student\'s academic journey with accessible resources.' },
  { icon: TrendingUp, title: 'Growth', text: 'We create opportunities for personal and professional development.' },
  { icon: HandHeart, title: 'Service', text: 'We serve the CPSU community with integrity and dedication.' },
];

export default function About({ onNavigate }: AboutProps) {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-800 to-navy-900 pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="pointer-events-none absolute -right-32 -top-20 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(124,200,252,0.1),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold text-sky-300">
              <Sparkles className="h-3.5 w-3.5" />
              About StudentConnect
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Building bridges across the CPSU community
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-navy-100">
              StudentConnect is a student-centered platform designed to bring the CPSU Main Campus
              community closer together — making it easier to find friends, discover events, and
              make the most of university life.
            </p>
          </div>
        </div>
      </section>

      {/* What is StudentConnect */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-sky-600">Our Purpose</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl">
                What is StudentConnect?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-navy-500">
                StudentConnect is a digital hub built for the students of CPSU Main Campus. It
                provides a centralized space where students can find and connect with peers, stay
                informed about campus events, and access the resources they need to succeed
                academically and socially.
              </p>
              <p className="mt-4 text-base leading-relaxed text-navy-500">
                We aim to break down the barriers between colleges and year levels, making it
                effortless to discover classmates who share your interests, join organizations,
                and participate in the vibrant campus life at CPSU.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {VALUES.map((v, i) => (
                <div
                  key={v.title}
                  className="card-base animate-fade-in-up p-5 hover:-translate-y-1 hover:shadow-card-hover"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-navy-50 to-sky-50 text-navy-700">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-navy-800">{v.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-500">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-navy-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Mission */}
            <div className="card-base p-8 sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-700 text-white shadow-md">
                <Target className="h-7 w-7" />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-navy-800">Our Mission</h2>
              <p className="mt-4 text-base leading-relaxed text-navy-500">
                To empower every CPSU Main Campus student with a connected, informed, and engaged
                university experience — by providing a reliable platform to discover peers, access
                campus events, and build meaningful relationships that support both academic success
                and personal growth.
              </p>
            </div>

            {/* Vision */}
            <div className="card-base p-8 sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-600 text-white shadow-md">
                <Eye className="h-7 w-7" />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-navy-800">Our Vision</h2>
              <p className="mt-4 text-base leading-relaxed text-navy-500">
                To be the leading student platform in the region — a place where no student feels
                disconnected, where every campus opportunity is within reach, and where the CPSU
                community thrives through collaboration, shared knowledge, and lifelong connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-sky-600">Our Goals</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl">
                What we set out to achieve
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy-500">
                StudentConnect is driven by clear, student-focused goals that guide everything we build.
              </p>
            </div>
            <ul className="space-y-4">
              {GOALS.map((goal) => (
                <li key={goal} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-500" />
                  <span className="text-base leading-relaxed text-navy-600">{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How it helps */}
      <section className="bg-navy-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-600">How It Helps</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl">
              Helping students connect, learn, and grow
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { icon: Users, title: 'Connect', text: 'Find classmates by course, year, or shared interests and start building your network today.' },
              { icon: BookOpen, title: 'Learn', text: 'Stay on top of academic events, conferences, and workshops happening at CPSU Main Campus.' },
              { icon: TrendingUp, title: 'Grow', text: 'Engage with campus life, join organizations, and develop skills that extend beyond the classroom.' },
            ].map((item, i) => (
              <div
                key={item.title}
                className="card-base animate-fade-in-up p-7 text-center hover:-translate-y-1 hover:shadow-card-hover"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-600 to-navy-800 text-white shadow-md">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy-800">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">{item.text}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 text-center">
            <button
              onClick={() => onNavigate('students')}
              className="btn-primary"
            >
              Explore Students
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
