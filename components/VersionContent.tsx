'use client';

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
  finalCta: FinalCtaContent;
}

export default function VersionContent({ version }: VersionContentProps) {
  const content = getContentForVersion(version);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
          {content.hero.title}
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {content.hero.subtitle}
        </p>
        <div className="flex flex-col items-center gap-2">
          <button className="relative px-12 py-4 bg-primary-500 hover:bg-primary-600 text-white text-xl font-bold rounded-lg transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 shadow-lg hover:shadow-2xl">
            {content.hero.cta}
            <div className="absolute -top-2 -right-2 flex h-6 w-6">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-6 w-6 bg-red-500 items-center justify-center text-white text-xs font-bold">3</span>
            </div>
          </button>
          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
            </svg>
            Only 3 consultation slots left this week
          </p>
        </div>
      </section>

      {/* Logo Trust Bar */}
      <section className="py-8 border-y border-gray-200 dark:border-gray-700">
        <div className="flex flex-wrap items-center justify-center gap-8 text-center">
          <span className="text-sm text-gray-600 dark:text-gray-400 w-full mb-2">Trusted by founders at:</span>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 font-semibold">TechCo</div>
            <div className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 font-semibold">DataFlow</div>
            <div className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 font-semibold">SaaS Inc</div>
            <div className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 font-semibold">Startup Labs</div>
          </div>
        </div>
      </section>

      {/* Problem Section (if exists) */}
      {content.problem && (
        <section className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            {content.problem.title}
          </h3>
          <ul className="space-y-3">
            {content.problem.points.map((point, index) => (
              <li
                key={index}
                className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <span className="text-primary-500 mt-1">•</span>
                <span className="text-gray-700 dark:text-gray-300">{point}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Features/Examples Section */}
      <section>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
          {content.features.title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.features.items.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-[1.02]"
            >
              {/* Gradient border glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300"></div>
              <div className="relative">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section (if exists) */}
      {content.stats && (
        <section className="bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            {content.stats.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.stats.items.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Guarantee Section */}
      <section className="max-w-3xl mx-auto text-center py-12">
        <div className="inline-flex items-center gap-4 bg-green-50 dark:bg-green-900/20 px-8 py-6 rounded-2xl border-2 border-green-200 dark:border-green-800 shadow-lg">
          <svg className="w-12 h-12 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
          <div className="text-left">
            <div className="text-xl font-bold text-gray-900 dark:text-gray-100">ROI Guarantee</div>
            <div className="text-sm text-gray-700 dark:text-gray-300 mt-1">
              Save 10+ hours in month 1 or your money back. No questions asked.
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">What Founders Say</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                SC
              </div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-gray-100">Sarah Chen</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">CEO, TechCo (Series A)</div>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 italic mb-3">
              "Saved us 18 hours/week on recruiting. ROI paid for itself in the first month. Wish we'd found them sooner."
            </p>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                MP
              </div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-gray-100">Mike Patel</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">CTO, DataFlow (Seed)</div>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 italic mb-3">
              "Finally, someone who actually understands startup constraints. Cut our ops work by 70% without touching engineering time."
            </p>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg">
                JL
              </div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-gray-100">Jessica Lee</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Founder, SaaS Inc (Pre-seed)</div>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 italic mb-3">
              "Built us custom tools that actually work. No more fighting with Zapier. This is what AI automation should be."
            </p>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center space-y-6 py-12 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          {content.finalCta.title}
        </h3>
        <button className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white text-lg font-semibold rounded-lg transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
          {content.finalCta.cta}
        </button>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          ⏰ Limited spots available - Book within 48 hours
        </p>
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
        title: 'Stop hiring people to solve problems AI can handle in 10 minutes',
        subtitle: 'Your fractional AI Operations Lead. We find the bottlenecks, build the solutions, and train your team.',
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
            icon: '📧',
            title: 'Sales: 12hrs → 1.5hrs',
            description: 'Automated outreach with maintained personalization quality',
          },
          {
            icon: '👥',
            title: 'Recruiting: 8hrs → 30min',
            description: 'AI pre-screening cuts review time by 93%',
          },
          {
            icon: '📱',
            title: 'Marketing: 10hrs → 2hrs',
            description: 'Content multiplication across all platforms',
          },
          {
            icon: '⚙️',
            title: 'Operations: 15hrs → 3hrs',
            description: 'Full automation of repetitive tasks',
          },
          {
            icon: '💬',
            title: 'Support: 20hrs → 4hrs',
            description: 'AI triage and response generation',
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
        subtitle: 'You\'ve got better things to do than debug Zapier workflows. We handle the implementation.',
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
            icon: '1️⃣',
            title: 'Sales outreach engine',
            description: 'Auto-personalized emails using prospect data (saved 10 hrs/week)',
          },
          {
            icon: '2️⃣',
            title: 'Recruiting pre-screen',
            description: 'Ranks 100+ applications in 15 minutes (saved 12 hrs per hire)',
          },
          {
            icon: '3️⃣',
            title: 'Content multiplication',
            description: 'One blog post → 15 pieces in 10 minutes (saved 8 hrs/week)',
          },
          {
            icon: '4️⃣',
            title: 'Support triage',
            description: 'AI categorizes and drafts responses (saved 15 hrs/week)',
          },
          {
            icon: '5️⃣',
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
