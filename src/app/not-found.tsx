import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center">
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

      <div className="relative z-10 max-w-lg w-full text-center space-y-8 px-4">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-white">404</h1>
          <h2 className="text-2xl font-medium text-white/90">Page Not Found</h2>
          <p className="text-white/80">
            We couldn't find the page you're looking for. Let's get you back on track.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 transition-colors"
          >
            Return Home
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}