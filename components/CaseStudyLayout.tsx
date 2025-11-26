'use client';

import { useState, useEffect, ReactNode } from 'react';
import Link from 'next/link';
import Lottie from 'lottie-react';
import chatWithUsAnimation from '@/public/chat-with-us.json';
import CaseStudyBreadcrumb from './CaseStudyBreadcrumb';

interface CaseStudyLayoutProps {
  studyName: string;
  children: ReactNode;
}

export default function CaseStudyLayout({ studyName, children }: CaseStudyLayoutProps) {
  const [showStickyNav, setShowStickyNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyNav(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCalendly = () => {
    document.getElementById('calendly-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-gray-800 dark:text-neutral-100">
      {/* Sticky Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-sm transition-transform duration-300 ${
          showStickyNav ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <CaseStudyBreadcrumb currentStudy={studyName} />
            <button
              onClick={scrollToCalendly}
              className="px-4 py-2 bg-neutral-900 text-white hover:bg-white hover:text-neutral-900 hover:border hover:border-neutral-900 text-sm font-medium rounded-lg transition-colors border border-transparent"
            >
              Book Free Call
            </button>
          </div>
        </div>
      </nav>

      {/* Breadcrumb Navigation */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <CaseStudyBreadcrumb currentStudy={studyName} />
      </div>

      {/* Main Content */}
      {children}

      {/* CTA Section */}
      <section id="calendly-section" className="py-12 px-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - CTA Text */}
            <div className="space-y-6 text-center lg:text-left px-8">
              <div className="flex flex-col items-center gap-4">
                <div className="w-64 lg:w-96">
                  <Lottie
                    animationData={chatWithUsAnimation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
                <h3 className="text-3xl font-medium text-gray-900 dark:text-gray-100 leading-tight">
                  Ready to{' '}
                  <span
                    className="px-1 py-1 font-bold"
                    style={{
                      backgroundImage: 'linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
                    }}
                  >automate</span>?
                </h3>
              </div>
              <p className="text-lg text-gray-700/80 dark:text-neutral-300/80 text-center">
                Book a free 15-minute consultation to discuss your automation needs and see how much time and money you could save.
              </p>

              {/* Risk-Free Start Card */}
              <div className="flex justify-center pt-4">
                <div
                  className="relative flex rounded-lg bg-white"
                  style={{
                    width: '100%',
                    maxWidth: '350px',
                    height: '80px',
                    overflow: 'hidden',
                    gap: '1rem'
                  }}
                >
                  {/* Perforated Edge SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={80} viewBox="0 0 64 150" fill="black" style={{ flexShrink: 0 }}>
                    <path d="M44 138V136.967H20V138H44Z" />
                    <path d="M44 13.0328V12H20V13.0328H44Z" />
                    <path d="M44 14.0656V13.5492H20V14.0656H44Z" />
                    <path d="M44 15.6148V15.0984H20V15.6148H44Z" />
                    <path d="M44 18.1967V17.6803H20V18.1967H44Z" />
                    <path d="M44 20.2623V19.2295H20V20.2623H44Z" />
                    <path d="M44 22.8443V22.3279H20V22.8443H44Z" />
                    <path d="M44 23.877V23.3607H20V23.877H44Z" />
                    <path d="M44 26.9754V24.9098H20V26.9754H44Z" />
                    <path d="M44 28.0082V27.4918H20V28.0082H44Z" />
                    <path d="M44 29.5574V29.041H20V29.5574H44Z" />
                    <path d="M44 32.6557V30.5902H20V32.6557H44Z" />
                    <path d="M44 33.6885V33.1721H20V33.6885H44Z" />
                    <path d="M44 35.2376V34.7213H20V35.2376H44Z" />
                    <path d="M44 36.2705V35.7541H20V36.2705H44Z" />
                    <path d="M44 39.3689V37.3033H20V39.3689H44Z" />
                    <path d="M44 40.918V40.4015H20V40.918H44Z" />
                    <path d="M44 43.5001V41.4345H20V43.5001H44Z" />
                    <path d="M44 45.0492V44.5327H20V45.0492H44Z" />
                    <path d="M44 47.631V46.0819H20V47.631H44Z" />
                    <path d="M44 49.1804V48.664H20V49.1804H44Z" />
                    <path d="M44 51.2458V50.2131H20V51.2458H44Z" />
                    <path d="M44 52.2787V51.7622H20V52.2787H44Z" />
                    <path d="M44 54.3443V52.7952H20V54.3443H44Z" />
                    <path d="M44 56.4099V55.377H20V56.4099H44Z" />
                    <path d="M44 57.959V57.4426H20V57.959H44Z" />
                    <path d="M44 60.0247V58.4753H20V60.0247H44Z" />
                    <path d="M44 62.09V61.0573H20V62.09H44Z" />
                    <path d="M44 63.6394V63.123H20V63.6394H44Z" />
                    <path d="M44 66.7377V64.6721H20V66.7377H44Z" />
                    <path d="M44 68.2868V67.7704H20V68.2868H44Z" />
                    <path d="M44 69.3198V68.8033H20V69.3198H44Z" />
                    <path d="M44 72.4181V71.3851H20V72.4181H44Z" />
                    <path d="M44 73.4508V72.9345H20V73.4508H44Z" />
                    <path d="M44 76.5493V74.4837H20V76.5493H44Z" />
                    <path d="M44 77.5819V77.0655H20V77.5819H44Z" />
                    <path d="M44 79.1311V78.6146H20V79.1311H44Z" />
                    <path d="M44 80.6802V80.164H20V80.6802H44Z" />
                    <path d="M44 82.2294V81.1967H20V82.2294H44Z" />
                    <path d="M44 83.7788V83.2623H20V83.7788H44Z" />
                    <path d="M44 86.3606V85.8441H20V86.3606H44Z" />
                    <path d="M44 87.9097V87.3935H20V87.9097H44Z" />
                    <path d="M44 91.0083V88.9427H20V91.0083H44Z" />
                    <path d="M44 92.041V91.5245H20V92.041H44Z" />
                    <path d="M44 94.623V92.5574H20V94.623H44Z" />
                    <path d="M44 96.1722V95.6557H20V96.1722H44Z" />
                    <path d="M44 97.7213V97.2048H20V97.7213H44Z" />
                    <path d="M44 99.2704V98.2378H20V99.2704H44Z" />
                    <path d="M44 100.82V100.303H20V100.82H44Z" />
                    <path d="M44 103.402V102.885H20V103.402H44Z" />
                    <path d="M44 105.467V104.434H20V105.467H44Z" />
                    <path d="M44 108.049V106.5H20V108.049H44Z" />
                    <path d="M44 109.082V108.566H20V109.082H44Z" />
                    <path d="M44 112.18V111.148H20V112.18H44Z" />
                    <path d="M44 113.213V112.697H20V113.213H44Z" />
                    <path d="M44 114.762V114.246H20V114.762H44Z" />
                    <path d="M44 118.377V116.311H20V118.377H44Z" />
                    <path d="M44 119.41V118.893H20V119.41H44Z" />
                    <path d="M44 120.442V119.926H20V120.442H44Z" />
                    <path d="M44 122.508V120.959H20V122.508H44Z" />
                    <path d="M44 124.574V123.541H20V124.574H44Z" />
                    <path d="M44 127.672V125.607H20V127.672H44Z" />
                    <path d="M44 128.705V128.188H20V128.705H44Z" />
                    <path d="M44 130.254V129.738H20V130.254H44Z" />
                    <path d="M44 132.32V131.287H20V132.32H44Z" />
                    <path d="M44 135.418V133.869H20V135.418H44Z" />
                    <path d="M44 136.451V135.934H20V136.451H44Z" />
                  </svg>

                  {/* Separator with dashed line and circles */}
                  <div
                    className="absolute flex items-center justify-center"
                    style={{
                      top: 0,
                      left: '32px',
                      width: '16px',
                      height: '100%',
                      zIndex: 10
                    }}
                  >
                    <div
                      className="relative flex"
                      style={{
                        height: '100%',
                        borderLeft: '2px dashed #f3f4f6'
                      }}
                    >
                      {/* Top circle */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '-8px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '16px',
                          height: '16px',
                          borderRadius: '16px',
                          backgroundColor: '#f3f4f6'
                        }}
                      ></div>
                      {/* Bottom circle */}
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '-8px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '16px',
                          height: '16px',
                          borderRadius: '16px',
                          backgroundColor: '#f3f4f6'
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex items-center gap-3 pr-4" style={{ paddingLeft: '16px' }}>
                    {/* Icon */}
                    <div
                      className="flex justify-center items-center rounded-full flex-shrink-0"
                      style={{
                        width: '35px',
                        height: '35px',
                        backgroundColor: '#5E50A0'
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        style={{
                          width: '17px',
                          height: '17px',
                          color: '#ffffff'
                        }}
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </div>

                    {/* Text */}
                    <div className="flex flex-col justify-center text-left">
                      <p className="m-0 font-bold text-base" style={{ color: '#5E50A0', lineHeight: '1.2' }}>
                        Risk-Free Start
                      </p>
                      <p className="m-0 text-xs" style={{ color: '#555', lineHeight: '1.3' }}>
                        Free consultation, no commitment required
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Calendly Embed */}
            <div className="px-8">
              <div className="rounded-2xl overflow-hidden bg-white dark:bg-gray-800" style={{ height: '900px' }}>
                <iframe
                  src="https://calendly.com/stacydonnaj/15min?embed_domain=localhost&embed_type=Inline&hide_gdpr_banner=1"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Schedule a consultation"
                  style={{ border: 0 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 mt-16">
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
