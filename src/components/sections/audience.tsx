"use client";

import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { COPY } from '../../lib/constants';

export function Audience() {
  // Parallax transforms
  const { scrollY } = useScroll();
  const honeycombY = useTransform(scrollY, [0, 2000], [0, -150]);

  return (
    <section id="audience" className="min-h-screen flex overflow-hidden">
      {/* LEFT SIDE - Yellow Slab (nav bar width) */}
      <div className="w-20 bg-mebee-yellow relative">
      </div>

      {/* RIGHT SIDE - Main Content */}
      <div className="flex-1 bg-mebee-sage relative">
      {/* Navy Honeycomb Watermarks - Multiple for sage background */}
      <motion.div
        className="absolute z-5"
        style={{
          top: "20%",
          left: "5%",
          width: "350px",
          height: "350px",
          backgroundImage: 'url("/images/MeBee Honeycomb_navy.png")',
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
          right: "8%",
          width: "300px",
          height: "300px",
          backgroundImage: 'url("/images/MeBee Honeycomb_navy.png")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          y: honeycombY,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
      />

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
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-mebee-dark-navy mb-6 font-articulat"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Who Benefits
          </motion.h2>
          <motion.p 
            className="text-xl text-mebee-dark-navy max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Built for teams and networks that need to move fast across markets
          </motion.p>
        </motion.div>

        {/* Two Column Layout - Clean Typography Focus */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Internal Teams */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-mebee-dark-navy mb-8 font-articulat">
              Internal Teams
            </h3>
            <div className="space-y-4">
              {COPY.audience.internalTeams.teams.map((team, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center justify-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + (index * 0.1), ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="w-3 h-3 bg-mebee-yellow rounded-full mr-4 flex-shrink-0" />
                  <span className="text-lg text-mebee-dark-navy font-medium">{team}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* External Networks */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-mebee-dark-navy mb-8 font-articulat">
              External Networks
            </h3>
            <div className="space-y-4">
              {COPY.audience.externalNetworks.networks.map((network, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center justify-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + (index * 0.1), ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="w-3 h-3 bg-mebee-yellow rounded-full mr-4 flex-shrink-0" />
                  <span className="text-lg text-mebee-dark-navy font-medium">{network}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}