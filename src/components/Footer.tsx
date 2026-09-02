import { GraduationCap, Mail, MapPin, Phone, Facebook, Instagram, Twitter } from 'lucide-react';
import type { Page } from '@/data';
import Logo from './Logo';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-navy-900 text-navy-100">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo variant="light" onClick={() => onNavigate('home')} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-200">
              A modern student platform helping the CPSU Main Campus community connect, learn, and grow together.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-800 text-navy-200 transition-all duration-300 hover:bg-sky-600 hover:text-white hover:-translate-y-0.5"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {([
            { label: 'Home', page: 'home' as Page },
            { label: 'Students', page: 'students' as Page },
            { label: 'Events', page: 'events' as Page },
            { label: 'About', page: 'about' as Page },
          ] as const).map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-navy-200 transition-colors hover:text-sky-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Resources</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {['Student Handbook', 'Campus Map', 'Academic Calendar', 'Student Organizations'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-navy-200 transition-colors hover:text-sky-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3 text-navy-200">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                <span>CPSU Main Campus, Kabankalan City, Negros Occidental, Philippines</span>
              </li>
              <li className="flex items-center gap-3 text-navy-200">
                <Phone className="h-4 w-4 shrink-0 text-sky-400" />
                <span>(034) 471-3756</span>
              </li>
              <li className="flex items-center gap-3 text-navy-200">
                <Mail className="h-4 w-4 shrink-0 text-sky-400" />
                <span>studentconnect@cpsu.edu.ph</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-navy-800 pt-8 text-sm text-navy-300 sm:flex-row">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-sky-400" />
            <span>&copy; 2026 StudentConnect. All rights reserved.</span>
          </div>
          <p className="text-navy-400">Built for students, by students at CPSU.</p>
        </div>
      </div>
    </footer>
  );
}
