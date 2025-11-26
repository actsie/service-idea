'use client';

import Lottie from 'lottie-react';
import { useState } from 'react';
import workingAnimation from '@/public/working.json';
import inboxAnimation from '@/public/inbox.json';
import CaseStudyLayout from '@/components/CaseStudyLayout';

export default function SalesOutreachCaseStudy() {
  const [isTechArchOpen, setIsTechArchOpen] = useState(false);

  return (
    <CaseStudyLayout studyName="Sales Outreach">
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

                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isTechArchOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
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
                        <strong>What this means for you:</strong> You get a custom sales automation solution built with proven tools that's tailored to your exact workflow. No vendor lock-in, no black boxes—just flexible automation that scales with your team and adapts as your process evolves.
                      </p>
                    </div>
                  </div>
                </div>
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
    </CaseStudyLayout>
  );
}
