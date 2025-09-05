#!/bin/bash

# Portfolio Development Startup Script
# This script helps resolve common localhost issues

echo "🚀 Starting Portfolio Development Server..."

# Check if port 5173 is already in use
if lsof -Pi :5173 -sTCP:LISTEN -t >/dev/null ; then
    echo "⚠️  Port 5173 is already in use. Killing existing processes..."
    lsof -ti:5173 | xargs kill -9
    sleep 2
fi

# Clear Vite cache
echo "🧹 Clearing Vite cache..."
rm -rf node_modules/.vite

# Clear browser cache (optional)
echo "🌐 Clearing browser cache..."
echo "Please manually clear your browser cache or use Ctrl+Shift+R (Cmd+Shift+R on Mac)"

# Start development server with network access
echo "▶️  Starting development server with network access..."
npm run dev -- --host 0.0.0.0
