/**************************
Mech Data JavaScript
**************************/

// Mech: Stats from user input fields
const Mech = {
	// Technology Base
	type: "",
	mass: 25,
	chassis: 0,
	techbase: 0,
	edition: 1,
	rules: 1,
	era: 0,
	year: 3025,
	
	// Movement
	walkingMP: 1,
	legs: 0,
	
	// Engine
	engineType: 0,
	engineMulti: 1,
	
	// Jumping
	jumpingMP: 0,
	jumpjetsType: 0,
	
	// Heat Sinks
	heatsinks: 0,
	heatsinkType: 0,
	
    // Internal Components
    cockpitType: 0,
    targetingType: 0,
    gyroType: 0,
	
	// Internal Structure
	isType: 0,
	isMulti: 0,
	ISH: 3,
	
    // External Armor
	armorType: 0,
	AH: 0,
	ALT: 0,
	ALTR: 0,
	ACT: 0,
	ACTR: 0,
	ALA: 0,
	ARA: 0,
	ALL: 0,
	ARL: 0,
	
	// Calc: Running MP
	get runningMP() {
    	return Math.ceil(this.walkingMP * 1.5)
	},

	// Calc: Engine Rating
	get engineRating() {
		return this.walkingMP * this.mass
	},

	// Calc: Engine Brand
	get engineBrand() {
		return engineTable.engine[this.engineRating / 5 - 1].type
	},

	// Calc: IS Center
	get ISC() {
		return isTable.is[this.mass / 5 - 1].isc
	},

	// Calc: IS Torsos
	get IST() {
		return isTable.is[this.mass / 5 - 1].ist
	},
	
	// Calc: IS Arms
	get ISA() {
		return isTable.is[this.mass / 5 - 1].isa
	},

	// Calc: IS Legs
	get ISL() {
		return isTable.is[this.mass / 5 - 1].isl
	},
};

// Warrior Stats
const Warrior = {
	warriorName: "",
    warriorRace: 0,
    affiliation: 0,
    affiliationText: "",
    miniature: "",
    experience: 0,
    piloting: 5,
    gunnery: 4,
    autoeject: true	
};


// Mech: Total cumulated mass in tons
const TotalMass = {	
	engine: () => parseFloat(queryXML(Stats.enginerating/5-1,'tons','engine')) * Stats.enginemulti,
	is: () => (parseFloat((Stats.mass/10) * Stats.ismulti)),
	gyro: () => (parseFloat(Math.ceil(Stats.enginerating/100))),
	cockpit: () => (3),
	targeting: () => (0),
	jumpjets: () => (parseInt(Stats.jumpingMP)),
	heatsinks: () => (0 + (Stats.heatsinks() - 10)),
	lam: () => (0),
	powerAmp: () => (0),
	armor: () => (Math.floor(Stats.ATotal() / 16) + armorMassAdjust()),
	weapons: () => (0),
	theTotal: () => (parseFloat(this.engine() + this.is() + this.gyro() + this.cockpit() + this.jumpjets() + this.heatsinks() + this.lam() + this.poweramp() + this.armor() + this.weapons()))
};

//
function onchangeTotals() {

}

// Set the initial data from the input fields
(function(){
    var inputNum = document.getElementsByTagName("input"), l = inputNum.length;
    for (let i = 0; i < l; i++) {
        var initData = inputNum[i].getAttribute("data-init");
        if (initData) inputNum[i].value = Mech[initData];
    }
}());