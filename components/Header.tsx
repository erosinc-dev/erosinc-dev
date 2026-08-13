import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header border-b border-slate-200 dark:border-eros-border/70 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-22 md:h-24 flex items-center justify-between">
            {/* Larger & Prominent Logo Link */}
            <Link href="/" className="flex items-center gap-2 group py-1">
                <img 
                    src="/logo.png" 
                    alt="Eros Inc Logo" 
                    className="h-12 sm:h-14 md:h-16 w-auto object-contain logo-blend transition-transform duration-300 group-hover:scale-105 filter drop-shadow-md" 
                />
            </Link>
            
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
                <Link href="/" className="hover:text-eros-cyan transition font-semibold">Home</Link>
                <Link href="/philosophy" className="hover:text-eros-cyan transition font-semibold">Philosophy</Link>
                <Link href="/capabilities" className="hover:text-eros-cyan transition font-semibold">Capabilities</Link>
                <Link href="/projects" className="hover:text-eros-cyan transition font-semibold">Projects</Link>
                <Link href="/gallery" className="hover:text-eros-cyan transition font-semibold">Gallery</Link>
                <Link href="/leadership" className="hover:text-eros-cyan transition font-semibold">Leadership</Link>
                <Link href="/impact" className="hover:text-eros-cyan transition font-semibold">Impact</Link>
                <Link href="/careers" className="hover:text-eros-cyan transition font-semibold text-eros-gold">Careers</Link>
                <Link href="/news" className="hover:text-eros-cyan transition text-slate-900 dark:text-white font-semibold">News</Link>
            </nav>

            <div className="flex items-center gap-4">
                <ThemeToggle />
                <Link href="/contact" className="hidden sm:block px-6 py-3 rounded-full bg-eros-cyan hover:bg-eros-bright text-slate-950 font-extrabold text-sm transition-all transform hover:scale-105 shadow-lg shadow-eros-cyan/25 uppercase tracking-wider">
                    Partner With Us
                </Link>
            </div>
        </div>
    </header>
  );
}
