# Enovate Architecture

## System Overview

Enovate is a decentralized crowdfunding platform built on Stellar's Soroban smart contracts. The system consists of three main components:

1. **Frontend** (Next.js + React)
2. **Smart Contracts** (Soroban/Rust)
3. **Supporting Infrastructure** (Scripts, documentation)

## Component Breakdown

### Frontend (apps/interface/)

The frontend is a Next.js 16 application with Tailwind CSS styling.

**Key Directories:**
- `src/app/` - Next.js App Router pages
- `src/components/` - Reusable React components
- `src/context/` - React Context for state (Wallet, etc.)
- `src/lib/` - Utility functions and Soroban helpers
- `src/types/` - TypeScript type definitions

**Core Features:**
- Wallet connection via Freighter
- Campaign browsing and creation
- Funding progress tracking
- Transaction signing and execution

### Smart Contracts

#### Crowdfund Contract (contracts/crowdfund/)

The main contract managing individual campaigns.

**Core Functions:**
- `initialize()` - Deploy new campaign
- `contribute()` - Accept contributions
- `withdraw()` - Creator claims funds
- `claim_refund()` - Contributor refund
- `get_campaign()` - Query campaign data

**State Storage:**
- Campaign metadata
- Contribution tracking
- Withdrawal status

#### Registry Contract (contracts/registry/)

Manages campaign discovery and registration.

**Core Functions:**
- `register_campaign()` - Register new campaign
- `list_campaigns()` - Get all campaigns
- `campaign_count()` - Total campaigns

## Data Flow

### Campaign Creation

```
User → Frontend → Wallet Sign → Deploy Crowdfund Contract → Register in Registry
```

### Campaign Contribution

```
User → Frontend → Select Campaign → Sign Tx → Contract Accept → Update Storage
```

### Fund Withdrawal

```
Creator → Frontend → Request Withdrawal → Sign Tx → Contract Release → Transfer XLM
```

## Technology Stack

### Frontend
- Next.js 16 (SSR, App Router)
- React 18 (Components, Hooks)
- TypeScript 5 (Type Safety)
- Tailwind CSS 3 (Styling)
- Freighter API (Wallet Integration)

### Smart Contracts
- Soroban SDK 24
- Rust 1.75+
- WASM Target (wasm32-unknown-unknown)

### Infrastructure
- Node.js 26.12.1+
- Docker & Docker Compose
- GitHub Actions (CI/CD)

## Key Design Decisions

### Pull-Based Refunds
Instead of a single transaction refunding all contributors, each contributor individually claims their refund. This approach:
- Prevents transaction failure at scale
- Reduces gas costs per refund
- Puts control in contributor's hands

### Multi-Token Support
Campaigns can accept any Stellar-native token, not just XLM:
- Enables diverse funding mechanisms
- Leverages Stellar's asset framework
- Supports stablecoins and custom tokens

### Decentralized Registry
Campaign discovery happens via an on-chain registry contract:
- No central database dependency
- Transparent campaign listings
- Queryable on-chain

## Deployment Strategy

### Development
- Local Rust/Node development
- Stellar testnet for testing
- Docker Compose for local environment

### Testnet
- Deploy contracts to Stellar testnet
- GitHub Actions automated deployment
- Automated testing pipeline

### Mainnet
- Production contract deployment
- Enhanced security review
- Monitoring and observability

## Security Considerations

### Smart Contracts
- Pull-based refunds prevent reentrancy
- Platform fee deducted at withdrawal
- Address verification for all sensitive ops

### Frontend
- Wallet verification required
- Transaction signing via Freighter
- No private keys stored in app

## Future Enhancements

- [ ] Campaign verification mechanism
- [ ] Dispute resolution system
- [ ] Matching fund feature
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] Mobile application

## References

- [Stellar Docs](https://developers.stellar.org/)
- [Soroban Docs](https://soroban.stellar.org/)
- [Freighter Wallet](https://www.freighter.app/)
