"use client";

import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from '../ui/button';
import { COPY } from '../../lib/constants';

export function HowItWorks() {
  // Parallax transforms
  const { scrollY } = useScroll();
  const honeycombY = useTransform(scrollY, [0, 2000], [0, -200]);

  return (
    <section id="how-it-works" className="min-h-screen flex overflow-hidden">
      {/* LEFT SIDE - Yellow Slab (nav bar width) */}
      <div className="w-20 bg-mebee-yellow relative">
      </div>

      {/* RIGHT SIDE - Main Content */}
      <div className="flex-1 bg-mebee-dark-navy relative">
      {/* White Honeycomb Watermarks - Multiple for dark navy background */}
      <motion.div
        className="absolute z-5"
        style={{
          top: "20%",
          right: "8%",
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
          bottom: "15%",
          left: "10%",
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
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.15), ease: "easeOut" }}
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