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
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100">
              AI Work Automation
            </h1>
          </div>

          {/* Version Tabs */}
          <div className="hidden md:flex items-center space-x-2 bg-gray-100 dark:bg-gray-900 rounded-lg p-1">
            {versions.map((version) => (
              <button
                key={version.id}
                onClick={() => onVersionChange(version.id)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  currentVersion === version.id
                    ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                }`}
              >
                {version.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
              Book Call
            </button>
          </div>
        </div>

        {/* Mobile Version Selector */}
        <div className="md:hidden pb-3">
          <select
            value={currentVersion}
            onChange={(e) => onVersionChange(e.target.value)}
            className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            {versions.map((version) => (
              <option key={version.id} value={version.id}>
                {version.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
}
