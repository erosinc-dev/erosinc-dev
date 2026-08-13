import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-16 border-t border-slate-200 dark:border-eros-border text-slate-500 text-xs mt-24 bg-white dark:bg-eros-card/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Col 1: Brand & Logo */}
            <div className="flex flex-col gap-4">
                <img 
                    src="/logo.png" 
                    alt="Eros Inc Logo" 
                    className="h-10 w-auto object-contain logo-blend" 
                />
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Eros Inc. is a dynamic growth-driven company dedicated to helping businesses build meaningful connections with their customers.
                </p>
            </div>

            {/* Col 2: Navigation Links */}
            <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-4">Useful Links</h4>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400 font-medium">
                    <li><Link href="/" className="hover:text-eros-cyan transition">Home</Link></li>
                    <li><Link href="/philosophy" className="hover:text-eros-cyan transition">About Us / Philosophy</Link></li>
                    <li><Link href="/capabilities" className="hover:text-eros-cyan transition">Capabilities / What We Offer</Link></li>
                    <li><Link href="/projects" className="hover:text-eros-cyan transition">Projects & Portfolio</Link></li>
                    <li><Link href="/gallery" className="hover:text-eros-cyan transition">Gallery</Link></li>
                    <li><Link href="/leadership" className="hover:text-eros-cyan transition">Leadership Lab</Link></li>
                    <li><Link href="/impact" className="hover:text-eros-cyan transition">Social Impact</Link></li>
                </ul>
            </div>

            {/* Col 3: Contact Details & Office Address */}
            <div className="md:col-span-2">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-4">Head Office Address</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                    <strong>EROS INC.</strong><br/>
                    2nd Floor, 227-228, Wardhaman Industrial Estate,<br/>
                    Gokul Nagar, Thane West - 400601,<br/>
                    Maharashtra, India.
                </p>
                <div className="pt-4 border-t border-slate-200 dark:border-eros-border/60 text-slate-400 text-xs">
                    &copy; {new Date().getFullYear()} Eros Inc. All rights reserved. Managed & Designed for Excellence.
                </div>
            </div>
        </div>
    </footer>
  );
}
