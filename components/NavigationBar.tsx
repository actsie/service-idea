'use client';

export default function NavigationBar() {

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
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-neutral-900 text-white hover:bg-white hover:text-neutral-900 hover:border hover:border-neutral-900 text-sm font-medium rounded-lg transition-colors focus:outline-none border border-transparent">
              Book Call
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
