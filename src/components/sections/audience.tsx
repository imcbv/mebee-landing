"use client";

import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { COPY } from '../../lib/constants';

export function Audience() {
  // Parallax transforms - matching hero section
  const { scrollY } = useScroll();
  const honeycombY = useTransform(scrollY, [0, 800], [0, -150]);
  const floatingObjectsY = useTransform(scrollY, [0, 800], [0, -300]);

  return (
    <section id="audience" className="min-h-screen flex overflow-hidden">
      {/* LEFT SIDE - Yellow Slab (nav bar width) */}
      <div className="w-20 bg-mebee-yellow relative hidden lg:block">
      </div>

      {/* RIGHT SIDE - Main Content */}
      <div className="flex-1 bg-mebee-sage relative">
      {/* Navy Honeycomb Watermarks - Multiple for sage background */}
      <motion.div // HONEYCOMB: Audience section - TOP LEFT (350px)
        className="absolute z-0"
        style={{
          top: "20%",
          left: "5%",
          width: "350px",
          aspectRatio: "1",
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

      <motion.div // HONEYCOMB: Audience section - BOTTOM RIGHT (300px)
        className="absolute z-0"
        style={{
          bottom: "15%",
          right: "8%",
          width: "300px",
          aspectRatio: "1",
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

      {/* 3 Floating Objects with Different Shapes */}
      <motion.div style={{ y: floatingObjectsY }} className="absolute inset-0">
        {/* Top Left - Wide Rectangle */}
        <motion.div
          className="absolute w-28 h-16 bg-mebee-yellow/60 z-0"
          initial={{ x: 100, y: 120, rotate: -15 }}
          animate={{
            x: [100, 150, 50, 120, 80, 100],
            y: [120, 100, 160, 180, 90, 120],
            rotate: [-15, 5, -30, 15, -10, -15],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Middle Right - Square */}
        <motion.div
          className="absolute w-24 h-24 bg-mebee-yellow/50 z-0"
          initial={{ x: 680, y: 350, rotate: 20 }}
          animate={{
            x: [680, 630, 730, 660, 710, 680],
            y: [350, 310, 390, 330, 370, 350],
            rotate: [20, 35, -10, 25, 5, 20],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Bottom Center - Tall Rectangle */}
        <motion.div
          className="absolute w-20 h-32 bg-mebee-yellow/70 z-0"
          initial={{ x: 400, y: 550, rotate: 10 }}
          animate={{
            x: [400, 350, 450, 420, 370, 400],
            y: [550, 510, 590, 530, 570, 550],
            rotate: [10, 30, -15, 20, -5, 10],
          }}
          transition={{
            duration: 23,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto px-8 relative min-h-screen flex flex-col justify-center pb-20">
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

        {/* Two Column Layout - Enhanced Visual Design */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Internal Teams */}
          <motion.div 
            className="bg-white p-8 shadow-xl border border-mebee-sage/20 relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -4, boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)" }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-mebee-dark-navy flex items-center justify-center mx-auto mb-4 relative z-10">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-mebee-dark-navy font-articulat relative z-10">
                Internal Teams
              </h3>
            </div>
            <div className="space-y-3 relative z-10">
              {COPY.audience.internalTeams.teams.map((team, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center justify-start bg-mebee-sage/10 p-3 border-l-4 border-mebee-dark-navy hover:bg-mebee-sage/20 transition-colors duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.4, delay: 0.7 + (index * 0.1), ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <span className="text-base text-mebee-dark-navy font-medium">{team}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* External Networks */}
          <motion.div 
            className="bg-white p-8 shadow-xl border border-mebee-sage/20 relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -4, boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)" }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-mebee-dark-navy flex items-center justify-center mx-auto mb-4 relative z-10">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-mebee-dark-navy font-articulat relative z-10">
                External Networks
              </h3>
            </div>
            <div className="space-y-3 relative z-10">
              {COPY.audience.externalNetworks.networks.map((network, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center justify-start bg-mebee-sage/10 p-3 border-l-4 border-mebee-dark-navy hover:bg-mebee-sage/20 transition-colors duration-200"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: -4 }}
                  transition={{ duration: 0.4, delay: 0.7 + (index * 0.1), ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <span className="text-base text-mebee-dark-navy font-medium">{network}</span>
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