console.log("main running");

const electron = require("electron");
const { app, BrowserWindow } = require("electron");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 400,
    height: 200,
    backgroundColor: "#2196f3",
    frame: false,
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  //win.webContents.openDevTools();

  win.once("ready-to-show", () => {
    win.show();
  });

  win.loadFile("index.html");

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
