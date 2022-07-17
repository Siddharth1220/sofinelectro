const {app, BrowserWindow} = require('electron')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1300,
    height: 700,
    autoHideMenuBar: true,
    frame: false,
    icon:'logo.png',
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadFile('loading.html')
  
  setTimeout(() => mainWindow.loadFile('index.html'), 100)




  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('resize', function(e,x,y){
  mainWindow.setSize(x, y);
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})