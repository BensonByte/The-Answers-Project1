import React from "react";
import Image from "next/image";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
          <Image
            src="https://www.shutterstock.com/shutterstock/videos/1070056948/thumb/1.jpg"
            alt="Privacy Policy"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            How we protect and handle your information
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg">
            <h2>Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including but not limited to:
            </p>
            <ul>
              <li>Name and contact information</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide and improve our services</li>
              <li>Communicate with you about our programs</li>
              <li>Send you updates and newsletters</li>
              <li>Respond to your requests and questions</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell or rent your personal information to third parties. We may share your information with:
            </p>
            <ul>
              <li>Service providers who assist in our operations</li>
              <li>Law enforcement when required by law</li>
              <li>Other organizations with your consent</li>
            </ul>

            <h2>Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of communications</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              Email: privacy@answersproject.org<br />
              Phone: (555) 123-4567
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}