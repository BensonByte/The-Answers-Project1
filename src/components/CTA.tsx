import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CTAProps {
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  backgroundImage: string;
  testimonials?: {
    images: string[];
    text: string;
    subtext: string;
  };
  rating?: {
    stars: number;
    text: string;
  };
}

export default function CTA({
  title,
  subtitle,
  description,
  features,
  primaryButton,
  secondaryButton,
  backgroundImage,
  testimonials,
  rating,
}: CTAProps) {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/90 via-teal-800/85 to-teal-900/90"></div>
      </div>

      <div className="relative max-w-3xl mx-auto px-4 text-center">
        {subtitle && (
          <span className="text-teal-300 text-sm font-semibold tracking-wider uppercase">
            {subtitle}
          </span>
        )}
        <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
          {title}
        </h2>
        <div className="mt-6 text-lg text-white">
          <p>{description}</p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-white">
              <svg className="w-6 h-6 mr-2 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryButton.href}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-900 bg-white hover:bg-gray-50 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {primaryButton.text}
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          {secondaryButton && (
            <Link
              href={secondaryButton.href}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border-2 border-white hover:bg-white/10 rounded-lg transition-all duration-200"
            >
              {secondaryButton.text}
            </Link>
          )}
        </div>

        {(testimonials || rating) && (
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              {testimonials && (
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {testimonials.images.map((image, index) => (
                      <Image
                        key={index}
                        src={image}
                        alt="Testimonial"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    ))}
                  </div>
                  <div className="ml-4 text-left">
                    <p className="text-sm font-semibold text-white">{testimonials.text}</p>
                    <p className="text-sm text-teal-300">{testimonials.subtext}</p>
                  </div>
                </div>
              )}
              {testimonials && rating && <div className="h-12 w-px bg-white/20 hidden sm:block"></div>}
              {rating && (
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(rating.stars)].map((_, i) => (
                      <svg key={i} className="text-yellow-300 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="ml-2 text-sm text-white">{rating.text}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 