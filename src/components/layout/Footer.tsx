import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface FooterLink {
  href: string;
  text: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  sections?: FooterSection[];
}

const defaultFooterSections: FooterSection[] = [
  {
    title: "About",
    links: [
      { href: "/about", text: "Our Mission" },
      { href: "/team", text: "Our Team" },
      { href: "/contact", text: "Contact Us" }
    ]
  },
  {
    title: "Resources", 
    links: [
      { href: "/blog", text: "Blog" },
      { href: "/support", text: "Support" }
    ]
  }
];

export default function Footer({ sections = defaultFooterSections }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand & Mission */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="relative w-10 h-10">
                <Image
                  src="/brand_logo.png"
                  alt="The Answers Project Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl font-bold text-gray-900">The Answers Project</span>
            </Link>
            <p className="text-gray-600 leading-relaxed">
              Providing essential resources and support to those in need in our Lake Ozark community.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-span-1">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Navigation</h3>
                <div className="flex flex-col space-y-3">
                  <Link href="/" className="text-base text-gray-600 hover:text-teal-700 transition-colors">Home</Link>
                  <Link href="/about" className="text-base text-gray-600 hover:text-teal-700 transition-colors">About</Link>
                  <Link href="/resources" className="text-base text-gray-600 hover:text-teal-700 transition-colors">Resources</Link>
                  <Link href="/contact" className="text-base text-gray-600 hover:text-teal-700 transition-colors">Contact</Link>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Support</h3>
                <div className="flex flex-col space-y-3">
                  <Link href="/donate" className="text-base text-teal-700 hover:text-teal-800 transition-colors font-medium">
                    Make a Donation
                  </Link>
                  <Link href="/contact" className="text-base text-gray-600 hover:text-teal-700 transition-colors">Volunteer</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & CTA */}
          <div className="col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Get Involved</h3>
              <p className="text-gray-600 mb-6">Join us in making a difference in our community.</p>
              <Link 
                href="/donate"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium"
              >
                Support Our Mission
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-gray-200">
          <div className="flex flex-col items-center justify-center space-y-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="relative w-8 h-8">
                <Image
                  src="/brand_logo.png"
                  alt="The Answers Project Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-sm text-gray-500">
                © {currentYear} The ANSWERS Project. All rights reserved.
              </p>
              <p className="text-sm text-gray-500 mt-1 font-['Gochi_Hand']">
              <a href="https://bentrimmer.com/" className="hover:text-teal-600 transition-colors">Designed & hosted with ❤️ by <b> Ben Trimmer</b></a>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 mt-4">
              <a href="#" className="p-2 rounded-full bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-all duration-200">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-all duration-200">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-all duration-200">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.09 1.064.077 1.791.232 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.233.636.388 1.363.465 2.427.048 1.067.09 1.407.09 4.123v.08c0 2.643-.012 2.987-.09 4.043-.077 1.064-.232 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.233-1.363.388-2.427.465-1.067.048-1.407.09-4.123.09h-.08c-2.643 0-2.987-.012-4.043-.09-1.064-.077-1.791-.232-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.233-.636-.388-1.363-.465-2.427-.047-1.024-.09-1.379-.09-3.808v-.63c0-2.43.013-2.784.09-3.808.077-1.064.232-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.233 1.363-.388 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-all duration-200">
                <span className="sr-only">RSS</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}