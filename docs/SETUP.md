# Local Development Setup

This guide covers setting up the Enovate development environment locally.

## Prerequisites

- Node.js v26.12.1 or higher
- npm v12.0.0 or higher
- Rust 1.75+ (for smart contract development)
- Git
- Freighter Wallet browser extension
- Docker & Docker Compose (optional)

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/enovate-org/enovate.git
cd enovate
```

### 2. Install Node.js Dependencies

```bash
npm install
```

This installs dependencies for all workspaces (frontend + contracts).

### 3. Setup Rust (Optional, for contract development)

```bash
# Install Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Add Soroban target
rustup target add wasm32-unknown-unknown

# Verify installation
cargo --version
rustc --version
```

### 4. Environment Configuration

Create environment file for frontend:

```bash
cp apps/interface/.env.example apps/interface/.env.local
```

Edit `apps/interface/.env.local`:

```
NEXT_PUBLIC_CONTRACT_ID=C123...
NEXT_PUBLIC_RPC_URL=https://soroban-testnet.stellar.org:443
NEXT_PUBLIC_NETWORK_PASSPHRASE=Test SDF Network ; September 2015
```

## Running the Development Server

### Frontend Only

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### Smart Contracts

```bash
# Run contract tests
npm run test:contracts

# Build WASM
cd contracts/crowdfund
cargo build --target wasm32-unknown-unknown --release
```

## Docker Setup

```bash
# Build and start
docker compose up --build

# Access at http://localhost:3000
```

## Testing

```bash
# Frontend tests
npm run test

# Contract tests
npm run test:contracts

# All tests
npm run test:all

# Coverage report
npm run test:coverage
```

## Code Quality

```bash
# Lint frontend
npm run lint

# Type checking
npm run type-check

# Format code
npm run format
```

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Node Modules Issues

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### Rust Build Issues

```bash
# Update Rust
rustup update

# Clean Cargo cache
cargo clean
```

## Next Steps

- Read [CONTRIBUTING.md](../CONTRIBUTING.md) for contribution guidelines
- Check [API.md](API.md) for smart contract reference
- Review [ARCHITECTURE.md](ARCHITECTURE.md) for design details
