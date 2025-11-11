'use client';

interface NavigationBarProps {
  currentVersion: string;
  onVersionChange: (version: string) => void;
}

export default function NavigationBar({ currentVersion, onVersionChange }: NavigationBarProps) {
  const versions = [
    { id: 'v1', label: 'Problem-Solution' },
    { id: 'v2', label: 'ROI-Focused' },
    { id: 'v3', label: 'Story-Driven' },
    { id: 'v4', label: 'Skeptical Founder' },
    { id: 'v5', label: 'Concise' },
    { id: 'v6', label: 'Fractional Founder' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100">
              AI Work Automation
            </h1>
          </div>

          {/* Version Switcher */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white/70 dark:bg-gray-700/70 rounded-lg p-1 border border-zinc-300/70 dark:border-white/20">
              <button
                onClick={() => onVersionChange('v2')}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                  currentVersion === 'v2'
                    ? 'bg-neutral-900 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                AI Automation
              </button>
              <button
                onClick={() => onVersionChange('v6')}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                  currentVersion === 'v6'
                    ? 'bg-neutral-900 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                Fractional Founder
              </button>
            </div>

            {/* CTA Button */}
            <button
              className="px-4 py-2 bg-neutral-900 text-white text-sm font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#5E50A0')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '')}
            >
              Book Call
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
