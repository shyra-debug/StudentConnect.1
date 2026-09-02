import { useState, type FormEvent } from 'react';
import { Mail, Lock, Eye, EyeOff, LogIn, GraduationCap, ArrowRight, UserPlus } from 'lucide-react';
import type { Page } from '@/data';

interface LoginProps {
  onNavigate: (page: Page) => void;
}

export default function Login({ onNavigate }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email.trim() || !password.trim()) {
      setError('Please enter both your email and password.');
      return;
    }
    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-navy-50 to-white pt-20 px-4">
        <div className="card-base w-full max-w-md p-8 text-center animate-scale-in">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-600 to-navy-800 text-white shadow-lg">
            <GraduationCap className="h-8 w-8" />
          </div>
          <h2 className="mt-6 text-2xl font-bold text-navy-800">Welcome back!</h2>
          <p className="mt-2 text-sm text-navy-500">
            You've successfully logged in to StudentConnect. This is a demo — no real account is needed.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <button onClick={() => onNavigate('home')} className="btn-primary w-full">
              Go to Home
            </button>
            <button onClick={() => setSubmitted(false)} className="btn-ghost">
              Back to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-navy-50 to-white pt-20 px-4 pb-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-600 to-navy-800 text-white shadow-lg">
            <LogIn className="h-7 w-7" />
          </div>
          <h1 className="mt-5 text-2xl font-bold tracking-tight text-navy-800">Log in to StudentConnect</h1>
          <p className="mt-2 text-sm text-navy-500">
            Welcome back! Please enter your details to continue.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 card-base p-6 sm:p-8">
          {error && (
            <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700 animate-fade-in">
              {error}
            </div>
          )}

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-navy-700">
              Email or Username
            </label>
            <div className="relative mt-2">
              <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-300" />
              <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@cpsu.edu.ph"
                className="input-field pl-11"
                autoComplete="email"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mt-5">
            <label htmlFor="password" className="block text-sm font-semibold text-navy-700">
              Password
            </label>
            <div className="relative mt-2">
              <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-300" />
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="input-field pl-11 pr-11"
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-300 transition-colors hover:text-navy-500"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="mt-5 flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-navy-600 cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 rounded border-navy-300 text-navy-700 focus:ring-navy-500"
              />
              <span className="font-medium">Remember me</span>
            </label>
            <button
              type="button"
              onClick={(e) => e.preventDefault()}
              className="text-sm font-semibold text-sky-600 transition-colors hover:text-sky-700"
            >
              Forgot Password?
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-navy-700 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-navy-600 hover:shadow-lg hover:shadow-navy-700/25 hover:-translate-y-0.5"
          >
            Log In
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <span className="h-px flex-1 bg-navy-100" />
            <span className="text-xs font-medium text-navy-300">or</span>
            <span className="h-px flex-1 bg-navy-100" />
          </div>

          {/* Sign up link */}
          <p className="text-center text-sm text-navy-500">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={() => onNavigate('login')}
              className="inline-flex items-center gap-1 font-semibold text-sky-600 transition-colors hover:text-sky-700"
            >
              <UserPlus className="h-3.5 w-3.5" />
              Create Account
            </button>
          </p>
        </form>

        <p className="mt-6 text-center text-xs text-navy-400">
          By logging in, you agree to StudentConnect's Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
