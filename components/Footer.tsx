export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-eros-border text-slate-500 text-xs mt-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start gap-1">
                <img 
                    src="/logo.png" 
                    alt="Eros Inc Logo" 
                    className="h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 logo-blend" 
                />
            </div>
            <div>
                &copy; {new Date().getFullYear()} Eros Inc. All rights reserved.
            </div>
        </div>
    </footer>
  );
}
