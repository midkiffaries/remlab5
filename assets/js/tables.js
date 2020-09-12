/**************************
Tables and Conversions
**************************/

// Convert total mass into a weight class
const weightClass = t => {
    let c;
    if (t < 20) c = 'Ultralight'; // 5-15
    else if (t < 40) c = 'Light'; // 20-35
    else if (t < 60) c = 'Medium'; // 40-55
    else if (t < 80) c = 'Heavy'; // 60-75
    else if (t < 101) c = 'Assault'; // 80-100
    else c = 'Superheavy'; // 100+
    return c;
};

// Present the maximum range in plain english
const rangeClass = r => {
    let c;
    if (r < 1) c = 'None'; // 0
    else if (r < 4) c = 'Point'; // 1-3
    else if (r < 10) c = 'Short'; // 4-9
    else if (r < 19) c = 'Medium'; // 10-18
    else if (r < 25) c = 'Long'; // 19-24
    else c = 'Extreme'; // 25+
    return c;
};

// Display random quotes in the footer
const a_Quotes = [
    `<q>Life is cheap. BattleMechs are expensive.</q> <cite>Irain BattleMechs Ltd.</cite>`,
    ``
];

// Btech Ruleset (aka Level)
const a_RuleSet = [
    'Basic', // Level 1
    'Standard', // Level 2
    'Advanced', // Level 2+
    'Experimental' // Level 3
];

// Technology Base
const a_TechBase = [
    'Inner Sphere',
    'Clan'
];

// Mech Chassis
const a_ChassisType = [
    'BattleMech',
    'IndustrialMech',
    'Land-Air Mech'
    //'OmniMech'
];

// Names for the Eras
const a_Era = [
    'Age of War', // 2398
    'Star League', // 2571
    'Succession Wars', // 2781
    'Clan Invasion', // 3050
    'Civil War', // 3062
    'Jihad', // 3068
    'Republic', // 3081
    'Dark Age' // 3131
];

// Names for the types of Weapons
const a_WeaponClass = [
    'Structure',
    'Energy',
    'Ballistic',
    'Missle',
    'Melee',
    'Artillery',
    'Equipment',
    'Industrial',
    'Ammunition',
    'Bombs'
];

// Warrior Experience
const a_Experience = [
    'Green',
    'Regular',
    'Veteran',
    'Elite'
];

// Warrior Affiliation
const a_Affiliation = [
    '(blank line)',
    'INNER SPHERE |—————————',
    'Capellan Confederation',
    'ComStar',
    'Draconis Combine',
    'Federated Suns',
    'Free Worlds League',
    'Lyran Commonwealth',
    'Duchy of Andurien',
    'Free Rasalhague Republic',
    'St. Ives Compact',
    'Tikonov Free Republic',
    'Word of Blake',
    'Republic of the Sphere',
    'CLANS |————————————',
    'Clan Diamond Shark',
    'Clan Ghost Bear',
    'Clan Jade Falcon',
    'Clan Nova Cat',
    'Clan Smoke Jaguar',
    'Clan Steel Viper',
    'Clan Wolf',
    'Clan Hell\'s Horses',
    'Ghost Bear Dominion',
    'PERIPHERY |——————————', 
    'Circinus Federation',
    'Elysian Fields',
    'Greater Valkyrate',
    'Illyrian Palatinate',
    'Lothian League',
    'Magistracy of Canopus',
    'Marian Hegemony',
    'Niops Association',
    'Oberon Confederation',
    'Outworlds Alliance',
    'Rim Collection',
    'Taurian Concordat',
    'Tortuga Dominions',
    'IRREGULARS |—————————',
    'Unaffiliated',
    'Explorer Corps',
    'Mercenary',
    'Privateer',
    'Pirate',
    'Bounty Hunter',
    'Militia',
    'Outlaw',
    'Gladiator',
    'Civilian'
];

// Warrior Special Abilities
const a_SpecialAbilities = [
    'No Special Abilities',
    'Bulls-Eye Marksman',
    'Dodge Maneuver',
    'Edge',
    'Maneuvering Ace',
    'Melee Specialist',
    'Pain Resistance',
    'Sixth Sense',
    'Speed Demon',
    'Tactical Genius',
    'Weapon Specialist'
];

// Weapon Tech Ratings
const a_TechRating = {
    a: 'Primitive',
    b: 'Low-Tech',
    c: 'Common Tech',
    d: 'High-Tech',
    e: 'Advanced',
    f: 'Hyper-Advanced'
};

// Weapon Availability ratings
const a_AvailabilityRating = {
    a: 'Very Common',
    b: 'Common',
    c: 'Uncommon',
    d: 'Rare',
    e: 'Very Rare',
    f: 'Unique',
    x: 'Unavailable'
};

// Design Quirk : Positive
const a_DQPositive = [
    'Accurate Weapon',
    'Anti-Aircraft Targeting',
    'Battle Computer',
    'Battlefists',
    'Combat Computer',
    'Command BattleMech',
    'Compact Mech',
    'Cowl',
    'Distracting',
    'Docking Arms',
    'Easy to Maintain',
    'Easy to Pilot',
    'Extended Torso Twist',
    'Fast Reload',
    'Hyper-Extending Actuators',
    'Improved Cooling Jacket',
    'Improved Communications',
    'Improved Life Support',
    'Improved Sensors',
    'Improved Targeting (Short)',
    'Improved Targeting (Medium)',
    'Improved Targeting (Long)',
    'Jettison-Capable Weapon',
    'Modular Weapons',
    'Multi-Trac',
    'Narrow/Low Profile',
    'Overhead Arms',
    'Protected Actuators',
    'Power Reverse',
    'Reinforced Legs',
    'Rumble Seat',
    'Searchlight',
    'Stable',
    'Variable Range Targeting'
];

// Design Quirk : Negative
const a_DQNegative = [
    'Ammunition Feed Problem',
    'Bad Reputation',
    'Cooling System Flaws',
    'Cramped Cockpit',
    'Difficult Ejection',
    'Difficult to Maintain',
    'EM Interference',
    'Exposed Actuators',
    'Exposed Weapon Linkage',
    'Hard to Pilot',
    'Illegal Design',
    'Inaccurate Weapon',
    'Low-Mounted Arms',
    'No/Minimal Arms',
    'No Cooling Jacket',
    'No Ejection Mechanism',
    'Nonfunctional Item',
    'Non-Standard Parts',
    'No Torso Twist',
    'Obsolete',
    'Oversized',
    'Poor Cooling Jacket',
    'Poor Life Support',
    'Poor Performance',
    'Poor Sealing',
    'Poor Targeting (Short)',
    'Poor Targeting (Medium)',
    'Poor Targeting (Long)',
    'Poor Workmanship',
    'Prototype',
    'Sensor Ghosts',
    'Static Ammo Feed',
    'Unbalanced',
    'Un-streamlined',
    'Weak Head Armor',
    'Weak Legs'
];

// Armor types
const a_ArmorType = [
    'Standard',
    'Ferro-Fibrous',
    'Light Ferro-Fibrous',
    'Heavy Ferro-Fibrous',
    'Stealth',
    'Industrial',
    'Commercial'
];

// Internal Structure types
const a_ISType = [
    'Standard',
    'Endo Steel'
];

// Gyro types
const a_GyroType = [
    'Standard',
    'Compact',
    'Heavy-duty',
    'Extra-Light'
];

// Cockpit types
const a_CockpitType = [
    'Standard',
    'Small'
];

// Targeting System types
const a_TargetType = [
    'Standard',
    'Targeting Computer'
];

// Heatsink types
const a_HSType = [
    'Single',
    'Double'
];

// Jump Jets types
const a_JJType = [
    'Standard',
    'Improved'
];

// Engine types
const a_EngineType = [
    'Fusion',
    'ICE'
];

// Auto-Eject Modes
const a_AutoEject = {
    false: 'Disabled',
    true:  'Enabled'
};

// Teach Readout: Convert MP to KPH
const mp2Kph = [0,14,21,32,43,54,64,75,86,97,108,118,129,140,151,162,172,184,194,201,216,230,248,261,275,290,305,318,329,340,351];

// Calc BV: Defence Factor
const a_DefenceFac = [1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7];

// Calc BV: Target Modifier based on top speed
const a_TargetMod = [0,0,0,1,1,2,2,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4];

// Calc BV: Speed Factor
const a_SpeedFac = [0.44,0.54,0.65,0.77,0.88,1,1.12,1.24,1.37,1.5,1.63,1.76,1.89,2.02,2.16,2.3,2.44,2.58,2.72,2.86,3,3.15,3.29,3.44,3.59,3.74,4];


// JSON Tables

//////////////////////////////
// Weapons and Equipment Table
//////////////////////////////
const tableArsenal = `
    {
        "weapon": [
            {
                "type": "0",
                "name": "Shoulder",
                "nameShort": "Shoulder",
                "level": "1",
                "edition": "1",
                "tech": "2",
                "heat": "0",
                "minDamage": "0",
                "damage": "0",
                "delay": "0",
                "rangeMin": "0",
                "rangeShort": "0",
                "rangeMedium": "0",
                "rangeLong": "0",
                "rangeExtreme": "0",
                "tons": "0",
                "crits": "1",
                "ammo": "0",
                "cost": "0",
                "bv": "0",
                "modifier": "",
                "special": "a",
                "year": "",
                "desc": "",
                "techRating": "b",
                "availability": "a",
                "fixed": "1"
            },

            {
                "type": "0",
                "name": "Upper Arm",
                "nameShort": "Upper Arm",
                "level": "1",
                "edition": "1",
                "tech": "2",
                "heat": "0",
                "minDamage": "0",
                "damage": "0",
                "delay": "0",
                "rangeMin": "0",
                "rangeShort": "0",
                "rangeMedium": "0",
                "rangeLong": "0",
                "rangeExtreme": "0",
                "tons": "0",
                "crits": "1",
                "ammo": "0",
                "cost": "0",
                "bv": "0",
                "modifier": "",
                "special": "a",
                "year": "",
                "desc": "",
                "techRating": "b",
                "availability": "a",
                "fixed": "1"
            },

            {
                "type": "0",
                "name": "Lower Arm",
                "nameShort": "Lower Arm",
                "level": "1",
                "edition": "1",
                "tech": "2",
                "heat": "0",
                "minDamage": "0",
                "damage": "0",
                "delay": "0",
                "rangeMin": "0",
                "rangeShort": "0",
                "rangeMedium": "0",
                "rangeLong": "0",
                "rangeExtreme": "0",
                "tons": "0",
                "crits": "1",
                "ammo": "0",
                "cost": "0",
                "bv": "0",
                "modifier": "",
                "special": "a",
                "year": "",
                "desc": "",
                "techRating": "b",
                "availability": "a",
                "fixed": "1"
            },

            {
                "type": "0",
                "name": "Hand",
                "nameShort": "Hand",
                "level": "1",
                "edition": "1",
                "tech": "2",
                "heat": "0",
                "minDamage": "0",
                "damage": "0",
                "delay": "0",
                "rangeMin": "0",
                "rangeShort": "0",
                "rangeMedium": "0",
                "rangeLong": "0",
                "rangeExtreme": "0",
                "tons": "0",
                "crits": "1",
                "ammo": "0",
                "cost": "0",
                "bv": "0",
                "modifier": "",
                "special": "a",
                "year": "",
                "desc": "",
                "techRating": "b",
                "availability": "a",
                "fixed": "1"
            },

            {
                "type": "0",
                "name": "Engine",
                "nameShort": "Engine",
                "level": "1",
                "edition": "1",
                "tech": "2",
                "heat": "0",
                "minDamage": "0",
                "damage": "0",
                "delay": "0",
                "rangeMin": "0",
                "rangeShort": "0",
                "rangeMedium": "0",
                "rangeLong": "0",
                "rangeExtreme": "0",
                "tons": "0",
                "crits": "1",
                "ammo": "0",
                "cost": "0",
                "bv": "0",
                "modifier": "",
                "special": "a",
                "year": "",
                "desc": "",
                "techRating": "b",
                "availability": "a",
                "fixed": "1"
            },

            {
                "type": "0",
                "name": "Gyro",
                "nameShort": "Gyro",
                "level": "1",
                "edition": "1",
                "tech": "2",
                "heat": "0",
                "minDamage": "0",
                "damage": "0",
                "delay": "0",
                "rangeMin": "0",
                "rangeShort": "0",
                "rangeMedium": "0",
                "rangeLong": "0",
                "rangeExtreme": "0",
                "tons": "0",
                "crits": "1",
                "ammo": "0",
                "cost": "0",
                "bv": "0",
                "modifier": "",
                "special": "a",
                "year": "",
                "desc": "",
                "techRating": "b",
                "availability": "a",
                "fixed": "1"
            },

            {
                "type": "0",
                "name": "Hip",
                "nameShort": "Hip",
                "level": "1",
                "edition": "1",
                "tech": "2",
                "heat": "0",
                "minDamage": "0",
                "damage": "0",
                "delay": "0",
                "rangeMin": "0",
                "rangeShort": "0",
                "rangeMedium": "0",
                "rangeLong": "0",
                "rangeExtreme": "0",
                "tons": "0",
                "crits": "1",
                "ammo": "0",
                "cost": "0",
                "bv": "0",
                "modifier": "",
                "special": "a",
                "year": "",
                "desc": "",
                "techRating": "b",
                "availability": "a",
                "fixed": "1"
            },

            {
                "type": "0",
                "name": "Upper Leg",
                "nameShort": "Upper Leg",
                "level": "1",
                "edition": "1",
                "tech": "2",
                "heat": "0",
                "minDamage": "0",
                "damage": "0",
                "delay": "0",
                "rangeMin": "0",
                "rangeShort": "0",
                "rangeMedium": "0",
                "rangeLong": "0",
                "rangeExtreme": "0",
                "tons": "0",
                "crits": "1",
                "ammo": "0",
                "cost": "0",
                "bv": "0",
                "modifier": "",
                "special": "a",
                "year": "",
                "desc": "",
                "techRating": "b",
                "availability": "a",
                "fixed": "1"
            },

            {
                "type": "0",
                "name": "Lower Leg",
                "nameShort": "Lower Leg",
                "level": "1",
                "edition": "1",
                "tech": "2",
                "heat": "0",
                "minDamage": "0",
                "damage": "0",
                "delay": "0",
                "rangeMin": "0",
                "rangeShort": "0",
                "rangeMedium": "0",
                "rangeLong": "0",
                "rangeExtreme": "0",
                "tons": "0",
                "crits": "1",
                "ammo": "0",
                "cost": "0",
                "bv": "0",
                "modifier": "",
                "special": "a",
                "year": "",
                "desc": "",
                "techRating": "b",
                "availability": "a",
                "fixed": "1"
            },

            {
                "type": "0",
                "name": "Foot",
                "nameShort": "Foot",
                "level": "1",
                "edition": "1",
                "tech": "2",
                "heat": "0",
                "minDamage": "0",
                "damage": "0",
                "delay": "0",
                "rangeMin": "0",
                "rangeShort": "0",
                "rangeMedium": "0",
                "rangeLong": "0",
                "rangeExtreme": "0",
                "tons": "0",
                "crits": "1",
                "ammo": "0",
                "cost": "0",
                "bv": "0",
                "modifier": "",
                "special": "a",
                "year": "",
                "desc": "",
                "techRating": "b",
                "availability": "a",
                "fixed": "1"
            },

            {
                "type": "0",
                "name": "Cockpit",
                "nameShort": "Cockpit",
                "level": "1",
                "edition": "1",
                "tech": "2",
                "heat": "0",
                "minDamage": "0",
                "damage": "0",
                "delay": "0",
                "rangeMin": "0",
                "rangeShort": "0",
                "rangeMedium": "0",
                "rangeLong": "0",
                "rangeExtreme": "0",
                "tons": "0",
                "crits": "1",
                "ammo": "0",
                "cost": "0",
                "bv": "0",
                "modifier": "",
                "special": "a",
                "year": "",
                "desc": "",
                "techRating": "b",
                "availability": "a",
                "fixed": "1"
            },

            {
                "type": "0",
                "name": "Life Support",
                "nameShort": "Life Support",
                "level": "1",
                "edition": "1",
                "tech": "2",
                "heat": "0",
                "minDamage": "0",
                "damage": "0",
                "delay": "0",
                "rangeMin": "0",
                "rangeShort": "0",
                "rangeMedium": "0",
                "rangeLong": "0",
                "rangeExtreme": "0",
                "tons": "0",
                "crits": "1",
                "ammo": "0",
                "cost": "0",
                "bv": "0",
                "modifier": "",
                "special": "a",
                "year": "",
                "desc": "",
                "techRating": "b",
                "availability": "a",
                "fixed": "1"
            },

            {
                "type": "0",
                "name": "Sensors",
                "nameShort": "Sensors",
                "level": "1",
                "edition": "1",
                "tech": "2",
                "heat": "0",
                "minDamage": "0",
                "damage": "0",
                "delay": "0",
                "rangeMin": "0",
                "rangeShort": "0",
                "rangeMedium": "0",
                "rangeLong": "0",
                "rangeExtreme": "0",
                "tons": "0",
                "crits": "1",
                "ammo": "0",
                "cost": "0",
                "bv": "0",
                "modifier": "",
                "special": "a",
                "year": "",
                "desc": "",
                "techRating": "b",
                "availability": "a",
                "fixed": "1"
            },

            {
                "type": "0",
                "name": "-",
                "nameShort": "empty head slot",
                "level": "1",
                "edition": "1",
                "tech": "2",
                "heat": "0",
                "minDamage": "0",
                "damage": "0",
                "delay": "0",
                "rangeMin": "0",
                "rangeShort": "0",
                "rangeMedium": "0",
                "rangeLong": "0",
                "rangeExtreme": "0",
                "tons": "0",
                "crits": "1",
                "ammo": "0",
                "cost": "0",
                "bv": "0",
                "modifier": "",
                "special": "a",
                "year": "",
                "desc": "",
                "techRating": "b",
                "availability": "a",
                "fixed": "1"
            },

            {
                "type": "0",
                "name": "Ferro-Fibrous",
                "nameShort": "Ferro",
                "level": "1",
                "edition": "1",
                "tech": "2",
                "heat": "0",
                "minDamage": "0",
                "damage": "0",
                "delay": "0",
                "rangeMin": "0",
                "rangeShort": "0",
                "rangeMedium": "0",
                "rangeLong": "0",
                "rangeExtreme": "0",
                "tons": "0",
                "crits": "1",
                "ammo": "0",
                "cost": "0",
                "bv": "0",
                "modifier": "",
                "special": "a",
                "year": "",
                "desc": "",
                "techRating": "b",
                "availability": "a",
                "fixed": "1"
            },

            {
                "type": "0",
                "name": "Endo Steel",
                "nameShort": "Endo",
                "level": "1",
                "edition": "1",
                "tech": "2",
                "heat": "0",
                "minDamage": "0",
                "damage": "0",
                "delay": "0",
                "rangeMin": "0",
                "rangeShort": "0",
                "rangeMedium": "0",
                "rangeLong": "0",
                "rangeExtreme": "0",
                "tons": "0",
                "crits": "1",
                "ammo": "0",
                "cost": "0",
                "bv": "0",
                "modifier": "",
                "special": "a",
                "year": "",
                "desc": "",
                "techRating": "b",
                "availability": "a",
                "fixed": "1"
            },

            {
                "type": "0",
                "name": "XL Engine",
                "nameShort": "XL Engine",
                "level": "1",
                "edition": "1",
                "tech": "2",
                "heat": "0",
                "minDamage": "0",
                "damage": "0",
                "delay": "0",
                "rangeMin": "0",
                "rangeShort": "0",
                "rangeMedium": "0",
                "rangeLong": "0",
                "rangeExtreme": "0",
                "tons": "0",
                "crits": "1",
                "ammo": "0",
                "cost": "0",
                "bv": "0",
                "modifier": "",
                "special": "a",
                "year": "",
                "desc": "",
                "techRating": "b",
                "availability": "a",
                "fixed": "1"
            },

            {
                "type": "0",
                "name": "Jump Jet",
                "nameShort": "Jump Jet",
                "level": "1",
                "edition": "1",
                "tech": "2",
                "heat": "0",
                "minDamage": "0",
                "damage": "0",
                "delay": "0",
                "rangeMin": "0",
                "rangeShort": "0",
                "rangeMedium": "0",
                "rangeLong": "0",
                "rangeExtreme": "0",
                "tons": "0",
                "crits": "1",
                "ammo": "0",
                "cost": "0",
                "bv": "0",
                "modifier": "",
                "special": "a",
                "year": "",
                "desc": "",
                "techRating": "b",
                "availability": "a",
                "fixed": "1"
            },

            {
                "type": "0",
                "name": "Heat Sink",
                "nameShort": "Heat Sink",
                "level": "1",
                "edition": "1",
                "tech": "2",
                "heat": "0",
                "minDamage": "0",
                "damage": "0",
                "delay": "0",
                "rangeMin": "0",
                "rangeShort": "0",
                "rangeMedium": "0",
                "rangeLong": "0",
                "rangeExtreme": "0",
                "tons": "0",
                "crits": "1",
                "ammo": "0",
                "cost": "0",
                "bv": "0",
                "modifier": "",
                "special": "a",
                "year": "",
                "desc": "",
                "techRating": "b",
                "availability": "a",
                "fixed": "1"
            },


            

            {
                "type": "1",
                "name": "Large Laser",
                "nameShort": "LLaser",
                "level": "1",
                "edition": "2",
                "tech": "0",
                "heat": "8",
                "minDamage": "0",
                "damage": "8",
                "delay": "2",
                "rangeMin": "0",
                "rangeShort": "5",
                "rangeMedium": "10",
                "rangeLong": "15",
                "rangeExtreme": "20",
                "tons": "5",
                "crits": "2",
                "ammo": "0",
                "cost": "100000",
                "bv": "123",
                "modifier": "0",
                "special": "9",
                "year": "2306",
                "desc": "Lasers cause damage by firing an intense beam of light at a target, flooding concentrated energy in the form of heat, which can melt material and overwhelm heat-sensitive electronics. The Large Laser differs from its smaller cousins by being a gamma-ray laser firing a much more powerful beam, allowing it to reach to further ranges and cause more damage.",
                "techRating": "c",
                "availability": "d",
                "fixed": "0"
            },

            {
                "type": "1",
                "name": "Medium Laser",
                "nameShort": "MLaser",
                "level": "1",
                "edition": "2",
                "tech": "0",
                "heat": "3",
                "minDamage": "0",
                "damage": "5",
                "delay": "1",
                "rangeMin": "0",
                "rangeShort": "3",
                "rangeMedium": "6",
                "rangeLong": "9",
                "rangeExtreme": "12",
                "tons": "1",
                "crits": "1",
                "ammo": "0",
                "cost": "40000",
                "bv": "46",
                "modifier": "0",
                "special": "0",
                "year": "2290",
                "desc": "A free-electron laser, it is a device that focuses an amplified beam of light on a small surface area. The medium laser uses this intensified beam of light to damage targets by heating them to melting temperatures.",
                "techRating": "c",
                "availability": "b",
                "fixed": "0"
            },

            {
                "type": "1",
                "name": "Small Laser",
                "nameShort": "SLaser",
                "level": "1",
                "edition": "2",
                "tech": "0",
                "heat": "1",
                "minDamage": "0",
                "damage": "3",
                "delay": "1",
                "rangeMin": "0",
                "rangeShort": "1",
                "rangeMedium": "2",
                "rangeLong": "3",
                "rangeExtreme": "4",
                "tons": "0.5",
                "crits": "1",
                "ammo": "0",
                "cost": "11250",
                "bv": "9",
                "modifier": "0",
                "special": "0",
                "year": "2290",
                "desc": "The compact size of the Small Laser allows it to be equipped and used efficiently on practically anything; however the reduced firepower means that Small Lasers are not usually used on heavier combat devices such as 'Mechs or tanks.",
                "techRating": "c",
                "availability": "b",
                "fixed": "0"
            },
            
            {}
        ]
    }
`;

//////////////////////////////
// Engine Table
//////////////////////////////
const tableEngine = `
{
    "engine": [
        {
            "rating": "5",
            "tons": "0.5",
            "type": "Omni"
        },
        {
            "rating": "10",
            "tons": "0.5",
            "type": "Omni"
        },
        {
            "rating": "15",
            "tons": "0.5",
            "type": "GM"
        },
        {
            "rating": "20",
            "tons": "0.5",
            "type": "Pitban"
        },
        {
            "rating": "25",
            "tons": "0.5",
            "type": "Omni"
        },
        {
            "rating": "30",
            "tons": "1",
            "type": "Nissan"
        },
        {
            "rating": "35",
            "tons": "1",
            "type": "VOX"
        },
        {
            "rating": "40",
            "tons": "1",
            "type": "GM"
        },
        {
            "rating": "45",
            "tons": "1",
            "type": "GM"
        },
        {
            "rating": "50",
            "tons": "1.5",
            "type": "DAV"
        },
        {
            "rating": "55",
            "tons": "1.5",
            "type": "VOX"
        },
        {
            "rating": "60",
            "tons": "1.5",
            "type": "Leenex"
        },
        {
            "rating": "65",
            "tons": "2",
            "type": "Nissan"
        },
        {
            "rating": "70",
            "tons": "2",
            "type": "Omni"
        },
        {
            "rating": "75",
            "tons": "2",
            "type": "GM"
        },
        {
            "rating": "80",
            "tons": "2.5",
            "type": "VOX"
        },
        {
            "rating": "85",
            "tons": "2.5",
            "type": "DAV"
        },
        {
            "rating": "90",
            "tons": "3",
            "type": "DAV"
        },
        {
            "rating": "95",
            "tons": "3",
            "type": "Nissan"
        },
        {
            "rating": "100",
            "tons": "3",
            "type": "Hermes"
        },
        {
            "rating": "105",
            "tons": "3.5",
            "type": "DAV"
        },
        {
            "rating": "110",
            "tons": "3.5",
            "type": "GM"
        },
        {
            "rating": "115",
            "tons": "4",
            "type": "GM"
        },
        {
            "rating": "120",
            "tons": "4",
            "type": "GM"
        },
        {
            "rating": "125",
            "tons": "4",
            "type": "Vlar"
        },
        {
            "rating": "130",
            "tons": "4.5",
            "type": "Magna"
        },
        {
            "rating": "135",
            "tons": "4.5",
            "type": "Hermes"
        },
        {
            "rating": "140",
            "tons": "5",
            "type": "Leenex"
        },
        {
            "rating": "145",
            "tons": "5",
            "type": "Omni"
        },
        {
            "rating": "150",
            "tons": "5.5",
            "type": "GM"
        },
        {
            "rating": "155",
            "tons": "5.5",
            "type": "GM"
        },
        {
            "rating": "160",
            "tons": "6",
            "type": "LTV"
        },
        {
            "rating": "165",
            "tons": "6",
            "type": "VOX"
        },
        {
            "rating": "170",
            "tons": "6",
            "type": "DAV"
        },
        {
            "rating": "175",
            "tons": "7",
            "type": "Omni"
        },
        {
            "rating": "180",
            "tons": "7",
            "type": "GM"
        },
        {
            "rating": "185",
            "tons": "7.5",
            "type": "GM"
        },
        {
            "rating": "190",
            "tons": "7.5",
            "type": "GM"
        },
        {
            "rating": "195",
            "tons": "8",
            "type": "Nissan"
        },
        {
            "rating": "200",
            "tons": "8.5",
            "type": "Nissan"
        },
        {
            "rating": "205",
            "tons": "8.5",
            "type": "Vlar"
        },
        {
            "rating": "210",
            "tons": "9",
            "type": "GM"
        },
        {
            "rating": "215",
            "tons": "9.5",
            "type": "Core Tek"
        },
        {
            "rating": "220",
            "tons": "10",
            "type": "DAV"
        },
        {
            "rating": "225",
            "tons": "10",
            "type": "VOX"
        },
        {
            "rating": "230",
            "tons": "10.5",
            "type": "Leenex"
        },
        {
            "rating": "235",
            "tons": "11",
            "type": "GM"
        },
        {
            "rating": "240",
            "tons": "11.5",
            "type": "Pitban"
        },
        {
            "rating": "245",
            "tons": "12",
            "type": "Magna"
        },
        {
            "rating": "250",
            "tons": "12.5",
            "type": "Magna"
        },
        {
            "rating": "255",
            "tons": "13",
            "type": "Strand"
        },
        {
            "rating": "260",
            "tons": "13.5",
            "type": "Magna"
        },
        {
            "rating": "265",
            "tons": "14",
            "type": "Vlar"
        },
        {
            "rating": "270",
            "tons": "14.5",
            "type": "GM"
        },
        {
            "rating": "275",
            "tons": "15.5",
            "type": "Core Tek"
        },
        {
            "rating": "280",
            "tons": "16",
            "type": "VOX"
        },
        {
            "rating": "285",
            "tons": "16.5",
            "type": "Pitban"
        },
        {
            "rating": "290",
            "tons": "17.5",
            "type": "Omni"
        },
        {
            "rating": "295",
            "tons": "18",
            "type": "GM"
        },
        {
            "rating": "300",
            "tons": "19",
            "type": "Vlar"
        },
        {
            "rating": "305",
            "tons": "19.5",
            "type": "GM"
        },
        {
            "rating": "310",
            "tons": "20.5",
            "type": "Magna"
        },
        {
            "rating": "315",
            "tons": "21.5",
            "type": "GM"
        },
        {
            "rating": "320",
            "tons": "22.5",
            "type": "Pitban"
        },
        {
            "rating": "325",
            "tons": "23.5",
            "type": "VOX"
        },
        {
            "rating": "330",
            "tons": "24.5",
            "type": "VOX"
        },
        {
            "rating": "335",
            "tons": "25.5",
            "type": "Leenex"
        },
        {
            "rating": "340",
            "tons": "27",
            "type": "VOX"
        },
        {
            "rating": "345",
            "tons": "28.5",
            "type": "Vlar"
        },
        {
            "rating": "350",
            "tons": "29.5",
            "type": "Magna"
        },
        {
            "rating": "355",
            "tons": "31.5",
            "type": "LTV"
        },
        {
            "rating": "360",
            "tons": "33",
            "type": "Hermes"
        },
        {
            "rating": "365",
            "tons": "34.5",
            "type": "Vlar"
        },
        {
            "rating": "370",
            "tons": "36.5",
            "type": "Magna"
        },
        {
            "rating": "375",
            "tons": "38.5",
            "type": "GM"
        },
        {
            "rating": "380",
            "tons": "41",
            "type": "GM"
        },
        {
            "rating": "385",
            "tons": "43.5",
            "type": "LTV"
        },
        {
            "rating": "390",
            "tons": "46",
            "type": "Magna"
        },
        {
            "rating": "395",
            "tons": "49",
            "type": "Hermes"
        },
        {
            "rating": "400",
            "tons": "56.5",
            "type": "LTV"
        },
        {
            "rating": "405",
            "tons": "56.5",
            "type": "LTV"
        },
        {
            "rating": "410",
            "tons": "61",
            "type": "Magna"
        },
        {
            "rating": "415",
            "tons": "66.5",
            "type": "Omni"
        },
        {
            "rating": "420",
            "tons": "72.5",
            "type": "Hermes"
        },
        {
            "rating": "425",
            "tons": "79.5",
            "type": "GM"
        },
        {
            "rating": "430",
            "tons": "87.5",
            "type": "Omni"
        },
        {
            "rating": "435",
            "tons": "97.5",
            "type": "DAV"
        },
        {
            "rating": "440",
            "tons": "107.5",
            "type": "Vlar"
        },
        {
            "rating": "445",
            "tons": "119.5",
            "type": "Core Tek"
        },
        {
            "rating": "450",
            "tons": "133.5",
            "type": "VOX"
        },
        {
            "rating": "455",
            "tons": "150",
            "type": "Nissan"
        },
        {
            "rating": "460",
            "tons": "168.5",
            "type": "VOX"
        },
        {
            "rating": "465",
            "tons": "190",
            "type": "Pitban"
        },
        {
            "rating": "470",
            "tons": "214.5",
            "type": "Pitban"
        },
        {
            "rating": "475",
            "tons": "243",
            "type": "Vlar"
        },
        {
            "rating": "480",
            "tons": "275.5",
            "type": "Omni"
        },
        {
            "rating": "485",
            "tons": "313",
            "type": "Magna"
        },
        {
            "rating": "490",
            "tons": "356",
            "type": "Hermes"
        },
        {
            "rating": "495",
            "tons": "405.5",
            "type": "LTV"
        },
        {
            "rating": "500",
            "tons": "462.5",
            "type": "GM"
        }
    ]
}
`;

//////////////////////////////
// Internal Structure Table
//////////////////////////////
const tableIS = `
{
    "is": [
        {
            "tons": "5",
            "isc": "3",
            "ist": "2",
            "isa": "1",
            "isl": "1"
        },
        {
            "tons": "10",
            "isc": "4",
            "ist": "3",
            "isa": "1",
            "isl": "2"
        },
        {
            "tons": "15",
            "isc": "5",
            "ist": "4",
            "isa": "2",
            "isl": "3"
        },
        {
            "tons": "20",
            "isc": "6",
            "ist": "5",
            "isa": "3",
            "isl": "4"
        },
        {
            "tons": "25",
            "isc": "8",
            "ist": "6",
            "isa": "4",
            "isl": "6"
        },
        {
            "tons": "30",
            "isc": "10",
            "ist": "7",
            "isa": "5",
            "isl": "7"
        },
        {
            "tons": "35",
            "isc": "11",
            "ist": "8",
            "isa": "6",
            "isl": "8"
        },
        {
            "tons": "40",
            "isc": "12",
            "ist": "10",
            "isa": "6",
            "isl": "10"
        },
        {
            "tons": "45",
            "isc": "14",
            "ist": "11",
            "isa": "7",
            "isl": "11"
        },
        {
            "tons": "50",
            "isc": "16",
            "ist": "12",
            "isa": "8",
            "isl": "12"
        },
        {
            "tons": "55",
            "isc": "18",
            "ist": "13",
            "isa": "9",
            "isl": "13"
        },
        {
            "tons": "60",
            "isc": "20",
            "ist": "14",
            "isa": "10",
            "isl": "14"
        },
        {
            "tons": "65",
            "isc": "21",
            "ist": "15",
            "isa": "10",
            "isl": "15"
        },
        {
            "tons": "70",
            "isc": "22",
            "ist": "15",
            "isa": "11",
            "isl": "15"
        },
        {
            "tons": "75",
            "isc": "23",
            "ist": "16",
            "isa": "12",
            "isl": "16"
        },
        {
            "tons": "80",
            "isc": "25",
            "ist": "17",
            "isa": "13",
            "isl": "17"
        },
        {
            "tons": "85",
            "isc": "27",
            "ist": "18",
            "isa": "14",
            "isl": "18"
        },
        {
            "tons": "90",
            "isc": "29",
            "ist": "19",
            "isa": "15",
            "isl": "19"
        },
        {
            "tons": "95",
            "isc": "30",
            "ist": "20",
            "isa": "16",
            "isl": "20"
        },
        {
            "tons": "100",
            "isc": "31",
            "ist": "21",
            "isa": "17",
            "isl": "21"
        }
    ]
}
`;

// Parse JSON tables
const weaponTable = JSON.parse(tableArsenal);

const engineTable = JSON.parse(tableEngine);

const isTable = JSON.parse(tableIS);