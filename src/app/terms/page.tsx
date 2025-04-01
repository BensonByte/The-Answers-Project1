import React from "react";
import Image from "next/image";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
          <Image
            src="https://www.shutterstock.com/shutterstock/videos/1070056948/thumb/1.jpg"
            alt="Terms of Service"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using The ANSWERS Project website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.
            </p>

            <h2>2. Use of Services</h2>
            <p>
              You agree to use our services only for lawful purposes and in accordance with these Terms of Service. You agree not to:
            </p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Impersonate any person or entity</li>
              <li>Interfere with or disrupt our services</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use our services to harm others</li>
            </ul>

            <h2>3. Intellectual Property</h2>
            <p>
              All content on our website, including text, graphics, logos, and software, is the property of The ANSWERS Project and is protected by copyright laws.
            </p>

            <h2>4. Limitation of Liability</h2>
            <p>
              The ANSWERS Project shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>

            <h2>5. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on this page.
            </p>

            <h2>6. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p>
              Email: legal@answersproject.org<br />
              Phone: (555) 123-4567
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}