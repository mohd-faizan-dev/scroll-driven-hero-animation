
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="bg-[#080808]">
      <Hero />

      {/* Next Section */}
      <section className="relative min-h-screen overflow-hidden bg-[#0c0c0c] px-6 py-32 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex items-center gap-4 text-[10px] tracking-[0.35em] text-white/40">
            <span className="h-px w-10 bg-white/30"></span>
            02 — THE EXPERIENCE
          </div>

          <h2 className="max-w-6xl text-[clamp(3.5rem,9vw,9rem)] font-black leading-[0.82] tracking-[-0.06em] text-white">
            DIGITAL
            <br />
            PRODUCTS
            <br />
            <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.5)]">
              THAT MOVE.
            </span>
          </h2>

          <p className="mt-16 max-w-md text-sm leading-7 text-white/40">
            We combine strategy, design, technology and motion to create
            digital experiences that people remember.
          </p>
        </div>
      </section>
    </main>
  );
}

