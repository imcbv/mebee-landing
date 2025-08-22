"use client";

import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from '../ui/button';
import { COPY } from '../../lib/constants';

export function FinalCTA() {
  // Parallax transforms
  const { scrollY } = useScroll();
  const honeycombY = useTransform(scrollY, [0, 2000], [0, -150]);

  return (
    <section id="final-cta" className="min-h-screen text-white flex overflow-hidden">
      {/* LEFT SIDE - Yellow Slab (nav bar width) */}
      <div className="w-20 bg-mebee-yellow relative">
      </div>

      {/* RIGHT SIDE - Main Content */}
      <div className="flex-1 bg-mebee-dark-navy relative">
      {/* White Honeycomb Watermarks - Multiple for dark navy background */}
      <motion.div
        className="absolute z-5"
        style={{
          top: "10%",
          right: "10%",
          width: "400px",
          height: "400px",
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

      <motion.div
        className="absolute z-5"
        style={{
          bottom: "20%",
          left: "5%",
          width: "300px",
          height: "300px",
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

      <motion.div 
        className="max-w-6xl mx-auto px-8 text-center min-h-screen flex flex-col justify-center pt-20"
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
          className="text-xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed"
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
          className="bg-mebee-yellow text-mebee-dark-navy hover:bg-mebee-yellow/90 font-semibold px-12 py-4 text-xl min-h-[44px] transition-all duration-200 border-2 border-transparent hover:border-white"
        >
          {COPY.finalCta.cta}
          </Button>
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
}