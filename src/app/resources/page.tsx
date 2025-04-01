"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define resource categories and their items with additional details
const resourceCategories = {
  "Housing & Shelter": [
    {
      name: "Brookview Apartments",
      logo: "https://lh3.googleusercontent.com/p/AF1QipPtvxyH9CGnGpfoua1YqqUnnVEWIy9yHqQpDtdj=s1360-w1360-h1020",
      website: "https://g.co/kgs/GSzXt8P",
      description: "Quality apartment living in Lake of the Ozarks"
    },
    {
      name: "Laurens Place Apartments",
      logo: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/291736011_466304918830530_3609235179124686419_n.png?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=GqjEobPM8e4Q7kNvgEXRKUv&_nc_oc=AdkJatqT7qlGTSHoEIJVCq13VBO2D6zuNqMq-KoU-0gi5cgQgk6fTpeXNkOdAXJXZ-0&_nc_zt=23&_nc_ht=scontent-ord5-2.xx&_nc_gid=liO-wN_HzhzmKJ9_V6tS2w&oh=00_AYHQeB03MiWxcpRClqrlq09xwwtE60jE2Ft511AsuNYagA&oe=67EFDD80",
    website: "https://bellmanage.com/",
      description: "Senior living apartments with supportive services"
    },
    {
      name: "Michaels Place Apts",
      logo: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/291736011_466304918830530_3609235179124686419_n.png?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=GqjEobPM8e4Q7kNvgEXRKUv&_nc_oc=AdkJatqT7qlGTSHoEIJVCq13VBO2D6zuNqMq-KoU-0gi5cgQgk6fTpeXNkOdAXJXZ-0&_nc_zt=23&_nc_ht=scontent-ord5-2.xx&_nc_gid=liO-wN_HzhzmKJ9_V6tS2w&oh=00_AYHQeB03MiWxcpRClqrlq09xwwtE60jE2Ft511AsuNYagA&oe=67EFDD80",
      website: "https://g.co/kgs/RGqnA7W",
      description: "Affordable housing solutions"
    },
    {
      name: "Helping Hands Shelter",
      logo: "https://lakeareahelpinghands.com/wp-content/uploads/2022/12/Logo-1.png",
      website: "https://g.co/kgs/HQ7aomp",
      description: "Emergency shelter and support services"
    },
    {
      name: "Lamb House",
      logo: "https://lambhouse.org/wp-content/uploads/2023/12/Logo.png",
      website: "https://www.lambhouse.org",
      description: "Transitional housing and support"
    },
    {
      name: "Habitat 4 Humanity",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPBhijT9wbWFuVyoDVdTlEG3m5E9CdDke9gQ&s",
      website: "https://www.facebook.com/lakeh4h/",
      description: "Building homes, communities, and hope"
    }
  ],
  "Healthcare & Medical": [
    {
      name: "Center For Cognitive Disorders",
      logo: "https://nhccare.com/wp-content/uploads/2019/03/NHC-Logo.png",
      website: "https://g.co/kgs/dDNrP4E",
      description: "Specialized care for cognitive health"
    },
    {
      name: "Miller and Camden County Health Depts.",
      logo: "https://www.camdencountyhealth.org/images/Logo2025.png",
      website: "https://www.camdencountyhealth.org/",
      description: "Public health services and information"
    },
    {
      name: "Medical Missions for Christ Clinic",
      logo: "https://mm4c.org/wp-content/uploads/2021/02/MM4C-trans.png",
      website: "https://www.mm4c.org/",
      description: "Free medical care for those in need"
    },
    {
      name: "Compass Health Network",
      logo: "https://compasshealthnetwork.org/wp-content/uploads/2023/12/CHN-2023-logo-01-768x180.png",
      website: "https://www.compasshealthnetwork.org",
      description: "Comprehensive healthcare services"
    },
    {
      name: "Crisis Pregnancy Center",
      logo: "https://pregnancyhelpcenters.org/wp-content/uploads/2022/07/Pregnancy-Help-Center_Logo-1-e1661855561715.png",
      website: "https://maps.app.goo.gl/jyQgSF4fNf7jnZTi9",
      description: "Support and resources for pregnancy"
    }
  ],
  "Social Services": [
    {
      name: "L.A.C.A.B- Lake Area Counseling & Behavioral Health",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ29geJg5POtqQYCOdtPOMGWwumwcCBC9AYcA&s",
      website: "https://g.co/kgs/7rGhwoZ",
      description: "Mental health and counseling services"
    },
    {
      name: "I.L.R.C.- Independent Living Resource Center",
      logo: "https://static.wixstatic.com/media/f6b596_b3bee83aeb9b47fba8ef5efc5d23d3e6~mv2.png/v1/fill/w_138,h_43,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ILRC_cmyk_woSlogan_tif.png",
      website: "https://www.ilrcjcmo.org/",
      description: "Support for independent living"
    },
    {
      name: "P&P- Probation and Parole",
      logo: "https://www.mo.gov/wp-content/uploads/2023/05/mo-pp-logo.png",
      website: "https://g.co/kgs/iwqws5w",
      description: "Probation and parole services"
    },
    {
      name: "Kids Harbor",
      logo: "https://kidsharbormo.org/wp-content/uploads/2018/10/logo.png",
      website: "https://kidsharbormo.org/",
      description: "Child advocacy and support"
    },
    {
      name: "MOCA",
      logo: "https://pictures.alignable.com/eyJidWNrZXQiOiJhbGlnbmFibGV3ZWItcHJvZHVjdGlvbiIsImtleSI6ImJ1c2luZXNzZXMvbG9nb3Mvb3JpZ2luYWwvMTAyMDU4NTIvTU9DQSBMb2dvLmpwZyIsImVkaXRzIjp7ImV4dHJhY3QiOnsibGVmdCI6MiwidG9wIjowLCJ3aWR0aCI6NDE4LCJoZWlnaHQiOjEzNX0sInJlc2l6ZSI6eyJ3aWR0aCI6MTgyLCJoZWlnaHQiOjU4fSwiZXh0ZW5kIjp7InRvcCI6NzYsImJvdHRvbSI6NDcsImxlZnQiOjAsInJpZ2h0IjowLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
      website: "https://www.mocaonline.org/",
      description: "Community assistance programs"
    },
    {
      name: "FTC Ministries",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQCUO4venmZdvk030UqMDO8eJ80lAvjZ8xPw&s",
      website: "http://www.lhministry.org/",
      description: "Faith-based community support"
    }
  ],
  "Education & Training": [
    {
      name: "LCTC - Lake Career & Technical Center",
      logo: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-1/298435141_925525488397295_5239680429728568728_n.jpg?stp=c600.218.397.398a_dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=2tpEHWrJIDQQ7kNvgHLQV3s&_nc_oc=Adm6HPVfL0pim1_BI0fXs34XPQM_X4a2Mfr_e8DMIuCKoqu7JITfpVhvDnGH1JnN1SA&_nc_zt=24&_nc_ht=scontent-ord5-2.xx&_nc_gid=1O3HnPK4jCP3UsNXl4CzNg&oh=00_AYETe1lnsFCkSmQlgnkuGuv2CCT1ohZoDt3mTE2UpYUBWw&oe=67EFB9A4",
      website: "https://www.facebook.com/LakeCTC/",
      description: "Career and technical education"
    },
    {
      name: "MCDDR- Miller County Developmental Delay Resources",
      logo: "https://macdds.org/wp-content/uploads/2020/02/macdds-Logo-2018-Blue.png",
      website: "https://macdds.org/services/member-county-boards/miller/",
      description: "Support for developmental delays"
    },
    {
      name: "CCDDR- Camden County Dev Delay Resources",
      logo: "https://ccddr.org/png/ccddr-logo-sm.png",
      website: "https://ccddr.org/",
      description: "Developmental delay resources"
    }
  ],
  "Community Support": [
    {
      name: "Community Foundation of the Lake",
      logo: "https://www.communityfoundationofthelake.com/images/header.jpg",
      website: "https://www.communityfoundationofthelake.com/",
      description: "Supporting community initiatives"
    },
    {
      name: "Share the Harvest",
      logo: "https://sharetheharvestfoodpantry.org/wp-content/uploads/2015/10/logo-2.png",
      website: "https://sharetheharvestfoodpantry.org/",
      description: "Food assistance programs"
    },
    {
      name: "Bikers for Christ",
      logo: "https://bikersforchrist.org/resources/Pictures/bfc-logo-web.png",
      website: "https://bikersforchrist.org/",
      description: "Motorcycle ministry and outreach"
    },
    {
      name: "Raising Hope Free Store",
      logo: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/444236945_10225360773994183_8743532918533546540_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=104&ccb=1-7&_nc_sid=2285d6&_nc_ohc=Dd82oYlXIIAQ7kNvgHHQv8f&_nc_oc=Adm6kClA_u5-uFV_HO1hIOML_Zsthjj7ks_KVWBmvpdECCg1IYZmIdUbVa_pThVtLAI&_nc_zt=23&_nc_ht=scontent-ord5-2.xx&_nc_gid=EizIAoQxnisectKnpKdPcg&oh=00_AYGNDxep17f_U9-C9ZChMLmzmodpYaO6zkbAwLHcFnOiaw&oe=67EFD0B1",
      website: "https://raisinghopefreestore.org/",
      description: "Free clothing and household items"
    },
    {
      name: "Goodwill",
      logo: "https://www.goodwill.org/wp-content/uploads/2019/06/cropped-Goodwill-Industries-International-Logo-1.jpg",
      website: "https://www.goodwill.org",
      description: "Thrift stores and job training"
    }
  ],
  "Transportation": [
    {
      name: "OATS Transportation",
      logo: "https://static.wixstatic.com/media/8c6f6f_1029920c8843489bbdee73d442c61658~mv2_d_2161_1243_s_2.png/v1/fill/w_266,h_154,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Oats%20Logo%202018.png",
      website: "https://www.oatstransit.org/",
      description: "Public transportation services"
    }
  ],
  "Employment": [
    {
      name: "Gateway Industries",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQEF3I2Gg-7t2Q/company-logo_200_200/company-logo_200_200/0/1630516895692/gateway_industries_of_eldon_logo?e=1749081600&v=beta&t=hFJX_T0i5uhPs1fFvSXe6nA3oweYM4yB_ZssdFEAM4g",
      website: "https://g.co/kgs/8sA6WvQ",
      description: "Employment opportunities and training"
    },
    {
      name: "LAI- Lake Area Industries",
      logo: "https://www.lakeareaindustries.org/images/LAI-Logo-Blue-and-Green.png",
      website: "https://www.lakeareaindustries.org/",
      description: "Providing meaningful employment to individuals with disabilities"
    },
    {
      name: "Missouri Mentor",
      logo: "https://www.mo-mentor.com/wp-content/uploads/sites/11/2015/01/cropped-5537_MO-Logo-final.jpg",
      website: "https://www.mo-mentor.com/",
      description: "Employment support services"
    }
  ]
};

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Flatten resources for search
  const allResources = Object.values(resourceCategories).flat();
  
  const filteredResources = allResources.filter(resource => {
    const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = !selectedCategory || 
      Object.entries(resourceCategories).find(([category, resources]) => 
        resources.includes(resource)
      )?.[0] === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const categories = Object.keys(resourceCategories);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Community resources"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Community Resources
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Discover local support services and programs in the Lake of the Ozarks area
          </p>
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full px-6 py-4 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg 
                className="absolute right-4 top-4 h-6 w-6 text-white/70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  !selectedCategory
                    ? 'bg-teal-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-teal-500 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Resources Grid */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-sm p-8">
            {filteredResources.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource, index) => (
                  <div 
                    key={index}
                    className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden p-6 border border-gray-100"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-sage-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 relative mr-4">
                          <Image
                            src={resource.logo}
                            alt={`${resource.name} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{resource.name}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{resource.description}</p>
                      <Link 
                        href={resource.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
                      >
                        Visit Website
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">No resources found</h3>
                <p className="mt-1 text-gray-500">Try adjusting your search or category filter</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}