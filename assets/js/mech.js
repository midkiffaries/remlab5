/**************************
Mech Data JavaScript
**************************/

// Mech: Stats from user input fields
const Stats = {
	// Technology Base
	type: "-",
	mass: 10,
	weightClass: 0,
	chassis: 0,
	techbase: 0,
	edition: 0,
	rules: 0,
	era: 0,
	year: 3025,
	
	// Movement
	walkingMP: 1,
	maxWalkingMP: 12,
	legs: 2,
	
	// Engine
	engineRating: 10,
	maxEngineRating: 400,
	engineName: "GM",
	engineType: 0,
	engineMulti: 1,
	
	// Jumping
	jumpingMP: 0,
	jumpjetsType: 0,
	
	// Heat Sinks
	heatsinks: 0,
	heatsinkBase: 0,
	heatsinkType: 0,
	
    // Internal Components
    cockpitType: 0,
    targetingType: 0,
    gyroType: 0,
	
	// Internal Structure
	isType: 0,
	ISH: 3,
	ISC: 2,
	IST: 1,
	ISA: 1,
	ISL: 1,
	isMulti: 0,
	isTotal: 0,
	
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
	armorTotal: 0,
	maxAH: 0,
	maxAT: 0,
	maxAC: 0,
	maxAA: 0,
	maxAL: 0,
	maxArmor: 0,

	// Final Totals
    totalDamage: 0,
    totalDamagePerTon: 0,
    totalHeatDisp: 0,
	
	// Warrior
	warriorName: "",
    warriorRace: 0,
    affiliation: 0,
    affiliationText: "",
    miniature: "",
    experience: 0,
    piloting: 0,
    gunnery: 0,
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

