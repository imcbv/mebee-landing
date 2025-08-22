"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/button";
import { COPY } from "../../lib/constants";

export function Solutions() {
  // Parallax transforms with reduced ranges to prevent clipping
  const { scrollY } = useScroll();
  const honeycombY = useTransform(scrollY, [0, 2000], [0, -100]);
  const contentY = useTransform(scrollY, [0, 2000], [0, -50]);
  const floatingObjectsY = useTransform(scrollY, [0, 2000], [0, -150]);

  return (
    <section className="relative py-32 bg-mebee-sage overflow-visible">
      {/* White Honeycomb Watermark */}
      <motion.div
        className="absolute z-5"
        style={{
          top: "15%",
          left: "8%",
          width: "350px",
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

      {/* 3 Floating Objects with Different Shapes */}
      <motion.div style={{ y: floatingObjectsY }} className="absolute inset-0">
        {/* Top Right - Wide Rectangle */}
        <motion.div
          className="absolute w-28 h-16 bg-mebee-yellow/70 rounded-lg z-5"
          initial={{ x: 650, y: 100, rotate: 15 }}
          animate={{
            x: [650, 600, 700, 630, 680, 650],
            y: [100, 80, 140, 180, 90, 100],
            rotate: [15, 30, -5, 25, 10, 15],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Middle Left - Square */}
        <motion.div
          className="absolute w-24 h-24 bg-mebee-yellow/50 rounded-lg z-5"
          initial={{ x: 80, y: 400, rotate: -10 }}
          animate={{
            x: [80, 30, 130, 60, 110, 80],
            y: [400, 360, 440, 380, 420, 400],
            rotate: [-10, 18, -25, 12, -8, -10],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        {/* Bottom Right - Tall Rectangle */}
        <motion.div
          className="absolute w-20 h-32 bg-mebee-yellow/60 rounded-lg z-5"
          initial={{ x: 720, y: 600, rotate: 8 }}
          animate={{
            x: [720, 670, 770, 740, 690, 720],
            y: [600, 560, 640, 580, 620, 600],
            rotate: [8, 25, -12, 20, 3, 8],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 7,
          }}
        />
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto px-8 relative"
        style={{ y: contentY }}
      >
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-mebee-dark-navy leading-tight mb-6 font-articulat">
            What You Get
            <motion.span
              className="block text-mebee-yellow"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Three Pillars
            </motion.span>
          </h2>
          <motion.p
            className="text-xl text-mebee-dark-navy max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Transform your biggest pain points into competitive advantages
          </motion.p>
        </motion.div>

        {/* Three Pillars - Clean Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Pillar 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 hover:translate-y-[-2px] flex flex-col h-full">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-mebee-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-mebee-dark-navy">
                  01
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-mebee-dark-navy mb-4 font-articulat">
                {COPY.solutions.pillars[0].title}
              </h3>
            </div>

            <p className="text-mebee-navy/80 leading-relaxed mb-6">
              {COPY.solutions.pillars[0].description}
            </p>

            <div className="bg-mebee-yellow/10 p-4 rounded-lg border-l-4 border-mebee-yellow mb-6 flex-grow">
              <p className="text-sm text-mebee-dark-navy font-medium">
                ✨ {COPY.solutions.pillars[0].feature}
              </p>
            </div>

            <Button
              variant="outline"
              className="w-full border-2 border-mebee-dark-navy text-mebee-dark-navy hover:bg-mebee-dark-navy hover:text-white font-semibold transition-all duration-200 min-h-[44px] mt-auto"
            >
              {COPY.solutions.pillars[0].microCta}
            </Button>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 hover:translate-y-[-2px] flex flex-col h-full">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-mebee-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-mebee-dark-navy">
                  02
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-mebee-dark-navy mb-4 font-articulat">
                {COPY.solutions.pillars[1].title}
              </h3>
            </div>

            <p className="text-mebee-navy/80 leading-relaxed mb-6">
              {COPY.solutions.pillars[1].description}
            </p>

            <div className="bg-mebee-yellow/10 p-4 rounded-lg border-l-4 border-mebee-yellow mb-6 flex-grow">
              <p className="text-sm text-mebee-dark-navy font-medium">
                🔄 {COPY.solutions.pillars[1].feature}
              </p>
            </div>

            <Button
              variant="outline"
              className="w-full border-2 border-mebee-dark-navy text-mebee-dark-navy hover:bg-mebee-dark-navy hover:text-white font-semibold transition-all duration-200 min-h-[44px] mt-auto"
            >
              {COPY.solutions.pillars[1].microCta}
            </Button>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 hover:translate-y-[-2px] flex flex-col h-full">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-mebee-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-mebee-dark-navy">
                  03
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-mebee-dark-navy mb-4 font-articulat">
                {COPY.solutions.pillars[2].title}
              </h3>
            </div>

            <p className="text-mebee-navy/80 leading-relaxed mb-6">
              {COPY.solutions.pillars[2].description}
            </p>

            <div className="bg-mebee-yellow/10 p-4 rounded-lg border-l-4 border-mebee-yellow mb-6 flex-grow">
              <p className="text-sm text-mebee-dark-navy font-medium">
                🚀 {COPY.solutions.pillars[2].feature}
              </p>
            </div>

            <Button
              variant="outline"
              className="w-full border-2 border-mebee-dark-navy text-mebee-dark-navy hover:bg-mebee-dark-navy hover:text-white font-semibold transition-all duration-200 min-h-[44px] mt-auto"
            >
              {COPY.solutions.pillars[2].microCta}
            </Button>
          </div>
        </div>

        {/* Before/After Demo Section */}
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-12">
          <h3 className="text-4xl md:text-5xl font-bold text-mebee-dark-navy mb-8 leading-tight font-articulat">
            Ready to see all
            <span className="block text-mebee-yellow">three pillars</span>
            in action?
          </h3>

          <p className="text-xl text-mebee-navy/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience how MeBee transforms your asset management workflow from
            bottleneck to breakthrough.
          </p>

          {/* Simple Before/After */}
          <div className="grid md:grid-cols-3 gap-8 items-center mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-md mb-4">
                <div className="w-12 h-12 bg-mebee-navy/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg
                    className="w-6 h-6 text-mebee-navy"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-mebee-dark-navy">
                  Before MeBee
                </h4>
                <p className="text-sm text-mebee-navy/70">
                  Manual, slow, frustrating
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-12 h-12 bg-mebee-yellow rounded-full flex items-center justify-center">
                <span className="text-mebee-dark-navy text-xl font-bold">
                  →
                </span>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-md mb-4">
                <div className="w-12 h-12 bg-mebee-dark-navy rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-mebee-dark-navy">With MeBee</h4>
                <p className="text-sm text-mebee-navy/70">
                  AI-powered, instant, seamless
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              variant="primary"
              size="lg"
              className="bg-mebee-yellow text-mebee-dark-navy hover:bg-mebee-yellow/90 font-semibold px-8 py-4 text-lg min-h-[44px] transition-all duration-200"
            >
              See Full Demo
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-mebee-dark-navy text-mebee-dark-navy hover:bg-mebee-dark-navy hover:text-white font-semibold px-8 py-4 text-lg min-h-[44px] transition-all duration-200"
            >
              Compare Solutions
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
