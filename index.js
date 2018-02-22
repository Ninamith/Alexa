"use strict"

var Alexa = require("alexa-sdk");

var handlers = {
	
	'LaunchRequest': function() {

	this.response.speak("Welcome to Steps. What would you like to do?").listen("Sorry, not sure. What would you like to do?");
	this.emit(':responseReady');
	},
	
	'Unhandled': function() {
		this.emit(':ask', 'Sorry I didnt understand that. Say help for assistance.');
	},


	'CallIntent': function() {

	var myStep = this.event.request.intent.slots.instruct.value;
	var pause = '<break time="2s" />';


	if (myStep == "plug in a charger") {
		this.response.speak("Okay! First, locate a socket to plug the charger in." + 
		pause + 
		"push the part of the charger which fits the holes in the socket into the socket, like a puzzle piece!" +
		pause + 
		"All done!");
		}
	else if (myStep == "open a lid") {
		this.response.speak("Okay! First, place your hands around the lid." +
		pause +
		"Next, either firmly tug or twist  the top until the lid comes off." +
		pause +
		"All done!");
		} 
	else {
		this.response.speak("I'm not sure how to do that. Sorry!");
		}
		this.emit(":responseReady");
	}
};



exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.appID = "amzn1.ask.skill.c0063ba3-2da3-4c3c-a9f2-fee5124fd10e";
    alexa.registerHandlers(handlers);
    alexa.execute();
};