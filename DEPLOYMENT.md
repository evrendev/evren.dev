# Automatic Deployment Guide

This guide contains the necessary steps to automatically deploy your Vue.js frontend and .NET backend applications to your servers via FTP.

## 🚀 Setup

### 1. Frontend Dependencies

```bash
cd src/frontend
npm install  # This will create package-lock.json automatically
```

### 2. Backend Dependencies (for macOS)

```bash
# Install lftp (for FTP deployment)
brew install lftp

# Install fswatch (for file watching)
brew install fswatch
```

### 3. Configure FTP Credentials

#### For Frontend:

```bash
cp src/frontend/.env.deploy.example src/frontend/.env.deploy
# Edit the file and enter your FTP credentials
```

#### For Backend:

```bash
cp src/backend/.env.deploy.example src/backend/.env.deploy
# Edit the file and enter your API FTP credentials
```

## 📝 Usage

### Manual Deployment

#### Frontend:

```bash
cd src/frontend
npm run deploy
```

#### Backend:

```bash
cd src/backend
./scripts/deploy.sh
```

### Automatic Deployment (File Watching)

To watch and automatically deploy both applications with a single command:

```bash
./watch-deploy.sh
```

This command:

- Watches frontend changes (`src/frontend/src`)
- Watches backend changes (`src/backend`)
- Automatically builds and deploys when changes are detected

### Automatic Deployment with GitHub Actions

For automatic deployment when pushing to GitHub repository:

1. Go to GitHub repository settings > Secrets and variables > Actions
2. Add the following secrets:

#### For Frontend:

- `FTP_HOST`: evren.dev
- `FTP_USERNAME`: Your FTP username
- `FTP_PASSWORD`: Your FTP password

#### For Backend:

- `FTP_HOST_API`: api.evren.dev
- `FTP_USERNAME_API`: Your API FTP username
- `FTP_PASSWORD_API`: Your API FTP password

## 🔧 NPM Scripts

Available scripts in the frontend folder:

- `npm run deploy`: Build + FTP upload
- `npm run watch-deploy`: Watch file changes and auto deploy
- `npm run build`: Build only
- `npm run upload`: FTP upload only

## 📁 File Structure

```
evren.dev/
├── .github/workflows/deploy.yml    # GitHub Actions workflow
├── watch-deploy.sh                 # Auto-watch script
├── src/
│   ├── frontend/
│   │   ├── .env.deploy            # FTP settings (in gitignore)
│   │   ├── .env.deploy.example    # FTP settings template
│   │   └── scripts/deploy.js      # Frontend deployment script
│   └── backend/
│       ├── .env.deploy            # API FTP settings (in gitignore)
│       ├── .env.deploy.example    # API FTP settings template
│       └── scripts/deploy.sh      # Backend deployment script
```

## 🔒 Security

- `.env.deploy` files should be added to `.gitignore`
- Never commit FTP passwords to the repository
- Use secrets for GitHub Actions

## ⚠️ Notes

- Grant execution permissions to script files on first setup:

  ```bash
  chmod +x watch-deploy.sh
  chmod +x src/backend/scripts/deploy.sh
  ```

- `lftp` is required for backend deployment
- `fswatch` is required for file watching
- If using Windows, WSL or PowerShell scripts may be needed
