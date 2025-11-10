'use client';

import Link from 'next/link';
import Lottie from 'lottie-react';
import { useState, useEffect } from 'react';
import chatWithUsAnimation from '@/public/chat-with-us.json';
import workingAnimation from '@/public/working.json';
import inboxAnimation from '@/public/inbox.json';

export default function SalesOutreachCaseStudy() {
  const [isTechArchOpen, setIsTechArchOpen] = useState(false);
  const [showStickyNav, setShowStickyNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky nav after scrolling past hero section (~400px)
      setShowStickyNav(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCalendly = () => {
    const calendlySection = document.querySelector('#calendly-section');
    if (calendlySection) {
      calendlySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-gray-800 dark:text-neutral-100">
      {/* Sticky Navigation Bar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-lg ${
          showStickyNav ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Breadcrumb */}
            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm overflow-hidden">
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors whitespace-nowrap"
              >
                Home
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 dark:text-gray-600 flex-shrink-0"
              >
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
              <Link
                href="/case-studies"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors whitespace-nowrap hidden sm:inline"
              >
                Case Studies
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 dark:text-gray-600 flex-shrink-0 hidden sm:block"
              >
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-900 dark:text-gray-100 font-medium whitespace-nowrap truncate">Sales Outreach</span>
            </div>

            {/* Right: Book Call Button */}
            <button
              type="button"
              onClick={scrollToCalendly}
              className="inline-flex border border-transparent transition-colors items-center justify-center rounded-md bg-neutral-900 px-4 py-2 font-medium text-neutral-100 text-sm whitespace-nowrap flex-shrink-0"
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#5E50A0')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '')}
            >
              Book Free Call
            </button>
          </div>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <nav className="pt-4 px-6">
        <div className="max-w-5xl mx-auto py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              Home
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 text-gray-400"
            >
              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
            </svg>
            <Link
              href="/case-studies"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              Case Studies
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 text-gray-400"
            >
              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-900 dark:text-gray-100 font-medium">
              Sales Outreach
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-300/70 bg-white/70 px-3 py-1 text-sm dark:border-white/20 dark:bg-white/10 mb-6">
            <span className="text-gray-700 dark:text-neutral-300">Case Study</span>
          </div>
          <h1 className="text-5xl font-medium leading-tight lg:text-6xl mb-6">
            Automating GTM Operations with AI-Powered Prospect & Follow-up Management
          </h1>
          <p className="text-xl text-gray-700/80 dark:text-neutral-300/80 max-w-3xl">
            A unified GTM Operations Console that centralizes prospect management and follow-up automation—eliminating tool fragmentation and transforming outreach from a manual bottleneck into an automated competitive advantage
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-2xl p-8"
            style={{
              backgroundImage: 'linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-semibold text-gray-900 mb-2">60%</div>
                <div className="text-sm text-gray-700/80">API Cost Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-gray-900 mb-2">Zero</div>
                <div className="text-sm text-gray-700/80">Missed Follow-ups</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-gray-900 mb-2">90%</div>
                <div className="text-sm text-gray-700/80">Time Reduction (Follow-ups)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* The Problem */}
          <div>
            <h2 className="text-3xl font-medium mb-6">The Problem: Death by a Thousand Tabs</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
              <p className="text-gray-700/80 dark:text-neutral-300/80 text-lg">
                For most GTM teams, managing cold outreach looks like this:
              </p>

              <div className="relative pl-6">
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
                  style={{
                    backgroundImage: 'linear-gradient(to bottom, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
                  }}
                />
                <p className="text-gray-700/80 dark:text-neutral-300/80 italic text-base leading-relaxed">
                  You open Gmail to draft an email. Switch to your CRM to check the prospect's status. Jump to Google Sheets to update your tracking spreadsheet. Open Notion to copy your email template. Back to Gmail to paste and personalize. Switch to your calendar to schedule the follow-up reminder. Repeat 50 times a day.
                </p>
              </div>

              <div className="pt-4">
                <p className="text-gray-900 dark:text-gray-100 font-semibold text-lg mb-4">
                  The reality of manual GTM operations:
                </p>
                <ul className="space-y-3 text-gray-700/80 dark:text-neutral-300/80">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 dark:text-gray-600 mt-1">•</span>
                    <span><strong>Tool fragmentation</strong>: Switching between 5-7 different applications (Gmail, Sheets, Airtable, Notion, Calendar, CRM)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 dark:text-gray-600 mt-1">•</span>
                    <span><strong>Manual everything</strong>: Copy-pasting email templates, tracking sends in spreadsheets, setting calendar reminders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 dark:text-gray-600 mt-1">•</span>
                    <span><strong>Lost follow-ups</strong>: No systematic way to track who got FU#1, who needs FU#2, who's overdue for FU#3</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 dark:text-gray-600 mt-1">•</span>
                    <span><strong>Constant context switching</strong>: 30-45 minutes per prospect just managing the workflow</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 dark:text-gray-600 mt-1">•</span>
                    <span><strong>Zero visibility</strong>: Can't see at a glance who replied, who's in sequence, what needs attention today</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <p className="text-gray-700/80 dark:text-neutral-300/80 text-base">
                  The cost? <span
                    className="px-1 py-0.5 font-bold"
                    style={{
                      backgroundImage: 'linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
                    }}
                  >Missed follow-ups mean lost revenue.</span> One forgotten Day 7 follow-up could be the difference between closing a deal and losing to a competitor.
                </p>
              </div>
            </div>
          </div>

          {/* The Solution */}
          <div>
            <h2 className="text-3xl font-medium mb-6">The Solution: One Console, Zero Context Switching</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700/80 dark:text-neutral-300/80 text-lg mb-8">
                We built a unified GTM Operations Console that centralizes prospect management and follow-up automation into two powerful features: the <strong><span
                  className="px-1 py-0.5 font-bold"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
                  }}
                >Prospects Tab</span></strong> and the <strong><span
                  className="px-1 py-0.5 font-bold"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
                  }}
                >Follow-ups Tab</span></strong>.
              </p>

              {/* Prospects Tab Subsection */}
              <div className="mt-10 space-y-6">
                <h3 className="text-2xl font-medium text-gray-900 dark:text-gray-100">Prospects Tab: Your Outreach Command Center</h3>
                <p className="text-gray-700/80 dark:text-neutral-300/80">
                  The Prospects Tab transforms cold outreach from a manual slog into a streamlined workflow.
                </p>

                {/* Prospects Main View Screenshot */}
                <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                  <img
                    src="/ProspectsTab-MainView.png"
                    alt="Prospects Tab Main View - Unified dashboard with all prospects"
                    className="w-full h-auto"
                  />
                  <div className="bg-gray-50 dark:bg-gray-900 px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                    Manage all cold outreach prospects in one unified dashboard. Status tracking, contextual notes, and one-click AI draft generation eliminate the need for spreadsheets and constant context switching.
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 space-y-3">
                  <p className="text-gray-900 dark:text-gray-100 font-semibold">What it does:</p>
                  <ul className="space-y-2 text-gray-700/80 dark:text-neutral-300/80 list-disc pl-6">
                    <li><strong>Unified dashboard</strong>: All prospects in one clean table view</li>
                    <li><strong>One-click AI drafts</strong>: Click "Generate Draft" and get a personalized email in seconds—no templates, no copy-paste</li>
                    <li><strong>Context-aware AI</strong>: Import notes from your Google Sheet that give the AI context for generating personalized emails</li>
                    <li><strong>Smart caching</strong>: 5-minute data cache reduces API costs by 60% while keeping information fresh</li>
                  </ul>
                </div>

                {/* Prospects Draft Modal Screenshot */}
                <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                  <img
                    src="/ProspectsTab-DraftModal.png"
                    alt="Prospects Tab Draft Modal - AI-generated personalized email"
                    className="w-full h-auto"
                  />
                  <div className="bg-gray-50 dark:bg-gray-900 px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                    Generate personalized email drafts in seconds with AI. Review, edit, and send—then watch as three follow-up drafts auto-queue for review.
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Left: Workflow Text */}
                  <div>
                    <p className="text-gray-900 dark:text-gray-100 font-semibold mb-3">
                      <span
                        className="px-2 py-1"
                        style={{
                          backgroundImage: 'linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
                        }}
                      >
                        The workflow:
                      </span>
                    </p>
                    <ol className="space-y-2 text-gray-700/80 dark:text-neutral-300/80 list-decimal pl-6">
                      <li>Open Prospects tab → see all new leads</li>
                      <li>Click "Generate Draft" → AI creates personalized email</li>
                      <li>Review, edit if needed, click "Send"</li>
                      <li>Prospect disappears from view (optimistic UI update)</li>
                      <li>Three follow-up drafts auto-generate and queue for review</li>
                    </ol>
                    <p className="text-gray-900 dark:text-gray-100 font-bold mt-4">
                      From 30 minutes to 5 minutes per prospect.
                    </p>
                  </div>

                  {/* Right: Lottie Animation */}
                  <div className="flex items-center justify-center">
                    <div className="w-64 lg:w-80">
                      <Lottie
                        animationData={inboxAnimation}
                        loop={true}
                        autoplay={true}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Follow-ups Tab Subsection */}
              <div className="mt-16 space-y-6">
                <h3 className="text-2xl font-medium text-gray-900 dark:text-gray-100">Follow-ups Tab: Never Miss a Touch Point Again</h3>
                <p className="text-gray-700/80 dark:text-neutral-300/80">
                  The Follow-ups Tab automates the entire follow-up sequence—the part most teams struggle with.
                </p>

                {/* Follow-ups Pending Review Screenshot */}
                <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                  <img
                    src="/Follow-upsTab-PendingReview.png"
                    alt="Follow-ups Tab Pending Review - Batch review workflow"
                    className="w-full h-auto"
                  />
                  <div className="bg-gray-50 dark:bg-gray-900 px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                    Batch review follow-up drafts with urgency filters showing what's due today, overdue, or needs attention. Approve, skip, or regenerate with one click.
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 space-y-4">
                  <div>
                    <p className="text-gray-900 dark:text-gray-100 font-semibold mb-2">Pending Follow Up Review Sub-tab:</p>
                    <ul className="space-y-2 text-gray-700/80 dark:text-neutral-300/80 list-disc pl-6">
                      <li><strong>Automated draft generation</strong>: When you send an initial email, the system auto-generates 3 follow-up drafts (Day 3, Day 7, Day 14)</li>
                      <li><strong>Batch review workflow</strong>: Review and approve multiple drafts at once—no more one-by-one email crafting</li>
                      <li><strong>Urgency filters</strong>: See exactly what's due today, what's overdue, what needs review</li>
                      <li><strong>Thread visibility</strong>: Click any prospect to see all 3 drafts in sequence before they send</li>
                      <li><strong>Instant actions</strong>: Approve, skip, regenerate, or edit drafts with one click</li>
                    </ul>
                  </div>
                </div>

                {/* Follow-ups Thread View Screenshot */}
                <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                  <img
                    src="/Follow-upsTab-ThreadView.png"
                    alt="Follow-ups Tab Thread View - Full email sequence preview"
                    className="w-full h-auto"
                  />
                  <div className="bg-gray-50 dark:bg-gray-900 px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                    See the entire email sequence before it sends. All three follow-ups (Day 3, 7, 14) in one view for full context and control.
                  </div>
                </div>

                {/* Follow-ups Sent Emails Screenshot */}
                <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 mt-6">
                  <img
                    src="/Follow-upsTab-SentEmails.png"
                    alt="Follow-ups Tab Sent Emails - Conversation tracking"
                    className="w-full h-auto"
                  />
                  <div className="bg-gray-50 dark:bg-gray-900 px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                    Track every conversation with full email thread visibility. Know exactly which stage each prospect is at (FU#1, FU#2, FU#3) and see replies instantly.
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 space-y-4">
                  <div>
                    <p className="text-gray-900 dark:text-gray-100 font-semibold mb-2">Sent Emails Sub-tab:</p>
                    <ul className="space-y-2 text-gray-700/80 dark:text-neutral-300/80 list-disc pl-6">
                      <li><strong>Full conversation view</strong>: Click any prospect to see the entire email thread (initial + all follow-ups + replies)</li>
                      <li><strong>Stage tracking</strong>: Clear visual indicators showing whether someone is at FU#1, FU#2, or FU#3</li>
                      <li><strong>Status badges</strong>: Instantly see who's sent, who replied, who's closed</li>
                      <li><strong>Manual overrides</strong>: Mark as replied, mark as closed, or send the next follow-up immediately (in progress)</li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Left: Workflow Text */}
                  <div>
                    <p className="text-gray-900 dark:text-gray-100 font-semibold mb-3">
                      <span
                        className="px-2 py-1"
                        style={{
                          backgroundImage: 'linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
                        }}
                      >
                        The workflow:
                      </span>
                    </p>
                    <ol className="space-y-2 text-gray-700/80 dark:text-neutral-300/80 list-decimal pl-6">
                      <li>Check "Pending Review" tab → see 5 drafts due today</li>
                      <li>Click prospect → see all 3 follow-ups in thread view</li>
                      <li>Approve FU#1, regenerate FU#2 (want different angle), skip FU#3</li>
                      <li>Drafts update instantly (optimistic UI)</li>
                      <li>Approved drafts send on schedule automatically</li>
                    </ol>
                    <p className="text-gray-900 dark:text-gray-100 font-bold mt-4">
                      From 15-20 minutes per follow-up to 2 minutes for batch review.
                    </p>
                  </div>

                  {/* Right: Lottie Animation */}
                  <div className="flex items-center justify-center">
                    <div className="w-64 lg:w-80">
                      <Lottie
                        animationData={workingAnimation}
                        loop={true}
                        autoplay={true}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Innovation Subsection */}
              <div className="mt-16 space-y-6">
                <h3 className="text-2xl font-medium text-gray-900 dark:text-gray-100">Technical Innovation: Built for Efficiency</h3>
                <p className="text-gray-700/80 dark:text-neutral-300/80">
                  Behind the scenes, we engineered the console for performance and cost optimization:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">5-minute intelligent caching</h4>
                    <ul className="space-y-1 text-sm text-gray-700/80 dark:text-neutral-300/80 list-disc pl-4">
                      <li>Caches API responses with automatic expiration</li>
                      <li>Switching between tabs doesn't trigger redundant API calls</li>
                      <li>Saves 100-150 API calls per month</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Request deduplication</h4>
                    <ul className="space-y-1 text-sm text-gray-700/80 dark:text-neutral-300/80 list-disc pl-4">
                      <li>Prevents duplicate in-flight requests</li>
                      <li>If you click refresh twice quickly, only one API call fires</li>
                      <li>Saves 20-50 API calls per month</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Optimistic UI updates</h4>
                    <ul className="space-y-1 text-sm text-gray-700/80 dark:text-neutral-300/80 list-disc pl-4">
                      <li>Actions complete instantly in the interface</li>
                      <li>No waiting for full list refreshes</li>
                      <li>Removes prospects/updates statuses locally before confirming with backend</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Debounced filters</h4>
                    <ul className="space-y-1 text-sm text-gray-700/80 dark:text-neutral-300/80 list-disc pl-4">
                      <li>500ms delay before filter changes trigger API calls</li>
                      <li>Prevents rapid filter switching from hammering the API</li>
                      <li>Saves 30-50 API calls per month</li>
                    </ul>
                  </div>
                </div>

                <div
                  className="rounded-lg p-6"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
                  }}
                >
                  <p className="text-gray-900 font-bold text-lg">
                    Result: API usage dropped from 1,264 calls/month to ~600 calls/month—a 60% reduction while maintaining real-time data freshness.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Architecture */}
          <div>
            <div
              className="rounded-lg overflow-hidden relative"
              style={{
                background: 'linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)',
                padding: '2px'
              }}
            >
              <div className="bg-white dark:bg-neutral-950 rounded-lg">
                <button
                  onClick={() => setIsTechArchOpen(!isTechArchOpen)}
                  className="w-full flex items-center justify-between p-6 hover:opacity-80 transition-opacity rounded-t-lg"
                >
                  <h2 className="text-3xl font-medium">
                    <span
                      className="px-1 py-0.5 font-medium"
                      style={{
                        backgroundImage: 'linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
                      }}
                    >
                      Technical
                    </span>{' '}
                    Architecture
                  </h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`w-6 h-6 transition-transform ${isTechArchOpen ? 'rotate-180' : ''}`}
                  >
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>

                {isTechArchOpen && (
                  <div className="p-6 space-y-6">
                    <div>
                      <p className="text-gray-900 dark:text-gray-100 font-semibold text-lg mb-3">
                        Brief overview:
                      </p>
                      <ul className="space-y-3 text-gray-700/80 dark:text-neutral-300/80 list-disc pl-6">
                        <li><strong>Automation engine</strong>: 10+ n8n workflows orchestrating the entire GTM sequence</li>
                        <li><strong>Data layer</strong>: Airtable as the central database for prospects, emails, and follow-up status</li>
                        <li><strong>AI integration</strong>: OpenAI/Claude for email generation and personalization</li>
                        <li><strong>Frontend</strong>: Electron-based desktop app with real-time sync</li>
                        <li><strong>Optimization</strong>: Custom caching layer, request deduplication, optimistic updates</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-gray-900 dark:text-gray-100 font-semibold text-lg mb-3">
                        Why this matters:
                      </p>
                      <ul className="space-y-3 text-gray-700/80 dark:text-neutral-300/80 list-disc pl-6">
                        <li><strong>Composable architecture</strong> means we can customize to your specific workflow</li>
                        <li><strong>Battle-tested tools</strong> (n8n, Airtable) = reliable, not reinventing the wheel</li>
                        <li><strong>Modern stack</strong> = fast iteration and easy maintenance</li>
                      </ul>
                    </div>

                    <div
                      className="rounded-lg p-5"
                      style={{
                        backgroundImage: 'linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
                      }}
                    >
                      <p className="text-gray-900">
                        <strong>What this means for you:</strong> Non-technical buyers stay focused on value without getting overwhelmed. Technical buyers can dig into the architecture and see professional engineering. Everyone gets a product that's flexible, reliable, and built to last.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* The Impact */}
          <div>
            <h2 className="text-3xl font-medium mb-6">The Impact: Time, Money, and Sanity Recovered</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">Quantifiable Gains</h3>

              <div className="space-y-4 mt-4">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                  <p className="text-gray-900 dark:text-gray-100 font-semibold mb-3">Time savings:</p>
                  <ul className="space-y-2 text-gray-700/80 dark:text-neutral-300/80 list-disc pl-6">
                    <li><strong>Per prospect</strong>: 30-45 minutes → 5 minutes (<span
                      className="px-1 py-0.5 font-bold"
                      style={{
                        backgroundImage: 'linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
                      }}
                    >83% reduction</span>)</li>
                    <li><strong>Per follow-up</strong>: 15-20 minutes → 2 minutes (<span
                      className="px-1 py-0.5 font-bold"
                      style={{
                        backgroundImage: 'linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
                      }}
                    >90% reduction</span>)</li>
                    <li><strong>Daily time saved</strong>: 2-3 hours for teams managing 20+ prospects</li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                  <p className="text-gray-900 dark:text-gray-100 font-semibold mb-3">Cost savings:</p>
                  <ul className="space-y-2 text-gray-700/80 dark:text-neutral-300/80 list-disc pl-6">
                    <li><strong>API costs</strong>: 60% reduction through intelligent caching and optimization</li>
                    <li><strong>Tool consolidation</strong>: Eliminated need for 3-4 separate tools (email tracking, spreadsheet management, calendar reminders)</li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                  <p className="text-gray-900 dark:text-gray-100 font-semibold mb-3">Process improvements:</p>
                  <ul className="space-y-2 text-gray-700/80 dark:text-neutral-300/80 list-disc pl-6">
                    <li><strong><span
                      className="px-1 py-0.5 font-bold"
                      style={{
                        backgroundImage: 'linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
                      }}
                    >Zero missed follow-ups</span></strong>: Automated sequencing ensures every prospect gets FU#1, FU#2, and FU#3</li>
                    <li><strong>Batch efficiency</strong>: Review 10 follow-ups <span
                      className="px-1 py-0.5 font-bold"
                      style={{
                        backgroundImage: 'linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
                      }}
                    >in the time it used to take to write 1</span></li>
                    <li><strong>Full visibility</strong>: Entire team sees who's in sequence, what's overdue, who replied</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mt-10 mb-4">Qualitative Transformation</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Before</h4>
                  <ul className="space-y-2 text-gray-700/80 dark:text-neutral-300/80 text-sm">
                    <li>"Where did I put that prospect's info?"</li>
                    <li>"Did I already send them FU#2 or is that due tomorrow?"</li>
                    <li>"I need to check three different tools to know the status"</li>
                    <li>"I forgot to follow up and now it's been 3 weeks"</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">After</h4>
                  <ul className="space-y-2 text-gray-700/80 dark:text-neutral-300/80 text-sm">
                    <li>"Everything I need is in one view"</li>
                    <li>"The system tells me exactly what's due today"</li>
                    <li>"I can see the entire conversation history instantly"</li>
                    <li>"Follow-ups happen automatically—I just review and approve"</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* The Takeaway */}
          <div>
            <h2 className="text-3xl font-medium mb-6">The Takeaway: Operations as a Competitive Advantage</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
              <p className="text-gray-700/80 dark:text-neutral-300/80">
                Most GTM teams lose deals not because of bad product-market fit, but because of broken operations. They miss follow-ups. They take too long to respond. They lose context between touchpoints.
              </p>
              <p className="text-gray-700/80 dark:text-neutral-300/80">
                The Prospects and Follow-ups tabs transform GTM operations from a manual bottleneck into an automated competitive advantage. When your team can manage 3x more prospects in the same time, never miss a follow-up, and maintain perfect context across sequences, you win more deals.
              </p>
              <div
                className="rounded-lg p-6 mt-6"
                style={{
                  backgroundImage: 'linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
                }}
              >
                <p className="text-gray-900 font-bold text-lg mb-3">The formula is simple:</p>
                <ul className="space-y-2 text-gray-900 list-none">
                  <li><strong>Centralize</strong> → eliminate tool fragmentation</li>
                  <li><strong>Automate</strong> → remove manual busywork</li>
                  <li><strong>Optimize</strong> → reduce costs while maintaining speed</li>
                  <li><strong>Systematize</strong> → ensure nothing falls through the cracks</li>
                </ul>
                <p className="text-gray-900 font-bold mt-4">
                  This is what modern GTM operations looks like.
                </p>
              </div>
            </div>
          </div>

          {/* Key Features at a Glance */}
          <div>
            <h2 className="text-3xl font-medium mb-6">Key Features at a Glance</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Prospects Tab */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Prospects Tab</h3>
                <ul className="space-y-2 text-sm text-gray-700/80 dark:text-neutral-300/80">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Unified prospect dashboard with status tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>One-click AI-powered draft generation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Real-time status updates (New → Sent → Replied)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Contextual notes for every prospect</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Optimistic UI for instant feedback</span>
                  </li>
                </ul>
              </div>

              {/* Follow-ups Tab */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Follow-ups Tab</h3>
                <ul className="space-y-2 text-sm text-gray-700/80 dark:text-neutral-300/80">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Automated 3-stage follow-up sequence (Day 3, 7, 14)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Batch review workflow for drafts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Urgency filters (due today, overdue, needs review)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Full email thread visibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>One-click approve/skip/regenerate actions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Stage tracking across entire sequence</span>
                  </li>
                </ul>
              </div>

              {/* Technical Excellence */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Technical Excellence</h3>
                <ul className="space-y-2 text-sm text-gray-700/80 dark:text-neutral-300/80">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>60% API cost reduction through intelligent caching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Request deduplication prevents redundant calls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Debounced filters reduce unnecessary requests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Optimistic updates for instant UI feedback</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Real-time data with 5-minute cache TTL</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  >scale your outreach</span>?
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
