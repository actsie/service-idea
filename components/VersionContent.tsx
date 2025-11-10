'use client';

import React from 'react';
import Link from 'next/link';
import Lottie from 'lottie-react';
import workLifeBalanceAnimation from '@/public/Work and life balance.json';
import chatWithUsAnimation from '@/public/chat-with-us.json';

interface VersionContentProps {
  version: string;
}

interface HeroContent {
  title: string;
  subtitle: string;
  cta: string;
}

interface ProblemContent {
  title: string;
  points: string[];
}

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesContent {
  title: string;
  items: FeatureItem[];
}

interface StatItem {
  value: string;
  label: string;
}

interface StatsContent {
  title: string;
  items: StatItem[];
}

interface FinalCtaContent {
  title: string;
  cta: string;
}

interface ContentData {
  hero: HeroContent;
  problem?: ProblemContent;
  features: FeaturesContent;
  stats?: StatsContent;
  examples?: FeaturesContent;
  finalCta: FinalCtaContent;
}

const highlightSavedText = (description: string) => {
  const regex = /(\(saved [^)]+\))/;
  const parts = description.split(regex);

  return parts.map((part, index) => {
    if (part.match(regex)) {
      return (
        <React.Fragment key={index}>
          <br />
          <span className="saved-highlight px-2 py-0.5 font-medium text-gray-300/80 transition-all duration-200">
            {part}
          </span>
        </React.Fragment>
      );
    }
    return <span key={index}>{part}</span>;
  });
};

const getIconSvg = (iconType: string) => {
  const icons: Record<string, React.ReactElement> = {
    mail: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x={2} y={4} width={20} height={16} rx={2} />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    users: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx={9} cy={7} r={4} />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    document: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1={16} y1={13} x2={8} y2={13} />
        <line x1={16} y1={17} x2={8} y2={17} />
        <line x1={10} y1={9} x2={8} y2={9} />
      </svg>
    ),
    chat: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    rocket: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  };
  return icons[iconType] || icons.mail;
};

export default function VersionContent({ version }: VersionContentProps) {
  const content = getContentForVersion(version);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div
          className="rounded-2xl p-12 -mx-4"
          style={{
            backgroundImage: version === 'v2'
              ? 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 1) 100%), linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
              : 'none'
          }}
        >
          <h2 className="text-4xl font-medium leading-tight lg:text-5xl text-gray-900 dark:text-gray-100">
            {content.hero.title}
          </h2>
          <p className="text-lg text-gray-700/80 dark:text-neutral-300/80 max-w-3xl mx-auto mt-6 whitespace-pre-line">
            {content.hero.subtitle}
          </p>
          <div className="flex flex-col items-center gap-2 mt-10">
            <button
              className="inline-flex border border-transparent transition-colors items-center justify-center rounded-md bg-neutral-900 px-8 py-3 font-medium text-neutral-100"
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#5E50A0')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '')}
            >
              {content.hero.cta}
            </button>
          </div>
        </div>
      </section>

      {/* Problem Section (if exists) */}
      {content.problem && (
        <section className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-medium text-gray-900 dark:text-gray-100 mb-6 leading-tight">
            {content.problem.title}
          </h3>
          <ul className="space-y-3">
            {content.problem.points.map((point, index) => (
              <li
                key={index}
                className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <span className="text-primary-500 mt-1">•</span>
                <span className="text-gray-700/80 dark:text-neutral-300/80">{point}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Features/Examples Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-12 lg:px-0">
          <div className="mb-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-300/70 bg-white/70 px-3 py-1 text-sm dark:border-white/20 dark:bg-white/10">
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
            <p className="text-4xl leading-tight font-medium text-gray-900 lg:text-5xl dark:text-neutral-100">
              {content.features.title}
            </p>
          </div>
          <div className="relative overflow-hidden rounded-2xl p-12" style={{
            backgroundImage: 'linear-gradient(to bottom, #fff 0%, #fff 40%, rgba(255, 255, 255, 0) 100%), linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
          }}>
            {/* Grid lines overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(90deg, #f8f8f8 1px, transparent 1px)',
                backgroundSize: '50px 100%',
                maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 70%)',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 70%)'
              }}
            />
            <div className="relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column - Features List */}
                <div className="space-y-12">
                  {content.features.items.map((item, index) => {
                    const isSalesItem = index === 0 && version === 'v2';
                    const ItemWrapper = isSalesItem ? 'a' : 'div';

                    return (
                      <ItemWrapper
                        key={index}
                        href={isSalesItem ? '/case-studies/sales-outreach' : undefined}
                        className={`relative block group ${isSalesItem ? 'cursor-pointer' : ''}`}
                      >
                        <div>
                          <h4 className="mb-2 text-xl font-medium text-gray-900">
                            {item.title}
                          </h4>
                          <p className="text-lg text-gray-700/80">
                            {item.description}
                            {isSalesItem && (
                              <span className="inline-flex items-center gap-1 text-xs text-gray-600 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                                <span>Learn more</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="w-3 h-3 transform transition-transform duration-300 group-hover:translate-x-1"
                                >
                                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                </svg>
                              </span>
                            )}
                          </p>
                        </div>
                      </ItemWrapper>
                    );
                  })}
                </div>

                {/* Right Column - Lottie Animation */}
                <div className="flex items-end justify-center">
                  <div className="w-64 lg:w-80">
                    <Lottie
                      animationData={workLifeBalanceAnimation}
                      loop={true}
                      autoplay={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section (if exists) */}
      {content.stats && (
        <section className="py-16 md:py-20">
          <div className="mb-16 text-center">
            <h3 className="mb-6 text-4xl font-medium text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-100 leading-tight">
              {content.stats.title}
            </h3>
          </div>
          <div className="w-full">
            <div
              className="rounded-2xl overflow-hidden p-12"
              style={{
                backgroundImage: 'linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
              }}
            >
              <div className="grid grid-cols-1 gap-16 text-center text-gray-800 md:grid-cols-2 lg:grid-cols-4 dark:text-gray-100">
                {content.stats.items.map((stat, index) => (
                  <div key={index}>
                    <div className="mb-4 flex items-center justify-center text-3xl font-medium lg:text-4xl">
                      {stat.value}
                    </div>
                    <div className="flex items-center justify-center text-sm text-gray-700/80 dark:text-neutral-300/80">
                      <p>{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Examples Section (if exists) */}
      {content.examples && (
        <section className="relative">
          <style dangerouslySetInnerHTML={{__html: `
            .group:hover .saved-highlight {
              background-image: linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc) !important;
              color: #111827 !important;
            }
          `}} />
          {/* Circuit Board Background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 19px,
                  rgba(75, 85, 99, 0.03) 19px,
                  rgba(75, 85, 99, 0.03) 20px,
                  transparent 20px,
                  transparent 39px,
                  rgba(75, 85, 99, 0.03) 39px,
                  rgba(75, 85, 99, 0.03) 40px
                ),
                repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 19px,
                  rgba(75, 85, 99, 0.03) 19px,
                  rgba(75, 85, 99, 0.03) 20px,
                  transparent 20px,
                  transparent 39px,
                  rgba(75, 85, 99, 0.03) 39px,
                  rgba(75, 85, 99, 0.03) 40px
                ),
                radial-gradient(
                  circle at 20px 20px,
                  rgba(55, 65, 81, 0.05) 2px,
                  transparent 2px
                ),
                radial-gradient(
                  circle at 40px 40px,
                  rgba(55, 65, 81, 0.05) 2px,
                  transparent 2px
                )
              `,
              backgroundSize: '40px 40px, 40px 40px, 40px 40px, 40px 40px'
            }}
          />

          <h3 className="text-3xl font-medium text-gray-900 dark:text-gray-100 mb-12 text-center leading-tight relative z-10">
            5 Example <span
              className="px-3 py-1 font-bold"
              style={{
                backgroundImage: 'linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
              }}
            >Automations</span> We've Built
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {content.examples.items.map((item, index) => {
              const isSalesOutreach = index === 0;

              const CardContent = (
                <div className="group cursor-pointer transform transition-all duration-200 hover:scale-105 hover:-rotate-1">
                  <div className="text-white rounded-3xl border border-white/10 bg-gradient-to-br from-[#010101] via-[#090909] to-[#010101] duration-200 z-10 relative backdrop-blur-xl hover:border-white/25 overflow-hidden w-full">
                  {/* Animated Background Effects */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 opacity-40 group-hover:opacity-60 transition-opacity duration-200" />

                    <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-white/10 to-transparent blur-3xl opacity-0 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-300 group-hover:animate-bounce" style={{ animationDelay: '0.5s' }} />

                    <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-white/5 blur-xl group-hover:animate-ping" />
                    <div className="absolute bottom-16 right-16 w-12 h-12 rounded-full bg-white/5 blur-lg group-hover:animate-ping" style={{ animationDelay: '1s' }} />

                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-500" />
                  </div>

                  <div className="p-8 relative z-10">
                    <div className="flex flex-col items-center text-center">
                      {/* Icon Circle */}
                      <div className="relative mb-6">
                        <div className="absolute inset-0 rounded-full border-2 border-white/20 group-hover:animate-ping" />
                        <div className="absolute inset-0 rounded-full border border-white/10 group-hover:animate-pulse" style={{ animationDelay: '0.5s' }} />

                        <div className="p-6 rounded-full backdrop-blur-lg border border-white/20 bg-gradient-to-br from-black/80 to-black/60 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                          <div className="transform group-hover:rotate-180 transition-transform duration-300 w-10 h-10 text-white">
                            {getIconSvg(item.icon)}
                          </div>
                        </div>
                      </div>

                      {/* Title */}
                      <div className="mb-4 transform group-hover:scale-105 transition-transform duration-200">
                        <p className="text-xl font-medium leading-tight text-white">
                          {item.title}
                        </p>
                      </div>

                      {/* Description */}
                      <div className="space-y-1 max-w-sm">
                        <p className="text-sm leading-relaxed text-gray-300/80 transform group-hover:text-gray-200/90 transition-colors duration-200">
                          {highlightSavedText(item.description)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-white/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
              </div>
              );

              return isSalesOutreach ? (
                <Link key={index} href="/case-studies/sales-outreach">
                  {CardContent}
                </Link>
              ) : (
                <div key={index}>
                  {CardContent}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl">
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
                {content.finalCta.title === 'See how much you could save' ? (
                  <>
                    See how much you could{' '}
                    <span
                      className="px-1 py-1 font-bold"
                      style={{
                        backgroundImage: 'linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
                      }}
                    >save</span>
                  </>
                ) : (
                  content.finalCta.title
                )}
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
                    />
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
                    />
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
      </section>
    </div>
  );
}

function getContentForVersion(version: string): ContentData {
  const contents: Record<string, ContentData> = {
    v1: {
      hero: {
        title: 'Your Chief AI Automation Officer',
        subtitle: 'Save 20+ hours per week without hiring full-time or pulling engineers off product.',
        cta: 'Find My 20 Hours - Free Analysis →',
      },
      problem: {
        title: 'The Problem You\'re Facing',
        points: [
          'Your engineers are buried in product work',
          'You don\'t have time to experiment with Zapier or Claude yourself',
          'Hiring a full-time AI specialist isn\'t in the budget',
          'Every day you\'re firefighting instead of optimizing',
        ],
      },
      features: {
        title: 'Real Examples',
        items: [
          {
            icon: '📧',
            title: 'Sales',
            description: 'Auto-generate personalized outreach sequences that convert 3x better than templates',
          },
          {
            icon: '👥',
            title: 'Recruiting',
            description: 'Screen 100+ applications in 10 minutes with custom scoring prompts',
          },
          {
            icon: '📱',
            title: 'Marketing',
            description: 'Turn one blog post into 15 pieces of repurposed content in 5 minutes',
          },
          {
            icon: '⚙️',
            title: 'Operations',
            description: 'Automate expense approvals, invoice processing, and data entry',
          },
          {
            icon: '🚀',
            title: 'Product',
            description: 'Generate PRDs, user stories, and QA test cases from product briefs',
          },
        ],
      },
      finalCta: {
        title: 'Ready to save 20+ hours per week?',
        cta: 'Book Free Consultation Call',
      },
    },
    v2: {
      hero: {
        title: '"AI automation" sounds great until you actually try to build it yourself',
        subtitle: 'You\'ve got better things to do than debug Zapier or n8n workflows.\nWe handle the implementation.',
        cta: 'Calculate My Savings - Free Call →',
      },
      stats: {
        title: 'By The Numbers',
        items: [
          { value: '$80K-$120K', label: 'Annual savings vs. full-time hire' },
          { value: '20-30 hrs', label: 'Reclaimed per week across team' },
          { value: '2 weeks', label: 'Turnaround on custom tools' },
          { value: 'Zero', label: 'Engineering time required' },
        ],
      },
      features: {
        title: 'Where We Save Time',
        items: [
          {
            icon: 'mail',
            title: 'GTM Operations Console',
            description: 'Unified prospect & follow-up automation with 90% time reduction',
          },
          {
            icon: 'users',
            title: 'Recruiting: 8hrs → 30min',
            description: 'AI pre-screening cuts review time by 93%',
          },
          {
            icon: 'document',
            title: 'Marketing: 10hrs → 2hrs',
            description: 'Content multiplication across all platforms',
          },
          {
            icon: 'chat',
            title: 'Operations: 15hrs → 3hrs',
            description: 'Full automation of repetitive tasks',
          },
          {
            icon: 'chat',
            title: 'Support: 20hrs → 4hrs',
            description: 'AI triage and response generation',
          },
        ],
      },
      examples: {
        title: '5 Example Automations We\'ve Built',
        items: [
          {
            icon: 'mail',
            title: 'GTM Operations Console',
            description: 'Unified prospect & follow-up management with 90% time reduction on follow-ups',
          },
          {
            icon: 'users',
            title: 'Recruiting pre-screen',
            description: 'Ranks 100+ applications in 15 minutes (saved 12 hrs per hire)',
          },
          {
            icon: 'document',
            title: 'Content multiplication',
            description: 'One blog post → 15 pieces in 10 minutes (saved 8 hrs/week)',
          },
          {
            icon: 'chat',
            title: 'Support triage',
            description: 'AI categorizes and drafts responses (saved 15 hrs/week)',
          },
          {
            icon: 'rocket',
            title: 'Product spec automation',
            description: 'Ideas → complete PRDs with QA plans (saved 5 hrs per feature)',
          },
        ],
      },
      finalCta: {
        title: 'See how much you could save',
        cta: 'Book Free Consultation',
      },
    },
    v3: {
      hero: {
        title: 'You\'re too busy fighting fires to automate the fire extinguisher',
        subtitle: 'We get it. Every time you think "there\'s got to be a better way," you\'re already late to three other things.',
        cta: 'Identify My Biggest Time Drain - Free →',
      },
      problem: {
        title: 'The Daily Reality',
        points: [
          'Follow up with 40 leads from last week\'s campaign',
          'Screen applications for your first marketing hire',
          'Prepare the board deck',
          'Review support tickets',
          'Actually build your product',
        ],
      },
      features: {
        title: 'What This Looks Like In Practice',
        items: [
          {
            icon: '📧',
            title: 'Sales is drowning',
            description: 'Custom prompt system maintains brand voice and personalization in 1/10th the time',
          },
          {
            icon: '👥',
            title: 'Recruiting bottleneck',
            description: 'Ranks 150 candidates, highlights red flags, generates questions—in 20 minutes',
          },
          {
            icon: '📱',
            title: 'Marketing is slow',
            description: 'Content multiplication: one input, 15 platform-specific outputs in 10 minutes',
          },
          {
            icon: '⚙️',
            title: 'Operations is manual',
            description: 'Automate data entry, expense reports, invoice matching',
          },
          {
            icon: '🚀',
            title: 'Product is bogged down',
            description: 'Complete PRDs with acceptance criteria and QA plans—60% faster',
          },
        ],
      },
      finalCta: {
        title: 'Let\'s Find Your Biggest Time Drain',
        cta: 'Free Consultation',
      },
    },
    v4: {
      hero: {
        title: '"AI automation" sounds great until you actually try to build it yourself',
        subtitle: 'You\'ve got better things to do than debug Zapier or n8n workflows.\nWe handle the implementation.',
        cta: 'Get Honest Assessment (No Pitch) →',
      },
      problem: {
        title: 'You\'ve Probably Already Tried...',
        points: [
          '"We should automate our outreach" → Opens Zapier → Closes Zapier',
          '"Let\'s use AI for recruiting" → Spends 3 hours → Generic results → Back to manual',
          '"ChatGPT could do this" → Results are 70% good → Still needs manual QA',
          '"An engineer could build this" → Engineer is shipping features instead',
        ],
      },
      features: {
        title: 'Real Results From Teams Like Yours',
        items: [
          {
            icon: '💼',
            title: 'B2B SaaS (Series A, 8 people)',
            description: 'Sales outreach: 12 hrs/week → 1.5 hrs/week. Cost: Fraction of sales ops hire',
          },
          {
            icon: '🛍️',
            title: 'E-commerce (Seed, 5 people)',
            description: 'Support automation: 20 hrs/week → 4 hrs/week. Cost: Less than one VA',
          },
          {
            icon: '👔',
            title: 'HR Tech (Pre-seed, 4 people)',
            description: 'Recruiting workflow: 15 hrs/week → 3 hrs/week. Saved $95K/year vs. recruiter',
          },
        ],
      },
      finalCta: {
        title: 'No Sales Pitch, Just Real Talk',
        cta: 'Get Started',
      },
    },
    v5: {
      hero: {
        title: 'AI automation without the headcount',
        subtitle: 'We identify bottlenecks. Build custom solutions. Train your team. Engineers never leave product work.',
        cta: 'Book Free Workflow Audit →',
      },
      stats: {
        title: 'The Offer',
        items: [
          { value: '30 min', label: 'Free consultation to find 3 workflows costing 10+ hrs/week' },
          { value: '2-4 weeks', label: 'Implementation with custom tools built and deployed' },
          { value: 'Included', label: 'Team training - your team runs it, we maintain it' },
        ],
      },
      features: {
        title: '5 Example Automations We\'ve Built',
        items: [
          {
            icon: 'mail',
            title: 'GTM Operations Console',
            description: 'Unified prospect & follow-up management with 90% time reduction on follow-ups',
          },
          {
            icon: 'users',
            title: 'Recruiting pre-screen',
            description: 'Ranks 100+ applications in 15 minutes (saved 12 hrs per hire)',
          },
          {
            icon: 'document',
            title: 'Content multiplication',
            description: 'One blog post → 15 pieces in 10 minutes (saved 8 hrs/week)',
          },
          {
            icon: 'chat',
            title: 'Support triage',
            description: 'AI categorizes and drafts responses (saved 15 hrs/week)',
          },
          {
            icon: 'rocket',
            title: 'Product spec automation',
            description: 'Ideas → complete PRDs with QA plans (saved 5 hrs per feature)',
          },
        ],
      },
      finalCta: {
        title: 'Start Saving Time Today',
        cta: 'Free Consultation Call',
      },
    },
  };

  return contents[version] || contents.v1;
}
