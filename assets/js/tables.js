/**************************
Tables and Conversions
**************************/

// Get the weight class description based the on total mass
function weightClass(t) {
    var c;
    if (t < 20) {
        c = "Ultralight";
    } else if (t < 40) {
        c = "Light"; 
    } else if (t < 60) {
        c = "Medium";
    } else if (t < 80) {
        c = "Heavy";
    } else if (t < 101) {
        c = "Assault";
    } else if (t < 201) {
        c = "Superheavy";
    }
    return c;
}

// Convert Jumping Movement Points to meters
function mp2Meters(v) {
    return v * 30;
}

// Remlab Page Theme Selections
const arrTheme = [
    'Default',
    'Vintage'
];

// Btech Ruleset (aka Level)
const arrRuleSet = [
    'Introductory', // Level 1
    'Standard', // Level 2
    'Advanced', // Level 2+
    'Experimental' // Level 3
];

// Btech Box Set Edition
const arrEdition = [
    '2nd', // Level 1
    '3rd', // Level 2
    '4th', // Level 2
    '5th' // Level 2
];

// Technology Base
const arrTechBase = [
    'Inner Sphere',
    'Clan'
];

// Mech Chassis
const arrChassisType = [
    'BattleMech',
    'IndustrialMech',
    'Land-Air Mech'
    //'OmniMech',
    //'QuadVee'
];

// Names for the Eras
const arrEra = [
    'Age of War',
    'Star League',
    'Succession Wars',
    'Clan Invasion',
    'Civil War',
    'Jihad',
    'Republic',
    'Dark Age'
];

// Names for the types of Weapons
const arrWeaponKind = [
    'Special',
    'Energy',
    'Ballistic',
    'Missle',
    'Melee',
    'Artillery',
    'Equipment',
    'Industrial',
    'Ammunition'
];

// Warrior Experience
const arrExperience = [
    'Green',
    'Regular',
    'Veteran',
    'Elite'
];

// Warrior Affiliation
const arrAffiliation = [
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
const arrSpecialAbilities = [
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
const TechRating = {
    a:'Primitive',
    b:'Low-Tech',
    c:'Common Tech',
    d:'High-Tech',
    e:'Advanced',
    f:'Hyper-Advanced'
};

// Weapon Availability ratings
const AvailabilityRating = {
    a:'Very Common',
    b:'Common',
    c:'Uncommon',
    d:'Rare',
    e:'Very Rare',
    f:'Unique',
    x:'Unavailable'
};

// Design Quirk : Positive
const arrDQPositive = [
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
const arrDQNegative = [
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
const arrArmorType = [
    'Standard',
    'Ferro-Fibrous',
    'Light Ferro-Fibrous',
    'Heavy Ferro-Fibrous',
    'Stealth',
    'Industrial',
    'Commercial'
];

// Internal Structure types
const arrISType = [
    'Standard',
    'Endo Steel'
];

// Gyro types
const arrGyroType = [
    'Standard',
    'Compact',
    'Heavy-duty',
    'Extra-Light'
];

// Cockpit types
const arrCockpitType = [
    'Standard',
    'Small'
];

// Targeting System types
const arrTargetType = [
    'Standard',
    'Targeting Computer'
];

// Heatsink types
const arrHSType = [
    'Single',
    'Double'
];

// Jump Jets types
const arrJJType = [
    'Standard',
    'Improved'
];

// Engine types
const arrEngineType = [
    'Fusion',
    //'Fusion XL',
    //'Fusion XXL',
    //'Light Fusion',
    //'Compact Fusion',
    //'Fission'
    //'Fuel Cell',
    'ICE'
];

// Leg Configuration types
const arrLegsType = [
    'Biped',
    //'Tripod',
    'Quadraped'
];

// Auto-Eject Modes
const arrAutoEject = {
    'false': 'Disabled',
    'true':  'Enabled'
};

// Generate the Mech heat scale
const arrHeatScale = {
    30: 'Shutdown',
    29: '',
    28: 'Ammo Explosion, avoid on 8+',
    27: '',
    26: 'Shutdown, avoid on 10+',
    25: '-5 Movement Points',
    24: '+4 Modifier to Fire',
    23: 'Ammo Explosion, avoid on 6+',
    22: 'Shutdown, avoid on 8+',
    21: '',
    20: '-4 Movement Points',
    19: 'Ammo Explosion, avoid on 4+',
    18: 'Shutdown, avoid on 6+',
    17: '+3 Modifier to Fire',
    16: '',
    15: '-3 Movement Points',
    14: 'Shutdown, avoid on 4+',
    13: '+2 Modifier to Fire',
    12: '',
    11: '',
    10: '-2 Movement Points',
    9: '',
    8: '+1 Modifier to Fire',
    7: '',
    6: '',
    5: '-1 Movement Points',
    4: '',
    3: '',
    2: '',
    1: '',
    0: ''
};

// Movement Points to KPH conversion
const mp2Kph = [0,14,21,32,43,54,64,75,86,97,108,118,129,140,151,162,172,184,194,201,216,230,248,261,275,290,305,318,329,340,351];

// Defence Factor (Calulating BV)
const arrDefenceFac = [1,1.1,1.2,1.3,1.4,1.5,1.6,1.7];

// Target Modifier based on top speed (Calulating BV)
const arrTargetMod = [0,0,0,1,1,2,2,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4];

// Speed Factor (Calulating BV)
const arrSpeedFac = [0.44,0.54,0.65,0.77,0.88,1,1.12,1.24,1.37,1.5,1.63,1.76,1.89,2.02,2.16,2.3,2.44,2.58,2.72,2.86,3,3.15,3.29,3.44,3.59,3.74,4];