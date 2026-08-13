'use client';

export default function ThreeDBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none perspective-3d">
      {/* Large cyan orb */}
      <div className="orb-1 absolute top-[10%] left-[15%] w-[350px] h-[350px] rounded-full bg-eros-cyan/10 dark:bg-eros-cyan/15 blur-[80px]"></div>
      {/* Gold orb */}
      <div className="orb-2 absolute top-[60%] right-[10%] w-[250px] h-[250px] rounded-full bg-eros-gold/10 dark:bg-eros-gold/15 blur-[60px]"></div>
      {/* Pink orb */}
      <div className="orb-3 absolute top-[30%] right-[25%] w-[200px] h-[200px] rounded-full bg-eros-pink/8 dark:bg-eros-pink/10 blur-[50px]"></div>
      {/* Purple orb */}
      <div className="orb-4 absolute bottom-[20%] left-[30%] w-[180px] h-[180px] rounded-full bg-purple-500/8 dark:bg-purple-500/10 blur-[45px]"></div>
      
      {/* 3D geometric shapes */}
      <div className="spin-slow absolute top-[15%] right-[20%] w-20 h-20 border-2 border-eros-cyan/20 dark:border-eros-cyan/10 rounded-xl rotate-45"></div>
      <div className="orb-2 absolute bottom-[30%] left-[10%] w-16 h-16 border-2 border-eros-gold/20 dark:border-eros-gold/10 rounded-full"></div>
      <div className="spin-slow absolute top-[50%] left-[50%] w-12 h-12 border border-eros-pink/15 dark:border-eros-pink/10 rotate-12" style={{borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'}}></div>
      
      {/* Dot grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
    </div>
  );
}
