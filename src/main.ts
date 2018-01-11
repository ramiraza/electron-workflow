import { app, BrowserWindow } from 'electron'
let win: BrowserWindow;

let createWindow = () => {
  win = new BrowserWindow({
    height: 650,
    width: 650,
    alwaysOnTop: true
  })
  win.loadURL(`file://${__dirname}/index.html`)
  win.on('closed', () => { win = null })
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (win === null ) createWindow()
})