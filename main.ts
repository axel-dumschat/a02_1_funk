input.onButtonPressed(Button.A, function () {
    radio.sendString("Hallo, ist jemand auf Empfang?")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("Over and Out.")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Ich heiße Calli 007.")
})
radio.setGroup(215)
