"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/button";
import { COPY } from "../../lib/constants";

export function FinalCTA() {
  // Parallax transforms - matching hero section
  const { scrollY } = useScroll();
  const honeycombY = useTransform(scrollY, [0, 800], [0, -150]);
  const contentY = useTransform(scrollY, [0, 800], [0, -100]);
  const floatingObjectsY = useTransform(scrollY, [0, 800], [0, -300]);

  return (
    <section
      id="final-cta"
      className="min-h-screen text-mebee-dark-navy flex overflow-hidden"
    >
      {/* LEFT SIDE - Yellow Slab (nav bar width) */}
      <div className="w-20 bg-mebee-yellow relative hidden lg:block"></div>

      {/* RIGHT SIDE - Main Content */}
      <div className="flex-1 bg-mebee-sage relative">
        {/* Navy Honeycomb Watermarks - Multiple for sage background */}
        <motion.div // HONEYCOMB: Final CTA section - TOP RIGHT (400px, navy)
          className="absolute z-5"
          style={{
            top: "-3%",
            right: "-3%",
            width: "400px",
            aspectRatio: "1",
            backgroundImage: 'url("/images/MeBee Honeycomb_navy.png")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            y: honeycombY,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        <motion.div // HONEYCOMB: Final CTA section - BOTTOM LEFT (300px, navy)
          className="absolute z-5"
          style={{
            bottom: "0%",
            left: "5%",
            width: "300px",
            aspectRatio: "1",
            backgroundImage: 'url("/images/MeBee Honeycomb_navy.png")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            y: honeycombY,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* 3 Floating Objects with Different Shapes */}
        <motion.div
          style={{ y: floatingObjectsY }}
          className="absolute inset-0"
        >
          {/* Top Center - Wide Rectangle */}
          <motion.div
            className="absolute w-32 h-18 bg-mebee-yellow/60 z-5"
            initial={{ x: 1200, y: 80, rotate: 12 }}
            animate={{
              x: [1200, 1250, 1350, 1420, 1380, 1400],
              y: [80, 60, 120, 140, 70, 80],
              rotate: [12, 27, -8, 22, 2, 12],
            }}
            transition={{
              duration: 26,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Middle Left - Square (positioned away from CTA button) */}
          <motion.div
            className="absolute w-24 h-24 bg-mebee-yellow/50 z-5"
            initial={{ x: 120, y: 300, rotate: -20 }}
            animate={{
              x: [120, 80, 160, 100, 140, 120],
              y: [300, 260, 340, 280, 320, 300],
              rotate: [-20, 5, -35, 10, -15, -20],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
          />

          {/* Bottom Right - Tall Rectangle */}
          <motion.div
            className="absolute w-22 h-34 bg-mebee-yellow/70 z-5"
            initial={{ x: 1220, y: 620, rotate: 15 }}
            animate={{
              x: [1220, 1070, 1170, 1140, 1090, 1120],
              y: [620, 580, 660, 600, 640, 620],
              rotate: [15, 32, -10, 25, 0, 15],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 8,
            }}
          />
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto px-8 text-center min-h-screen flex flex-col justify-center pt-20"
          style={{ y: contentY }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight font-articulat"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {COPY.finalCta.headline}
          </motion.h2>
          <motion.p
            className="text-xl mb-12 text-mebee-dark-navy/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Stop the file hunt. Start shipping faster in every market.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-mebee-yellow text-mebee-dark-navy hover:bg-mebee-yellow/90 font-semibold px-12 py-2 text-xl min-h-11 transition-all duration-200 border-2 border-transparent hover:border-white"
            >
              {COPY.finalCta.cta}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
