import React from "react";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Full-screen Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
          <Image
            src="https://www.shutterstock.com/shutterstock/videos/1070056948/thumb/1.jpg"
            alt="Community support and education"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Building Bridges to Your Future
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            We can help you identify solutions to build a bridge from where you are to where you want to be!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Start Your Journey
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center animate-bounce">
          <div className="text-white/90 text-sm">Scroll to explore</div>
          <svg 
            className="w-6 h-6 text-white/90 mt-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M7 13l5 5m0 0l5-5m-5 5V6"
            />
          </svg>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">Real stories of hope and transformation</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">A Mother's Journey</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Faced with the impossible choice between gas for work or diapers for her 4-month-old, Shannon, a single mother of two, found hope through The ANSWERS Project. We provided diapers for her little one and helped her discover a fulfilling career helping others.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Sam's Airport Adventure</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Despite his developmental disabilities, Sam&apos;s dream of being an astronaut led him to The ANSWERS Project. While he discovered he prefers staying on the ground, he found his true calling - maintaining aircraft at the local airport, where he&apos;s been working for 20 years.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Christy's Military Success</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Lost and uncertain about her future, Christy reached out to The ANSWERS Project. With our support, she embarked on a military career, mastering multiple positions and climbing the managerial ladder. Her journey from uncertainty to success continues to inspire.
              </p>
              <p className="text-gray-600 mb-4">
                The ANSWERS Project is dedicated to providing life solutions and resources for professionals and individuals in the Lake of the Ozarks community. We believe in empowering our community through support, education, and guidance.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our approach is simple: we meet people where they are, understand their unique challenges, and work together to find solutions that lead to lasting positive change.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Smith Family's Fresh Start</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                After their house burned down, the Smith family turned to The ANSWERS Project. We helped Mom discover a new career path, secured essential donations, and supported them in finding a new home. Their story shows how community support can change lives.
              </p>
              <p className="text-gray-600 mb-4">
                The ANSWERS Project is dedicated to providing life solutions and resources for professionals and individuals in the Lake of the Ozarks community. We believe in empowering our community through support, education, and guidance.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our approach is simple: we meet people where they are, understand their unique challenges, and work together to find solutions that lead to lasting positive change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">Dedicated professionals here to support you</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">LG</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Larry Gerdes</h3>
              <p className="text-gray-600 hover:text-teal-600 transition-colors text-center">get2answers@gmail.com</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">EE</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Ed Emerson</h3>
              <p className="text-gray-600 hover:text-teal-600 transition-colors text-center">ed4answers@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="You Don't Have to Face This Journey Alone"
        subtitle="Take Action Today"
        description="Whether you're seeking guidance, support, or resources, we're here to help you take the next step forward."
        features={[
          "Confidential Support",
          "Local Resources"
        ]}
        primaryButton={{
          text: "Get Support Now",
          href: "/contact"
        }}
        secondaryButton={{
          text: "Browse Resources",
          href: "/resources"
        }}
        backgroundImage="https://www.shutterstock.com/shutterstock/videos/1070056948/thumb/1.jpg"
        testimonials={{
          images: [
            "/review1.jpg",
            "/review2.jpg",
            "/review3.jpg"
          ],
          text: "Join other community members",
          subtext: "who found their path forward"
        }}
        rating={{
          stars: 5,
          text: "5.0 Community Rating"
        }}
      />
    </div>
  );
}
