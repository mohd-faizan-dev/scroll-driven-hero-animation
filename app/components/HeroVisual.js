
export default function HeroVisual() {
  return (
    <div className="visual-area absolute right-[-180px] top-[38%] z-10 h-[500px] w-[650px] md:right-[1vw] md:top-[17%]">
      {/* Glow */}
      <div className="visual-glow absolute left-[15%] top-[15%] h-[350px] w-[350px] rounded-full bg-white/[0.08] blur-[90px]" />

      {/* Rings */}
      <div className="visual-ring-one absolute left-[8%] top-[5%] h-[430px] w-[430px] rounded-full border border-white/[0.08]" />

      <div className="absolute left-[-3%] top-[-10%] h-[570px] w-[570px] animate-[spin_30s_linear_infinite] rounded-full border border-dashed border-white/[0.06]" />

      {/* Main Visual */}
      <div className="hero-visual absolute left-[5%] top-[14%] flex h-[400px] w-[560px] items-center justify-center">
        <div className="relative h-[270px] w-[500px] [transform:perspective(1000px)_rotateY(-12deg)_rotateX(5deg)]">
          {/* Roof */}
          <div className="absolute left-[120px] top-[15px] h-[105px] w-[270px] skew-x-[-12deg] rounded-[150px_120px_15px_15px] bg-gradient-to-br from-white via-[#888] to-[#181818]" />

          {/* Glass */}
          <div className="absolute left-[145px] top-[30px] z-10 flex h-[75px] w-[235px] skew-x-[-12deg] gap-1">
            <div className="flex-1 border border-white/10 bg-gradient-to-br from-[#272727] to-black" />
            <div className="flex-1 border border-white/10 bg-gradient-to-br from-[#272727] to-black" />
          </div>

          {/* Body */}
          <div className="absolute bottom-[50px] left-[20px] h-[120px] w-[460px] rounded-[70px_40px_30px_30px] bg-gradient-to-br from-white via-[#888] via-40% to-[#111] shadow-[inset_0_5px_8px_rgba(255,255,255,0.45),inset_0_-15px_25px_rgba(0,0,0,0.6)]">
            {/* Lights */}
            <div className="absolute left-[30px] top-[45px] h-6 w-16 rounded-full bg-white shadow-[0_0_15px_white,0_0_35px_rgba(255,255,255,0.5)]" />

            <div className="absolute right-[30px] top-[45px] h-6 w-16 rounded-full bg-white shadow-[0_0_15px_white,0_0_35px_rgba(255,255,255,0.5)]" />

            {/* Center line */}
            <div className="absolute left-[70px] right-[70px] top-[70px] h-px bg-white/25" />

            {/* Details */}
            <div className="absolute bottom-5 left-[90px] h-[5px] w-[45px] rounded-full bg-black/50" />
            <div className="absolute bottom-5 right-[90px] h-[5px] w-[45px] rounded-full bg-black/50" />
          </div>

          {/* Wheels */}
          <div className="absolute bottom-[15px] left-[70px] h-[90px] w-[90px] rounded-full border-[12px] border-[#292929] bg-[#070707] shadow-[inset_0_0_0_6px_#101010,0_8px_15px_rgba(0,0,0,0.7)]">
            <span className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-[6px] border-[#222] bg-[#777]" />
          </div>

          <div className="absolute bottom-[15px] right-[70px] h-[90px] w-[90px] rounded-full border-[12px] border-[#292929] bg-[#070707] shadow-[inset_0_0_0_6px_#101010,0_8px_15px_rgba(0,0,0,0.7)]">
            <span className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-[6px] border-[#222] bg-[#777]" />
          </div>
        </div>
      </div>

      {/* Floating Card 1 */}
      <div className="floating-card floating-card-one absolute left-0 top-[70px] z-30 flex min-w-[145px] flex-col gap-1 border border-white/10 bg-black/50 p-4 backdrop-blur-xl">
        <span className="text-[10px] text-white/30">01</span>
        <strong className="text-xs tracking-[0.2em]">CREATIVE</strong>
        <small className="text-[7px] tracking-[0.15em] text-white/30">
          DESIGN SYSTEM
        </small>
      </div>

      {/* Floating Card 2 */}
      <div className="floating-card floating-card-two absolute bottom-[90px] right-0 z-30 flex min-w-[145px] flex-col gap-1 border border-white/10 bg-black/50 p-4 backdrop-blur-xl">
        <span className="text-[10px] text-white/30">98%</span>
        <strong className="text-xs tracking-[0.2em]">IMPACT</strong>
        <small className="text-[7px] tracking-[0.15em] text-white/30">
          USER EXPERIENCE
        </small>
      </div>

      {/* Floating Card 3 */}
      <div className="floating-card floating-card-three absolute bottom-[15px] left-[80px] z-30 border border-white/10 bg-black/50 px-5 py-4 backdrop-blur-xl">
        <span className="text-2xl font-light">+</span>
        <strong className="ml-2 text-[10px] tracking-[0.2em]">
          MOTION
        </strong>
      </div>
    </div>
  );
}

