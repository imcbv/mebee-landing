"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/button";
import { COPY } from "../../lib/constants";

export function Problems() {
  // State to cycle through different backgrounds
  const [backgroundOption, setBackgroundOption] = useState(3); // Default to dark navy
  const [isClient, setIsClient] = useState(false);

  // Client-side only to prevent hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Parallax transforms - matching hero section
  const { scrollY } = useScroll();
  const honeycombY = useTransform(scrollY, [0, 800], [0, -150]);
  const contentY = useTransform(scrollY, [0, 800], [0, -100]);
  const floatingObjectsY = useTransform(scrollY, [0, 800], [0, -300]);

  const backgroundNames = {
    1: "Light Sage",
    2: "Navy",
    3: "Dark Navy",
    4: "Gradient",
    5: "White + Accents",
  };

  const cycleBackground = () => {
    setBackgroundOption((prev) => (prev === 5 ? 1 : prev + 1));
  };

  const backgroundConfigs = {
    1: {
      sectionClass: "relative py-24 bg-mebee-sage/30 overflow-hidden",
      gradients: (
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-mebee-sage to-mebee-sage/30 opacity-60" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-mebee-sage/50 to-mebee-sage/30" />
          <div className="w-16 bg-white/20 h-full absolute left-0" />
          <div className="w-16 bg-white/20 h-full absolute right-0" />
        </div>
      ),
      floatingColors: ["bg-white/40", "bg-white/30", "bg-white/50"],
      textColors: {
        main: "text-mebee-dark-navy",
        yellow: "text-mebee-yellow",
        navy: "text-mebee-navy",
        description: "text-mebee-dark-navy/80",
      },
    },
    2: {
      sectionClass: "relative py-24 bg-mebee-navy overflow-hidden",
      gradients: (
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-mebee-sage to-mebee-navy opacity-60" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-mebee-sage/30 to-transparent" />
          <div className="w-16 bg-mebee-yellow/10 h-full absolute left-0" />
          <div className="w-16 bg-mebee-yellow/10 h-full absolute right-0" />
        </div>
      ),
      floatingColors: [
        "bg-mebee-yellow/30",
        "bg-mebee-yellow/20",
        "bg-mebee-yellow/40",
      ],
      textColors: {
        main: "text-white",
        yellow: "text-mebee-yellow",
        navy: "text-mebee-sage",
        description: "text-white/80",
      },
    },
    3: {
      sectionClass: "relative py-24 bg-mebee-dark-navy overflow-hidden",
      gradients: (
        <div className="absolute inset-0">
          {/* NO GRADIENTS - Solid colors only, NO SIDE STRIPES */}
        </div>
      ),
      floatingColors: [
        "bg-mebee-yellow/40",
        "bg-mebee-yellow/30",
        "bg-mebee-yellow/50",
      ],
      textColors: {
        main: "text-white",
        yellow: "text-mebee-yellow",
        navy: "text-white",
        description: "text-white",
      },
    },
    4: {
      sectionClass:
        "relative py-24 bg-gradient-to-b from-mebee-sage/40 via-white to-mebee-sage/20 overflow-hidden",
      gradients: (
        <div className="absolute inset-0">
          <div className="w-16 bg-mebee-sage/20 h-full absolute left-0" />
          <div className="w-16 bg-mebee-sage/20 h-full absolute right-0" />
        </div>
      ),
      floatingColors: [
        "bg-mebee-sage/30",
        "bg-mebee-sage/20",
        "bg-mebee-sage/40",
      ],
      textColors: {
        main: "text-mebee-dark-navy",
        yellow: "text-mebee-yellow",
        navy: "text-mebee-navy",
        description: "text-mebee-navy/80",
      },
    },
    5: {
      sectionClass: "relative py-24 bg-white overflow-hidden",
      gradients: (
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-16 bg-mebee-sage" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-mebee-sage" />
          <div className="w-32 bg-mebee-sage/30 h-full absolute left-0" />
          <div className="w-32 bg-mebee-sage/30 h-full absolute right-0" />
        </div>
      ),
      floatingColors: [
        "bg-mebee-sage/40",
        "bg-mebee-sage/30",
        "bg-mebee-sage/50",
      ],
      textColors: {
        main: "text-mebee-dark-navy",
        yellow: "text-mebee-yellow",
        navy: "text-mebee-navy",
        description: "text-mebee-navy/80",
      },
    },
  };

  const config = backgroundConfigs[backgroundOption];

  return (
    <section id="problems" className="min-h-screen flex overflow-hidden">
      {/* LEFT SIDE - Yellow Slab (nav bar width) */}
      <div className="w-20 bg-mebee-yellow relative"></div>

      {/* RIGHT SIDE - Main Content */}
      <div className="flex-1 bg-mebee-dark-navy relative">
        {config.gradients}

        {/* White Honeycomb Watermark - Repeating Hero Pattern */}
        <motion.div // HONEYCOMB: Problems-variations section - TOP RIGHT (400px, white)
          className="absolute z-5"
          style={{
            top: "10%",
            right: "5%",
            width: "400px",
            aspectRatio: "1",
            backgroundImage: 'url("/images/MeBee Honeycomb_white.png")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            y: honeycombY,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* 3 Floating Objects - Different Shapes, More Spaced Vertically */}
        <motion.div
          style={{ y: floatingObjectsY }}
          className="absolute inset-0"
        >
          {/* Top - Medium Square */}
          <motion.div
            className={`absolute w-26 h-26 ${config.floatingColors[0]} opacity-70 z-5`}
            initial={{ x: 100, y: 120, rotate: 12 }}
            animate={{
              x: [100, 50, 150, 80, 130, 100],
              y: [120, 100, 160, 200, 110, 120],
              rotate: [12, 27, -8, 35, 15, 12],
            }}
            transition={{
              duration: 19,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Middle - Tall Rectangle */}
          <motion.div
            className={`absolute w-18 h-32 ${config.floatingColors[1]} opacity-60 z-5`}
            initial={{ x: 180, y: 400, rotate: -15 }}
            animate={{
              x: [180, 130, 230, 160, 210, 180],
              y: [400, 360, 440, 380, 420, 400],
              rotate: [-15, 20, -25, 18, -12, -15],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
          />

          {/* Bottom - Wide Rectangle */}
          <motion.div
            className={`absolute w-34 h-20 ${config.floatingColors[2]} opacity-50 z-5`}
            initial={{ x: 80, y: 680, rotate: 8 }}
            animate={{
              x: [80, 40, 120, 100, 60, 80],
              y: [680, 640, 720, 660, 700, 680],
              rotate: [8, 30, -12, 25, 5, 8],
            }}
            transition={{
              duration: 21,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 8,
            }}
          />
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto px-8 relative min-h-screen flex flex-col justify-center"
          style={{ y: contentY }}
        >
          {/* Section Header - Typography Focused */}
          <motion.div
            className="text-center mb-20 pt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 font-articulat">
              Stop
              <motion.span
                className="block text-mebee-yellow"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                delays
              </motion.span>
              <motion.span
                className="block text-white"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                Start launches
              </motion.span>
            </h2>
          </motion.div>

          {/* Problems List - Clean Structure with Staggered Animations */}
          <div className="max-w-4xl mx-auto space-y-16 mb-20">
            {COPY.problems.painPoints.map((painPoint, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="absolute -left-6 top-0 w-1 bg-mebee-yellow"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2 + 0.3,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                />
                <div className="pl-12">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 font-articulat">
                    {painPoint.title}
                  </h3>
                  <p className="text-lg text-white/80 leading-relaxed">
                    {painPoint.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Solution Teaser - Clean Centered */}
          <motion.div
            className="text-center bg-mebee-sage/10 p-12 md:p-16 relative overflow-visible"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* White Honeycomb - Visible Always */}
            <motion.div // HONEYCOMB: Problems-variations section CTA - TOP LEFT (300px, white)
              className="absolute z-10"
              style={{
                top: "60px",
                left: "20%",
                width: "300px",
                aspectRatio: "1",
                backgroundImage: 'url("/images/MeBee Honeycomb_white.png")',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                y: honeycombY,
              }}
            />

            {/* Floating Blocks with Parallax Container */}
            <motion.div
              style={{ y: floatingObjectsY }}
              className="absolute inset-0"
            >
              <motion.div
                className="absolute w-16 h-12 bg-white/15 z-5"
                style={{ top: "125%", right: "8%" }}
                animate={{
                  x: [0, 15, -10, 12, 0],
                  y: [0, -10, 20, -5, 0],
                  rotate: [0, 8, -5, 10, 0],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />

              <motion.div
                className="absolute w-12 h-16 bg-white/20 z-5"
                style={{ bottom: "0%", right: "12%" }}
                animate={{
                  x: [0, -12, 18, -8, 0],
                  y: [0, 15, -25, 10, 0],
                  rotate: [0, -12, 15, -8, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 5,
                }}
              />
            </motion.div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight font-articulat">
              What if you could
              <span className="block text-mebee-yellow">
                eliminate all three
              </span>
              bottlenecks?
            </h3>

            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              MeBee&apos;s AI-native approach transforms these pain points into
              your competitive advantages.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                variant="primary"
                size="lg"
                className="bg-mebee-yellow text-mebee-dark-navy hover:bg-mebee-yellow/90 font-semibold px-8 py-4 text-lg min-h-[44px] transition-all duration-200"
              >
                See the solution
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-mebee-dark-navy font-semibold px-8 py-4 text-lg min-h-[44px] transition-all duration-200"
              >
                {COPY.problems.secondaryCta}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
