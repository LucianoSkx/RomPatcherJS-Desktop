# Rom Patcher JS — Desktop Edition

**Desktop GUI wrapper** for [RomPatcher.js](https://github.com/marcrobledo/RomPatcher.js) by [Marc Robledo](https://github.com/marcrobledo).

All credit for the ROM patching engine and web UI goes to the original author. This repository adds an **Electron** desktop wrapper so the patcher can be used as a native Linux application (AppImage) without needing a browser.

## Features

- Same patching capabilities as the original: IPS, UPS, APS, BPS, RUP, PPF, EBP, BSDiff, xdelta, and more
- Native desktop window (no browser needed)
- Reset button to clear all fields
- Supports both **apply patch** and **create patch** modes

## Original Project

RomPatcher.js: <https://github.com/marcrobledo/RomPatcher.js>

Original author: **Marc Robledo** — all rights and credits for the patching logic and web interface belong to him.

## How to Build (Linux AppImage)

Prerequisites: Node.js >= 18 and npm.

```bash
# 1. Install original dependencies
npm install

# 2. Go to the electron wrapper directory
cd electron

# 3. Install electron and electron-builder
npm install

# 4. Build the AppImage
npm run build

# The AppImage will be in electron/dist/
```

You can also run the desktop app in development mode without building:

```bash
cd electron
npm start
```

## Project Structure

```
├── rom-patcher-js/       # Original patching engine (untouched)
├── webapp/               # Original web UI (with minor additions)
├── electron/             # Electron desktop wrapper
│   ├── main.js           # Electron main process
│   ├── package.json      # Node dependencies for the wrapper
│   └── builder-config.json  # electron-builder configuration
├── index.html            # Web UI entry point
└── ...
```

## License

MIT — same as the original project.
