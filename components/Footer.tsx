export default function Footer() {
  return (
    <footer className="py-12 border-t border-eros-border text-slate-500 text-xs mt-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
                <span className="font-heading font-extrabold text-white text-sm">EROS INC.</span>
                <span>— Compete With Compassion</span>
            </div>
            <div>
                &copy; {new Date().getFullYear()} Eros Inc. All rights reserved.
            </div>
        </div>
    </footer>
  );
}
