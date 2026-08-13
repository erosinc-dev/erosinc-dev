import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header border-b border-slate-200 dark:border-eros-border/70">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="flex flex-col gap-1">
                <img 
                    src="/logo.png" 
                    alt="Eros Inc Logo" 
                    className="h-10 w-auto object-contain logo-blend" 
                />
            </Link>
            
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
                <Link href="/" className="hover:text-eros-cyan transition">Home</Link>
                <Link href="/philosophy" className="hover:text-eros-cyan transition">Philosophy</Link>
                <Link href="/capabilities" className="hover:text-eros-cyan transition">Capabilities</Link>
                <Link href="/projects" className="hover:text-eros-cyan transition">Projects</Link>
                <Link href="/gallery" className="hover:text-eros-cyan transition">Gallery</Link>
                <Link href="/leadership" className="hover:text-eros-cyan transition">Leadership</Link>
                <Link href="/impact" className="hover:text-eros-cyan transition">Impact</Link>
                <Link href="/news" className="hover:text-eros-cyan transition text-slate-900 dark:text-white">News</Link>
            </nav>

            <div className="flex items-center gap-4">
                <ThemeToggle />
                <Link href="/contact" className="hidden sm:block px-6 py-2.5 rounded-full bg-eros-cyan hover:bg-eros-bright text-slate-950 font-bold text-sm transition-all transform hover:scale-105 shadow-lg shadow-eros-cyan/25">
                    Partner With Us
                </Link>
            </div>
        </div>
    </header>
  );
}
