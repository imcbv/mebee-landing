import React from 'react';
import { Button } from '../ui/button';
import { COPY } from '../../lib/constants';

export function HowItWorks() {
  return (
    <section className="relative py-24 bg-white">
      {/* Subtle Liquid Skin Texture Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-mebee-sage/20 via-transparent to-mebee-navy/10"></div>
      </div>

      <div className="max-w-6xl mx-auto px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-mebee-dark-navy mb-6 font-articulat">
            {COPY.howItWorks.sectionTitle}
          </h2>
          <p className="text-xl text-mebee-navy/80 max-w-3xl mx-auto">
            {COPY.howItWorks.processFlow}
          </p>
        </div>

        {/* Process Steps with Connecting Lines */}
        <div className="relative mb-20">
          {/* Connecting Line */}
          <div className="absolute top-10 left-0 right-0 h-0.5 bg-mebee-yellow hidden md:block"></div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {COPY.howItWorks.steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 bg-mebee-yellow rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-mebee-dark-navy border-4 border-white shadow-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-mebee-dark-navy mb-4 font-articulat">
                  {step.step}
                </h3>
                <p className="text-mebee-navy/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            variant="primary"
            size="lg" 
            className="bg-mebee-yellow text-mebee-dark-navy hover:bg-mebee-yellow/90 font-semibold px-8 py-4 text-lg min-h-[44px] transition-all duration-200"
          >
            {COPY.howItWorks.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}