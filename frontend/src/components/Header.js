import React from 'react';

function Header() {
  return (
    <nav className="bg-gray-800 text-white w-full">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <img
                className="block lg:hidden h-8 w-auto"
                src="/logo192.png"
                alt="Workflow"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="/logo512.png"
                alt="Workflow"
              />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Home</a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">About</a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Services</a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;