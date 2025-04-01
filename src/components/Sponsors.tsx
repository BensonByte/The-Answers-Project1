import React from 'react';
import Image from 'next/image';

interface Sponsor {
  name: string;
  logo: string;
  link?: string;
}

interface SponsorsProps {
  sponsors: Sponsor[];
}

export default function Sponsors({ sponsors }: SponsorsProps) {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Our Corporate Sponsors
        </h2>
        
        {/* Infinite Scroll Container */}
        <div className="relative w-full overflow-hidden group">
          {/* Single Scroll Line */}
          <div className="flex space-x-12 animate-scroll group-hover:animate-pause">
            {sponsors.map((sponsor, index) => (
              <div key={`sponsor-${index}`} className="flex-shrink-0">
                <a 
                  href={sponsor.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-32 h-20 relative transition-all duration-300"
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain"
                  />
                </a>
              </div>
            ))}
            {/* Duplicate items for seamless loop */}
            {sponsors.map((sponsor, index) => (
              <div key={`sponsor-dup-${index}`} className="flex-shrink-0">
                <a 
                  href={sponsor.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-32 h-20 relative transition-all duration-300"
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 