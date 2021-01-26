/**************************
 * Mech Data JavaScript
**************************/

// Mech: Stats from user input fields
const Mech = {
	// Technology Base
	type: "",
	mass: 25,
	chassis: 0,
	techbase: 0,
	rules: 0,
	
	// Movement
	walkingMP: 1,
	legs: 0,
	masc: 0,
	
	// Engine
	engineType: 0,
	engineMulti: 1,
	engineCrits: 0,
	engineMaxRating: 400,
	
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
	cockpitCrits: 0,
	cockpitCost: 200000, 
    lifesupportCost: 50000, 
	targetingType: 0,
	targetingMass: 0,
	targetingCrits: 0,
	targetingCost: 0,
	gyroType: 0,
	gyroCrits: 0,

	// Arm cost multipliers (each)
	armupperMulti: 100,
	armlowerMulti: 50,
	armhandMulti: 80,

	// Leg cost multipliers (each)
	legupperMulti: 150,
	leglowerMulti: 80,
	legfootMulti: 120,

	// Internal Structure
	isType: 0,
	isMulti: 1,
	isCrits: 0,
	ISH: 3,
	
    // External Armor
	armorType: 0,
	armorCrits: 0,
	armorHead: 9,
	AH: 0,
	ALT: 0,
	ALTR: 0,
	ACT: 0,
	ACTR: 0,
	ART: 0,
	ARTR: 0,
	ALA: 0,
	ARA: 0,
	ALL: 0,
	ARL: 0,

	// Design Quirks
	positiveDQ: [],
	negativeDQ: [],
	
	// Technical Readout
	year: 3025,
	era: 2,
	overviewTR: ``,
	capabilitiesTR: ``,
	historyTR: ``,
	deploymentTR: ``,
	variantsTR: ``,
	notableTR: ``,

	// Max Crits by location (Biped)
	maxcrits_H:  6,
    maxcrits_LA: 12,
    maxcrits_RA: 12,
    maxcrits_LL: 6, 
    maxcrits_RL: 6, 
    maxcrits_LT: 12, 
    maxcrits_CT: 12, 
    maxcrits_RT: 12,

	// Assigned Items by location
	assigned_H:  [11,12,10,12,11], 
    assigned_LT: [], 
    assigned_CT: [4,4,4,5,5,5,5,4,4,4], 
    assigned_RT: [],
    assigned_LA: [0,1,2,3],
    assigned_RA: [0,1,2,3],
    assigned_LL: [6,7,8,9],
	assigned_RL: [6,7,8,9],
	
	// Assigned Crits by location
	crits_H:  5, 
    crits_LT: 0, 
    crits_CT: 10, 
    crits_RT: 0,
    crits_LA: 4,
    crits_RA: 4,
    crits_LL: 4,
    crits_RL: 4,

	// Tech Readout - Brands
	factory: a_Factory[getRandomNum(1, a_Factory.length)],
	manufacturer: a_Manufacturer[getRandomNum(1, a_Manufacturer.length)], 

	// Calc: Max Walking MP
	get maxWalkingMP() {
		return this.engineMaxRating / this.mass
	},

	// Calc: Running MP
	get runningMP() {
    	return Math.ceil(this.walkingMP * 1.5)
	},

	// Calc: Sprinting MP
	get sprintingMP() {
    	return this.walkingMP * 2
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
		return Math.ceil(this.energyweaponsMass / 10)
	},

	// Calc: Power Amp Cost
	get powerAmpCost() {
		return this.powerAmpMass * 20000
	},

	// Calc: JumpJets Mass
	get jumpjetsMass() {
		let t;
		if (this.mass > 55 && this.mass < 86) {
			t = 1;
		} else if (this.mass > 85) {
			t = 2;
		} else {
			t = 0.5;
		}
        return this.jumpingMP * t;
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
		return 0 + (this.heatsinks - this.heatsinksBase)
	},

	// Calc: Internal Heat sinks Crits
	get heatsinksIntCrits() {
        return this.heatsinksBase - (Math.floor(this.engineRating / 25))
	},

	// Calc: Heat sinks Crits
	get heatsinksCrits() {
        return this.heatsinks - this.heatsinksBase
	},

	// Calc: Heat sinks Cost
	get heatsinksCost() {
        return parseInt((this.heatsinks - this.heatsinksBase) * 2000)
	},

	// Calc: LAM Mass
	get lamMass() {
		return this.mass / 10
	},

	// Calc: LAM Cost
	get lamCost() {
		return (this.weaponsCost + this.totalstructureCost) * 0.75
	},

	// Calc: LAM BV
	get lamBV() {
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

	// Calc: Upper arm cost
	get armupperCost() {
		return (this.mass * this.armupperMulti) * 2
	},

	// Calc: LA Lower arm cost
	get LAlowerCost() {
		return this.mass * this.armlowerMulti
	},

	// Calc: RA Lower arm cost
	get RAlowerCost() {
		return this.mass * this.armlowerMulti
	},

	// Calc: LA Hand cost
	get LAhandCost() {
		return this.mass * this.armhandMulti
	},

	// Calc: RA Hand cost
	get RAhandCost() {
		return this.mass * this.armhandMulti
	},

	// Calc: Upper leg cost
	get legupperCost() {
		return (this.mass * this.legupperMulti) * 2
	},

	// Calc: Lower leg cost
	get leglowerCost() {
		return (this.mass * this.leglowerMulti) * 2
	},

	// Calc: Foot cost
	get legfootCost() {
		return (this.mass * this.legfootMulti) * 2
	},
	
	// Calc: Total structure cost
	get totalstructureCost() {
		return this.cockpitCost 
		+ this.lifesupportCost 
		+ this.sensorsCost 
		+ this.musculatureCost 
		+ this.gyroCost 
		+ this.engineCost 
		+ this.jumpjetsCost 
		+ this.heatsinksCost
		+ this.isCost
		+ this.armupperCost
		+ this.LAlowerCost
		+ this.RAlowerCost
		+ this.LAhandCost
		+ this.RAhandCost
		+ this.legfootCost 
		+ this.leglowerCost
		+ this.legupperCost
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
		let x, r = this.armorTotal % 16;
		if (r > 0 && r < 9) {
			x = 0.5;
		} else if (r > 8) {
			x = 1;
		} else {
			x = 0;
		}
		return Math.floor(this.armorTotal / 16) + x;
	},

	// Calc: Armor Cost
	get armorCost() {
        return parseInt(this.armorMass * 10000)
    }, 

	// Calc: Total Armor
	get armorTotal() {
		return this.AH 
		+ this.ALT 
		+ this.ALTR 
		+ this.ACT 
		+ this.ACTR 
		+ this.ART 
		+ this.ARTR 
		+ this.ALA 
		+ this.ARA 
		+ this.ALL 
		+ this.ARL
	},

	// Calc: Total Armor
	get armorTotalMax() {
		return this.armorHead 
		+ (this.ISC * 2) 
		+ ((this.IST * 2) * 2) 
		+ ((this.ISA * 2) * 2) 
		+ ((this.ISL * 2) * 2)
	},

	// Calc: Total weapon damage that can be inflicted
	get damageTotal() {
		let d = 0, w = weaponTable.weapon;
		this.assigned_H.forEach(e => {
			if (w[e].damage > 0) d += w[e].damage
		});
		this.assigned_CT.forEach(e => {
			if (w[e].damage > 0) d += w[e].damage
		});
		this.assigned_LT.forEach(e => {
			if (w[e].damage > 0) d += w[e].damage
		});
		this.assigned_RT.forEach(e => {
			if (w[e].damage > 0) d += w[e].damage
		});
		this.assigned_LA.forEach(e => {
			if (w[e].damage > 0) d += w[e].damage
		});
		this.assigned_RA.forEach(e => {
			if (w[e].damage > 0) d += w[e].damage
		});
		this.assigned_LL.forEach(e => {
			if (w[e].damage > 0) d += w[e].damage
		});
		this.assigned_RL.forEach(e => {
			if (w[e].damage > 0) d += w[e].damage
		});
		return d
	},

	// Calc: Damage per ton of Mech
	get damagePerTon() {
		let d = this.damageTotal / this.mass;
		if (isFinite(d)) return d;
		else return 0;
	},

	// Calc: Total weapon heat
	get heatTotal() {
		let h = 0, w = weaponTable.weapon;
		this.assigned_H.forEach(e => {
			if (w[e].heat > 0) h += w[e].heat
		});
		this.assigned_CT.forEach(e => {
			if (w[e].heat > 0) h += w[e].heat
		});
		this.assigned_LT.forEach(e => {
			if (w[e].heat > 0) h += w[e].heat
		});
		this.assigned_RT.forEach(e => {
			if (w[e].heat > 0) h += w[e].heat
		});
		this.assigned_LA.forEach(e => {
			if (w[e].heat > 0) h += w[e].heat
		});
		this.assigned_RA.forEach(e => {
			if (w[e].heat > 0) h += w[e].heat
		});
		this.assigned_LL.forEach(e => {
			if (w[e].heat > 0) h += w[e].heat
		});
		this.assigned_RL.forEach(e => {
			if (w[e].heat > 0) h += w[e].heat
		});
		return h
	},

	// Calc: Energy Weapons Mass
	get energyweaponsMass() {
		let t = 0, w = weaponTable.weapon;
		this.assigned_H.forEach(e => {
			if (w[e].tons > 0 && w[e].type == 1) t += w[e].tons
		});
		this.assigned_CT.forEach(e => {
			if (w[e].tons > 0 && w[e].type == 1) t += w[e].tons
		});
		this.assigned_LT.forEach(e => {
			if (w[e].tons > 0 && w[e].type == 1) t += w[e].tons
		});
		this.assigned_RT.forEach(e => {
			if (w[e].tons > 0 && w[e].type == 1) t += w[e].tons
		});
		this.assigned_LA.forEach(e => {
			if (w[e].tons > 0 && w[e].type == 1) t += w[e].tons
		});
		this.assigned_RA.forEach(e => {
			if (w[e].tons > 0 && w[e].type == 1) t += w[e].tons
		});
		this.assigned_LL.forEach(e => {
			if (w[e].tons > 0 && w[e].type == 1) t += w[e].tons
		});
		this.assigned_RL.forEach(e => {
			if (w[e].tons > 0 && w[e].type == 1) t += w[e].tons
		});
		return t
	},

	// Calc: Total Weapon Mass
	get weaponsMass() {
		let t = 0, w = weaponTable.weapon;
		this.assigned_H.forEach(e => {
			if (w[e].tons > 0) t += w[e].tons
		});
		this.assigned_CT.forEach(e => {
			if (w[e].tons > 0) t += w[e].tons
		});
		this.assigned_LT.forEach(e => {
			if (w[e].tons > 0) t += w[e].tons
		});
		this.assigned_RT.forEach(e => {
			if (w[e].tons > 0) t += w[e].tons
		});
		this.assigned_LA.forEach(e => {
			if (w[e].tons > 0) t += w[e].tons
		});
		this.assigned_RA.forEach(e => {
			if (w[e].tons > 0) t += w[e].tons
		});
		this.assigned_LL.forEach(e => {
			if (w[e].tons > 0) t += w[e].tons
		});
		this.assigned_RL.forEach(e => {
			if (w[e].tons > 0) t += w[e].tons
		});
		return t
	},

	// Calc: Total Weapon Crits
	get weaponsCrits() {
		let t = 0, w = weaponTable.weapon;
		this.assigned_H.forEach(e => {
			if (w[e].tons > 0) t += w[e].crits
		});
		this.assigned_CT.forEach(e => {
			if (w[e].tons > 0) t += w[e].crits
		});
		this.assigned_LT.forEach(e => {
			if (w[e].tons > 0) t += w[e].crits
		});
		this.assigned_RT.forEach(e => {
			if (w[e].tons > 0) t += w[e].crits
		});
		this.assigned_LA.forEach(e => {
			if (w[e].tons > 0) t += w[e].crits
		});
		this.assigned_RA.forEach(e => {
			if (w[e].tons > 0) t += w[e].crits
		});
		this.assigned_LL.forEach(e => {
			if (w[e].tons > 0) t += w[e].crits
		});
		this.assigned_RL.forEach(e => {
			if (w[e].tons > 0) t += w[e].crits
		});
		return t
	},

	// Calc: Total Weapon Cost
	get weaponsCost() {
		let t = 0, w = weaponTable.weapon;
		this.assigned_H.forEach(e => {
			if (w[e].tons > 0) t += w[e].cost
		});
		this.assigned_CT.forEach(e => {
			if (w[e].tons > 0) t += w[e].cost
		});
		this.assigned_LT.forEach(e => {
			if (w[e].tons > 0) t += w[e].cost
		});
		this.assigned_RT.forEach(e => {
			if (w[e].tons > 0) t += w[e].cost
		});
		this.assigned_LA.forEach(e => {
			if (w[e].tons > 0) t += w[e].cost
		});
		this.assigned_RA.forEach(e => {
			if (w[e].tons > 0) t += w[e].cost
		});
		this.assigned_LL.forEach(e => {
			if (w[e].tons > 0) t += w[e].cost
		});
		this.assigned_RL.forEach(e => {
			if (w[e].tons > 0) t += w[e].cost
		});
		return t
	},

	// Calc: Total Hardpoints Crits
	get hardpointsCrits() {
		let t = 0, w = weaponTable.weapon;
		this.assigned_H.forEach(e => {
			if (w[e].tons == 0) t++
		});
		this.assigned_CT.forEach(e => {
			if (w[e].tons == 0) t++
		});
		this.assigned_LT.forEach(e => {
			if (w[e].tons == 0) t++
		});
		this.assigned_RT.forEach(e => {
			if (w[e].tons == 0) t++
		});
		this.assigned_LA.forEach(e => {
			if (w[e].tons == 0) t++
		});
		this.assigned_RA.forEach(e => {
			if (w[e].tons == 0) t++
		});
		this.assigned_LL.forEach(e => {
			if (w[e].tons == 0) t++
		});
		this.assigned_RL.forEach(e => {
			if (w[e].tons == 0) t++
		});
		return t
	},

	// Calc: Combined Internal Components Mass
	get internalComponentsMass() {
		return this.isMass 
		+ this.gyroMass 
		+ this.cockpitMass 
		+ this.targetingMass
	},

	// Calc: Combined Internal Components Crits
	get internalComponentsCrits() {
		return this.isCrits 
		+ this.gyroCrits 
		+ this.cockpitCrits 
		+ this.targetingCrits
	},

	// Calc: Combined Internal Components Cost
	get internalComponentsCost() {
		return this.isCost 
		+ this.gyroCost 
		+ this.cockpitCost 
		+ this.targetingCost 
		+ this.lifesupportCost
	},

	// Calc: Total mass of all components
	get totalMass() {
		return this.engineMass 
		+ this.jumpjetsMass 
		+ this.heatsinksMass 
		+ this.isMass 
		+ this.gyroMass 
		+ this.cockpitMass 
		+ this.targetingMass 
		+ this.armorMass 
		+ this.weaponsMass
	},
	
	// Calc: Total crits for all locations
	get baseCrits() {
		return (this.maxcrits_H
		+ this.maxcrits_CT
		+ this.maxcrits_LT
		+ this.maxcrits_RT
		+ this.maxcrits_LA
		+ this.maxcrits_RA
		+ this.maxcrits_LL
		+ this.maxcrits_RL)
		- this.hardpointsCrits
	},

	// Calc: Total crits of all components
	get totalCrits() {
		return this.engineCrits 
		+ this.jumpjetsCrits 
		+ this.heatsinksCrits 
		+ this.heatsinksIntCrits 
		+ this.isCrits 
		+ this.gyroCrits 
		+ this.cockpitCrits 
		+ this.targetingCrits 
		+ this.armorCrits 
		+ this.weaponsCrits
	},

	// Calc: Total cost multiplier
	get costMultiplier() {
		return (this.mass / 100) + 1
	},

	// Calc: Total cost with all components
	get totalCost() {
		return parseInt((this.totalstructureCost + this.weaponsCost) * this.costMultiplier)
	},

	// Calc: BV with all components
	get totalBV() {
		return parseInt(this.mass)
		+ (this.armorTotal * 2)
		+ parseInt((this.ISH
		+ isTable.is[this.mass / 5 - 1].isc
		+ (isTable.is[this.mass / 5 - 1].ist * 2)
		+ (isTable.is[this.mass / 5 - 1].isa * 2)
		+ (isTable.is[this.mass / 5 - 1].isl * 2)) * 1.5)
	},

};


// Warrior: Stats for the warrior/pilot/crew
const Warrior = {
	name: "",
    race: 0,
    affiliation: 0,
    affiliationUser: "",
    miniature: "",
    experience: 0,
    piloting: 5,
	gunnery: 4,
	crewSize: 1,
    autoeject: true
};