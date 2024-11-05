const { app, BrowserWindow } = require('electron');

// Creates the main application window
function createWindow() {
  const mainWindow = new BrowserWindow({
    fullscreen: true, // Opens in fullscreen mode
    webPreferences: {
      nodeIntegration: true, // Enables integration with Node.js in renderer
      contextIsolation: false, // Allows main process and renderer to share context
    },
  });

  // Load the main HTML file
  mainWindow.loadFile('index.html');
}

// Initialize the app and create the main window when ready
app.whenReady().then(createWindow);
