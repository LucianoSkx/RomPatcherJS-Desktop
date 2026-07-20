const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 700,
        height: 600,
        resizable: true,
        title: 'Rom Patcher JS',
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        }
    });

    const indexPath = app.isPackaged
        ? path.join(__dirname, 'index.html')
        : path.join(__dirname, '..', 'index.html');

    mainWindow.loadFile(indexPath);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});

app.on('window-all-closed', () => {
    app.quit();
});
