"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { COPY } from '../../lib/constants';

export function Problems() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Sage Gradient Transitions */}
      <div className="absolute inset-0">
        {/* Top gradient from sage */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-mebee-sage to-transparent opacity-30" />
        {/* Bottom gradient to sage */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-mebee-sage/20 to-transparent" />
        {/* Side panels for breathing room */}
        <div className="w-16 bg-mebee-sage/10 h-full absolute left-0" />
        <div className="w-16 bg-mebee-sage/10 h-full absolute right-0" />
      </div>

      {/* Navy Honeycomb Watermark - Optimized Image */}
      <motion.div // HONEYCOMB: Problems section - TOP RIGHT (140px, navy)
        className="absolute top-8 right-8 opacity-15 z-5 w-40 h-40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src="/images/MeBee Honeycomb_navy.png"
          alt="MeBee Honeycomb Pattern"
          fill
          sizes="160px"
          style={{ objectFit: "contain", objectPosition: "center" }}
          loading="lazy"
        />
      </motion.div>

      {/* Floating Sage Geometric Elements */}
      <motion.div
        className="absolute w-24 h-16 bg-mebee-sage/20  z-5"
        style={{ top: '15%', left: '8%' }}
        animate={{
          x: [0, 20, -10, 15, 0],
          y: [0, -15, 25, -5, 0],
          rotate: [0, 5, -3, 8, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-16 h-20 bg-mebee-sage/15  z-5"
        style={{ top: '60%', right: '12%' }}
        animate={{
          x: [0, -25, 15, -10, 0],
          y: [0, 20, -30, 10, 0],
          rotate: [0, -8, 12, -4, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      <motion.div
        className="absolute w-20 h-12 bg-mebee-sage/25  z-5"
        style={{ bottom: '20%', left: '15%' }}
        animate={{
          x: [0, 30, -20, 25, 0],
          y: [0, -25, 35, -15, 0],
          rotate: [0, 10, -15, 6, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8,
        }}
      />

      <div className="max-w-6xl mx-auto px-8 relative">
        {/* Section Header - Typography Focused */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-mebee-dark-navy leading-tight mb-6 font-articulat">
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
              className="block text-mebee-navy"
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
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="absolute -left-6 top-0 w-1 bg-mebee-yellow"
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                transition={{ 
                  duration: 0.8, 
                  delay: (index * 0.2) + 0.3,
                  ease: "easeOut" 
                }}
                viewport={{ once: true }}
              />
              <div className="pl-12">
                <h3 className="text-2xl md:text-3xl font-semibold text-mebee-dark-navy mb-4 font-articulat">
                  {painPoint.title}
                </h3>
                <p className="text-lg text-mebee-navy/80 leading-relaxed">
                  {painPoint.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Solution Teaser - Clean Centered */}
        <motion.div 
          className="text-center bg-mebee-sage/10  p-12 md:p-16 relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl md:text-5xl font-bold text-mebee-dark-navy mb-8 leading-tight font-articulat">
            What if you could
            <span className="block text-mebee-yellow">eliminate all three</span>
            bottlenecks?
          </h3>
          
          <p className="text-xl text-mebee-navy/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            MeBee&apos;s AI-native approach transforms these pain points into your competitive advantages.
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
              className="border-2 border-mebee-navy text-mebee-navy hover:bg-mebee-navy hover:text-white font-semibold px-8 py-4 text-lg min-h-[44px] transition-all duration-200"
            >
              {COPY.problems.secondaryCta}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}