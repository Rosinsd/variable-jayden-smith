/**
 * Created by Jayden Smith
 * 
 * December 15 2023 
 * 
 * This code is a simple counter when button A is pressed it goes up one when button B is pressed it goes down 1
 */
input.onButtonPressed(Button.A, function () {
    counter += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(counter)
})
input.onButtonPressed(Button.B, function () {
    counter += -1
})
let counter = 0
counter = 0
basic.forever(function () {
	
})
