import React from 'react';
import { COPY } from '../../lib/constants';

export function Audience() {
  return (
    <section className="relative py-24 bg-mebee-sage">
      {/* Honeycomb Watermark - Corner Only */}
      <div className="absolute bottom-8 left-8 opacity-20">
        <svg width="120" height="120" viewBox="0 0 120 120" className="text-mebee-dark-navy">
          <defs>
            <pattern id="honeycomb-audience" patternUnits="userSpaceOnUse" width="40" height="35">
              <polygon fill="none" stroke="currentColor" strokeWidth="1" points="20,2 35,10 35,25 20,33 5,25 5,10"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#honeycomb-audience)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-mebee-dark-navy mb-6 font-articulat">
            Who Benefits
          </h2>
          <p className="text-xl text-mebee-navy/80 max-w-3xl mx-auto">
            Built for teams and networks that need to move fast across markets
          </p>
        </div>

        {/* Two Column Layout - Clean Typography Focus */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Internal Teams */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-mebee-dark-navy mb-8 font-articulat">
              Internal Teams
            </h3>
            <div className="space-y-4">
              {COPY.audience.internalTeams.teams.map((team, index) => (
                <div key={index} className="flex items-center justify-start">
                  <div className="w-3 h-3 bg-mebee-yellow rounded-full mr-4 flex-shrink-0" />
                  <span className="text-lg text-mebee-dark-navy font-medium">{team}</span>
                </div>
              ))}
            </div>
          </div>

          {/* External Networks */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-mebee-dark-navy mb-8 font-articulat">
              External Networks
            </h3>
            <div className="space-y-4">
              {COPY.audience.externalNetworks.networks.map((network, index) => (
                <div key={index} className="flex items-center justify-start">
                  <div className="w-3 h-3 bg-mebee-yellow rounded-full mr-4 flex-shrink-0" />
                  <span className="text-lg text-mebee-dark-navy font-medium">{network}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}