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

          {/* CTA Button */}
          <div className="flex items-center">
            <button
              className="px-4 py-2 bg-neutral-900 text-white text-sm font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#191046')}
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
