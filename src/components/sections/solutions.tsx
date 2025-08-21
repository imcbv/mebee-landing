import React from 'react';
import { Button } from '../ui/button';
import { COPY } from '../../lib/constants';

export function Solutions() {
  return (
    <section className="relative py-24 bg-mebee-sage">
      {/* Single Neon Plate - Top Right for Balance */}
      <div className="absolute top-16 right-16 w-32 h-20 bg-mebee-yellow rounded-lg opacity-80 transform rotate-12"></div>

      <div className="max-w-6xl mx-auto px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-mebee-dark-navy leading-tight mb-6 font-articulat">
            What You Get
            <span className="block text-mebee-yellow">Three Pillars</span>
          </h2>
          <p className="text-xl text-mebee-navy/80 max-w-3xl mx-auto">
            Transform your biggest pain points into competitive advantages
          </p>
        </div>

        {/* Three Pillars - Clean Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Pillar 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 hover:translate-y-[-2px]">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-mebee-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-mebee-dark-navy">01</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-mebee-dark-navy mb-4 font-articulat">
                {COPY.solutions.pillars[0].title}
              </h3>
            </div>
            
            <p className="text-mebee-navy/80 leading-relaxed mb-6">
              {COPY.solutions.pillars[0].description}
            </p>
            
            <div className="bg-mebee-yellow/10 p-4 rounded-lg border-l-4 border-mebee-yellow mb-6">
              <p className="text-sm text-mebee-dark-navy font-medium">
                ✨ {COPY.solutions.pillars[0].feature}
              </p>
            </div>
            
            <Button 
              variant="outline"
              className="w-full border-2 border-mebee-yellow text-mebee-yellow hover:bg-mebee-yellow hover:text-mebee-dark-navy font-semibold transition-all duration-200 min-h-[44px]"
            >
              {COPY.solutions.pillars[0].microCta}
            </Button>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 hover:translate-y-[-2px]">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-mebee-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-mebee-dark-navy">02</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-mebee-dark-navy mb-4 font-articulat">
                {COPY.solutions.pillars[1].title}
              </h3>
            </div>
            
            <p className="text-mebee-navy/80 leading-relaxed mb-6">
              {COPY.solutions.pillars[1].description}
            </p>
            
            <div className="bg-mebee-yellow/10 p-4 rounded-lg border-l-4 border-mebee-yellow mb-6">
              <p className="text-sm text-mebee-dark-navy font-medium">
                🔄 {COPY.solutions.pillars[1].feature}
              </p>
            </div>
            
            <Button 
              variant="outline"
              className="w-full border-2 border-mebee-yellow text-mebee-yellow hover:bg-mebee-yellow hover:text-mebee-dark-navy font-semibold transition-all duration-200 min-h-[44px]"
            >
              {COPY.solutions.pillars[1].microCta}
            </Button>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 hover:translate-y-[-2px]">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-mebee-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-mebee-dark-navy">03</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-mebee-dark-navy mb-4 font-articulat">
                {COPY.solutions.pillars[2].title}
              </h3>
            </div>
            
            <p className="text-mebee-navy/80 leading-relaxed mb-6">
              {COPY.solutions.pillars[2].description}
            </p>
            
            <div className="bg-mebee-yellow/10 p-4 rounded-lg border-l-4 border-mebee-yellow mb-6">
              <p className="text-sm text-mebee-dark-navy font-medium">
                🚀 {COPY.solutions.pillars[2].feature}
              </p>
            </div>
            
            <Button 
              variant="outline"
              className="w-full border-2 border-mebee-yellow text-mebee-yellow hover:bg-mebee-yellow hover:text-mebee-dark-navy font-semibold transition-all duration-200 min-h-[44px]"
            >
              {COPY.solutions.pillars[2].microCta}
            </Button>
          </div>
        </div>

        {/* Before/After Demo Section */}
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-12">
          <h3 className="text-4xl md:text-5xl font-bold text-mebee-dark-navy mb-8 leading-tight font-articulat">
            Ready to see all
            <span className="block text-mebee-yellow">three pillars</span>
            in action?
          </h3>
          
          <p className="text-xl text-mebee-navy/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience how MeBee transforms your asset management workflow from bottleneck to breakthrough.
          </p>

          {/* Simple Before/After */}
          <div className="grid md:grid-cols-3 gap-8 items-center mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-md mb-4">
                <div className="text-3xl mb-2">😤</div>
                <h4 className="font-semibold text-mebee-dark-navy">Before MeBee</h4>
                <p className="text-sm text-mebee-navy/70">Manual, slow, frustrating</p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-mebee-yellow rounded-full flex items-center justify-center">
                <span className="text-mebee-dark-navy text-xl font-bold">→</span>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-md mb-4">
                <div className="text-3xl mb-2">🚀</div>
                <h4 className="font-semibold text-mebee-dark-navy">With MeBee</h4>
                <p className="text-sm text-mebee-navy/70">AI-powered, instant, seamless</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="primary"
              size="lg"
              className="bg-mebee-yellow text-mebee-dark-navy hover:bg-mebee-yellow/90 font-semibold px-8 py-4 text-lg min-h-[44px] transition-all duration-200"
            >
              See Full Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-mebee-dark-navy text-mebee-dark-navy hover:bg-mebee-dark-navy hover:text-white font-semibold px-8 py-4 text-lg min-h-[44px] transition-all duration-200"
            >
              Compare Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}