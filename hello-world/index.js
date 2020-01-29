console.log("from index.js");

const BrowserWindow = require("electron").remote.BrowserWindow;
const path = require("path");
const url = require("url");

const createNewWin = document.getElementById("createNewWin");

createNewWin.addEventListener("click", function(event) {
  let newWin = new BrowserWindow({
    title: "parent",
    width: 700,
    height: 500
  });

  let childWin = new BrowserWindow({
    title: "child",
    parent: newWin,
    modal: true,
    width: 400,
    height: 400,
    show: false
    //frame: false
  });

  newWin.loadFile("new.html");

  childWin.loadURL("https://github.com");
  childWin.once("ready-to-show", () => {
    childWin.show();
  });

  //newWin.webContents.openDevTools();

  newWin.on("closed", () => {
    newWin = null;
  });
});
