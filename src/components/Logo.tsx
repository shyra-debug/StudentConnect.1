import { GraduationCap } from 'lucide-react';

interface LogoProps {
  onClick?: () => void;
  variant?: 'dark' | 'light';
}

export default function Logo({ onClick, variant = 'dark' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-navy-800';
  const subColor = variant === 'light' ? 'text-sky-200' : 'text-sky-600';

  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-2.5 transition-transform duration-200 hover:scale-[1.02]"
      aria-label="StudentConnect home"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-navy-600 to-navy-800 shadow-md shadow-navy-700/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-navy-700/30">
        <GraduationCap className="h-5 w-5 text-white" strokeWidth={2.2} />
      </span>
      <span className="flex flex-col items-start leading-none">
        <span className={`text-lg font-extrabold tracking-tight ${textColor}`}>
          StudentConnect
        </span>
        <span className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${subColor}`}>
          CPSU Main Campus
        </span>
      </span>
    </button>
  );
}
