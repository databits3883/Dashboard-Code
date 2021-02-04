setInterval(setGyro, 20);
const gyroHand = document.querySelector('[data-pointer-hand]')
const { ipcRenderer } = require("electron");
const electron = require("electron");
const ipc = electron.ipcRenderer
function setGyro() {
    setRotation(gyroHand,60)

}
function setRotation(element,gyroVal) {
    element.style.setProperty('--rotation', gyroVal)
}
ipc.on('gyroValue', function(event,arg){
    setRotation(arg)

})