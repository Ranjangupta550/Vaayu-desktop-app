
const path = require('path');
require('dotenv').config({path: path.join(__dirname, '../.env')});

const { app, BrowserWindow, ipcMain } = require('electron');

function createWindow() {
const win = new BrowserWindow({
    width: 1280,
    height: 800,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
        color: '#000000',
        height: 24,
        symbolColor: '#ffffff'
    },
    webPreferences: {
        preload: path.join(__dirname, 'preload.cjs'), // optional for now
        contextIsolation: true,
        nodeIntegration: false, // Disable Node.js integration for security
          additionalArguments: [`--mapbox_token=${process.env.MAPBOX_TOKEN}`], // 👈 pass to preload

    },
});

  // Dev: Load Vite dev server
  win.loadURL('http://localhost:5173');
  win.webContents.openDevTools();

  // Uncomment to open DevTools on launch
  // win.webContents.openDevTools();
}

ipcMain.handle('token', () => {
  return process.env.MAPBOX_TOKEN || null;
});


app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
