import React, { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";
import Sponsors from "@/components/Sponsors";

interface Resource {
  title: string;
  description: string;
  icon: ReactElement;
}

// Add this before the Home component
const sponsors = [
  {
    name: "colyertreecare",
    logo: "https://colyertreecare.com/wp-content/uploads/2025/02/cropped-Col-Yer-logo-New-1.png",
    link: "https://colyertreecare.com"
  },
  {
    name: "leathermanshop",
    logo: "https://leathermanshop.com/wp-content/uploads/2023/08/logo.jpg",
    link: "https://leathermanshop.com/"
  },
  {
    name: "yankeepeddlerstearoom",
    logo: "https://images.sirved.com/ChIJI0YFCojPxIcRjQ51y-uklZQ/baTHF5L0RZ.png",
    link: "https://www.facebook.com/yankeepeddlerstearoom/"
  },
  {
    name: "peggyalbers",
    logo: "https://idx-acnt-ihouseprd.b-cdn.net/AR990130/file_manager/LOGO/Peggy%20Albershomeheart1.png",
    link: "https://www.peggyalbers.com/"
  },
  {
    name: "martybyrde",
    logo: "https://img1.wsimg.com/isteam/ip/f077b830-b0ba-4d3e-87bb-5c6d91274f33/IMG_1817.jpeg/:/rs=w:984,h:1078",
    link: "https://martybyrde.com/"
  },
  {
    name: "asmartermove",
    logo: "https://asmartermove.com/wp-content/uploads/2023/03/logo-trim.png",
    link: "https://asmartermove.com/"
  },
  {
    name: "alphaes",
    logo: "https://alphaes.net/wp-content/uploads/2023/10/AlphaEngineeringSurveyingLogoTeal-0923-Converted-1.png",
    link: "https://alphaes.net/"
  },
  {
    name: "grannyscandy",
    logo: "https://996d84737aa618adc22c.cdn6.editmysite.com/uploads/b/996d84737aa618adc22cb2d449e3323e0245a05d1fb2abb8863fdc4a918f1fe1/HorizontalLogoLarger_1689821884.jpg?width=2400&optimize=medium",
    link: "https://grannyscandy.com/"
  },
  {
    name: "locc",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAKlBMVEVHcEydHj6eHj6dHj2dHj6eHj2dHj6dHj6dHj2dHj2dHj6dHj6dHj6dHj5Cfwn7AAAADXRSTlMA8i66QhiM3wtxyVali1RuEwAAAQFJREFUKJGNUluSBCEIA1TEB/e/7oLSrTO7H5uqriYGA6IA/0KeqIbK9EtqLiiiJ9QvmXK5qVxx0USNiHKgEB5RlYdeKFnro1XVPLLJJEtL3gGfXggQikhdInm6UpiqDqgTYMZG8l93beyFAsw7Fui7sokpIl4pVh6iuWbimot354VKap4Q9rvkDudOx1ixfHkOZw1Qbdtg4xK9mlF8KR7bZSRyMzglttFFvKF5+Wbiw/wo+WUTuF9G694eim46XprgnZ9psoaVY2Qat9+jNw5zcpmfC8UVs/bZaG9o6TyZbktiHw2eqac528cLG437OQXDp3jNohf4Bq2t2Ntv6U/8ANrrFAO/gvKIAAAAAElFTkSuQmCC",
    link: "http://locc.us/"
  }
];



export default function Home() {
  const resources: Resource[] = [
    {
      title: "Community Resources",
      description: "Access to local support services and community programs.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Personal Guidance",
      description: "One-on-one support to help navigate life's challenges.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Educational Support",
      description: "Resources and programs for continued learning and growth.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
    },
  ];

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
            Finding Your Path Forward
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            The Answers Project provides guidance and resources for those facing life&apos;s challenges in the Lake of the Ozarks community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Get Help Today
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

      <div className="bg-white">
        {/* Resources Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How We Can Help
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover the comprehensive support and resources available to help you navigate life&apos;s challenges and find your path forward.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-sage-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative p-8">
                    <div className="text-teal-700 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      {resource.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{resource.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{resource.description}</p>
                    <Link
                      href="/resources"
                      className="inline-flex items-center text-teal-700 font-medium hover:text-teal-800 group/link"
                    >
                      Learn More
                      <svg 
                        className="w-5 h-5 ml-2 transform group-hover/link:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M17 8l4 4m0 0l-4 4m4-4H3" 
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/resources"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-teal-700 hover:bg-teal-800 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                View All Resources
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
        {/* Sponsors Section */}
        <Sponsors sponsors={sponsors} />


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
    </div>
  );
}
