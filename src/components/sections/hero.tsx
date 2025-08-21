"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { COPY, BRAND_ASSETS } from "../../lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen flex">
      {/* LEFT SIDE - Yellow Slab (~25%) */}
      <div className="w-1/4 bg-mebee-yellow relative">
        {/* Liquid skin texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-mebee-yellow/20 to-mebee-yellow/40 opacity-30"></div>

        {/* Logo */}
        <div className="absolute top-8 left-8">
          <Image
            src={BRAND_ASSETS.logos.standard}
            alt="MeBee"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
        </div>
      </div>

      {/* RIGHT SIDE - Sage Content Area (~75%) */}
      <div className="w-3/4 bg-mebee-sage relative overflow-hidden">
        {/* Motivational office background image (low opacity) */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-600 to-gray-800"></div>
        </div>

        {/* Honeycomb pattern overlay */}
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full text-mebee-dark-navy">
            <defs>
              <pattern
                id="honeycomb-hero"
                patternUnits="userSpaceOnUse"
                width="60"
                height="52"
              >
                <polygon
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  points="30,2 52,15 52,37 30,50 8,37 8,15"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#honeycomb-hero)" />
          </svg>
        </div>

        {/* Liquid skin texture background */}
        <div className="absolute inset-0 bg-gradient-to-br from-mebee-sage/80 via-mebee-sage to-mebee-sage/90 opacity-60"></div>

        {/* Header elements */}
        <div className="absolute top-8 right-8 flex items-center space-x-6 z-20">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <div className="w-6 h-0.5 bg-mebee-dark-navy" />
              <div className="w-6 h-0.5 bg-mebee-dark-navy" />
              <div className="w-6 h-0.5 bg-mebee-dark-navy" />
            </div>
            <span className="text-mebee-dark-navy font-medium">Menu</span>
          </div>
          <div className="w-8 h-8 bg-mebee-yellow rounded-full flex items-center justify-center">
            <span className="text-mebee-dark-navy text-lg">🔍</span>
          </div>
        </div>

        {/* Four floating objects on the FAR RIGHT SIDE - MAXIMUM vertical spread */}
        <motion.div
          className="absolute w-32 h-24 bg-mebee-yellow rounded-lg opacity-80 z-5"
          initial={{ x: 580, y: 20, rotate: 12 }}
          animate={{
            x: [650, 600, 700, 630, 670, 650],
            y: [20, 0, 60, 100, 10, 20],
            rotate: [12, 25, -5, 30, 8, 12],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute w-24 h-16 bg-mebee-yellow rounded-lg opacity-60 z-5"
          initial={{ x: 620, y: 250, rotate: -6 }}
          animate={{
            x: [580, 530, 630, 550, 610, 580],
            y: [250, 200, 300, 220, 280, 250],
            rotate: [-6, 15, -20, 10, -15, -6],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        <motion.div
          className="absolute w-20 h-20 bg-mebee-yellow/40 rounded-lg z-5"
          initial={{ x: 700, y: 480, rotate: 45 }}
          animate={{
            x: [720, 680, 760, 740, 700, 720],
            y: [480, 440, 520, 460, 500, 480],
            rotate: [45, 70, 20, 60, 35, 45],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
        />

        <motion.div
          className="absolute w-16 h-24 bg-mebee-yellow rounded-lg opacity-50 z-5"
          initial={{ x: 650, y: 700, rotate: -12 }}
          animate={{
            x: [800, 840, 760, 820, 780, 800],
            y: [700, 660, 740, 680, 720, 700],
            rotate: [-12, 20, -25, 15, -8, -12],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 9,
          }}
        />

        {/* Main content */}
        <div className="relative flex items-center justify-center min-h-screen px-12 z-10">
          <div className="text-center max-w-4xl">
            {/* Bee Icon */}
            <div className="mb-8">
              <div className="w-16 h-16 bg-mebee-yellow rounded-full flex items-center justify-center mx-auto">
                <span className="text-mebee-dark-navy text-2xl font-bold">
                  &
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-mebee-dark-navy leading-tight mb-8 font-articulat">
              {COPY.hero.headline}
            </h1>

            <h2 className="text-xl md:text-2xl text-mebee-dark-navy leading-relaxed mb-12 max-w-3xl mx-auto">
              {COPY.hero.subheadline}
            </h2>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-mebee-yellow text-mebee-yellow hover:bg-mebee-yellow hover:text-mebee-dark-navy font-semibold px-8 py-4 rounded-full text-lg min-h-[44px] transition-all duration-200"
            >
              {COPY.hero.cta}
            </Button>

            <div className="mt-12">
              <p className="text-mebee-dark-navy text-sm">
                {COPY.hero.trustSignal}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
