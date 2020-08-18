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
	baseCrits: 47,
	
	// Movement
	walkingMP: 1,
	legs: 0,
	
	// Engine
	engineType: 0,
	engineMulti: 1,
	engineCrits: 0,
	
	// Jumping
	jumpingMP: 0,
	jumpjetsType: 0,
	
	// Heat Sinks
	heatsinks: 0,
	heatsinksBase: 10,
	heatsinkType: 0,
	
    // Internal Components
	cockpitType: 0,
	cockpitMass: 3,
    cockpitCost: 200000, 
    lifesupportCost: 50000, 
	targetingType: 0,
	targetingMass: 0,
	targetingCrits: 0,
	targetingCost: 0,
	gyroType: 0,
	gyroCrits: 0,

	// Limbs
	leftLegCost: 3500,
	rightLegCost: 3500,
	leftArmCost: 2300,
	rightArmCost: 2300,
	
	// Internal Structure
	isType: 0,
	isMulti: 1,
	isCrits: 0,
	ISH: 3,
	
    // External Armor
	armorType: 0,
	armorCrits: 0,
	AH: 0,
	ALT: 0,
	ALTR: 0,
	ACT: 0,
	ACTR: 0,
	ALA: 0,
	ARA: 0,
	ALL: 0,
	ARL: 0,

	// Combat stats
    damageTotal: 0,
    damagePerTon: 0,
    heatTotal: 0,
		
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

	// Calc: Engine Mass
	get engineMass() {
		return engineTable.engine[this.engineRating / 5 - 1].tons * this.engineMulti
	},

	// Calc: Engine Cost
	get engineCost() {
        return parseInt((5000 * this.engineRating * this.mass) / 75)
	},

	// Calc: Power Amp Mass
	get powerAmpMass() {
		return 0
	},

	// Calc: Power Amp Cost
	get powerAmpCost() {
		return 0
	},

	// Calc: JumpJets Mass
	get jumpjetsMass() {	
        return this.jumpingMP
	},
	
	// Calc: JumpJets Crits
	get jumpjetsCrits() {	
        return this.jumpingMP
	}, 
	
	// Calc: JumpJets Cost
	get jumpjetsCost() {
        return parseInt(200 * this.jumpingMP * this.mass)
    }, 

	// Calc: Heat sinks Mass
	get heatsinksMass() {
		return 0 + (this.heatsinks - 10)
	},

	// Calc: Internal Heat sinks
	get heatsinksIntCrits() {
        return this.heatsinksBase - (Math.floor(this.engineRating / 25))
	},

	// Calc: Heat sinks Cost
	get heatsinksCost() {
        return parseInt(this.heatsinks * 2000)
    },

	// Calc: LAM Mass
	get lamMass() {
		return 0
	},

	// Calc: LAM Cost
	get lamCost() {
		return 0
	},

	// Calc: Gyro Mass
	get gyroMass() {
        return Math.ceil(this.engineRating / 100)
	},

	// Calc: Gyro Cost
	get gyroCost() {
        return parseInt(this.gyroMass * 300000)
	},

	// Calc: Musculature Cost
	get musculatureCost() {
        return parseInt(this.mass * 2000)
	},
	
	// Calc: Sensors Cost
	get sensorsCost() {
        return parseInt(this.mass * 2000)
    }, 

	// Calc: IS Mass
	get isMass() {
		return (this.mass / 10) * this.isMulti
	},

	// Calc: IS Cost
	get isCost() {
		return parseInt(this.mass * 400)
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

	// Calc: Armor Mass
	get armorMass() {
		return Math.floor(this.armorTotal / 16) + armorMassAdjust()
	},

	// Calc: Armor Cost
	get armorCost() {
        return parseInt(this.armorMass * 10000)
    }, 

	// Calc: Total Armor
	get armorTotal() {
		return 0
	},

	// Calc: Total Weapon Mass
	get weaponsMass() {
		return 0
	},

	// Calc: Total Weapon Crits
	get weaponsCrits() {
		return 0
	},

	// Calc: Total Weapon Cost
	get weaponsCost() {
		return 0
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

// Crit limits by location (Biped)
const MaxCrits = {
    H:  6,
    LA: 12,
    RA: 12,
    LL: 6, 
    RL: 6, 
    LT: 12, 
    CT: 12, 
    RT: 12
};

// Set the initial data from the input fields
/*
(function(){
    var inputNum = document.getElementsByTagName("input"), l = inputNum.length;
    for (let i = 0; i < l; i++) {
        var initData = inputNum[i].getAttribute("data-init");
        if (initData) inputNum[i].value = Mech[initData];
    }
}());
*/