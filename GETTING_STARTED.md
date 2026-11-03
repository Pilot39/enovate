# Getting Started with Enovate

Welcome to Enovate! This guide will help you get the project running locally.

## Quick Start

### 1. Clone and Install

```bash
cd enovate
npm install
```

### 2. Setup Environment

```bash
cp apps/interface/.env.example apps/interface/.env.local
# Edit with your contract details
```

### 3. Start Development

```bash
npm run dev
```

Visit http://localhost:3000

## What's Included

### Frontend (apps/interface/)
- ✅ Next.js 16 setup with App Router
- ✅ Tailwind CSS styling
- ✅ Freighter wallet context
- ✅ TypeScript configuration
- ✅ Jest & ESLint setup
- ✅ Sample pages and components

### Smart Contracts (contracts/)
- ✅ Crowdfund contract structure
- ✅ Registry contract structure
- ✅ Cargo workspaces
- ✅ Soroban SDK integration

### Documentation
- ✅ README with full architecture
- ✅ Contributing guidelines
- ✅ Setup instructions
- ✅ Architecture documentation

## Project Structure

```
enovate/
├── apps/interface/           # Frontend (Next.js)
│   ├── src/
│   │   ├── app/             # Pages & layouts
│   │   ├── components/      # React components
│   │   ├── context/         # State management
│   │   ├── lib/             # Utilities
│   │   └── types/           # TypeScript types
│   ├── public/              # Static files
│   └── package.json
├── contracts/               # Smart contracts
│   ├── crowdfund/          # Main contract
│   └── registry/           # Registry contract
├── docs/                    # Documentation
├── README.md               # Main docs
└── CONTRIBUTING.md         # Contribution guide
```

## Available Commands

### Frontend
```bash
npm run dev              # Start dev server
npm run build            # Build for production
npm run lint             # Run ESLint
npm run type-check       # TypeScript check
npm run test             # Run tests
npm run test:coverage    # Coverage report
npm run format           # Format code
```

### Smart Contracts
```bash
npm run test:contracts   # Run contract tests
```

### All
```bash
npm run test:all         # Run all tests
```

## Next Steps

1. **Read the README** - Understand the full architecture
2. **Check CONTRIBUTING.md** - Learn how to contribute
3. **Review SETUP.md** - Detailed development setup
4. **Explore src/** - Understand the codebase structure

## Building Features

This starter includes ~10% of the full Fund-My-Cause codebase. Key areas to expand:

### Frontend Enhancements
- [ ] Campaign listing page with filters
- [ ] Campaign detail pages
- [ ] Create campaign form
- [ ] User dashboard
- [ ] Transaction history

### Smart Contracts
- [ ] Full contribution tracking
- [ ] Refund mechanism
- [ ] Platform fee logic
- [ ] Campaign state management
- [ ] Registry functionality

### Infrastructure
- [ ] GitHub Actions CI/CD
- [ ] Docker configuration
- [ ] Testnet deployment scripts
- [ ] Testing suite expansion

## Resources

- [Stellar Docs](https://developers.stellar.org/)
- [Soroban Guide](https://soroban.stellar.org/)
- [Freighter Wallet](https://www.freighter.app/)
- [Next.js Docs](https://nextjs.org/docs)

## Support

- 📖 Check the [docs](docs/) folder
- 💬 Open a GitHub issue
- 🤝 See [CONTRIBUTING.md](CONTRIBUTING.md) for help

---

**Happy coding!** 🚀
