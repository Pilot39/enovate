/**
 * Soroban contract helpers and utilities
 */

export const CONTRACT_ID = process.env.NEXT_PUBLIC_CONTRACT_ID || ''
export const RPC_URL = process.env.NEXT_PUBLIC_RPC_URL || ''
export const NETWORK_PASSPHRASE = process.env.NEXT_PUBLIC_NETWORK_PASSPHRASE || ''
export const HORIZON_URL = process.env.NEXT_PUBLIC_HORIZON_URL || ''

/**
 * Validate contract ID format
 */
export function isValidContractId(id: string): boolean {
  return /^C[A-Z0-9]{55}$/.test(id)
}

/**
 * Format stroops to XLM
 */
export function stroopsToXLM(stroops: number): number {
  return stroops / 10_000_000
}

/**
 * Format XLM to stroops
 */
export function xlmToStroops(xlm: number): number {
  return xlm * 10_000_000
}

/**
 * Initialize Soroban contract connection
 */
export async function initializeContract() {
  // TODO: Initialize contract client with Soroban RPC
  if (!isValidContractId(CONTRACT_ID)) {
    throw new Error(`Invalid contract ID: ${CONTRACT_ID}`)
  }
  
  if (!RPC_URL) {
    throw new Error('RPC URL not configured')
  }
}
