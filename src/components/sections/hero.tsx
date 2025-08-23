"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/button";
import { Modal } from "../ui/modal";
import { DemoRequestForm } from "../forms/demo-request";
import { NavigationSlab } from "../ui/navigation-slab";
import { COPY, BRAND_ASSETS } from "../../lib/constants";

// Typewriter hook
function useTypewriter(text: string, speed: number = 50) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return displayText;
}

export function Hero() {
  const { scrollY } = useScroll();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Parallax transforms - floating objects move MUCH more for noticeable effect
  const honeycombY = useTransform(scrollY, [0, 800], [0, -150]);
  const logoY = useTransform(scrollY, [0, 800], [0, -50]);
  const contentY = useTransform(scrollY, [0, 800], [0, -100]);
  const floatingObjectsY = useTransform(scrollY, [0, 800], [0, -300]);

  // Typewriter effect starting immediately
  const typedHeadline = useTypewriter(COPY.hero.headline, 60);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="hero" className="relative min-h-screen flex overflow-hidden">
      <NavigationSlab />
      {/* LEFT SIDE - Yellow Slab (nav bar width) */}
      <div className="w-20 bg-mebee-yellow relative hidden lg:block">
        {/* Liquid skin texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-mebee-yellow/20 to-mebee-yellow/40 opacity-30"></div>

        {/* Navy Honeycomb with elegant fade in and parallax */}
        <motion.div // HONEYCOMB: Hero section - LEFT YELLOW SLAB BOTTOM (500px, navy)
          className="absolute z-20 opacity-70"
          style={{
            bottom: "-150px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "500px",
            aspectRatio: "1",
            y: honeycombY,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <Image
            src="/images/MeBee Honeycomb_navy.png"
            alt="MeBee Honeycomb Pattern"
            fill
            sizes="500px"
            style={{ objectFit: "contain", objectPosition: "center" }}
            loading="eager"
            priority
          />
        </motion.div>

        {/* Logo with elegant fade in and parallax */}
        <motion.div
          className="absolute top-8 left-8 z-10"
          style={{ y: logoY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <Image
            src={BRAND_ASSETS.logos.standard}
            alt="MeBee"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
        </motion.div>
      </div>

      {/* RIGHT SIDE - Sage Content Area */}
      <div className="flex-1 bg-mebee-sage relative overflow-hidden">
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


        {/* Four floating objects with parallax */}
        <motion.div
          style={{ y: floatingObjectsY }}
          className="absolute inset-0"
        >
          <motion.div
            className="absolute w-32 h-24 bg-mebee-yellow opacity-80 z-5"
            style={{ right: "10%", top: "20px" }}
            animate={{
              x: [0, -50, 50, -30, 30, 0],
              y: [0, -20, 40, 80, -10, 0],
              rotate: [12, 25, -5, 30, 8, 12],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute w-24 h-16 bg-mebee-yellow opacity-60 z-5"
            style={{ right: "5%", top: "250px" }}
            animate={{
              x: [0, -50, 50, -30, 40, 0],
              y: [0, -50, 50, -30, 30, 0],
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
            className="absolute w-20 h-20 bg-mebee-yellow/40 z-5"
            style={{ right: "15%", top: "480px" }}
            animate={{
              x: [0, -50, 50, -20, -30, 0],
              y: [0, -40, 40, -20, 20, 0],
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
            className="absolute w-16 h-24 bg-mebee-yellow opacity-50 z-5"
            style={{ right: "8%", top: "700px" }}
            animate={{
              x: [0, 40, -40, 20, -20, 0],
              y: [0, -40, 40, -20, 20, 0],
              rotate: [-12, 20, -25, 15, -8, -12],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 9,
            }}
          />
        </motion.div>

        {/* Main content with elegant animations and parallax */}
        <motion.div
          className="relative flex items-center justify-center min-h-screen px-12 z-10"
          style={{ y: contentY }}
        >
          <div className="text-center max-w-4xl">
            {/* MeBee Logo Icon with elegant fade */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <Image
                src={BRAND_ASSETS.logos.standard}
                alt="MeBee"
                width={320}
                height={100}
                className="mx-auto"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(15%) sepia(25%) saturate(1200%) hue-rotate(200deg) brightness(90%) contrast(95%)",
                }}
              />
            </motion.div>

            {/* Typewriter headline with fixed height to prevent layout shift */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-mebee-dark-navy leading-tight mb-8 font-articulat min-h-[12rem] md:min-h-[14rem] lg:min-h-[16rem]">
              {typedHeadline}
              <motion.span
                className="text-mebee-yellow"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                |
              </motion.span>
            </h1>

            <motion.h2
              className="text-xl md:text-2xl text-mebee-dark-navy leading-relaxed mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            >
              {COPY.hero.subheadline}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
            >
              <Button
                variant="outline"
                size="lg"
                onClick={openModal}
                className="border-2 border-mebee-yellow text-mebee-yellow hover:bg-mebee-yellow hover:text-mebee-dark-navy font-semibold px-8 py-4 text-lg min-h-[44px] transition-all duration-200"
              >
                {COPY.hero.cta}
              </Button>
            </motion.div>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
            >
              <p className="text-mebee-dark-navy text-sm">
                {COPY.hero.trustSignal}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Demo Request Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Book Your Demo"
        size="lg"
      >
        <DemoRequestForm onClose={closeModal} />
      </Modal>
    </section>
  );
}
