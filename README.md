# VISTA

VISTA is a standalone Chromium-powered desktop browser built with Electron.

## Separate products
- **Browser:** the actual desktop application in the repository root.
- **Website:** the `site/` directory, deployed to Netlify at `vista.mythical.buzz`.
- **Downloads:** `vista.mythical.buzz/download/`, with installers distributed through GitHub Releases.

## Development
```bash
npm install
npm start
```

## Windows installer
```bash
npm run dist
```
The installer is generated in `dist/`.

## Roadmap
- [x] Standalone Chromium browser
- [x] Real multi-tab UI
- [x] Address/search bar
- [x] Back / forward / reload
- [x] Separate website
- [x] Dedicated download page
- [ ] GitHub Actions Windows builds
- [ ] Bookmarks
- [ ] History
- [ ] Downloads manager
- [ ] Settings
- [ ] Auto-updates
- [ ] Signed releases
