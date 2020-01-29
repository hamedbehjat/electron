console.log("main running");

const electron = require("electron");
const { app, BrowserWindow } = require("electron");

let win;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: "#3a3a3a",
    webPreferences: {
      nodeIntegration: true
    }
  });

  // and load the index.html of the app.
  win.loadFile("index.html");

  // Open the DevTools.
  //win.webContents.openDevTools();

  // Emitted when the window is closed.
  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);

// For Mac

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
