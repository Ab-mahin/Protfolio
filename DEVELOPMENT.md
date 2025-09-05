# Portfolio Development Guide

## Quick Start

### Option 1: Use the startup script (Recommended)
```bash
./start-dev.sh
```

### Option 2: Manual start
```bash
npm run dev
```

### Option 3: Clean start (if having issues)
```bash
npm run dev:clean
```

## Network Access

Your development server is now configured to be accessible from:
- **Local:** `http://localhost:5173`
- **Network:** `http://192.168.0.130:5173` (accessible from other devices on your network)
- **Any device on your network:** `http://[YOUR_IP]:5173`

## Troubleshooting Localhost Issues

### Problem: Localhost doesn't load properly
**Solutions:**
1. **Clear Vite cache:**
   ```bash
   rm -rf node_modules/.vite
   npm run dev
   ```

2. **Kill existing processes:**
   ```bash
   lsof -ti:5173 | xargs kill -9
   npm run dev
   ```

3. **Clear browser cache:**
   - Press `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
   - Or manually clear browser cache

4. **Check for port conflicts:**
   ```bash
   lsof -i :5173
   ```

### Problem: Hot reload not working
**Solutions:**
1. **Restart development server:**
   ```bash
   npm run dev:clean
   ```

2. **Check file watching:**
   - Ensure your system supports file watching
   - On some systems, Vite will automatically use polling

### Problem: Blank page or errors
**Solutions:**
1. **Check browser console for errors**
2. **Use the error boundary** - errors will be caught and displayed
3. **Check network tab** for failed requests
4. **Restart with clean cache:**
   ```bash
   npm run dev:clean
   ```

## Development Features Added

### ✅ Error Boundary
- Catches React errors gracefully
- Shows user-friendly error messages
- Displays detailed errors in development mode

### ✅ Lazy Loading
- Components load on demand
- Better performance and faster initial load
- Loading states for better UX

### ✅ Proper Routing
- Handles 404 pages
- Prevents blank pages
- Better navigation experience

### ✅ Optimized Vite Config
- Better file watching
- Improved hot module replacement
- External connection support
- Error overlay for development

### ✅ Development Scripts
- `npm run dev` - Standard development
- `npm run dev:clean` - Clean start with cache clearing
- `npm start` - Alias for dev command

## Browser Compatibility

- **Chrome/Edge:** Full support
- **Firefox:** Full support
- **Safari:** Full support
- **Mobile browsers:** Responsive design

## Performance Tips

1. **Use the startup script** for consistent results
2. **Clear cache regularly** if experiencing issues
3. **Check browser console** for any JavaScript errors
4. **Use incognito/private mode** to test without cache

## Common Commands

```bash
# Start development server
npm run dev

# Clean start (clears cache)
npm run dev:clean

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## If Issues Persist

1. **Update dependencies:**
   ```bash
   npm update
   ```

2. **Clear all caches:**
   ```bash
   rm -rf node_modules/.vite
   rm -rf dist
   npm install
   ```

3. **Check Node.js version:**
   ```bash
   node --version
   ```
   Recommended: Node.js 18+ or 20+

4. **Restart your computer** (last resort)

## Support

If you continue to experience issues:
1. Check the browser console for errors
2. Try a different browser
3. Check your firewall/antivirus settings
4. Ensure no other applications are using port 5173
