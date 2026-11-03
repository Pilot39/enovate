'use client'

import React from 'react'
import Link from 'next/link'
import { useWallet } from '@/context/WalletContext'

/**
 * Main navigation bar component
 * Displays Enovate branding and wallet connection
 */
export function Navbar() {
  const { isConnected, address, connect, disconnect } = useWallet()

  const handleWalletClick = async () => {
    if (isConnected) {
      disconnect()
    } else {
      try {
        await connect()
      } catch (error) {
        console.error('Connection failed:', error)
      }
    }
  }

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg" />
            <span className="font-bold text-xl text-gray-900">Enovate</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/campaigns" className="text-gray-600 hover:text-gray-900">
              Campaigns
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/docs" className="text-gray-600 hover:text-gray-900">
              Docs
            </Link>
          </div>

          {/* Wallet Button */}
          <button
            onClick={handleWalletClick}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {isConnected ? `${address?.slice(0, 6)}...${address?.slice(-4)}` : 'Connect Wallet'}
          </button>
        </div>
      </div>
    </nav>
  )
}
