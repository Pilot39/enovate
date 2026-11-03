# Enovate

A decentralized innovation funding platform built on the Stellar network using Soroban smart contracts. Enovate lets anyone propose innovative projects, secure funding from the community, and automatically release or refund funds based on whether the goal is met.

## 🚀 Overview

Enovate is a community-driven crowdfunding platform for innovative ideas and projects. Built on Stellar's high-speed, low-cost blockchain infrastructure, it enables creators to:

- **Launch campaigns** with clear funding goals and deadlines
- **Accept contributions** in XLM or any Stellar-native token
- **Manage funds securely** with pull-based refunds and automated payouts
- **Build community** around innovative projects globally

## 📋 Features

- ✅ On-chain campaign creation and management
- ✅ Real-time funding progress tracking
- ✅ Automatic refund mechanism (pull-based model)
- ✅ Multi-token support (XLM + Stellar tokens)
- ✅ Platform fee configuration
- ✅ Campaign metadata and social integration
- ✅ Wallet integration (Freighter)
- ✅ Responsive web interface

## 🏗️ Architecture

### Project Structure

```
enovate/
├── apps/
│   └── interface/               # Next.js 16 frontend
│       ├── src/
│       │   ├── app/            # Next.js App Router
│       │   ├── components/     # Reusable UI components
│       │   ├── context/        # React Context (Wallet, etc.)
│       │   ├── lib/            # Utilities & Soroban helpers
│       │   ├── styles/         # Tailwind CSS
│       │   └── types/          # TypeScript types
│       ├── public/             # Static assets
│       └── package.json
├── contracts/
│   ├── crowdfund/              # Main Soroban contract (Rust)
│   │   ├── src/
│   │   │   └── lib.rs
│   │   └── Cargo.toml
│   └── registry/               # Campaign registry contract
│       ├── src/
│       │   └── lib.rs
│       └── Cargo.toml
├── scripts/
│   ├── deploy.sh               # Deployment automation
│   └── setup.sh                # Development setup
├── docs/
│   ├── ARCHITECTURE.md         # Detailed architecture
│   ├── SETUP.md                # Local development guide
│   └── API.md                  # Smart contract API reference
├── .github/
│   └── workflows/
│       ├── rust_ci.yml         # Rust CI/CD
│       └── frontend_ci.yml     # Frontend CI/CD
├── Cargo.toml                  # Rust workspace
├── package.json                # Node workspace
└── README.md                   # This file
```

### How It Works

1. **Creator** deploys a campaign with funding goal, deadline, and minimum contribution
2. **Contributors** pledge tokens before the deadline
3. **If goal met**: Creator withdraws funds (minus optional platform fee)
4. **If goal not met**: Contributors claim individual refunds (pull-based model)

### Pull-Based Refund Model

Rather than a single transaction refunding all contributors (which would fail at scale), each contributor calls `refund_single()` to claim their own refund. This approach is:

- ✅ Gas-efficient
- ✅ Scalable
- ✅ Eliminates single points of failure

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **State Management**: React Context API
- **Wallet**: Freighter (@stellar/freighter-api)

### Smart Contracts
- **Language**: Rust
- **Framework**: Soroban
- **Blockchain**: Stellar Network
- **Testing**: Rust test framework

### Infrastructure
- **Node.js**: v26+
- **Package Manager**: npm (workspaces)
- **Container**: Docker & Docker Compose
- **CI/CD**: GitHub Actions

## 📦 Installation

### Prerequisites

- Node.js v26.12.1 or higher
- Rust 1.75+ (for contract development)
- Docker & Docker Compose (optional)
- Freighter Wallet browser extension

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/enovate.git
   cd enovate
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp apps/interface/.env.example apps/interface/.env.local
   # Edit .env.local with your contract ID and RPC URL
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Access the app**
   - Open http://localhost:3000 in your browser

### Docker Setup

```bash
# Build and start with Docker Compose
docker compose up --build

# App will be available at http://localhost:3000
```

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| [SETUP.md](docs/SETUP.md) | Detailed local development setup |
| [ARCHITECTURE.md](docs/ARCHITECTURE.md) | System architecture & design decisions |
| [API.md](docs/API.md) | Smart contract API reference |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Contribution guidelines |

## 🔗 Smart Contract API

### Core Functions

| Function | Description |
|----------|-------------|
| `initialize()` | Create a new campaign |
| `contribute(amount)` | Pledge tokens to a campaign |
| `withdraw()` | Creator claims funds after success |
| `refund_single()` | Contributor claims refund if goal not met |
| `get_stats()` | Get campaign statistics |

See [API.md](docs/API.md) for complete reference.

## 🤝 Contributing

We welcome contributions from the community! Whether you're fixing bugs, adding features, or improving documentation, your help makes Enovate better.

### Getting Started with Development

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/enovate.git
   cd enovate
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feat/your-feature-name
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Make your changes**
   - Follow the code style guidelines
   - Write tests for new features
   - Update documentation

5. **Commit your changes**
   ```bash
   git commit -m "feat: add your feature description"
   ```

6. **Push to your fork**
   ```bash
   git push origin feat/your-feature-name
   ```

7. **Open a Pull Request**
   - Provide a clear description of changes
   - Link relevant issues
   - Ensure CI/CD checks pass

### Development Guidelines

#### Commit Convention
We use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Code style (formatting, missing semicolons, etc.)
- `refactor:` Code refactoring without feature change
- `perf:` Performance improvement
- `test:` Adding or updating tests
- `chore:` Dependency updates, tooling changes

Example:
```bash
git commit -m "feat: add campaign creation modal"
git commit -m "fix: resolve wallet connection timeout"
git commit -m "docs: update API reference"
```

#### Code Quality Standards

**Frontend (TypeScript/React)**
- Maintain >80% test coverage
- Use TypeScript for type safety
- Follow React best practices
- Use Tailwind CSS for styling
- Run linting: `npm run lint`
- Run tests: `npm run test`

**Smart Contracts (Rust)**
- Follow Rust naming conventions
- Write comprehensive tests
- Document public functions
- Use the Soroban SDK correctly
- Run: `cargo test`

#### Testing

Run tests locally:

```bash
# Frontend tests
cd apps/interface
npm run test
npm run test:coverage

# Contract tests
cd contracts/crowdfund
cargo test
```

#### Setting Up Your Development Environment

```bash
# Install all dependencies
npm install

# Setup Rust (if contributing to contracts)
rustup toolchain install 1.75
rustup target add wasm32-unknown-unknown

# Start development server
npm run dev

# Watch for changes and rebuild
npm run watch
```

### Code Review Process

1. **Submit PR** with clear description
2. **Automated checks** run (linting, tests, type checking)
3. **Code review** by maintainers
4. **Address feedback** and push updates
5. **Merge** when approved

### Pull Request Template

```markdown
## Description
Brief description of your changes.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Code refactoring

## Related Issues
Fixes #(issue number)

## Testing
Describe how you tested these changes.

## Checklist
- [ ] Tests pass locally
- [ ] New tests added (if applicable)
- [ ] Documentation updated
- [ ] Conventional commits used
- [ ] No breaking changes
```

### Areas for Contribution

#### Frontend
- [ ] Improve UI/UX components
- [ ] Add campaign discovery features
- [ ] Enhance wallet integration
- [ ] Add multi-language support
- [ ] Improve mobile responsiveness

#### Smart Contracts
- [ ] Add campaign verification mechanism
- [ ] Implement dispute resolution
- [ ] Optimize gas usage
- [ ] Add additional token support
- [ ] Implement campaign matching funds

#### Documentation
- [ ] Add tutorial guides
- [ ] Create video walkthroughs
- [ ] Improve API documentation
- [ ] Add troubleshooting guides
- [ ] Contribute examples

#### Testing & QA
- [ ] Write E2E tests
- [ ] Improve test coverage
- [ ] Test on testnet
- [ ] Security audits
- [ ] Performance testing

### Community & Support

- **Discussions**: GitHub Discussions for ideas and questions
- **Issues**: GitHub Issues for bug reports and feature requests
- **Discord**: Join our community Discord (link TBA)
- **Email**: For security issues, contact security@enovate.org

## 🔒 Security

For security vulnerabilities, please do **not** open a public issue. Instead:

1. Email: security@enovate.org
2. Include:
   - Vulnerability description
   - Steps to reproduce
   - Potential impact
   - Your suggested fix (optional)

We practice responsible disclosure and will credit researchers unless anonymity is requested.

### Security Best Practices

- **Always verify contract IDs** before interacting
- **Use testnet first** to test campaigns
- **Keep private keys secure** in Freighter wallet
- **Audit contract deployments** on-chain
- **Review platform fees** before contributing

## 📖 Learning Resources

- [Stellar Documentation](https://developers.stellar.org/)
- [Soroban Documentation](https://soroban.stellar.org/)
- [Freighter Wallet Guide](https://www.freighter.app/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built on [Stellar Network](https://stellar.org/)
- Inspired by crowdfunding platforms like Kickstarter
- Thanks to all contributors and community members
- Special thanks to the Soroban team

## 📞 Contact

- **Website**: https://enovate.org (TBA)
- **Email**: hello@enovate.org
- **GitHub**: https://github.com/enovate-org/enovate
- **Twitter**: @EnovateIO

---

**Ready to contribute?** Start with [CONTRIBUTING.md](CONTRIBUTING.md) and join our community! 🚀
