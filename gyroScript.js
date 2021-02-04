setInterval(setGyro, 20);
const gyroHand = document.querySelector('[data-pointer-hand]')
function setGyro() {
    setRotation(gyroHand,60)

}
function setRotation(element,gyroVal) {
    element.style.setProperty('--rotation', gyroVal)
}