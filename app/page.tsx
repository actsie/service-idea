'use client';

import { useState } from 'react';
import NavigationBar from '@/components/NavigationBar';
import VersionContent from '@/components/VersionContent';

export default function Home() {
  const [currentVersion, setCurrentVersion] = useState('v2');

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-gray-800 dark:text-neutral-100 relative isolate antialiased">
      {/* Gradient Blobs Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="h-[60vh] w-[60vh] rounded-full absolute -top-32 -left-32 opacity-90 blur-3xl" style={{ background: 'linear-gradient(to bottom right, #fdf6ef, #fcf3fa)' }}></div>
        <div className="h-[40vh] w-[50vh] rounded-full absolute -bottom-20 right-10 opacity-90 blur-3xl" style={{ background: 'linear-gradient(to top right, #f9f1fc, #fcf3fa)' }}></div>
        <div className="h-[35vh] w-[45vh] rounded-full absolute top-28 left-1/4 opacity-90 blur-3xl" style={{ background: 'linear-gradient(to bottom, #f4eefc, #fcf3fa, #fdf6ef)' }}></div>
      </div>

      {/* Navigation */}
      <NavigationBar
        currentVersion={currentVersion}
        onVersionChange={setCurrentVersion}
      />

      {/* Hero Section */}
      <main className="mx-auto px-8 relative z-20 max-w-7xl">
        <div className="lg:py-24 items-center py-16">
          <div className="space-y-12 max-w-4xl mx-auto text-center">
            <div className="space-y-6">
              <div className="items-center px-3 py-1 rounded-full bg-white/70 text-sm dark:bg-white/10 inline-flex gap-2 border border-zinc-300/70 dark:border-white/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  style={{ color: '#5E50A0' }}
                >
                  <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 22.5l-.394-1.933a2.25 2.25 0 00-1.423-1.423L12.75 18.75l1.933-.394a2.25 2.25 0 001.423-1.423L16.5 15l.394 1.933a2.25 2.25 0 001.423 1.423l1.933.394-1.933.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
                <span className="text-gray-700 dark:text-neutral-300">AI Automation</span>
              </div>
              <p className="text-4xl font-medium leading-tight lg:text-6xl">Stop hiring people to solve problems AI can handle in 10 minutes</p>
              <p className="text-lg text-gray-700/80 dark:text-neutral-300/80 max-w-2xl mx-auto">
                Your fractional AI Operations Lead. We find the bottlenecks, build the solutions, and train your team.
              </p>
            </div>
            <div className="sm:flex-row flex flex-col gap-4 justify-center">
              <button
                type="button"
                className="inline-flex border border-transparent transition-colors items-center justify-center rounded-md bg-neutral-900 px-8 py-3 font-medium text-neutral-100"
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#191046')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '')}
              >
                Book Free Call
              </button>
              <button type="button" className="inline-flex border border-zinc-300/70 dark:border-white/20 transition-colors hover:bg-black/5 dark:hover:bg-white/10 dark:bg-white/10 items-center justify-center rounded-md bg-white/70 px-8 py-3 font-medium">
                Learn More
              </button>
            </div>
            <div className="items-center pt-12 flex flex-wrap justify-center gap-12 lg:gap-16">
              <div>
                <div className="text-2xl font-semibold">$80K-$120K</div>
                <div className="text-sm text-gray-700/80 dark:text-neutral-300/80">Saved vs. Full-time</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">20-30 hrs</div>
                <div className="text-sm text-gray-700/80 dark:text-neutral-300/80">Saved Per Week</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">2 Weeks</div>
                <div className="text-sm text-gray-700/80 dark:text-neutral-300/80">Implementation</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Trust Bar */}
      <section className="bg-white dark:bg-neutral-950 pb-16 relative">
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .marquee-container:hover .marquee-content {
            animation-play-state: paused;
          }
          .marquee-content {
            animation: marquee 20s linear infinite;
          }
        `}</style>
        <div className="px-6 group relative m-auto max-w-6xl">
          <div className="items-center md:flex-row flex flex-col">
            <div className="md:max-w-44 md:border-r md:border-black/10 md:pr-6 inline dark:md:border-white/15">
              <p className="text-sm text-gray-600 text-end dark:text-neutral-400">
                Trusted by founders at
              </p>
            </div>
            <div className="py-6 md:w-[calc(100%-11rem)] relative overflow-hidden marquee-container">
              {/* Fade mask on left edge near separator */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-neutral-950 to-transparent z-10 pointer-events-none"></div>
              {/* Fade mask on right edge */}
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-neutral-950 to-transparent z-10 pointer-events-none"></div>

              <div className="flex gap-20 marquee-content">
                <div className="flex shrink-0 gap-20">
                  <div className="px-6 py-3 text-gray-700 dark:text-gray-300 font-semibold">TechCo</div>
                  <div className="px-6 py-3 text-gray-700 dark:text-gray-300 font-semibold">DataFlow</div>
                  <div className="px-6 py-3 text-gray-700 dark:text-gray-300 font-semibold">SaaS Inc</div>
                  <div className="px-6 py-3 text-gray-700 dark:text-gray-300 font-semibold">Startup Labs</div>
                </div>
                {/* Duplicate for seamless loop */}
                <div className="flex shrink-0 gap-20">
                  <div className="px-6 py-3 text-gray-700 dark:text-gray-300 font-semibold">TechCo</div>
                  <div className="px-6 py-3 text-gray-700 dark:text-gray-300 font-semibold">DataFlow</div>
                  <div className="px-6 py-3 text-gray-700 dark:text-gray-300 font-semibold">SaaS Inc</div>
                  <div className="px-6 py-3 text-gray-700 dark:text-gray-300 font-semibold">Startup Labs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <VersionContent version={currentVersion} />
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-center sm:text-left text-gray-600 dark:text-gray-400 text-sm">
              AI Work Automation - Making startups efficient with AI
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
