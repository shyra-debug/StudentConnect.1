import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Students from '@/pages/Students';
import Events from '@/pages/Events';
import About from '@/pages/About';
import Login from '@/pages/Login';
import type { Page } from '@/data';

export default function App() {
  const [page, setPage] = useState<Page>('home');

  const handleNavigate = (next: Page) => {
    setPage(next);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    document.title =
      page === 'home'
        ? 'StudentConnect — Connect, Learn, Grow'
        : `StudentConnect — ${page.charAt(0).toUpperCase() + page.slice(1)}`;
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'students':
        return <Students />;
      case 'events':
        return <Events />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'login':
        return <Login onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  const showFooter = page !== 'login';

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar currentPage={page} onNavigate={handleNavigate} />
      <main className="flex-1">{renderPage()}</main>
      {showFooter && <Footer onNavigate={handleNavigate} />}
    </div>
  );
}
