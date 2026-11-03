# Pushing Enovate to GitHub

This guide shows how to push your Enovate project to GitHub.

## Prerequisites

- Git installed and configured
- GitHub account
- SSH key or Personal Access Token set up (optional but recommended)

## Step-by-Step Instructions

### 1. Create a New Repository on GitHub

1. Go to https://github.com/new
2. Fill in the details:
   - **Repository name**: `enovate`
   - **Description**: `Decentralized crowdfunding platform on Stellar`
   - **Visibility**: Choose Public or Private
   - **Initialize**: Leave unchecked (we already have commits)
3. Click **Create repository**

### 2. Add Remote to Your Local Repository

```bash
cd c:\Users\USER\Documents\enovate

# Add the remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/enovate.git
```

**Using SSH (recommended if set up):**
```bash
git remote add origin git@github.com:YOUR_USERNAME/enovate.git
```

### 3. Rename Branch to Main (if needed)

```bash
git branch -M main
```

### 4. Push to GitHub

```bash
git push -u origin main
```

This will:
- Push all commits to GitHub
- Set up tracking for the main branch
- Make future pushes simpler (`git push`)

## Verification

1. Go to your repository: `https://github.com/YOUR_USERNAME/enovate`
2. Verify you see:
   - ✅ All files and folders
   - ✅ Commit history
   - ✅ README.md displayed
   - ✅ 30 files in the initial commit

## Common Issues

### "Repository not found"
- Check your repository URL
- If using HTTPS, verify you have credentials set up
- If using SSH, ensure your SSH key is added to GitHub

### "Permission denied (publickey)"
- SSH key issue. Use HTTPS instead or configure SSH properly
- See: https://docs.github.com/en/authentication

### "Fatal: A branch named 'master' already exists"
- Use `git branch -M main` to rename the local branch

## Next Steps

After pushing to GitHub:

1. **Invite collaborators** (if working with a team)
2. **Add branch protection rules** for main branch
3. **Set up GitHub Pages** (optional) for documentation
4. **Configure CI/CD** with GitHub Actions
5. **Add project board** for issue tracking

## Useful Git Commands

```bash
# Check remote configuration
git remote -v

# View commit history
git log --oneline

# View branch information
git branch -a

# See what will be pushed
git diff origin/main..HEAD

# Update from remote
git pull origin main
```

## Setting Up for Collaboration

### Create a develop branch
```bash
git checkout -b develop
git push -u origin develop
```

### Add collaborators
1. Go to Settings → Collaborators
2. Search for GitHub username
3. Send invitation

## Documentation

Your repository includes:
- **README.md** - Project overview and setup
- **CONTRIBUTING.md** - Contribution guidelines
- **SETUP.md** - Development setup guide
- **ARCHITECTURE.md** - System architecture
- **GETTING_STARTED.md** - Quick start guide

---

**Your Enovate project is now on GitHub!** 🎉

For more help, see GitHub Docs: https://docs.github.com/en/get-started
