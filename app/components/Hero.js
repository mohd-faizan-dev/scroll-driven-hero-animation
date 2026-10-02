
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroVisual from "./HeroVisual";
import Stats from "./Stats";
import ScrollIndicator from "./ScrollIndicator";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      intro
        .from(".hero-top-item", {
          y: -25,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
        })
        .from(
          ".hero-eyebrow",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4"
        )
        .from(
          ".title-line",
          {
            yPercent: 120,
            rotateX: 70,
            opacity: 0,
            duration: 1.2,
            stagger: 0.12,
          },
          "-=0.4"
        )
        .from(
          ".hero-description",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ".stat-item",
          {
            y: 35,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15,
          },
          "-=0.4"
        )
        .from(
          ".hero-visual",
          {
            x: 250,
            y: 100,
            scale: 0.6,
            rotate: 15,
            opacity: 0,
            duration: 1.5,
            ease: "expo.out",
          },
          "-=1"
        )
        .from(
          ".floating-card",
          {
            scale: 0,
            opacity: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "back.out(1.7)",
          },
          "-=0.8"
        );

      /* MAIN SCROLL ANIMATION */

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=2200",
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
        },
      });

      /*STAGE 1 */

      scrollTimeline
        .to(".hero-title", {
          x: -280,
          scale: 0.72,
          opacity: 0.2,
          duration: 1,
        })

        .to(
          ".hero-description",
          {
            x: -180,
            opacity: 0,
            duration: 0.7,
          },
          "<"
        )

        .to(
          ".stats-container",
          {
            x: -120,
            opacity: 0,
            duration: 0.7,
          },
          "<"
        )

        /* STAGE 2 */

        .to(
          ".hero-visual",
          {
            x: -160,
            y: 40,
            rotate: -8,
            scale: 1.18,
            duration: 1,
          },
          "<"
        )

        .to(
          ".visual-glow",
          {
            scale: 2,
            opacity: 0.6,
            duration: 1,
          },
          "<"
        )

        .to(
          ".visual-ring-one",
          {
            scale: 1.3,
            rotate: 100,
            duration: 1,
          },
          "<"
        )

        /* STAGE 3 */

        .to(".hero-visual", {
          x: 320,
          y: 130,
          rotate: 18,
          scale: 0.55,
          duration: 1,
        })

        .to(
          ".floating-card-one",
          {
            x: -180,
            y: -120,
            rotate: -15,
            duration: 0.7,
          },
          "<"
        )

        .to(
          ".floating-card-two",
          {
            x: 170,
            y: 110,
            rotate: 15,
            duration: 0.7,
          },
          "<"
        )

        /*  STAGE 4 */

        .to(
          ".background-number",
          {
            scale: 2.8,
            x: -100,
            opacity: 0.015,
            duration: 1,
          },
          "<"
        )

        .to(
          ".hero-grid",
          {
            scale: 1.5,
            opacity: 0.2,
            duration: 1,
          },
          "<"
        )

        .to(
          ".hero-overlay",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          }
        );

      /* BACKGROUND PARALLAX */

      gsap.to(".hero-grid", {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=2200",
          scrub: 2,
        },
      });

      /* FLOATING CARDS */

      gsap.to(".floating-card-one", {
        y: -15,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".floating-card-two", {
        y: 15,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".floating-card-three", {
        y: -10,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /*  MOUSE PARALLAX */

      const handleMouseMove = (event) => {
        const x = event.clientX / window.innerWidth - 0.5;
        const y = event.clientY / window.innerHeight - 0.5;

        gsap.to(".hero-visual", {
          x: x * 20,
          y: y * 20,
          duration: 0.8,
          ease: "power2.out",
          overwrite: false,
        });

        gsap.to(".floating-card", {
          x: x * 10,
          y: y * 10,
          duration: 1,
          ease: "power2.out",
          overwrite: false,
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen min-h-175 overflow-hidden bg-[#080808] text-white"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(255,255,255,0.10),transparent_25%),radial-gradient(circle_at_15%_80%,rgba(255,255,255,0.04),transparent_25%)]" />

      <div className="hero-grid pointer-events-none absolute left-[-25%] top-[-30%] h-[160%] w-[150%] rotate-60 scale-[1.4] bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-size-[80px_80px] transform-[perspective(800px)_rotateX(62deg)_scale(1.4)]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:url(&quot;data:image/svg+xml,%3Csvg_viewBox='0_0_180_180'_xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter_id='n'%3E%3CfeTurbulence_type='fractalNoise'_baseFrequency='.8'_numOctaves='4'_stitchTiles='stitch'/%3E%3C/filter%3E%3Crect_width='100%25'_height='100%25'_filter='url(%23n)'/%3E%3C/svg%3E&quot;)]" />

      {/* Huge Background Number */}
      <div className="background-number pointer-events-none absolute -bottom-20 right-0 z-1 text-[45vw] font-black leading-none tracking-[-0.08em] text-white/2.5">
        01
      </div>

      {/* Header */}
      <header className="hero-top-item absolute left-6 right-6 top-7 z-50 flex items-center justify-between md:left-[5vw] md:right-[5vw] md:top-9">
        <div className="text-base font-extrabold tracking-[0.3em]">
          ITZ<span className="text-white/30">FIZZ</span>
        </div>

        <div className="flex items-center gap-4 text-[9px] tracking-[0.3em] text-white/50">
          MENU

          <div className="flex w-7 flex-col gap-1.25">
            <span className="h-px w-full bg-white" />
            <span className="ml-2 h-px w-3/4 bg-white" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="absolute left-6 top-[17%] z-20 w-[calc(100%-3rem)] md:left-[7vw] md:top-[18%] md:w-[55%]">
        <div className="hero-eyebrow mb-7 flex items-center gap-3 text-[9px] tracking-[0.35em] text-white/40 md:mb-9">
          <span className="h-px w-8 bg-white/40" />
          DIGITAL EXPERIENCE STUDIO
        </div>

        <h1 className="hero-title overflow-hidden text-[clamp(4rem,10vw,10rem)] font-black leading-[0.8] tracking-[-0.07em]">
          <div className="overflow-hidden">
            <span className="title-line block">WELCOME</span>
          </div>

          <div className="overflow-hidden">
            <span className="title-line block text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.65)]">
              ITZFIZZ
            </span>
          </div>
        </h1>

        <p className="hero-description mt-8 max-w-md text-xs leading-7 text-white/40 md:mt-11 md:text-sm">
          We transform ideas into digital experiences that people
          remember.
        </p>

        <Stats />
      </div>

      <HeroVisual />

      <div className="hero-overlay pointer-events-none absolute right-[8vw] bottom-[15%] z-40 translate-y-20 text-right opacity-0">
        <span className="text-[9px] tracking-[0.4em] text-white/30">
          SCROLL EXPERIENCE
        </span>

        <h2 className="mt-4 text-[clamp(4rem,7vw,7rem)] font-black leading-[0.8] tracking-[-0.07em]">
          MOVE
          <br />
          DIFFERENT.
        </h2>
      </div>

      <ScrollIndicator />
    </section>
  );
}

