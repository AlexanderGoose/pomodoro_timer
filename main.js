const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'title',
        width: 500,
        height: 300
    });

    // const startUrl = url.format({
    //     pathname: path.join(__dirname, 'index.html'),

    //     protocol: 'file'
    // })

    // mainWindow.loadURL(startUrl);

    mainWindow.loadFile('index.html')
}

app.whenReady().then(createMainWindow);