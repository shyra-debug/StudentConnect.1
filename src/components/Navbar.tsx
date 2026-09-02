import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import type { Page } from '@/data';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const NAV_ITEMS: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'Students', page: 'students' },
  { label: 'Events', page: 'events' },
  { label: 'About', page: 'about' },
  { label: 'Log In', page: 'login' },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-navy-100 bg-white/90 backdrop-blur-md shadow-nav'
          : 'border-b border-transparent bg-white/60 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo onClick={() => handleNavigate('home')} />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.page;
            const isLogin = item.page === 'login';
            if (isLogin) {
              return (
                <li key={item.page}>
                  <button
                    onClick={() => handleNavigate(item.page)}
                    className="ml-2 rounded-xl bg-navy-700 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-navy-600 hover:shadow-md hover:shadow-navy-700/25 hover:-translate-y-0.5"
                  >
                    {item.label}
                  </button>
                </li>
              );
            }
            return (
              <li key={item.page}>
                <button
                  onClick={() => handleNavigate(item.page)}
                  className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-navy-800'
                      : 'text-navy-500 hover:text-navy-800'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-sky-500" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-700 transition-colors hover:bg-navy-50 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-navy-100 bg-white transition-all duration-300 md:hidden ${
          mobileOpen ? 'max-h-96' : 'max-h-0 border-t-0'
        }`}
      >
        <ul className="space-y-1 px-4 py-4">
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.page;
            const isLogin = item.page === 'login';
            return (
              <li key={item.page}>
                <button
                  onClick={() => handleNavigate(item.page)}
                  className={`block w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                    isLogin
                      ? 'bg-navy-700 text-white hover:bg-navy-600'
                      : isActive
                        ? 'bg-navy-50 text-navy-800'
                        : 'text-navy-600 hover:bg-navy-50 hover:text-navy-800'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
