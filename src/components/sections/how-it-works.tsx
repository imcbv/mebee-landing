"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/button";
import { COPY } from "../../lib/constants";

export function HowItWorks() {
  // Parallax transforms - matching hero section
  const { scrollY } = useScroll();
  const honeycombY = useTransform(scrollY, [0, 800], [0, -150]);
  const floatingObjectsY = useTransform(scrollY, [0, 800], [0, -300]);

  return (
    <section id="how-it-works" className="min-h-screen flex overflow-hidden">
      {/* LEFT SIDE - Yellow Slab (nav bar width) */}
      <div className="w-20 bg-mebee-yellow relative"></div>

      {/* RIGHT SIDE - Main Content */}
      <div className="flex-1 bg-mebee-dark-navy relative">
        {/* White Honeycomb Watermarks - Multiple for dark navy background */}
        <motion.div // HONEYCOMB: How It Works section - TOP RIGHT (400px, white)
          className="absolute z-5"
          style={{
            top: "20%",
            right: "8%",
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

        <motion.div // HONEYCOMB: How It Works section - BOTTOM LEFT (300px, white)
          className="absolute z-5"
          style={{
            bottom: "15%",
            left: "10%",
            width: "300px",
            aspectRatio: "1",
            backgroundImage: 'url("/images/MeBee Honeycomb_white.png")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            y: honeycombY,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* 3 Floating Objects with Different Shapes */}
        <motion.div
          style={{ y: floatingObjectsY }}
          className="absolute inset-0"
        >
          {/* Top Right - Wide Rectangle */}
          <motion.div
            className="absolute w-28 h-16 bg-mebee-yellow/70 z-10"
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
            className="absolute w-24 h-24 bg-mebee-yellow/50 z-10"
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
            className="absolute w-20 h-32 bg-mebee-yellow/60 z-10"
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

        {/* Subtle Liquid Skin Texture Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-mebee-sage/20 via-transparent to-mebee-navy/10"></div>
        </div>

        <div className="max-w-6xl mx-auto px-8 relative min-h-screen flex flex-col justify-center">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20 pt-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-articulat"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {COPY.howItWorks.sectionTitle}
            </motion.h2>
            <motion.p
              className="text-xl text-white/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {COPY.howItWorks.processFlow}
            </motion.p>
          </motion.div>

          {/* Process Steps with Connecting Lines */}
          <motion.div
            className="relative mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Connecting Line */}
            <motion.div
              className="absolute top-10 left-0 right-0 h-0.5 bg-mebee-yellow hidden md:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            ></motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {COPY.howItWorks.steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.15,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  <div className="w-20 h-20 bg-mebee-yellow rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-mebee-dark-navy border-4 border-white shadow-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 font-articulat">
                    {step.step}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Button
              variant="primary"
              size="lg"
              className="bg-mebee-yellow text-mebee-dark-navy hover:bg-mebee-yellow/90 font-semibold px-8 py-4 text-lg min-h-[44px] transition-all duration-200"
            >
              {COPY.howItWorks.cta}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
