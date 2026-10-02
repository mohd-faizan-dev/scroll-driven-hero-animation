
export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-7 left-6 z-50 flex items-center gap-4 md:bottom-9 md:left-[5vw]">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20">
        <span className="text-sm">↓</span>
      </div>

      <div>
        <small className="block text-[7px] tracking-[0.25em] text-white/25">
          SCROLL
        </small>

        <span className="block text-[8px] tracking-[0.25em] text-white/60">
          TO EXPLORE
        </span>
      </div>

      <div className="h-px w-10 bg-white/20 md:w-20" />
    </div>
  );
}

