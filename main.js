const { app, BrowserWindow } = require("electron")
const path = require('path')
const { autoUpdater } = require("electron-updater")



let win;

function createWindow() {

  win = new BrowserWindow({
    width: 1000, height: 800, webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile(path.join(__dirname, "index.html"))

  // win.once('ready-to-show', () => {
  //   autoUpdater.checkForUpdatesAndNotify();
  // });

}

app.on("ready", () => {
  createWindow()
})




