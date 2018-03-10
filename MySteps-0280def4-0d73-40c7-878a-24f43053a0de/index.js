"use strict"

var Alexa = require("alexa-sdk");

var handlers = {
	
	'LaunchRequest': function() {

	this.response.speak("Welcome to Steps. What would you like to do?").listen("Sorry, not sure. What would you like to do?");
	this.emit(':responseReady');
	},
	
	// 'Unhandled': function() {
	// 	this.emit(':ask', 'Sorry I didnt understand that. Say help for assistance.');
	// },


	'CallIntent': function() {

	var myStep = this.event.request.intent.slots.instruct.value;
	var pause = '<break time="2s" />';
	var longpause = '<break time="10s" />';
	var midpause = '<break time="5s" />';


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
	else if (myStep == "heart rate") {
		this.response.speak("Okay! To measure heart rate, follow these six steps. First, use the pads of your index and middle fingers to palpate the radial artery, over the lateral aspect of the wrist" +
		pause +
		"Start counting pulses now" +
		longpause +
		longpause +
		longpause +	
		" Stop counting. Multiply the number you counted by 2" + 
		pause + 
		"Report the heart rate in beats per minute, as well as the: rhythm (regular or irregular), quality (weak or strong), and symmetry" +
		pause +
		"Grade the pulse as either: 0 (absent), 1+ (diminished), 2+ (expected), 3+ (bounding)" +
		pause +
		"you have finished.");
		} 
	else if (myStep == "jugular venous pressure") {
		this.response.speak("Okay! There are six steps in this process. First, To prepare, place the patients head at approximately 30 degrees, fully expose their neck, and remove pillows" +
		pause +
		"Next, Get the patient to turn their neck slightly to the left, and ask them to slightly open their mouth to relax the sternocleidomastoid muscle" +
		pause +
		"From the patient’s right side, look in between the two heads of the sternocleidomastoid muscle to identify the internal jugular vein. If you cannot identify the two heads of the muscle, ask the patient to sniff, or get them to perform a valsalva maneuver. You may want to use tangential lighting." +
		pause +
		"Some criteria that distinguish the internal jugular vein from the adjacent carotid pulse include: a) It is not palpable b) It has a biphasic or double waveform c) The pulsations are eliminated by applying light pressure over the clavicle d) The level descends with inspiration, and varies with positioning of the bed" +
		pause +
		"To measure the JVP, you need a ruler and a flat surface. Place the ruler over the sternal angle, pointing vertically." +
		longpause +
		"Then, align the flat surface with the level of the JVP, oriented horizontally to the chest wall and perpendicular to the ruler." +
		longpause +
		midpause + 
		"Read the marking on the ruler at which the flat surface intersects it. Record this measurement as the pateint’s jugular venous pressure." +
		pause +
		"A JVP less than or equal to 4 centimeters is considered normal."+
		pause +
		"All done!");
		} 
	else if (myStep == "Precordium") {
		this.response.speak("Okay! There are eigth steps in this process. First, Ask the patient to lie supine. If they are male, uncover their chest to the upper abdomen. If they are female, uncover them intermittently as needed." +
		pause +
		"Start with an inspection. Look for: scars, masses, redness, muscular atrophy, asymmetry, bony abnormalities, abnormal chest movements or pulsations, or any general skin changes." +
		pause +
		"Next, palpate the apex beat, which is also known as the “point of maximum impulse”. This is located at the fifth intercostal space in the mid-clavicular line. Locate it now." +
		longpause + 
		midpause + 
		"If you do not feel the apex beat, you can ask the patient to lie in the left lateral decubitus position and ask them again. The apex beat should have the following characteristics: it should feel like a gentle tap, it should last less than two thirds of systole, when compared to radial pulse or heart sounds, and it should be approximately the size of a quarter. Note each of these qualities. Also note if you were unable to locate the apex beat, or if you did not find it in the expected location." +
		pause +
		"Next, you should palpate the chest with the pads of your fingers for thrills, which are vibrations that may be a result of turbulent blood flow. Specifically, palpate each of the following stereotypical areas: right upper sternal border for the aortic valve" +
		pause + 
		"left upper sternal border for the pulmonary valve" +
		pause +
		"left lower sternal border for the tricuspid valve" +
		pause +
		"The mitral valve area is the same as the apex beat, which you have already palpated." +
		pause +
		"Finally, complete palpation by checking for heaves. These are abnormal large movements of the chest  that may be associated with cardiac hypertrophy. Use the heel of your hand to palpate along the left and right sternal borders, and note any unexpected movements." +
		pause +
		"Once palpation is complete, auscultate each of the aforementioned stereotypical areas. While auscultating, you should be listening specifically for: normal S1 and S2 heart sounds, murmurs, extra heart sounds, and physiologic splitting of S2 on deep inspiration."+
		pause +
		"Auscultate each of the areas again, this time using the bell of your stethoscope. This will allow you to better hear low-itched sounds." +
		pause +
		"Report your findings. If a murmur is found, grade its loudness and characteristics. If an extra heart sound is heard, try to identify whether it is S3 or S4." +
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