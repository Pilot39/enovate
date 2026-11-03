'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'
import { WalletContextType } from '@/types'

const WalletContext = createContext<WalletContextType | undefined>(undefined)

/**
 * Provider component for wallet functionality
 * Integrates with Freighter wallet for Stellar transactions
 */
export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [address, setAddress] = useState<string | null>(null)
  const [isConnected, setIsConnected] = useState(false)

  const connect = useCallback(async () => {
    try {
      // TODO: Implement Freighter wallet connection
      // This is a placeholder for the actual implementation
      console.log('Connecting wallet...')
      setIsConnected(true)
    } catch (error) {
      console.error('Failed to connect wallet:', error)
      setIsConnected(false)
    }
  }, [])

  const disconnect = useCallback(() => {
    setAddress(null)
    setIsConnected(false)
  }, [])

  const signTransaction = useCallback(async (tx: string): Promise<string> => {
    try {
      // TODO: Implement transaction signing with Freighter
      console.log('Signing transaction...')
      return tx
    } catch (error) {
      console.error('Failed to sign transaction:', error)
      throw error
    }
  }, [])

  const value: WalletContextType = {
    address,
    isConnected,
    connect,
    disconnect,
    signTransaction,
  }

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
}

/**
 * Hook to use wallet context
 * @returns Wallet context value
 */
export function useWallet(): WalletContextType {
  const context = useContext(WalletContext)
  if (!context) {
    throw new Error('useWallet must be used within WalletProvider')
  }
  return context
}
