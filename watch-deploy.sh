#!/bin/bash

# Automatic deployment script to watch for changes in frontend and backend
# This script watches for file changes and triggers automatic deployment

echo "👀 Watching for file changes..."
echo "Automatic deployment is active for Frontend and Backend changes"
echo "Press Ctrl+C to exit"

# Check if fswatch is installed
if ! command -v fswatch &> /dev/null; then
    echo "⚠️  fswatch not found. Installation:"
    echo "brew install fswatch"
    exit 1
fi

# Frontend watching function
watch_frontend() {
    echo "👀 Watching frontend files..."
    fswatch -o src/frontend/src | while read f; do
        echo "📝 Frontend change detected, starting deployment..."
        cd src/frontend
        npm run deploy
        cd ../..
        echo "✅ Frontend deployment completed"
    done &
}

# Backend watching function
watch_backend() {
    echo "👀 Watching backend files..."
    fswatch -o src/backend --exclude='bin|obj|publish' | while read f; do
        echo "📝 Backend change detected, starting deployment..."
        cd src/backend
        ./scripts/deploy.sh
        cd ../..
        echo "✅ Backend deployment completed"
    done &
}

# Cleanup function
cleanup() {
    echo ""
    echo "🛑 Stopping watch..."
    jobs -p | xargs kill
    exit 0
}

# SIGINT (Ctrl+C) signal handler
trap cleanup SIGINT

# Start both watchers
watch_frontend
watch_backend

# Infinite loop to keep the script running
while true; do
    sleep 1
done