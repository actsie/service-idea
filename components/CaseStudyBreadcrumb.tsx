'use client';

import { useState } from 'react';
import Link from 'next/link';

interface CaseStudyBreadcrumbProps {
  currentStudy: string;
}

const caseStudies = [
  {
    name: 'Sales Outreach',
    href: '/case-studies/sales-outreach',
    description: 'AI-powered GTM operations'
  },
  {
    name: 'Support Autopilot',
    href: '/case-studies/support-triage',
    description: 'Customer support automation'
  }
];

export default function CaseStudyBreadcrumb({ currentStudy }: CaseStudyBreadcrumbProps) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
      <Link href="/" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
        Home
      </Link>
      <span>/</span>
      <div
        className="relative"
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
      >
        <Link
          href="/case-studies"
          className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center gap-1"
        >
          Case Studies
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`w-4 h-4 transition-transform duration-200 ${showMenu ? 'rotate-180' : ''}`}
          >
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </Link>
        <div className={`absolute top-full left-0 mt-1 w-64 bg-white dark:bg-neutral-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50 transition-all duration-200 origin-top ${
          showMenu ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-0 -translate-y-2 pointer-events-none'
        }`}>
          {caseStudies.map((study) => (
            <Link
              key={study.name}
              href={study.href}
              className="block px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="font-medium text-gray-900 dark:text-gray-100">{study.name}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">{study.description}</div>
            </Link>
          ))}
        </div>
      </div>
      <span>/</span>
      <span className="text-gray-900 dark:text-gray-100">{currentStudy}</span>
    </div>
  );
}
