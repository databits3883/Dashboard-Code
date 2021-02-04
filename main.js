const electron = require('electron');
const ipc = electron.ipcMain
const url = require('url');
const path = require('path');

const ntClient = require('wpilib-nt-client')
const client = new ntClient.Client()

const robotAddress = '10.38.83.2'
var robotCoordinates;
var mainnum = 0;
var shouldLoop = true;
var videoStreamURL = 'http://limelight.local>:5800'
//var pointer = document.getElementById('pointer.png'),
var angle = 0;

const dialog = electron.dialog

ipc.on('open-error-dialog', function(event){
    //dialog.showErrorBox('error message','demo')
    //event.sender.send('opened-error-dialog','yuh')
    app.quit
})



//const counters = 




const {app, BrowserWindow, Menu} = electron;

let mainWindow;

app.on('ready', function(){
    mainWindow = new BrowserWindow({
        width: 1600,
        height: 900,
        icon: __dirname + '/vglogo.png',
        
    });

    mainWindow.loadURL(`file://${__dirname}/mainWindow.html`)

    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate)

    Menu.setApplicationMenu(mainMenu)
})





function connectToRobot(){
    client.start((isConnected, err)=>{
        console.log({isConnected, err});

    }
    ,robotAddress)
}

function changeNumber(num){
    num = num+1;
    mainnum = num;

}
function outputNum(){
    console.log(3)
}

robotCoordinates = client.getEntry('RobotCoordinates')

//const {BrowserWindow} = require('electron')

//const win = new BrowserWindow({width: 800, height: 600})

const mainMenuTemplate = [
    {
        label: 'File',
        submenu:[
            {
                label: 'Quit',
                click(){
                    app.quit()
                }
            }
        ]
    }
    ,
    {
        label: 'Connection',
        submenu:[
            {
                label: 'Connect to RoboRIO',
                click(){
                    connectToRobot()

                }

            }
        ]
    }
    ,
    {
        label: 'Vision',
        submenu:[
            {
                label: 'Toggle Camera'
                
            }
            ,
            {
                label: 'Select Pipeline',
                submenu:[
                    {
                        label: '0'

                    }
                    ,
                    {
                        label: '1'

                    }
                    ,
                    {
                        label: '2'

                    }
                    ,
                    {
                        label: '3'

                    }
                    ,

                ]
            }
        ]
    }
];
var i = 1;

function timedLoop(){
    setTimeout(function() {
        
        getElementById('pointer.png').style.rotate(i);
        i++;
        if (shouldLoop) {
            timedLoop();
        }
    },500
        
    )
}
const current_rotation = 0;
//mainWindow.setInterval(changeNumber(mainnum),1000);
//timedLoop();
