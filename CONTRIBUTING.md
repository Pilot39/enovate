# Contributing to Enovate

Thank you for your interest in contributing to Enovate! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

We are committed to providing a welcoming and inclusive environment. Please review and follow our Code of Conduct in all interactions.

## Getting Started

### Prerequisites

- Node.js v26.12.1+
- Git
- Freighter wallet browser extension (for testing)
- Basic knowledge of TypeScript, React, or Rust (depending on contribution area)

### Initial Setup

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/yourusername/enovate.git
   cd enovate
   ```
3. Add upstream remote:
   ```bash
   git remote add upstream https://github.com/enovate-org/enovate.git
   ```
4. Install dependencies:
   ```bash
   npm install
   ```

### Branch Naming Convention

Use descriptive branch names:

- `feat/feature-name` - New features
- `fix/bug-description` - Bug fixes
- `docs/doc-name` - Documentation
- `refactor/component-name` - Code refactoring
- `test/test-description` - Test additions

Example: `feat/campaign-search-filter` or `fix/wallet-connection-timeout`

## Development Workflow

### 1. Update from Upstream

```bash
git fetch upstream
git rebase upstream/main
```

### 2. Create Feature Branch

```bash
git checkout -b feat/your-feature
```

### 3. Make Changes

- Write clean, readable code
- Follow project conventions
- Update relevant tests
- Update documentation if needed

### 4. Test Your Changes

#### Frontend
```bash
cd apps/interface
npm run lint
npm run type-check
npm run test
npm run test:coverage
```

#### Smart Contracts
```bash
cd contracts/crowdfund
cargo test
cargo fmt
cargo clippy
```

### 5. Commit Changes

Use conventional commits:

```bash
git commit -m "feat: add campaign filtering"
git commit -m "fix: resolve wallet connection issue"
```

### 6. Push to Your Fork

```bash
git push origin feat/your-feature
```

### 7. Open Pull Request

Navigate to GitHub and open a PR with:
- Clear title following conventional commits
- Detailed description of changes
- Reference to related issues
- Screenshots (if UI changes)

## Code Style

### TypeScript/React

- Use TypeScript for type safety
- Follow existing code patterns
- Use functional components
- Use React hooks for state management
- Add JSDoc comments for complex functions

Example:
```typescript
/**
 * Fetches campaign data from Soroban contract
 * @param contractId - The contract address
 * @returns Campaign details or null if not found
 */
async function fetchCampaign(contractId: string): Promise<Campaign | null> {
  // Implementation
}
```

### Rust/Smart Contracts

- Follow Rust naming conventions (snake_case for functions)
- Use meaningful variable names
- Add doc comments for public functions
- Keep functions focused and testable

Example:
```rust
/// Initialize a new campaign on the blockchain
/// 
/// # Arguments
/// * `creator` - The campaign creator's address
/// * `goal` - The funding goal in stroops
pub fn initialize(creator: Address, goal: i128) -> Result<(), Error> {
    // Implementation
}
```

### CSS/Tailwind

- Use Tailwind utility classes
- Create reusable component classes in components/
- Follow mobile-first responsive design
- Use consistent spacing (spacing scale: 4, 8, 12, 16, etc.)

## Testing Requirements

### Frontend Tests

- Minimum 80% code coverage
- Write tests for:
  - Components rendering
  - User interactions
  - Edge cases
  - Error states

Example:
```typescript
describe('CampaignCard', () => {
  it('renders campaign title', () => {
    const campaign = { id: '1', title: 'Test Campaign' };
    render(<CampaignCard campaign={campaign} />);
    expect(screen.getByText('Test Campaign')).toBeInTheDocument();
  });
});
```

### Contract Tests

- Test all public functions
- Include failure cases
- Verify contract state changes

Example:
```rust
#[test]
fn test_campaign_initialization() {
    let campaign = initialize_campaign(1000);
    assert_eq!(campaign.goal, 1000);
}
```

## Documentation

- Update README.md if your changes affect user-facing behavior
- Add code comments for complex logic
- Update API documentation if contract interfaces change
- Include examples for new features

## Pull Request Review

### What Maintainers Look For

- ✅ Code follows style guidelines
- ✅ Tests pass and coverage maintained
- ✅ No breaking changes (or clearly documented)
- ✅ Documentation updated
- ✅ Commits follow conventional format
- ✅ No security vulnerabilities

### Addressing Feedback

1. Read feedback carefully
2. Make requested changes in new commits
3. Push updates to your branch
4. Respond to feedback comments
5. Request re-review when ready

## Reporting Issues

### Bug Reports

Include:
- Clear description of the bug
- Steps to reproduce
- Expected behavior
- Actual behavior
- Environment (browser, Node version, etc.)
- Screenshots if applicable

### Feature Requests

Include:
- Clear description of the feature
- Use case/motivation
- Proposed implementation (optional)
- Related issues or discussions

## Project Structure

```
enovate/
├── apps/interface/           # Frontend application
│   ├── src/app/             # Next.js pages
│   ├── src/components/      # React components
│   ├── src/context/         # Context providers
│   ├── src/lib/             # Utilities & helpers
│   └── src/types/           # TypeScript types
├── contracts/               # Soroban smart contracts
│   ├── crowdfund/          # Main contract
│   └── registry/           # Registry contract
├── docs/                    # Documentation
└── scripts/                # Automation scripts
```

## Useful Commands

### Frontend Development

```bash
cd apps/interface

# Start dev server
npm run dev

# Run linter
npm run lint

# Run type checking
npm run type-check

# Run tests
npm run test
npm run test:coverage

# Build for production
npm run build
```

### Smart Contract Development

```bash
cd contracts/crowdfund

# Run tests
cargo test

# Format code
cargo fmt

# Lint code
cargo clippy

# Build WASM
cargo build --target wasm32-unknown-unknown --release
```

### Root Level

```bash
# Install all dependencies
npm install

# Start development environment
npm run dev

# Run all tests
npm run test:all

# Run linting across project
npm run lint:all
```

## Deployment

For testnet deployment:

1. Ensure all tests pass
2. Update version numbers if needed
3. Create release notes
4. Push to `develop` branch
5. GitHub Actions will deploy automatically

## Questions or Need Help?

- Check existing issues and discussions
- Review documentation in `/docs`
- Open a GitHub Discussion for questions
- Join our community Discord (link in README)

## Recognition

Contributors are recognized in:
- Release notes
- GitHub contributors page
- Project documentation (for significant contributions)

## License

By contributing to Enovate, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to Enovate!** 🚀
