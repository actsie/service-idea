'use client';

import { useState } from 'react';
import CaseStudyLayout from '@/components/CaseStudyLayout';

export default function SupportTriageCaseStudy() {
  const [isTechArchOpen, setIsTechArchOpen] = useState(false);

  return (
    <CaseStudyLayout studyName="Support Autopilot">
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
              className="block rounded-lg overflow-hidden cursor-pointer group"
            >
              <img
                src="/support-autopilot-mindmap-2.png"
                alt="Support Autopilot System Architecture"
                className="w-full h-auto"
              />
              <div className="bg-gray-50 dark:bg-gray-900 px-4 py-2 text-center group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition-colors">
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
    </CaseStudyLayout>
  );
}
