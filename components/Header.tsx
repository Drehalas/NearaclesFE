
'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
            <i className="ri-database-2-line text-white text-xl"></i>
          </div>
          <h1 className="font-['Pacifico'] text-2xl text-gray-900">Nearacles</h1>
        </Link>
        
        <nav className="flex items-center space-x-8">
          <Link href="/dashboard" className="text-gray-600 hover:text-green-600 font-medium">
            Dashboard
          </Link>
          <Link href="/oracles" className="text-gray-600 hover:text-green-600 font-medium">
            Oracles
          </Link>
          <Link href="/analytics" className="text-gray-600 hover:text-green-600 font-medium">
            Analytics
          </Link>
          <Link href="/explorer" className="text-gray-600 hover:text-green-600 font-medium">
            Explorer
          </Link>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 whitespace-nowrap cursor-pointer">
            Connect Wallet
          </button>
        </nav>
      </div>
    </header>
  );
}
