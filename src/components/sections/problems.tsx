import React from 'react';
import { Button } from '../ui/button';
import { COPY } from '../../lib/constants';

export function Problems() {
  return (
    <section className="relative py-24 bg-white">
      {/* Sage Side Panels for Breathing Room */}
      <div className="absolute inset-0">
        <div className="w-16 bg-mebee-sage/10 h-full absolute left-0" />
        <div className="w-16 bg-mebee-sage/10 h-full absolute right-0" />
      </div>

      {/* Honeycomb Watermark - Corner Only */}
      <div className="absolute top-8 right-8 opacity-20">
        <svg width="120" height="120" viewBox="0 0 120 120" className="text-mebee-sage">
          <defs>
            <pattern id="honeycomb" patternUnits="userSpaceOnUse" width="40" height="35">
              <polygon fill="none" stroke="currentColor" strokeWidth="1" points="20,2 35,10 35,25 20,33 5,25 5,10"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#honeycomb)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-8 relative">
        {/* Section Header - Typography Focused */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-mebee-dark-navy leading-tight mb-6 font-articulat">
            Stop
            <span className="block text-mebee-yellow">delays</span>
            <span className="block text-mebee-navy">Start launches</span>
          </h2>
        </div>

        {/* Problems List - Clean Structure */}
        <div className="max-w-4xl mx-auto space-y-16 mb-20">
          <div className="relative">
            <div className="absolute -left-6 top-0 w-1 h-full bg-mebee-yellow" />
            <div className="pl-12">
              <h3 className="text-2xl md:text-3xl font-semibold text-mebee-dark-navy mb-4 font-articulat">
                {COPY.problems.painPoints[0].title}
              </h3>
              <p className="text-lg text-mebee-navy/80 leading-relaxed">
                {COPY.problems.painPoints[0].description}
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-0 w-1 h-full bg-mebee-yellow" />
            <div className="pl-12">
              <h3 className="text-2xl md:text-3xl font-semibold text-mebee-dark-navy mb-4 font-articulat">
                {COPY.problems.painPoints[1].title}
              </h3>
              <p className="text-lg text-mebee-navy/80 leading-relaxed">
                {COPY.problems.painPoints[1].description}
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-0 w-1 h-full bg-mebee-yellow" />
            <div className="pl-12">
              <h3 className="text-2xl md:text-3xl font-semibold text-mebee-dark-navy mb-4 font-articulat">
                {COPY.problems.painPoints[2].title}
              </h3>
              <p className="text-lg text-mebee-navy/80 leading-relaxed">
                {COPY.problems.painPoints[2].description}
              </p>
            </div>
          </div>
        </div>

        {/* Solution Teaser - Clean Centered */}
        <div className="text-center bg-mebee-sage/10 rounded-2xl p-12 md:p-16 relative">
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
        </div>
      </div>
    </section>
  );
}