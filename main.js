const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'title',
        width: 425,
        height: 225,
        alwaysOnTop: true,
        resizable: false,
        backgroundColor: '#e1b382',
        titleBarStyle: 'default'
    });

    mainWindow.loadFile('index.html')
}

app.whenReady().then(createMainWindow);