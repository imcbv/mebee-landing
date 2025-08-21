import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { COPY, BRAND_ASSETS } from '../../lib/constants';

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
              <pattern id="honeycomb-hero" patternUnits="userSpaceOnUse" width="60" height="52">
                <polygon fill="none" stroke="currentColor" strokeWidth="0.5" points="30,2 52,15 52,37 30,50 8,37 8,15"/>
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

        {/* Animated neon plates for balance */}
        <div className="absolute top-16 right-16 w-32 h-24 bg-mebee-yellow rounded-lg opacity-80 transform rotate-12 animate-float-slow"></div>
        <div className="absolute bottom-32 right-24 w-24 h-16 bg-mebee-yellow rounded-lg opacity-60 transform -rotate-6 animate-float-slower"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-mebee-yellow/40 rounded-lg transform rotate-45 animate-float-slowest"></div>

        {/* Main content */}
        <div className="relative flex items-center justify-center min-h-screen px-12">
          <div className="text-center max-w-4xl">
            {/* Bee Icon */}
            <div className="mb-8">
              <div className="w-16 h-16 bg-mebee-yellow rounded-full flex items-center justify-center mx-auto">
                <span className="text-mebee-dark-navy text-2xl font-bold">&</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-mebee-dark-navy leading-tight mb-8 font-articulat">
              {COPY.hero.headline}
            </h1>
            
            <h2 className="text-xl md:text-2xl text-mebee-navy/80 leading-relaxed mb-12 max-w-3xl mx-auto">
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
              <p className="text-mebee-navy/60 text-sm">
                {COPY.hero.trustSignal}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}