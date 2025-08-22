import React from 'react';
import { Button } from '../ui/button';
import { COPY } from '../../lib/constants';

export function FinalCTA() {
  return (
    <section id="final-cta" className="py-24 text-white flex">
      {/* LEFT SIDE - Yellow Slab (nav bar width) */}
      <div className="w-20 bg-mebee-yellow relative">
      </div>

      {/* RIGHT SIDE - Main Content */}
      <div className="flex-1 bg-gradient-to-br from-mebee-dark-navy via-mebee-navy to-mebee-sage relative">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight font-articulat">
          {COPY.finalCta.headline}
        </h2>
        <p className="text-xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
          Stop the file hunt. Start shipping faster in every market.
        </p>
        <Button 
          size="lg"
          className="bg-mebee-yellow text-mebee-dark-navy hover:bg-mebee-yellow/90 font-semibold px-12 py-4 text-xl min-h-[44px] transition-all duration-200 border-2 border-transparent hover:border-white"
        >
          {COPY.finalCta.cta}
        </Button>
      </div>
      </div>
    </section>
  );
}