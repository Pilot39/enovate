/**
 * Core types for the Enovate application
 */

export interface Campaign {
  id: string
  creator: string
  title: string
  description: string
  goal: number
  currentlyRaised: number
  deadline: number
  minContribution: number
  status: 'active' | 'successful' | 'failed'
  token: string
  contributors: number
}

export interface Contributor {
  address: string
  amount: number
  timestamp: number
}

export interface PlatformConfig {
  feePercentage: number
  platformAddress: string
}

export interface WalletContextType {
  address: string | null
  isConnected: boolean
  connect: () => Promise<void>
  disconnect: () => void
  signTransaction: (tx: string) => Promise<string>
}

export interface ContractStats {
  totalCampaigns: number
  totalFunded: number
  totalContributors: number
}
