'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Lottie from 'lottie-react';
import chatWithUsAnimation from '@/public/chat-with-us.json';

export default function SupportTriageCaseStudy() {
  const [isTechArchOpen, setIsTechArchOpen] = useState(false);
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
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Sticky Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-transform duration-300 ${
          showStickyNav ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Link href="/" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/case-studies" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                Case Studies
              </Link>
              <span>/</span>
              <span className="text-gray-900 dark:text-gray-100">Support Autopilot</span>
            </div>
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
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/case-studies" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            Case Studies
          </Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-gray-100">Support Autopilot</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 pb-20">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-300/70 bg-white/70 px-3 py-1 text-sm dark:border-white/20 dark:bg-white/10 mb-6">
            <span className="text-gray-700 dark:text-neutral-300">Case Study</span>
          </div>
          <h1 className="text-5xl font-medium leading-tight lg:text-6xl text-gray-900 dark:text-gray-100 mb-6">
            Support Autopilot: AI-Powered Customer Support Automation
          </h1>
          <p className="text-xl text-gray-700/80 dark:text-neutral-300/80 max-w-3xl">
            Real-time email-to-ticket automation with AI draft generation, reducing support response time by 85% and processing tickets in under 5 seconds.
          </p>
        </div>

        {/* Stats Bar */}
        <div
          className="rounded-2xl overflow-hidden p-12 mb-16"
          style={{
            backgroundImage: 'linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
          }}
        >
          <div className="grid grid-cols-1 gap-8 text-center text-gray-800 md:grid-cols-3 dark:text-gray-100">
            <div>
              <div className="mb-2 flex items-center justify-center text-3xl font-medium lg:text-4xl">
                &lt; 5 seconds
              </div>
              <div className="flex items-center justify-center text-sm text-gray-700/80 dark:text-neutral-300/80">
                <p>Processing latency from email to draft</p>
              </div>
            </div>
            <div>
              <div className="mb-2 flex items-center justify-center text-3xl font-medium lg:text-4xl">
                85% time saved
              </div>
              <div className="flex items-center justify-center text-sm text-gray-700/80 dark:text-neutral-300/80">
                <p>Typical efficiency gain per ticket</p>
              </div>
            </div>
            <div>
              <div className="mb-2 flex items-center justify-center text-3xl font-medium lg:text-4xl">
                70% approved
              </div>
              <div className="flex items-center justify-center text-sm text-gray-700/80 dark:text-neutral-300/80">
                <p>Drafts sent without edits</p>
              </div>
            </div>
          </div>
        </div>

        {/* The Problem */}
        <div className="mb-16">
          <h2 className="text-3xl font-medium mb-6 text-black dark:text-white">The Problem</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
            <p className="text-gray-700/80 dark:text-neutral-300/80 text-lg">
              For most support teams, handling customer emails looks like this:
            </p>

            <div className="relative pl-6">
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
                style={{
                  backgroundImage: 'linear-gradient(to bottom, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
                }}
              />
              <p className="text-gray-700/80 dark:text-neutral-300/80 italic text-base leading-relaxed">
                You check Gmail every 10 minutes for new support emails. Copy the email content. Switch to your ticketing system to create a new ticket. Paste the details. Manually categorize the priority. Switch back to Gmail to read the customer's history. Jump to your knowledge base to find the right response template. Copy it. Switch back to Gmail. Paste and personalize the response. Send. Update the ticket status. Set a manual reminder for follow-up. Repeat 50 times a day.
              </p>
            </div>

            <div className="pt-4">
              <p className="text-gray-900 dark:text-gray-100 font-semibold text-lg mb-4">
                The reality of manual support operations:
              </p>
              <ul className="space-y-3 text-gray-700/80 dark:text-neutral-300/80">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 dark:text-gray-600 mt-1">•</span>
                  <span><strong>Manual email checking creates delays</strong>: Constant inbox monitoring interrupts focus and creates bottlenecks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 dark:text-gray-600 mt-1">•</span>
                  <span><strong>Categorization is inconsistent</strong>: Different team members prioritize differently, leading to missed urgent tickets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 dark:text-gray-600 mt-1">•</span>
                  <span><strong>Writing responses is time-consuming</strong>: Even templated replies require customization and context gathering</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 dark:text-gray-600 mt-1">•</span>
                  <span><strong>SLA tracking requires vigilance</strong>: Deadlines slip without constant monitoring and manual reminders</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 dark:text-gray-600 mt-1">•</span>
                  <span><strong>Context switching overhead</strong>: Jumping between Gmail, ticketing tools, knowledge bases, and CRMs kills productivity</span>
                </li>
              </ul>
            </div>

            <div
              className="rounded-lg p-5"
              style={{
                backgroundImage: 'linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
              }}
            >
              <p className="text-gray-900">
                <strong>The result:</strong> Support teams spend 14-31 minutes per ticket on manual work, when most of that time could be automated.
              </p>
            </div>
          </div>
        </div>

        {/* The Solution */}
        <div className="mb-16">
          <h2 className="text-3xl font-medium mb-6 text-black dark:text-white">The Solution</h2>
          <p className="text-xl text-gray-700/80 dark:text-neutral-300/80 mb-8">
            <strong className="px-1 py-0.5 font-bold" style={{
              backgroundImage: 'linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
            }}>
              Support Autopilot
            </strong>{' '}
            automates the entire workflow from email arrival to draft response, reducing human involvement to a single approval step.
          </p>

          {/* System Architecture Mindmap */}
          <div className="mb-12">
            <a
              href="/support-autopilot-mindmap-2.png"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-colors cursor-pointer group"
            >
              <img
                src="/support-autopilot-mindmap-2.png"
                alt="Support Autopilot System Architecture"
                className="w-full h-auto"
              />
              <div className="bg-gray-50 dark:bg-gray-900 px-4 py-2 text-center border-t border-gray-200 dark:border-gray-700 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition-colors">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Click to view at original size
                </p>
              </div>
            </a>
          </div>

          {/* Real-Time Email Ingestion */}
          <div className="mb-12">
            <h3 className="text-2xl font-medium mb-4 text-black dark:text-white">1. Real-Time Email Ingestion</h3>
            <div className="space-y-4 mb-6">
              <p className="text-gray-700/80 dark:text-neutral-300/80">
                Using <strong>Google Cloud Pub/Sub</strong> and Gmail push notifications, the system receives instant alerts when new support emails arrive—no polling delays.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">How it works:</p>
                <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700/80 dark:text-neutral-300/80">
                  <li>Gmail sends push notification to Pub/Sub when email arrives</li>
                  <li>n8n webhook receives notification immediately (&lt; 1 second)</li>
                  <li>System fetches full email details via Gmail API</li>
                </ol>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
              <img
                src="/Real-Time-Email-Ingestion.png"
                alt="n8n workflow showing real-time email ingestion with Pub/Sub webhook"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Intelligent Ticket Creation */}
          <div className="mb-12">
            <h3 className="text-2xl font-medium mb-4 text-black dark:text-white">2. Intelligent Ticket Creation</h3>
            <div className="space-y-4 mb-6">
              <p className="text-gray-700/80 dark:text-neutral-300/80">
                Tickets are automatically created in <strong>Airtable</strong> with full email metadata, including thread tracking to prevent duplicates.
              </p>
              <div className="p-4">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Fields captured:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700/80 dark:text-neutral-300/80">
                  <li>Gmail message ID and thread ID</li>
                  <li>Sender email and name</li>
                  <li>Subject and body content</li>
                  <li>Received timestamp</li>
                  <li>Status tracking (pending/sent)</li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
              <img
                src="/Intelligent-Ticket-Creation.png"
                alt="Airtable database showing tickets with all metadata fields"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* AI Classification & Draft Generation */}
          <div className="mb-12">
            <h3 className="text-2xl font-medium mb-4 text-black dark:text-white">3. AI Classification & Draft Generation</h3>
            <p className="text-gray-700/80 dark:text-neutral-300/80 mb-4">
              <strong>Claude Haiku</strong> analyzes each email and generates a ready-to-send response in milliseconds.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Classification:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700/80 dark:text-neutral-300/80">
                  <li><strong>Intent:</strong> billing, bug, access, feature, refund, other</li>
                  <li><strong>Priority:</strong> urgent, soon, later</li>
                  <li><strong>VIP Status:</strong> Enterprise/high-value customer detection</li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Draft Generation:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700/80 dark:text-neutral-300/80">
                  <li>Context-aware responses based on intent</li>
                  <li>Personalized with customer name</li>
                  <li>Professional tone and structure</li>
                  <li>Intent-specific guidelines (empathy, acknowledgment)</li>
                </ul>
              </div>
            </div>

            {/* AI Classification Screenshot */}
            <div className="mb-6 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
              <img
                src="/AI-Classification.png"
                alt="n8n execution showing AI classification output with intent, priority, and VIP status"
                className="w-full h-auto"
              />
            </div>

            {/* AI Draft Generation Screenshot */}
            <div className="mb-6 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
              <img
                src="/AI-Draft-Generation.png"
                alt="n8n execution showing AI-generated email draft with subject and body"
                className="w-full h-auto"
              />
            </div>

            {/* SLA Calculation */}
            <div
              className="rounded-lg p-4 mb-6"
              style={{
                backgroundImage: 'linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
              }}
            >
              <p className="text-gray-900 text-sm">
                <strong>SLA Calculation:</strong> Automatic deadline assignment based on priority (Urgent: 2hrs, Soon: 24hrs, Later: 48hrs)
              </p>
            </div>

            {/* SLA Calculation Screenshot */}
            <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
              <img
                src="/Automatic-SLA-Calculation.png"
                alt="Automatic SLA deadline calculation in n8n workflow"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Desktop Review App */}
          <div className="mb-12">
            <h3 className="text-2xl font-medium mb-4 text-black dark:text-white">4. Desktop Review App</h3>
            <p className="text-gray-700/80 dark:text-neutral-300/80 mb-4">
              Built with <strong>Electron + React</strong>, the desktop app provides a fast human-in-the-loop approval interface.
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6">
              <p className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Features:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-gray-700/80 dark:text-neutral-300/80">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>View all pending tickets at a glance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Read AI-generated drafts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Edit before sending</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm text-gray-700/80 dark:text-neutral-300/80">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Batch approve multiple tickets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Regenerate drafts if needed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Real-time sync with Airtable</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Desktop App Screenshot */}
            <div className="mb-6 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
              <img
                src="/Desktop-Review-App.png"
                alt="Electron desktop app showing ticket list and draft review interface with Approve/Skip/Regenerate buttons"
                className="w-full h-auto"
              />
            </div>

            {/* Thread Handling */}
            <div
              className="rounded-lg p-4 mb-6"
              style={{
                backgroundImage: 'linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
              }}
            >
              <p className="text-gray-900 text-sm">
                <strong>Thread Handling:</strong> The system automatically tracks email threads and appends customer replies to existing tickets, maintaining conversation history.
              </p>
            </div>

            {/* Thread Handling Screenshot */}
            <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
              <img
                src="/Thread-Handling.png"
                alt="Airtable showing ticket with appended reply text from customer"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Technical Architecture */}
        <div className="mb-16">
          <div className="relative rounded-lg p-[2px]" style={{
            background: 'linear-gradient(to bottom, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
          }}>
            <div className="bg-white dark:bg-neutral-950 rounded-lg overflow-hidden">
              <button
                onClick={() => setIsTechArchOpen(!isTechArchOpen)}
                className="w-full px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors flex items-center justify-between"
              >
                <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100">
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

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isTechArchOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="p-6 space-y-6">
                {/* System Components Table */}
                <div>
                  <p className="text-gray-900 dark:text-gray-100 font-semibold text-lg mb-3">
                    System Components
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-100 dark:bg-gray-800">
                        <tr>
                          <th className="px-4 py-2 text-left text-gray-900 dark:text-gray-100">Component</th>
                          <th className="px-4 py-2 text-left text-gray-900 dark:text-gray-100">Purpose</th>
                          <th className="px-4 py-2 text-left text-gray-900 dark:text-gray-100">Technology</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700/80 dark:text-neutral-300/80">
                        <tr className="border-t border-gray-200 dark:border-gray-700">
                          <td className="px-4 py-3 font-medium">Gmail</td>
                          <td className="px-4 py-3">Email source</td>
                          <td className="px-4 py-3">Gmail API + OAuth2</td>
                        </tr>
                        <tr className="border-t border-gray-200 dark:border-gray-700">
                          <td className="px-4 py-3 font-medium">Cloud Pub/Sub</td>
                          <td className="px-4 py-3">Real-time notifications</td>
                          <td className="px-4 py-3">Google Cloud Platform</td>
                        </tr>
                        <tr className="border-t border-gray-200 dark:border-gray-700">
                          <td className="px-4 py-3 font-medium">n8n</td>
                          <td className="px-4 py-3">Workflow orchestration</td>
                          <td className="px-4 py-3">Self-hosted automation</td>
                        </tr>
                        <tr className="border-t border-gray-200 dark:border-gray-700">
                          <td className="px-4 py-3 font-medium">Airtable</td>
                          <td className="px-4 py-3">Ticket database</td>
                          <td className="px-4 py-3">Cloud database + API</td>
                        </tr>
                        <tr className="border-t border-gray-200 dark:border-gray-700">
                          <td className="px-4 py-3 font-medium">Claude Haiku</td>
                          <td className="px-4 py-3">AI processing</td>
                          <td className="px-4 py-3">Anthropic API</td>
                        </tr>
                        <tr className="border-t border-gray-200 dark:border-gray-700">
                          <td className="px-4 py-3 font-medium">Electron App</td>
                          <td className="px-4 py-3">Human review interface</td>
                          <td className="px-4 py-3">React + TypeScript</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Technical Highlights */}
                <div>
                  <p className="text-gray-900 dark:text-gray-100 font-semibold text-lg mb-3">
                    Technical Highlights
                  </p>
                  <div className="space-y-4">
                    <div className="rounded-lg p-4">
                      <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Why Push Notifications?</p>
                      <p className="text-sm text-gray-700/80 dark:text-neutral-300/80">
                        Push notifications provide &lt; 1 second latency compared to 0-60 seconds for polling. This reduces API calls from 1,440/day to on-demand only, significantly lowering costs while improving response time.
                      </p>
                    </div>
                    <div className="rounded-lg p-4">
                      <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Why Claude Haiku?</p>
                      <p className="text-sm text-gray-700/80 dark:text-neutral-300/80">
                        <strong>Speed:</strong> ~300ms response time | <strong>Cost:</strong> Significantly cheaper than larger models | <strong>Quality:</strong> Sufficient for classification and templated responses | <strong>Consistency:</strong> Structured JSON output
                      </p>
                    </div>
                    <div className="rounded-lg p-4">
                      <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Duplicate Prevention</p>
                      <p className="text-sm text-gray-700/80 dark:text-neutral-300/80">
                        The system tracks emails by <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">thread_id</code> rather than message ID. This prevents duplicate tickets from the same conversation and maintains conversation history on a single ticket.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="rounded-lg p-5"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
                  }}
                >
                  <p className="text-gray-900">
                    <strong>What this means for you:</strong> You get a custom support automation solution built with proven tools that's tailored to your exact workflow. No vendor lock-in, no black boxes—just flexible automation that scales with your team and adapts as your process evolves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* The Impact */}
        <div className="mb-16">
          <h2 className="text-3xl font-medium mb-6 text-black dark:text-white">The Impact: Time, Money, and Sanity Recovered</h2>

          {/* Before/After Comparison */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Time Savings Comparison</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Traditional Workflow (per ticket)</p>
                <div className="space-y-2 text-sm text-gray-700/80 dark:text-neutral-300/80">
                  <div className="flex justify-between">
                    <span>Notice new email:</span>
                    <span className="font-medium">5-15 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Read and understand:</span>
                    <span className="font-medium">2-3 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Categorize priority:</span>
                    <span className="font-medium">1 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Write response:</span>
                    <span className="font-medium">5-10 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Log in ticketing system:</span>
                    <span className="font-medium">1-2 min</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-300 dark:border-gray-600 font-bold text-gray-900 dark:text-gray-100">
                    <span>Total:</span>
                    <span>14-31 min</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border-2 border-green-500/50">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-3">With Support Autopilot (per ticket)</p>
                <div className="space-y-2 text-sm text-gray-700/80 dark:text-neutral-300/80">
                  <div className="flex justify-between">
                    <span>Automatic processing:</span>
                    <span className="font-medium">0 min (instant)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Auto-categorization:</span>
                    <span className="font-medium">0 min (instant)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Review draft:</span>
                    <span className="font-medium">30 sec - 1 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Edit if needed:</span>
                    <span className="font-medium">0-2 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Click approve:</span>
                    <span className="font-medium">5 sec</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-green-500/50 font-bold text-green-700 dark:text-green-400">
                    <span>Total:</span>
                    <span>0.5-3 min</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-6 justify-center">
              <div className="relative rounded-full p-[2px]" style={{
                background: 'linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
              }}>
                <div className="bg-white dark:bg-neutral-950 rounded-full px-4 py-2">
                  <p className="text-sm text-gray-900 dark:text-gray-100">
                    <strong>At scale (50 tickets/day):</strong> 10+ hours saved daily
                  </p>
                </div>
              </div>
              <div className="relative rounded-full p-[2px]" style={{
                background: 'linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
              }}>
                <div className="bg-white dark:bg-neutral-950 rounded-full px-4 py-2">
                  <p className="text-sm text-gray-900 dark:text-gray-100">
                    <strong>Best case:</strong> 96% time reduction
                  </p>
                </div>
              </div>
              <div className="relative rounded-full p-[2px]" style={{
                background: 'linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
              }}>
                <div className="bg-white dark:bg-neutral-950 rounded-full px-4 py-2">
                  <p className="text-sm text-gray-900 dark:text-gray-100">
                    <strong>Typical case:</strong> 85% time reduction
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Quantitative Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative rounded-lg p-[2px]" style={{
                background: 'linear-gradient(to bottom, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
              }}>
                <div className="bg-white dark:bg-neutral-950 rounded-lg p-4 h-full">
                  <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">&lt; 5 sec</p>
                  <p className="text-sm text-gray-700/80 dark:text-neutral-300/80">Processing latency</p>
                </div>
              </div>
              <div className="relative rounded-lg p-[2px]" style={{
                background: 'linear-gradient(to bottom, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
              }}>
                <div className="bg-white dark:bg-neutral-950 rounded-lg p-4 h-full">
                  <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">~90%</p>
                  <p className="text-sm text-gray-700/80 dark:text-neutral-300/80">Classification accuracy</p>
                </div>
              </div>
              <div className="relative rounded-lg p-[2px]" style={{
                background: 'linear-gradient(to bottom, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
              }}>
                <div className="bg-white dark:bg-neutral-950 rounded-lg p-4 h-full">
                  <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">~70%</p>
                  <p className="text-sm text-gray-700/80 dark:text-neutral-300/80">Drafts sent without edits</p>
                </div>
              </div>
              <div className="relative rounded-lg p-[2px]" style={{
                background: 'linear-gradient(to bottom, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
              }}>
                <div className="bg-white dark:bg-neutral-950 rounded-lg p-4 h-full">
                  <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">~$0.01</p>
                  <p className="text-sm text-gray-700/80 dark:text-neutral-300/80">API cost per ticket</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Takeaway */}
        <div className="mb-16">
          <h2 className="text-3xl font-medium mb-6 text-black dark:text-white">The Takeaway</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg p-5">
              <p className="text-gray-900 dark:text-gray-100">
                <strong>
                  <span className="px-1 py-0.5 font-bold" style={{
                    backgroundImage: 'linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
                  }}>1.</span> Push &gt; Polling
                </strong><br />
                Real-time processing with &lt; 1 second latency improves response times dramatically
              </p>
            </div>
            <div className="rounded-lg p-5">
              <p className="text-gray-900 dark:text-gray-100">
                <strong>
                  <span className="px-1 py-0.5 font-bold" style={{
                    backgroundImage: 'linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
                  }}>2.</span> AI handles the routine
                </strong><br />
                Classification and drafting are perfect AI tasks, freeing humans for complex cases
              </p>
            </div>
            <div className="rounded-lg p-5">
              <p className="text-gray-900 dark:text-gray-100">
                <strong>
                  <span className="px-1 py-0.5 font-bold" style={{
                    backgroundImage: 'linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
                  }}>3.</span> Thread tracking matters
                </strong><br />
                Conversation continuity requires thread-level deduplication, not message-level
              </p>
            </div>
            <div className="rounded-lg p-5">
              <p className="text-gray-900 dark:text-gray-100">
                <strong>
                  <span className="px-1 py-0.5 font-bold" style={{
                    backgroundImage: 'linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
                  }}>4.</span> Simple models work
                </strong><br />
                Claude Haiku is fast, cheap, and good enough for structured support tasks
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack at a Glance */}
        <div className="mb-16">
          <h2 className="text-3xl font-medium mb-6 text-black dark:text-white">Tech Stack at a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative rounded-lg p-[2px]" style={{
              background: 'linear-gradient(to bottom, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
            }}>
              <div className="bg-white dark:bg-neutral-950 rounded-lg p-6 h-full">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Automation</h3>
                <ul className="space-y-2 text-sm text-gray-700/80 dark:text-neutral-300/80">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>n8n workflow engine</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Gmail API + OAuth2</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Google Cloud Pub/Sub</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative rounded-lg p-[2px]" style={{
              background: 'linear-gradient(to bottom, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
            }}>
              <div className="bg-white dark:bg-neutral-950 rounded-lg p-6 h-full">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">AI Processing</h3>
                <ul className="space-y-2 text-sm text-gray-700/80 dark:text-neutral-300/80">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Claude Haiku (Anthropic)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Classification engine</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Draft generation</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative rounded-lg p-[2px]" style={{
              background: 'linear-gradient(to bottom, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
            }}>
              <div className="bg-white dark:bg-neutral-950 rounded-lg p-6 h-full">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Frontend</h3>
                <ul className="space-y-2 text-sm text-gray-700/80 dark:text-neutral-300/80">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Electron desktop app</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>React + TypeScript</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Tailwind CSS</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

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
                  See how much you could{' '}
                  <span
                    className="px-1 py-1 font-bold"
                    style={{
                      backgroundImage: 'linear-gradient(to right, #fdf6ef, #fcf3fa, #f9f1fc, #f4eefc)'
                    }}
                  >save</span>
                </h3>
              </div>
              <p className="text-lg text-gray-700/80 dark:text-neutral-300/80 text-center">
                Book a free 15-minute consultation to discuss your support automation needs and see how much time and money you could save.
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
