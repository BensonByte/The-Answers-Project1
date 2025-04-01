'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import CTA from '@/components/CTA';

export default function DonatePage() {
  const [formData, setFormData] = useState({
    amount: '',
    email: '',
    donationType: 'one-time'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const presetAmounts = [25, 50, 75, 100];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://api.shelterinastorm.org/api/v2/donation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err: any) {
      setError(err.message || 'Failed to process donation');
    } finally {
      setLoading(false);
    }
  };

  const handleAmountClick = (amount: number) => {
    setFormData(prev => ({
      ...prev,
      amount: amount.toString()
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Full-screen Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
          <Image
            src="https://www.shutterstock.com/shutterstock/videos/1070056948/thumb/1.jpg"
            alt="Support our mission"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="text-white text-sm font-semibold tracking-wider uppercase mb-4 block">
            Support Our Mission
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Make a Difference Today
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Your generosity helps us provide support and resources to those in need.
          </p>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center animate-bounce">
          <div className="text-white/90 text-sm">Scroll to donate</div>
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

      <div className="bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-2xl mx-auto px-4 py-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            {/* Donation Type Tabs */}
            <div className="grid grid-cols-2">
              <button
                onClick={() => setFormData(prev => ({ ...prev, donationType: 'one-time' }))}
                className={`py-4 text-center font-medium text-lg transition-colors ${
                  formData.donationType === 'one-time'
                    ? 'bg-teal-600 text-white'
                    : 'bg-teal-50 text-teal-700 hover:bg-teal-100'
                }`}
              >
                One-time
              </button>
              <button
                onClick={() => setFormData(prev => ({ ...prev, donationType: 'monthly' }))}
                className={`py-4 text-center font-medium text-lg transition-colors ${
                  formData.donationType === 'monthly'
                    ? 'bg-teal-600 text-white'
                    : 'bg-teal-50 text-teal-700 hover:bg-teal-100'
                }`}
              >
                Monthly
              </button>
            </div>

            <div className="px-8 py-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Amount Section */}
                <div>
                  <label className="block text-base font-medium text-gray-900 mb-3">
                    Enter Amount ({formData.donationType === 'one-time' ? 'One-time donation' : 'Monthly donation'})
                  </label>
                  <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-black text-lg font-medium">$</span>
                    </div>
                    <input
                      type="number"
                      name="amount"
                      required
                      min="5"
                      step="0.01"
                      value={formData.amount}
                      onChange={handleChange}
                      className="block w-full pl-7 pr-12 py-4 border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500 text-xl font-medium shadow-sm text-black placeholder-gray-500"
                      placeholder="Enter amount"
                    />
                  </div>
                  
                  {/* Preset Amounts */}
                  <div className="grid grid-cols-4 gap-3">
                    {presetAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => handleAmountClick(amount)}
                        className={`py-4 px-4 rounded-md border text-lg font-medium transition-all ${
                          formData.amount === amount.toString()
                            ? 'border-teal-600 bg-teal-50 text-teal-700 shadow-sm'
                            : 'border-teal-100 bg-white text-teal-700 hover:bg-teal-50 hover:border-teal-300'
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Email Section */}
                <div>
                  <label className="block text-base font-medium text-gray-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full py-4 px-4 border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500 text-lg font-medium shadow-sm text-black placeholder-gray-500"
                    placeholder="Enter your email for receipt"
                  />
                </div>

                {/* Payment Information Notice */}
                <div className="bg-gradient-to-br from-teal-50 to-sage-50 rounded-lg p-4 border border-teal-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-base text-teal-700">
                      You will be redirected to our secure payment processor to complete your donation.
                    </p>
                  </div>
                </div>

                {error && (
                  <div className="rounded-md bg-red-50 p-4 border border-red-100">
                    <p className="text-base font-medium text-red-800">{error}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 px-4 rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 font-medium text-lg transition-colors shadow-lg hover:shadow-xl ${
                    loading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? 'Processing...' : 'Continue to Payment'}
                </button>

                {/* Tax Deductible Notice */}
                <div className="flex items-start space-x-3 bg-gradient-to-br from-teal-50 to-sage-50 p-4 rounded-lg border border-teal-100">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg className="h-5 w-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-teal-900 text-base">Tax-Deductible Donation</p>
                    <p className="mt-1 text-base text-teal-700">
                      Your generous contribution is tax-deductible. A detailed receipt will be emailed to you for your tax records.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTA
        title="Join Others in Making a Difference"
        subtitle="Community Impact"
        description="Your support helps us continue providing essential resources and support to those in need in our community."
        features={[
          "100% Tax Deductible",
          "Secure Donations",
          "Immediate Impact"
        ]}
        primaryButton={{
          text: "Make a Donation",
          href: "#donate"
        }}
        secondaryButton={{
          text: "Learn More",
          href: "/about"
        }}
        backgroundImage="https://www.shutterstock.com/shutterstock/videos/1070056948/thumb/1.jpg"
        testimonials={{
          images: [
            "/review1.jpg",
            "/review2.jpg",
            "/review3.jpg"
          ],
          text: "Join our community of donors",
          subtext: "who are making a difference"
        }}
        rating={{
          stars: 5,
          text: "Trusted by the Community"
        }}
      />
    </div>
  );
} 