/**************************
 * Tables and Conversions
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
    if (r < 1) c = 'N/A'; // 0
    else if (r < 4) c = 'Point'; // 1-3
    else if (r < 10) c = 'Short'; // 4-9
    else if (r < 19) c = 'Medium'; // 10-18
    else if (r < 25) c = 'Long'; // 19-24
    else c = 'Extreme'; // 25+
    return c;
};
/*
// Support Vehicle size class in tons
const a_SizeClass = [
    'Small', // wh = 1-4 | tr = 1-4 | hv = 1-4 | vt = 1-4 | wi = 1-4
    'Medium', // wh = 5-80 | tr = 5-100 | hv 5-50 | vt = 5-30 | wi = 5-80
    'Large' //  wh = 81-160 | tr 101-200 | hv 51-100 | vt = 31-60 | wi = 81-160
];
*/
// Btech Ruleset (aka Level)
const a_RuleSet = Object.freeze([
    'Introductory', // Level 1 (TL)
    'Standard', // Level 2 (TL)
    //'Standard (DA)', // Level 2 Dark Age (TL) 
    'Advanced', // Level 3
    'Experimental' // Level 3+
]);

// Technology Base
const a_TechBase = Object.freeze([
    'Inner Sphere',
    'Clan'
]);

// Mech Chassis
const a_ChassisType = Object.freeze([
    'BattleMech',
    'IndustrialMech',
    'Land-Air Mech'
    //'OmniMech'
]);

// Defined Mech Roles
const a_MechRole = Object.freeze([
    'Undefined',
    'Ambusher',
    'Brawler',
    'Juggernaut',
    'Missile Boat',
    'Scout',
    'Skirmisher',
    'Sniper',
    'Striker'
]);

// Names for the types of Weapons
const a_WeaponClass = Object.freeze([
    'Hardpoints', // 0
    'Energy', // 1
    'Ballistic', // 2
    'Missle', // 3
    'Artillery', // 4
    'Equipment', // 5
    'Industrial', // 6
    'Ammunition', // 7
    'Bombs', // 8
    'Other' // 9
]);

// Weapon Tech Ratings
const a_TechRating = Object.freeze({
    a: 'Primitive',
    b: 'Low-Tech',
    c: 'Common Tech',
    d: 'High-Tech',
    e: 'Advanced',
    f: 'Hyper-Advanced'
});

// Weapon Availability ratings
const a_AvailabilityRating = Object.freeze({
    a: 'Very Common',
    b: 'Common',
    c: 'Uncommon',
    d: 'Rare',
    e: 'Very Rare',
    f: 'Unique',
    x: 'Unavailable'
});

// Armor types
const a_ArmorType = Object.freeze([
    'Standard',
    'Ferro-Fibrous',
    'Light Ferro-Fibrous',
    'Heavy Ferro-Fibrous',
    'Stealth',
    'Industrial',
    'Commercial'
]);

// Internal Structure types
const a_ISType = Object.freeze([
    'Standard',
    'Endo Steel'
]);

// Gyro types
const a_GyroType = Object.freeze([
    'Standard',
    'Compact',
    'Heavy-duty',
    'Extra-Light'
]);

// Cockpit types
const a_CockpitType = Object.freeze([
    'Standard',
    'Small'
]);

// Targeting System types
const a_TargetType = Object.freeze([
    'Standard',
    'Targeting Computer'
]);

// Heatsink types
const a_HSType = Object.freeze([
    'Single',
    'Double',
    'Compact'
]);

// Jump Jets types
const a_JJType = Object.freeze([
    'Standard',
    'Improved'
]);

// Engine types
const a_EngineType = Object.freeze([
    'Fusion',
    'Fusion XL',
    'Fusion Light',
    'Fusion Compact',
    'ICE'
    //'Fusion XXL'
    //'Fission'
    //'Fuel Cell'
]);

// Myomer type
const a_MyomerType = Object.freeze([
    'Standard',
    'MASC',
    'TSM'
]);

// Auto-Eject Modes
const a_AutoEject = Object.freeze({
    false: 'Disabled',
    true: 'Enabled'
});

// Warrior's Race
const a_Race = Object.freeze([
    'Human',
    'Clanner'
]);

// Warrior's Experience
const a_Experience = Object.freeze([
    'Green',
    'Regular',
    'Veteran',
    'Elite'
]);

// Warrior Affiliation
const a_Affiliation = Object.freeze([
    '(blank line)',
    'INNER SPHERE |————',
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
    'CLANS |————————',
    'Clan Diamond Shark',
    'Clan Ghost Bear',
    'Clan Jade Falcon',
    'Clan Nova Cat',
    'Clan Smoke Jaguar',
    'Clan Steel Viper',
    'Clan Wolf',
    'Clan Hell\'s Horses',
    'Ghost Bear Dominion',
    'PERIPHERY |——————',
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
    'GENERIC |———————',
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
]);

// Design Quirk : Positive
const a_DQPositive = Object.freeze([
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
    'Variable-Range Targeting'
]);

// Design Quirk : Negative
const a_DQNegative = Object.freeze([
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
])

// Factory name
const a_Factory = [
    "Unknown",
    "Al Na'ir",
    "Alarion",
    "Alphard",
    "Alpheratz",
    "Alshain",
    "Arc-Royal",
    "Ares",
    "Ascuncion",
    "Bell",
    "Bryant",
    "Calloway VI",
    "Capella",
    "Caph",
    "Carlisle",
    "Connaught",
    "Corey",
    "Coventry",
    "Crofton",
    "Dieron",
    "Emirs IV",
    "Epsilon Eridani",
    "Errai",
    "Gibson",
    "Graham IV",
    "Hesperus",
    "Hesperus II",
    "Hun Ho",
    "Inarcs",
    "Irian",
    "Kalidasa",
    "Kathil",
    "Kendall",
    "Keystone",
    "Keystone Plant #3",
    "Krenice",
    "Loburg",
    "Loxley",
    "Luthien",
    "Marcus",
    "Mars",
    "Menke",
    "Midway",
    "Na'ir",
    "Nanking",
    "New Avalon",
    "New Earth",
    "New Samarkand",
    "New Syrtis",
    "New Valencia",
    "Northwind",
    "Oliver",
    "Outreach",
    "Ozawa",
    "Panpour",
    "Paradise",
    "Perdition",
    "Pinard",
    "Quentin",
    "Ramen II",
    "Robinson",
    "Satalice",
    "Savannah",
    "Shiro III",
    "Sian",
    "Skye",
    "Solaris VII",
    "Son Hoa",
    "Soul",
    "St. Ives",
    "Stewart",
    "Storfors",
    "Talon",
    "Taurus",
    "Tematagi",
    "Terra",
    "Terra Firma",
    "Tharkad",
    "Themopolis",
    "Tikonov",
    "Twycross",
    "Vega",
    "Victoria",
    "Vendrell",
    "Wallis",
    "Warlock",
    "Wyatt"
];

// Manufacturer name
const a_Manufacturer = [
    "Unknown",
    "Achernar BattleMechs",
    "Aldis Industries",
    "Alliance Defenders Limited",
    "Alliance Mining and Geology",
    "Alliance Motors Ltd.",
    "Allied AeroSpace Incorporated",
    "Alphard Trading Corporation",
    "Alshain Weapons",
    "Amau Electronics",
    "Andoran Industries Limited",
    "Andurien Aerotech",
    "Apple Computers Interstellar",
    "Arc-Royal MechWorks",
    "Arenthir Electronics",
    "Argile Technologies of Skye",
    "Bander BattleMechs",
    "Benson and Bjorn",
    "Bergan Industries",
    "Bithinia Ballistics",
    "Blackstone BattleMechs",
    "Blackwell Heavy Industries",
    "Blankenburg Technologies",
    "Blue Shot Weapons",
    "Bowie Industries",
    "BPP Industries",
    "Brigadier Corporation",
    "Brooks Incorporated",
    "Buda Imperial Vehicles",
    "Bulldog Enterprises",
    "Cal-Boeing of Dorwinion",
    "Ceres Metals Industries",
    "Challenge Systems",
    "ComStar Factories",
    "Corean Enterprises",
    "Cosara Weaponries",
    "Cosby Battlemech Research Firm",
    "Coventry Defense Conglomerate",
    "Coventry/Earthwerks Combine",
    "Curtiss Militech",
    "Cyclops",
    "Defiance Industries",
    "Deller",
    "Dharma Hyperspace",
    "Diplan Mechyards",
    "Diverse Optics",
    "Doering Electronics",
    "Dow-Nexus Fusion Products",
    "Dynamico Ltd.",
    "Dynamics",
    "Earthwerks Incorporated",
    "Edasich Motors",
    "Exeter Organisation",
    "Federated-Boeing Interstellar",
    "Firmir Weaponry",
    "Flame Tech",
    "Ford Military Limited",
    "Forerunner",
    "Free Worlds Defense Industries",
    "Fusigon Heavy Weaponry",
    "Galileo Instruments",
    "Galtor Naval Yards",
    "Garret SatComm",
    "General Dynamics",
    "General Mechanics",
    "General Motors",
    "General Systems",
    "Gibson Federated BattleMechs",
    "Gienah Combat Vehicles",
    "GM BattleMechs",
    "Gorton",
    "Grumium Creations",
    "Grumman Amalgamated",
    "Guided Technologies",
    "Gutierrez Aerospace",
    "HartfordCo",
    "Harvard Company",
    "Hellespont Industries",
    "HildCo Interplanetary",
    "Hinsdale Elec",
    "H-Net Enterprises",
    "Hollis Industries",
    "Homer Plant",
    "Illium Shipyards",
    "IMB Systems",
    "Imperator Automatic Weaponry",
    "Imstar Aerospace",
    "Independence Weaponry",
    "Ioto Galactic Enterprises",
    "Irece Alpha",
    "Irian BattleMechs Unlimited",
    "Irian Technologies",
    "J.B. BattleMechs Inc.",
    "Jalastar Aerospace",
    "Johnston Industries",
    "Joint Equipment Systems",
    "Kajuka",
    "Kali Yama Weapons Industries",
    "Kali Yama/Alphard Trading Corp.",
    "Kallon Industries",
    "Kallon Weapons Industries",
    "Kerr-McGinnis",
    "Komiyaba/Nissan General Industries",
    "Kong Interstellar Corporation",
    "Kressly Warworks",
    "Krupp Armaments Works",
    "Krupp Stellar Technologies Incorporated",
    "Kurita Combine Munitions Corporation",
    "Lang Industries Incorporated",
    "Lantren Corporation",
    "LexaTech Industries",
    "Lockheed/CBM Corporation",
    "Long Life Company",
    "Lushann Industrials Limited",
    "Luthien Armor Works",
    "Lycomb-Davion IntraTech",
    "Magna",
    "Majesty Metals and Manufacturing",
    "Maltex Corporation",
    "Marian Arms",
    "Martinson Armaments",
    "Matabushi, Inc.",
    "MatherTechno Incorporated",
    "Maxell Metals Incorporated",
    "McCarron's Trading Company",
    "MediQuick Services",
    "Mendham Electronics",
    "Menke Armor and Armamanets",
    "Mercy Industries of Talon",
    "Michaelson Heavy Industries",
    "Millenium Industries",
    "Mitchell Industries",
    "Mountain Wolf BattleMechs",
    "Mujika Aerospace Technologies",
    "N&D",
    "New Earth Trading Company",
    "New Samarkand Metals",
    "New Syrtis Shipyards",
    "Newhart Interstellar Industries Limited",
    "Nimakachi Fusion Products",
    "Nissan General Industries",
    "Norse BattleMech Works",
    "Norse-Storm BattleMechs Inc.",
    "Norse-Storm Technologies Inc.",
    "O/P Computer Electronics",
    "Odin Manufacturing",
    "Olivetti Weaponry",
    "O'Neil Yards",
    "Orguss Industries",
    "Oriente Weapons Works",
    "Ostmann Industries",
    "Pinard Protectorates Limited",
    "Pinard-Dicolais Electronics",
    "Praxton Fusion Engines",
    "Precision Weaponry",
    "Quickscell Company",
    "RAMTech",
    "Rander Communications Equipment",
    "Rasalhague Armor Works",
    "Rashpur-Owens Inc.",
    "Red Devil Industries",
    "Renault-Prime Industries",
    "Robinson Standard BattleWorks",
    "Rolls Royce (Tital Yards)",
    "Ronin Incorporated",
    "S.L. Lewis",
    "Sacrado Industries",
    "Salvatore Inc.",
    "Saroyan Special Production",
    "Scarborough Manufacturers",
    "SelaSys Inc.",
    "Semier Data Tron",
    "Shengli Arms",
    "Shipil Company",
    "Skobel MechWorks",
    "Solaris Arms",
    "Star League Weapons Research",
    "StarCorps Industries",
    "Stellar Trek",
    "Sterope Defense Industries",
    "Stormvanger Assemblies",
    "Swedenborg Heavy Industries",
    "TAG",
    "Tanadi Computers",
    "Tango Aerospace",
    "Tao 'Mechworks",
    "Tauris Majoris Mining",
    "Taurus Territorial Industries",
    "Technicron Manufacturing",
    "Telfar BattleMechs",
    "Tengo Aerospace",
    "Terada",
    "Terada Yard",
    "Texlos Miltronics",
    "TharHes Industries",
    "Titan Yards",
    "Tomori Trans Industrial",
    "Trellis Electronics",
    "Trellshire Heavy Industries",
    "Triad Technologies",
    "United Outworlders Corporation",
    "Universal Air",
    "Valiant Systems",
    "Vandenberg Mechanized Industries",
    "VEST",
    "Victory",
    "Wakazashi Enterprises",
    "Wangker Aerospace",
    "WC Site 1",
    "WC Site 3",
    "Wells Technologies",
    "Whitworth Company",
    "Windston-CherrySeed Consolidated",
    "Wunderland Enterprises",
    "Yankee Weapons Systems",
    "Yeffters Weapons Factory",
    "Yori 'Mech Works"
];

// Names for the Eras
const a_Era = Object.freeze([
    'Age of War', // 2398
    'Star League', // 2570
    'Succession Wars', // 2781
    'Clan Invasion', // 3049
    'Civil War', // 3062
    'Jihad', // 3068
    'Republic', // 3081
    'Dark Age', // 3132
    'ilClan' // 3151
]);

// Names for the Eras Simplified
const a_EraSimplified = Object.freeze([
    'Star League', // 2570-2780
    'Succession Wars', // 2781-3030
    'Clan Invasion', // 3049-3052
    'Dark Age' // 3132+
]);

// Year introduced list
const a_yearIntro = [2750, 3025, 3028, 3039, 3050, 3055, 3058, 3060, 3067, 3075, 3085, 3135, 3145, 3150];

// Calc BV: Defence Factor
const a_DefenceFac = Object.freeze([1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7]);

// Calc BV: Target Modifier based on top speed
const a_TargetMod = Object.freeze([0, 0, 0, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]);

// Calc BV: Speed Factor
const a_SpeedFac = Object.freeze([0.44, 0.54, 0.65, 0.77, 0.88, 1, 1.12, 1.24, 1.37, 1.5, 1.63, 1.76, 1.89, 2.02, 2.16, 2.3, 2.44, 2.58, 2.72, 2.86, 3, 3.15, 3.29, 3.44, 3.59, 3.74, 4]);

// Teach Readout: Convert MP to KPH
const mp2Kph = Object.freeze([0, 14, 21, 32, 43, 54, 64, 75, 86, 97, 108, 118, 129, 140, 151, 162, 172, 184, 194, 201, 216, 230, 248, 261, 275, 290, 305, 318, 329, 340, 351]);


/**************************
 * JSON Tables
 **************************/
// Spreadsheet on Google Docs: https://docs.google.com/spreadsheets/d/1j4kh83VdzD2SbhHTBsUDTIhraINZ4W9-QzQ6T3m-cm8/edit?usp=sharing
// JSON converter: https://csvjson.com/csv2json

// Weapons and Equipment
const tableArsenal = Object.freeze(`
{
    "weapon": [
        {
        "id": 0,
        "type": 0,
        "name": "Shoulder",
        "aId": 0,
        "rules": 0,
        "tech": 2,
        "heat": 0,
        "minDamage": 0,
        "damage": 0,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 0,
        "crits": 1,
        "ammo": 0,
        "cost": 0,
        "bv": 0,
        "modifier": 0,
        "techRating": "c",
        "availability": "c",
        "year": 0,
        "desc": ""
    },
    {
        "id": 1,
        "type": 0,
        "name": "Upper Arm",
        "aId": 0,
        "rules": 0,
        "tech": 2,
        "heat": 0,
        "minDamage": 0,
        "damage": 0,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 0,
        "crits": 1,
        "ammo": 0,
        "cost": 0,
        "bv": 0,
        "modifier": 0,
        "techRating": "c",
        "availability": "c",
        "year": 0,
        "desc": ""
    },
    {
        "id": 2,
        "type": 0,
        "name": "Lower Arm",
        "aId": 0,
        "rules": 0,
        "tech": 2,
        "heat": 0,
        "minDamage": 0,
        "damage": 0,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 0,
        "crits": 1,
        "ammo": 0,
        "cost": 0,
        "bv": 0,
        "modifier": 0,
        "techRating": "c",
        "availability": "c",
        "year": 0,
        "desc": ""
    },
    {
        "id": 3,
        "type": 0,
        "name": "Hand",
        "aId": 0,
        "rules": 0,
        "tech": 2,
        "heat": 0,
        "minDamage": 0,
        "damage": 0,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 0,
        "crits": 1,
        "ammo": 0,
        "cost": 0,
        "bv": 0,
        "modifier": 0,
        "techRating": "c",
        "availability": "c",
        "year": 0,
        "desc": ""
    },
    {
        "id": 4,
        "type": 0,
        "name": "Engine",
        "aId": 0,
        "rules": 0,
        "tech": 2,
        "heat": 0,
        "minDamage": 0,
        "damage": 0,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 0,
        "crits": 1,
        "ammo": 0,
        "cost": 0,
        "bv": 0,
        "modifier": 0,
        "techRating": "d",
        "availability": "c",
        "year": 0,
        "desc": ""
    },
    {
        "id": 5,
        "type": 0,
        "name": "Gyro",
        "aId": 0,
        "rules": 0,
        "tech": 2,
        "heat": 0,
        "minDamage": 0,
        "damage": 0,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 0,
        "crits": 1,
        "ammo": 0,
        "cost": 0,
        "bv": 0,
        "modifier": 0,
        "techRating": "d",
        "availability": "c",
        "year": 0,
        "desc": ""
    },
    {
        "id": 6,
        "type": 0,
        "name": "Hip",
        "aId": 0,
        "rules": 0,
        "tech": 2,
        "heat": 0,
        "minDamage": 0,
        "damage": 0,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 0,
        "crits": 1,
        "ammo": 0,
        "cost": 0,
        "bv": 0,
        "modifier": 0,
        "techRating": "c",
        "availability": "c",
        "year": 0,
        "desc": ""
    },
    {
        "id": 7,
        "type": 0,
        "name": "Upper Leg",
        "aId": 0,
        "rules": 0,
        "tech": 2,
        "heat": 0,
        "minDamage": 0,
        "damage": 0,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 0,
        "crits": 1,
        "ammo": 0,
        "cost": 0,
        "bv": 0,
        "modifier": 0,
        "techRating": "c",
        "availability": "c",
        "year": 0,
        "desc": ""
    },
    {
        "id": 8,
        "type": 0,
        "name": "Lower Leg",
        "aId": 0,
        "rules": 0,
        "tech": 2,
        "heat": 0,
        "minDamage": 0,
        "damage": 0,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 0,
        "crits": 1,
        "ammo": 0,
        "cost": 0,
        "bv": 0,
        "modifier": 0,
        "techRating": "c",
        "availability": "c",
        "year": 0,
        "desc": ""
    },
    {
        "id": 9,
        "type": 0,
        "name": "Foot",
        "aId": 0,
        "rules": 0,
        "tech": 2,
        "heat": 0,
        "minDamage": 0,
        "damage": 0,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 0,
        "crits": 1,
        "ammo": 0,
        "cost": 0,
        "bv": 0,
        "modifier": 0,
        "techRating": "c",
        "availability": "c",
        "year": 0,
        "desc": ""
    },
    {
        "id": 10,
        "type": 0,
        "name": "Cockpit",
        "aId": 0,
        "rules": 0,
        "tech": 2,
        "heat": 0,
        "minDamage": 0,
        "damage": 0,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 0,
        "crits": 1,
        "ammo": 0,
        "cost": 0,
        "bv": 0,
        "modifier": 0,
        "techRating": "c",
        "availability": "c",
        "year": 0,
        "desc": ""
    },
    {
        "id": 11,
        "type": 0,
        "name": "Life Support",
        "aId": 0,
        "rules": 0,
        "tech": 2,
        "heat": 0,
        "minDamage": 0,
        "damage": 0,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 0,
        "crits": 1,
        "ammo": 0,
        "cost": 0,
        "bv": 0,
        "modifier": 0,
        "techRating": "c",
        "availability": "a",
        "year": 0,
        "desc": ""
    },
    {
        "id": 12,
        "type": 0,
        "name": "Sensors",
        "aId": 0,
        "rules": 0,
        "tech": 2,
        "heat": 0,
        "minDamage": 0,
        "damage": 0,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 0,
        "crits": 1,
        "ammo": 0,
        "cost": 0,
        "bv": 0,
        "modifier": 0,
        "techRating": "c",
        "availability": "a",
        "year": 0,
        "desc": ""
    },
    {
        "id": 13,
        "type": 0,
        "name": "-",
        "aId": 0,
        "rules": 0,
        "tech": 2,
        "heat": 0,
        "minDamage": 0,
        "damage": 0,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": -1,
        "crits": 1,
        "ammo": 0,
        "cost": 0,
        "bv": 0,
        "modifier": 0,
        "techRating": "a",
        "availability": "a",
        "year": 0,
        "desc": ""
    },
    {
        "id": 14,
        "type": 0,
        "name": "Ferro-Fibrous",
        "aId": 0,
        "rules": 0,
        "tech": 2,
        "heat": 0,
        "minDamage": 0,
        "damage": 0,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 0,
        "crits": 1,
        "ammo": 0,
        "cost": 0,
        "bv": 0,
        "modifier": 0,
        "techRating": "e",
        "availability": "f",
        "year": 0,
        "desc": ""
    },
    {
        "id": 15,
        "type": 0,
        "name": "Endo Steel",
        "aId": 0,
        "rules": 0,
        "tech": 2,
        "heat": 0,
        "minDamage": 0,
        "damage": 0,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 0,
        "crits": 1,
        "ammo": 0,
        "cost": 0,
        "bv": 0,
        "modifier": 0,
        "techRating": "e",
        "availability": "d",
        "year": 0,
        "desc": ""
    },
    {
        "id": 16,
        "type": 0,
        "name": "XL Engine",
        "aId": 0,
        "rules": 0,
        "tech": 2,
        "heat": 0,
        "minDamage": 0,
        "damage": 0,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 0,
        "crits": 1,
        "ammo": 0,
        "cost": 0,
        "bv": 0,
        "modifier": 0,
        "techRating": "e",
        "availability": "c",
        "year": 0,
        "desc": ""
    },
    {
        "id": 17,
        "type": 0,
        "name": "Jump Jet",
        "aId": 0,
        "rules": 0,
        "tech": 2,
        "heat": 0,
        "minDamage": 0,
        "damage": 0,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 1,
        "crits": 1,
        "ammo": 0,
        "cost": 0,
        "bv": 0,
        "modifier": 0,
        "techRating": "d",
        "availability": "b",
        "year": 0,
        "desc": ""
    },
    {
        "id": 18,
        "type": 0,
        "name": "Heat Sink",
        "aId": 0,
        "rules": 0,
        "tech": 2,
        "heat": 0,
        "minDamage": 0,
        "damage": 0,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 1,
        "crits": 1,
        "ammo": 0,
        "cost": 0,
        "bv": 0,
        "modifier": 0,
        "techRating": "d",
        "availability": "b",
        "year": 0,
        "desc": ""
    },
    {
        "id": 19,
        "type": 0,
        "name": "Hatchet",
        "aId": 0,
        "rules": 0,
        "tech": 0,
        "heat": 0,
        "minDamage": 2,
        "damage": 20,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 1,
        "crits": 1,
        "ammo": 0,
        "cost": 5000,
        "bv": 1.5,
        "modifier": 0,
        "techRating": "c",
        "availability": "f",
        "year": 3022,
        "desc": "The Hatchet is a melee attack weapon equipped on BattleMechs. While most 'Mechs are equipped with ranged weaponry, melee weaponry is also both feasible and useful due to increased damage potential (over a punch) and a lack of heat buildup."
    },
    {
        "id": 20,
        "type": 1,
        "name": "Large Laser",
        "aId": 0,
        "rules": 0,
        "tech": 0,
        "heat": 8,
        "minDamage": 0,
        "damage": 8,
        "delay": 2,
        "rangeMin": 0,
        "rangeShort": 5,
        "rangeMedium": 10,
        "rangeLong": 15,
        "rangeExtreme": 20,
        "tons": 5,
        "crits": 2,
        "ammo": 0,
        "cost": 100000,
        "bv": 123,
        "modifier": 0,
        "techRating": "c",
        "availability": "d",
        "year": 2306,
        "desc": "Lasers cause damage by firing an intense beam of light at a target, flooding concentrated energy in the form of heat, which can melt material and overwhelm heat-sensitive electronics. The Large Laser differs from its smaller cousins by being a gamma-ray laser firing a much more powerful beam, allowing it to reach to further ranges and cause more damage."
    },
    {
        "id": 21,
        "type": 1,
        "name": "Medium Laser",
        "aId": 0,
        "rules": 0,
        "tech": 0,
        "heat": 3,
        "minDamage": 0,
        "damage": 5,
        "delay": 1,
        "rangeMin": 0,
        "rangeShort": 3,
        "rangeMedium": 6,
        "rangeLong": 9,
        "rangeExtreme": 12,
        "tons": 1,
        "crits": 1,
        "ammo": 0,
        "cost": 40000,
        "bv": 46,
        "modifier": 0,
        "techRating": "c",
        "availability": "b",
        "year": 2290,
        "desc": "A free-electron laser, it is a device that focuses an amplified beam of light on a small surface area. The medium laser uses this intensified beam of light to damage targets by heating them to melting temperatures."
    },
    {
        "id": 22,
        "type": 1,
        "name": "Small Laser",
        "aId": 0,
        "rules": 0,
        "tech": 0,
        "heat": 1,
        "minDamage": 0,
        "damage": 3,
        "delay": 1,
        "rangeMin": 0,
        "rangeShort": 1,
        "rangeMedium": 2,
        "rangeLong": 3,
        "rangeExtreme": 4,
        "tons": 0.5,
        "crits": 1,
        "ammo": 0,
        "cost": 11250,
        "bv": 9,
        "modifier": 0,
        "techRating": "c",
        "availability": "b",
        "year": 2290,
        "desc": "The compact size of the Small Laser allows it to be equipped and used efficiently on practically anything; however the reduced firepower means that Small Lasers are not usually used on heavier combat devices such as 'Mechs or tanks."
    },
    {
        "id": 23,
        "type": 1,
        "name": "PPC",
        "aId": 0,
        "rules": 0,
        "tech": 0,
        "heat": 10,
        "minDamage": 0,
        "damage": 10,
        "delay": 3,
        "rangeMin": 3,
        "rangeShort": 6,
        "rangeMedium": 12,
        "rangeLong": 18,
        "rangeExtreme": 24,
        "tons": 7,
        "crits": 3,
        "ammo": 0,
        "cost": 200000,
        "bv": 176,
        "modifier": 0,
        "techRating": "c",
        "availability": "c",
        "year": 2460,
        "desc": "The Particle Projector Cannon is an energy weapon, firing a concentrated stream of protons or ions at a target, with damage resulting from both thermal and kinetic energy. Despite being an energy weapon, it produces recoil."
    },
    {
        "id": 24,
        "type": 1,
        "name": "Flamer",
        "aId": 0,
        "rules": 0,
        "tech": 0,
        "heat": 3,
        "minDamage": 0,
        "damage": 2,
        "delay": 1,
        "rangeMin": 0,
        "rangeShort": 1,
        "rangeMedium": 2,
        "rangeLong": 3,
        "rangeExtreme": 4,
        "tons": 1,
        "crits": 1,
        "ammo": 0,
        "cost": 7500,
        "bv": 6,
        "modifier": 0,
        "techRating": "c",
        "availability": "b",
        "year": 2025,
        "desc": "The standard Flamer taps into a BattleMech's reactor to produce heat in the form of a plasma release. An extremely short-ranged weapon, the Flamer is devastating against infantry, however damage done against other Mechs and vehicles is negligible, though it can raise the enemy unit's heat levels."
    },
    {
        "id": 25,
        "type": 2,
        "name": "Autocannon/2",
        "aId": 48,
        "rules": 0,
        "tech": 0,
        "heat": 1,
        "minDamage": 0,
        "damage": 2,
        "delay": 0,
        "rangeMin": 4,
        "rangeShort": 8,
        "rangeMedium": 16,
        "rangeLong": 24,
        "rangeExtreme": 32,
        "tons": 6,
        "crits": 1,
        "ammo": 45,
        "cost": 75000,
        "bv": 37,
        "modifier": 0,
        "techRating": "c",
        "availability": "d",
        "year": 2290,
        "desc": "The Autocannon is a direct-fire ballistic weapon, firing high-explosive armor-piercing rounds at targets either singly or in bursts."
    },
    {
        "id": 26,
        "type": 2,
        "name": "Autocannon/5",
        "aId": 49,
        "rules": 0,
        "tech": 0,
        "heat": 1,
        "minDamage": 0,
        "damage": 5,
        "delay": 1,
        "rangeMin": 3,
        "rangeShort": 6,
        "rangeMedium": 12,
        "rangeLong": 18,
        "rangeExtreme": 24,
        "tons": 8,
        "crits": 4,
        "ammo": 20,
        "cost": 125000,
        "bv": 70,
        "modifier": 0,
        "techRating": "c",
        "availability": "c",
        "year": 2240,
        "desc": "The Autocannon is a direct-fire ballistic weapon, firing high-explosive armor-piercing rounds at targets either singly or in bursts."
    },
    {
        "id": 27,
        "type": 2,
        "name": "Autocannon/10",
        "aId": 50,
        "rules": 0,
        "tech": 0,
        "heat": 3,
        "minDamage": 0,
        "damage": 10,
        "delay": 1,
        "rangeMin": 0,
        "rangeShort": 5,
        "rangeMedium": 10,
        "rangeLong": 15,
        "rangeExtreme": 20,
        "tons": 12,
        "crits": 7,
        "ammo": 10,
        "cost": 200000,
        "bv": 124,
        "modifier": 0,
        "techRating": "c",
        "availability": "d",
        "year": 2443,
        "desc": "The Autocannon is a direct-fire ballistic weapon, firing high-explosive armor-piercing rounds at targets either singly or in bursts."
    },
    {
        "id": 28,
        "type": 2,
        "name": "Autocannon/20",
        "aId": 51,
        "rules": 0,
        "tech": 0,
        "heat": 7,
        "minDamage": 0,
        "damage": 20,
        "delay": 2,
        "rangeMin": 0,
        "rangeShort": 3,
        "rangeMedium": 6,
        "rangeLong": 9,
        "rangeExtreme": 12,
        "tons": 14,
        "crits": 10,
        "ammo": 5,
        "cost": 300000,
        "bv": 178,
        "modifier": 0,
        "techRating": "c",
        "availability": "e",
        "year": 2490,
        "desc": "The Autocannon is a direct-fire ballistic weapon, firing high-explosive armor-piercing rounds at targets either singly or in bursts."
    },
    {
        "id": 29,
        "type": 2,
        "name": "Machine Gun",
        "aId": 52,
        "rules": 0,
        "tech": 0,
        "heat": 0,
        "minDamage": 0,
        "damage": 2,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 1,
        "rangeMedium": 2,
        "rangeLong": 3,
        "rangeExtreme": 4,
        "tons": 0.5,
        "crits": 1,
        "ammo": 200,
        "cost": 5000,
        "bv": 5,
        "modifier": 0,
        "techRating": "b",
        "availability": "a",
        "year": 1950,
        "desc": "The Machine Gun is the quintessential anti-infantry weapon, issuing a stream of bullets at a high rate of fire to cut down opposing soldiers, while still being effective at damaging BattleMechs."
    },
    {
        "id": 30,
        "type": 2,
        "name": "Flamer (Vehicle)",
        "aId": 54,
        "rules": 0,
        "tech": 0,
        "heat": 3,
        "minDamage": 0,
        "damage": 2,
        "delay": 1,
        "rangeMin": 0,
        "rangeShort": 1,
        "rangeMedium": 2,
        "rangeLong": 3,
        "rangeExtreme": 4,
        "tons": 0.5,
        "crits": 1,
        "ammo": 20,
        "cost": 7500,
        "bv": 5,
        "modifier": 0,
        "techRating": "c",
        "availability": "b",
        "year": 1978,
        "desc": "The Vehicle Flamer performs the same as a Mech-mounted Flamer, venting superheated gases at a target to cause it to overheat/burn up. As most non-Mech combat units lack expensive nuclear fusion reactors, Vehicle Flamers instead draw from a pool of combusting ammunition and use that to generate the stream of hot gas."
    },
    {
        "id": 31,
        "type": 3,
        "name": "LRM-5",
        "aId": 55,
        "rules": 0,
        "tech": 0,
        "heat": 2,
        "minDamage": 1,
        "damage": 5,
        "delay": 2,
        "rangeMin": 6,
        "rangeShort": 7,
        "rangeMedium": 14,
        "rangeLong": 21,
        "rangeExtreme": 28,
        "tons": 2,
        "crits": 1,
        "ammo": 24,
        "cost": 30000,
        "bv": 45,
        "modifier": 0,
        "techRating": "c",
        "availability": "c",
        "year": 2300,
        "desc": "Long Range Missiles have provided military units with a decent far-reaching punch for centuries."
    },
    {
        "id": 32,
        "type": 3,
        "name": "LRM-10",
        "aId": 56,
        "rules": 0,
        "tech": 0,
        "heat": 4,
        "minDamage": 3,
        "damage": 10,
        "delay": 2,
        "rangeMin": 6,
        "rangeShort": 7,
        "rangeMedium": 14,
        "rangeLong": 21,
        "rangeExtreme": 28,
        "tons": 5,
        "crits": 2,
        "ammo": 12,
        "cost": 100000,
        "bv": 90,
        "modifier": 0,
        "techRating": "c",
        "availability": "c",
        "year": 2300,
        "desc": "Long Range Missiles have provided military units with a decent far-reaching punch for centuries."
    },
    {
        "id": 33,
        "type": 3,
        "name": "LRM-15",
        "aId": 57,
        "rules": 0,
        "tech": 0,
        "heat": 5,
        "minDamage": 5,
        "damage": 15,
        "delay": 2,
        "rangeMin": 6,
        "rangeShort": 7,
        "rangeMedium": 14,
        "rangeLong": 21,
        "rangeExtreme": 28,
        "tons": 7,
        "crits": 3,
        "ammo": 8,
        "cost": 175000,
        "bv": 136,
        "modifier": 0,
        "techRating": "c",
        "availability": "c",
        "year": 2315,
        "desc": "Long Range Missiles have provided military units with a decent far-reaching punch for centuries."
    },
    {
        "id": 34,
        "type": 3,
        "name": "LRM-20",
        "aId": 58,
        "rules": 0,
        "tech": 0,
        "heat": 6,
        "minDamage": 6,
        "damage": 20,
        "delay": 2,
        "rangeMin": 6,
        "rangeShort": 7,
        "rangeMedium": 14,
        "rangeLong": 21,
        "rangeExtreme": 28,
        "tons": 10,
        "crits": 5,
        "ammo": 6,
        "cost": 250000,
        "bv": 181,
        "modifier": 0,
        "techRating": "c",
        "availability": "c",
        "year": 2315,
        "desc": "Long Range Missiles have provided military units with a decent far-reaching punch for centuries."
    },
    {
        "id": 35,
        "type": 3,
        "name": "SRM-2",
        "aId": 59,
        "rules": 0,
        "tech": 0,
        "heat": 2,
        "minDamage": 2,
        "damage": 4,
        "delay": 1,
        "rangeMin": 0,
        "rangeShort": 3,
        "rangeMedium": 6,
        "rangeLong": 9,
        "rangeExtreme": 12,
        "tons": 1,
        "crits": 1,
        "ammo": 50,
        "cost": 10000,
        "bv": 21,
        "modifier": 0,
        "techRating": "c",
        "availability": "c",
        "year": 2370,
        "desc": "Short Range Missiles pack more power into the missile than almost any other kind. They lack sophisticated guidance systems, so they must deliver their punch at short range."
    },
    {
        "id": 36,
        "type": 3,
        "name": "SRM-4",
        "aId": 60,
        "rules": 0,
        "tech": 0,
        "heat": 3,
        "minDamage": 2,
        "damage": 8,
        "delay": 1,
        "rangeMin": 0,
        "rangeShort": 3,
        "rangeMedium": 6,
        "rangeLong": 9,
        "rangeExtreme": 12,
        "tons": 2,
        "crits": 1,
        "ammo": 25,
        "cost": 60000,
        "bv": 39,
        "modifier": 0,
        "techRating": "c",
        "availability": "c",
        "year": 2370,
        "desc": "Short Range Missiles pack more power into the missile than almost any other kind. They lack sophisticated guidance systems, so they must deliver their punch at short range."
    },
    {
        "id": 37,
        "type": 3,
        "name": "SRM-6",
        "aId": 61,
        "rules": 0,
        "tech": 0,
        "heat": 4,
        "minDamage": 4,
        "damage": 12,
        "delay": 1,
        "rangeMin": 0,
        "rangeShort": 3,
        "rangeMedium": 6,
        "rangeLong": 9,
        "rangeExtreme": 12,
        "tons": 3,
        "crits": 2,
        "ammo": 15,
        "cost": 80000,
        "bv": 59,
        "modifier": 0,
        "techRating": "c",
        "availability": "c",
        "year": 2370,
        "desc": "Short Range Missiles pack more power into the missile than almost any other kind. They lack sophisticated guidance systems, so they must deliver their punch at short range."
    },
    {
        "id": 38,
        "type": 4,
        "name": "Arrow IV",
        "aId": 0,
        "rules": 2,
        "tech": 0,
        "heat": 10,
        "minDamage": 10,
        "damage": 20,
        "delay": 4,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 8,
        "rangeExtreme": 0,
        "tons": 15,
        "crits": 15,
        "ammo": 5,
        "cost": 450000,
        "bv": 240,
        "modifier": 0,
        "techRating": "b",
        "availability": "d",
        "year": 2593,
        "desc": "The Arrow IV is a stand-alone, missile based, artillery system, designed to augment conventional systems such as the Long Tom and the Sniper."
    },
    {
        "id": 39,
        "type": 4,
        "name": "Long Tom",
        "aId": 0,
        "rules": 2,
        "tech": 0,
        "heat": 20,
        "minDamage": 10,
        "damage": 30,
        "delay": 4,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 30,
        "rangeExtreme": 0,
        "tons": 30,
        "crits": 30,
        "ammo": 5,
        "cost": 450000,
        "bv": 368,
        "modifier": 0,
        "techRating": "b",
        "availability": "c",
        "year": 1940,
        "desc": "The Long Tom Artillery Piece is the largest conventional artillery piece designed by Armstrong Industries. It was also the primary heavy artillery unit of the first Star League Defense Force."
    },
    {
        "id": 40,
        "type": 4,
        "name": "Sniper",
        "aId": 0,
        "rules": 2,
        "tech": 0,
        "heat": 20,
        "minDamage": 10,
        "damage": 10,
        "delay": 4,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 18,
        "rangeExtreme": 0,
        "tons": 20,
        "crits": 20,
        "ammo": 10,
        "cost": 300000,
        "bv": 85,
        "modifier": 0,
        "techRating": "b",
        "availability": "c",
        "year": 1940,
        "desc": "The Sniper Rifle Artillery Piece is the smaller cousin to the Long Tom Artillery Piece designed by Armstrong Industries. As the second most-powerful tube artillery in the Inner Sphere, the Sniper can cripple or destroy most light and medium BattleMechs with a single hit."
    },
    {
        "id": 41,
        "type": 4,
        "name": "Thumper",
        "aId": 0,
        "rules": 2,
        "tech": 0,
        "heat": 6,
        "minDamage": 5,
        "damage": 15,
        "delay": 4,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 21,
        "rangeExtreme": 0,
        "tons": 15,
        "crits": 15,
        "ammo": 20,
        "cost": 187500,
        "bv": 43,
        "modifier": 0,
        "techRating": "b",
        "availability": "c",
        "year": 1940,
        "desc": "The Thumper Artillery Piece is the smallest conventional artillery piece with an effective range of 10.5 kilometers."
    },
    {
        "id": 42,
        "type": 6,
        "name": "Cargo Pod",
        "aId": 0,
        "rules": 0,
        "tech": 0,
        "heat": 0,
        "minDamage": 0,
        "damage": 0,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 1,
        "crits": 1,
        "ammo": 0,
        "cost": 0,
        "bv": 0,
        "modifier": 0,
        "techRating": "b",
        "availability": "a",
        "year": 2300,
        "desc": "Storage pod that houses troops, supplies, or other equipment."
    },
    {
        "id": 43,
        "type": 6,
        "name": "Combine",
        "aId": 0,
        "rules": 2,
        "tech": 0,
        "heat": 0,
        "minDamage": 0,
        "damage": 3,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 2.5,
        "crits": 4,
        "ammo": 0,
        "cost": 75000,
        "bv": 5,
        "modifier": 0,
        "techRating": "b",
        "availability": "c",
        "year": 1940,
        "desc": "Created in the Pre-Flight Era, the Combine is a modern version of an agricultural tool used to cultivate food stocks grown from farms."
    },
    {
        "id": 44,
        "type": 6,
        "name": "Lift Hoist",
        "aId": 0,
        "rules": 2,
        "tech": 0,
        "heat": 0,
        "minDamage": 0,
        "damage": 0,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 3,
        "crits": 3,
        "ammo": 0,
        "cost": 5000,
        "bv": 5,
        "modifier": 0,
        "techRating": "b",
        "availability": "c",
        "year": 1940,
        "desc": "Lift Hoists allow Mechs, Support Vehicles, and other vehicle types to handle cargo via a lifting mechanism. This piece of equipment usually increases the speed of moving cargo."
    },
    {
        "id": 45,
        "type": 6,
        "name": "Chainsaw",
        "aId": 0,
        "rules": 2,
        "tech": 0,
        "heat": 0,
        "minDamage": 0,
        "damage": 5,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 5,
        "crits": 5,
        "ammo": 0,
        "cost": 100000,
        "bv": 7,
        "modifier": 0,
        "techRating": "b",
        "availability": "c",
        "year": 1940,
        "desc": "The Chainsaw is a piece of construction equipment that is rarely seen on the battlefield. Most commonly used by logging companies, the Chainsaw is also popular with construction and demolition companies."
    },
    {
        "id": 46,
        "type": 6,
        "name": "Wreaking Ball",
        "aId": 0,
        "rules": 2,
        "tech": 0,
        "heat": 0,
        "minDamage": 0,
        "damage": 8,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 4,
        "crits": 5,
        "ammo": 0,
        "cost": 80000,
        "bv": 8,
        "modifier": 1,
        "techRating": "b",
        "availability": "c",
        "year": 1940,
        "desc": "The Wrecking Ball is a piece of construction equipment that is rarely seen on the battlefield. Though it has been used by the arena fighters on Solaris, the lack of range and interference with other equipment mean it's not popular with the regular armies of the Inner Sphere."
    },
    {
        "id": 47,
        "type": 6,
        "name": "Spot Welder",
        "aId": 0,
        "rules": 2,
        "tech": 0,
        "heat": 2,
        "minDamage": 0,
        "damage": 5,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 2,
        "crits": 1,
        "ammo": 0,
        "cost": 75000,
        "bv": 5,
        "modifier": 0,
        "techRating": "c",
        "availability": "d",
        "year": 2320,
        "desc": "The Spot Welder is a piece of construction equipment that is commonly used on IndustrialMechs. Instead of using its own batteries, as was common in pre-spaceflight models, this modern interpretation of the Spot Welder pulls power from the engine of the unit carrying it."
    },
    {
        "id": 48,
        "type": 7,
        "name": "Ammo (AC/2) 45",
        "aId": 0,
        "rules": 0,
        "tech": 0,
        "heat": 0,
        "minDamage": 0,
        "damage": 0,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 1,
        "crits": 1,
        "ammo": 45,
        "cost": 1000,
        "bv": 5,
        "modifier": 0,
        "techRating": "c",
        "availability": "d",
        "year": 0,
        "desc": ""
    },
    {
        "id": 49,
        "type": 7,
        "name": "Ammo (AC/5) 20",
        "aId": 0,
        "rules": 0,
        "tech": 0,
        "heat": 0,
        "minDamage": 0,
        "damage": 0,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 1,
        "crits": 1,
        "ammo": 20,
        "cost": 4500,
        "bv": 9,
        "modifier": 0,
        "techRating": "c",
        "availability": "c",
        "year": 0,
        "desc": ""
    },
    {
        "id": 50,
        "type": 7,
        "name": "Ammo (AC/10) 10",
        "aId": 0,
        "rules": 0,
        "tech": 0,
        "heat": 0,
        "minDamage": 0,
        "damage": 0,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 1,
        "crits": 1,
        "ammo": 10,
        "cost": 6000,
        "bv": 15,
        "modifier": 0,
        "techRating": "c",
        "availability": "d",
        "year": 0,
        "desc": ""
    },
    {
        "id": 51,
        "type": 7,
        "name": "Ammo (AC/20) 5",
        "aId": 0,
        "rules": 0,
        "tech": 0,
        "heat": 0,
        "minDamage": 0,
        "damage": 0,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 1,
        "crits": 1,
        "ammo": 5,
        "cost": 10000,
        "bv": 20,
        "modifier": 0,
        "techRating": "c",
        "availability": "e",
        "year": 0,
        "desc": ""
    },
    {
        "id": 52,
        "type": 7,
        "name": "Ammo (MG) 200",
        "aId": 0,
        "rules": 0,
        "tech": 0,
        "heat": 0,
        "minDamage": 0,
        "damage": 0,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 1,
        "crits": 1,
        "ammo": 200,
        "cost": 1000,
        "bv": 1,
        "modifier": 0,
        "techRating": "b",
        "availability": "a",
        "year": 0,
        "desc": ""
    },
    {
        "id": 53,
        "type": 7,
        "name": "Ammo (MG) 100",
        "aId": 0,
        "rules": 0,
        "tech": 0,
        "heat": 0,
        "minDamage": 0,
        "damage": 0,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 0.5,
        "crits": 1,
        "ammo": 100,
        "cost": 500,
        "bv": 1,
        "modifier": 0,
        "techRating": "b",
        "availability": "a",
        "year": 0,
        "desc": ""
    },
    {
        "id": 54,
        "type": 7,
        "name": "Ammo (Flamer) 20",
        "aId": 0,
        "rules": 0,
        "tech": 0,
        "heat": 0,
        "minDamage": 0,
        "damage": 0,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 1,
        "crits": 1,
        "ammo": 20,
        "cost": 1000,
        "bv": 1,
        "modifier": 0,
        "techRating": "c",
        "availability": "b",
        "year": 0,
        "desc": ""
    },
    {
        "id": 55,
        "type": 7,
        "name": "Ammo (LRM-5) 24",
        "aId": 0,
        "rules": 0,
        "tech": 0,
        "heat": 0,
        "minDamage": 0,
        "damage": 0,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 1,
        "crits": 1,
        "ammo": 24,
        "cost": 30000,
        "bv": 6,
        "modifier": 0,
        "techRating": "c",
        "availability": "c",
        "year": 0,
        "desc": ""
    },
    {
        "id": 56,
        "type": 7,
        "name": "Ammo (LRM-10) 12",
        "aId": 0,
        "rules": 0,
        "tech": 0,
        "heat": 0,
        "minDamage": 0,
        "damage": 0,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 1,
        "crits": 1,
        "ammo": 12,
        "cost": 30000,
        "bv": 11,
        "modifier": 0,
        "techRating": "c",
        "availability": "c",
        "year": 0,
        "desc": ""
    },
    {
        "id": 57,
        "type": 7,
        "name": "Ammo (LRM-15) 8",
        "aId": 0,
        "rules": 0,
        "tech": 0,
        "heat": 0,
        "minDamage": 0,
        "damage": 0,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 1,
        "crits": 1,
        "ammo": 8,
        "cost": 30000,
        "bv": 17,
        "modifier": 0,
        "techRating": "c",
        "availability": "c",
        "year": 0,
        "desc": ""
    },
    {
        "id": 58,
        "type": 7,
        "name": "Ammo (LRM-20) 6",
        "aId": 0,
        "rules": 0,
        "tech": 0,
        "heat": 0,
        "minDamage": 0,
        "damage": 0,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 1,
        "crits": 1,
        "ammo": 6,
        "cost": 30000,
        "bv": 23,
        "modifier": 0,
        "techRating": "c",
        "availability": "c",
        "year": 0,
        "desc": ""
    },
    {
        "id": 59,
        "type": 7,
        "name": "Ammo (SRM-2) 50",
        "aId": 0,
        "rules": 0,
        "tech": 0,
        "heat": 0,
        "minDamage": 0,
        "damage": 0,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 1,
        "crits": 1,
        "ammo": 50,
        "cost": 27000,
        "bv": 3,
        "modifier": 0,
        "techRating": "c",
        "availability": "c",
        "year": 0,
        "desc": ""
    },
    {
        "id": 60,
        "type": 7,
        "name": "Ammo (SRM-4) 25",
        "aId": 0,
        "rules": 0,
        "tech": 0,
        "heat": 0,
        "minDamage": 0,
        "damage": 0,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 1,
        "crits": 1,
        "ammo": 25,
        "cost": 27000,
        "bv": 5,
        "modifier": 0,
        "techRating": "c",
        "availability": "c",
        "year": 0,
        "desc": ""
    },
    {
        "id": 61,
        "type": 7,
        "name": "Ammo (SRM-6) 15",
        "aId": 0,
        "rules": 0,
        "tech": 0,
        "heat": 0,
        "minDamage": 0,
        "damage": 0,
        "delay": 0,
        "rangeMin": 0,
        "rangeShort": 0,
        "rangeMedium": 0,
        "rangeLong": 0,
        "rangeExtreme": 0,
        "tons": 1,
        "crits": 1,
        "ammo": 15,
        "cost": 27000,
        "bv": 7,
        "modifier": 0,
        "techRating": "c",
        "availability": "c",
        "year": 0,
        "desc": ""
    }
    ]
}
`);

// Engine Table
const tableEngine = Object.freeze(`
{
"engine": [
    {
        "rating": 5,
        "tons": 0.5,
        "type": "Omni"
    },
    {
        "rating": 10,
        "tons": 0.5,
        "type": "Omni"
    },
    {
        "rating": 15,
        "tons": 0.5,
        "type": "GM"
    },
    {
        "rating": 20,
        "tons": 0.5,
        "type": "Pitban"
    },
    {
        "rating": 25,
        "tons": 0.5,
        "type": "Omni"
    },
    {
        "rating": 30,
        "tons": 1,
        "type": "Nissan"
    },
    {
        "rating": 35,
        "tons": 1,
        "type": "VOX"
    },
    {
        "rating": 40,
        "tons": 1,
        "type": "GM"
    },
    {
        "rating": 45,
        "tons": 1,
        "type": "GM"
    },
    {
        "rating": 50,
        "tons": 1.5,
        "type": "DAV"
    },
    {
        "rating": 55,
        "tons": 1.5,
        "type": "VOX"
    },
    {
        "rating": 60,
        "tons": 1.5,
        "type": "Leenex"
    },
    {
        "rating": 65,
        "tons": 2,
        "type": "Nissan"
    },
    {
        "rating": 70,
        "tons": 2,
        "type": "Omni"
    },
    {
        "rating": 75,
        "tons": 2,
        "type": "GM"
    },
    {
        "rating": 80,
        "tons": 2.5,
        "type": "VOX"
    },
    {
        "rating": 85,
        "tons": 2.5,
        "type": "DAV"
    },
    {
        "rating": 90,
        "tons": 3,
        "type": "DAV"
    },
    {
        "rating": 95,
        "tons": 3,
        "type": "Nissan"
    },
    {
        "rating": 100,
        "tons": 3,
        "type": "Hermes"
    },
    {
        "rating": 105,
        "tons": 3.5,
        "type": "DAV"
    },
    {
        "rating": 110,
        "tons": 3.5,
        "type": "GM"
    },
    {
        "rating": 115,
        "tons": 4,
        "type": "GM"
    },
    {
        "rating": 120,
        "tons": 4,
        "type": "GM"
    },
    {
        "rating": 125,
        "tons": 4,
        "type": "Vlar"
    },
    {
        "rating": 130,
        "tons": 4.5,
        "type": "Magna"
    },
    {
        "rating": 135,
        "tons": 4.5,
        "type": "Hermes"
    },
    {
        "rating": 140,
        "tons": 5,
        "type": "Leenex"
    },
    {
        "rating": 145,
        "tons": 5,
        "type": "Omni"
    },
    {
        "rating": 150,
        "tons": 5.5,
        "type": "GM"
    },
    {
        "rating": 155,
        "tons": 5.5,
        "type": "GM"
    },
    {
        "rating": 160,
        "tons": 6,
        "type": "LTV"
    },
    {
        "rating": 165,
        "tons": 6,
        "type": "VOX"
    },
    {
        "rating": 170,
        "tons": 6,
        "type": "DAV"
    },
    {
        "rating": 175,
        "tons": 7,
        "type": "Omni"
    },
    {
        "rating": 180,
        "tons": 7,
        "type": "GM"
    },
    {
        "rating": 185,
        "tons": 7.5,
        "type": "GM"
    },
    {
        "rating": 190,
        "tons": 7.5,
        "type": "GM"
    },
    {
        "rating": 195,
        "tons": 8,
        "type": "Nissan"
    },
    {
        "rating": 200,
        "tons": 8.5,
        "type": "Nissan"
    },
    {
        "rating": 205,
        "tons": 8.5,
        "type": "Vlar"
    },
    {
        "rating": 210,
        "tons": 9,
        "type": "GM"
    },
    {
        "rating": 215,
        "tons": 9.5,
        "type": "Core Tek"
    },
    {
        "rating": 220,
        "tons": 10,
        "type": "DAV"
    },
    {
        "rating": 225,
        "tons": 10,
        "type": "VOX"
    },
    {
        "rating": 230,
        "tons": 10.5,
        "type": "Leenex"
    },
    {
        "rating": 235,
        "tons": 11,
        "type": "GM"
    },
    {
        "rating": 240,
        "tons": 11.5,
        "type": "Pitban"
    },
    {
        "rating": 245,
        "tons": 12,
        "type": "Magna"
    },
    {
        "rating": 250,
        "tons": 12.5,
        "type": "Magna"
    },
    {
        "rating": 255,
        "tons": 13,
        "type": "Strand"
    },
    {
        "rating": 260,
        "tons": 13.5,
        "type": "Magna"
    },
    {
        "rating": 265,
        "tons": 14,
        "type": "Vlar"
    },
    {
        "rating": 270,
        "tons": 14.5,
        "type": "GM"
    },
    {
        "rating": 275,
        "tons": 15.5,
        "type": "Core Tek"
    },
    {
        "rating": 280,
        "tons": 16,
        "type": "VOX"
    },
    {
        "rating": 285,
        "tons": 16.5,
        "type": "Pitban"
    },
    {
        "rating": 290,
        "tons": 17.5,
        "type": "Omni"
    },
    {
        "rating": 295,
        "tons": 18,
        "type": "GM"
    },
    {
        "rating": 300,
        "tons": 19,
        "type": "Vlar"
    },
    {
        "rating": 305,
        "tons": 19.5,
        "type": "GM"
    },
    {
        "rating": 310,
        "tons": 20.5,
        "type": "Magna"
    },
    {
        "rating": 315,
        "tons": 21.5,
        "type": "GM"
    },
    {
        "rating": 320,
        "tons": 22.5,
        "type": "Pitban"
    },
    {
        "rating": 325,
        "tons": 23.5,
        "type": "VOX"
    },
    {
        "rating": 330,
        "tons": 24.5,
        "type": "VOX"
    },
    {
        "rating": 335,
        "tons": 25.5,
        "type": "Leenex"
    },
    {
        "rating": 340,
        "tons": 27,
        "type": "VOX"
    },
    {
        "rating": 345,
        "tons": 28.5,
        "type": "Vlar"
    },
    {
        "rating": 350,
        "tons": 29.5,
        "type": "Magna"
    },
    {
        "rating": 355,
        "tons": 31.5,
        "type": "LTV"
    },
    {
        "rating": 360,
        "tons": 33,
        "type": "Hermes"
    },
    {
        "rating": 365,
        "tons": 34.5,
        "type": "Vlar"
    },
    {
        "rating": 370,
        "tons": 36.5,
        "type": "Magna"
    },
    {
        "rating": 375,
        "tons": 38.5,
        "type": "GM"
    },
    {
        "rating": 380,
        "tons": 41,
        "type": "GM"
    },
    {
        "rating": 385,
        "tons": 43.5,
        "type": "LTV"
    },
    {
        "rating": 390,
        "tons": 46,
        "type": "Magna"
    },
    {
        "rating": 395,
        "tons": 49,
        "type": "Hermes"
    },
    {
        "rating": 400,
        "tons": 56.5,
        "type": "LTV"
    },
    {
        "rating": 405,
        "tons": 56.5,
        "type": "LTV"
    },
    {
        "rating": 410,
        "tons": 61,
        "type": "Magna"
    },
    {
        "rating": 415,
        "tons": 66.5,
        "type": "Omni"
    },
    {
        "rating": 420,
        "tons": 72.5,
        "type": "Hermes"
    },
    {
        "rating": 425,
        "tons": 79.5,
        "type": "GM"
    },
    {
        "rating": 430,
        "tons": 87.5,
        "type": "Omni"
    },
    {
        "rating": 435,
        "tons": 97.5,
        "type": "DAV"
    },
    {
        "rating": 440,
        "tons": 107.5,
        "type": "Vlar"
    },
    {
        "rating": 445,
        "tons": 119.5,
        "type": "Core Tek"
    },
    {
        "rating": 450,
        "tons": 133.5,
        "type": "VOX"
    },
    {
        "rating": 455,
        "tons": 150,
        "type": "Nissan"
    },
    {
        "rating": 460,
        "tons": 168.5,
        "type": "VOX"
    },
    {
        "rating": 465,
        "tons": 190,
        "type": "Pitban"
    },
    {
        "rating": 470,
        "tons": 214.5,
        "type": "Pitban"
    },
    {
        "rating": 475,
        "tons": 243,
        "type": "Vlar"
    },
    {
        "rating": 480,
        "tons": 275.5,
        "type": "Omni"
    },
    {
        "rating": 485,
        "tons": 313,
        "type": "Magna"
    },
    {
        "rating": 490,
        "tons": 356,
        "type": "Hermes"
    },
    {
        "rating": 495,
        "tons": 405.5,
        "type": "LTV"
    },
    {
        "rating": 500,
        "tons": 462.5,
        "type": "GM"
    }
]
}
`);

// Internal Structure Table
const tableIS = Object.freeze(`
{
"is": [
    {
        "tons": 5,
        "isc": 3,
        "ist": 2,
        "isa": 1,
        "isl": 1
    },
    {
        "tons": 10,
        "isc": 4,
        "ist": 3,
        "isa": 1,
        "isl": 2
    },
    {
        "tons": 15,
        "isc": 5,
        "ist": 4,
        "isa": 2,
        "isl": 3
    },
    {
        "tons": 20,
        "isc": 6,
        "ist": 5,
        "isa": 3,
        "isl": 4
    },
    {
        "tons": 25,
        "isc": 8,
        "ist": 6,
        "isa": 4,
        "isl": 6
    },
    {
        "tons": 30,
        "isc": 10,
        "ist": 7,
        "isa": 5,
        "isl": 7
    },
    {
        "tons": 35,
        "isc": 11,
        "ist": 8,
        "isa": 6,
        "isl": 8
    },
    {
        "tons": 40,
        "isc": 12,
        "ist": 10,
        "isa": 6,
        "isl": 10
    },
    {
        "tons": 45,
        "isc": 14,
        "ist": 11,
        "isa": 7,
        "isl": 11
    },
    {
        "tons": 50,
        "isc": 16,
        "ist": 12,
        "isa": 8,
        "isl": 12
    },
    {
        "tons": 55,
        "isc": 18,
        "ist": 13,
        "isa": 9,
        "isl": 13
    },
    {
        "tons": 60,
        "isc": 20,
        "ist": 14,
        "isa": 10,
        "isl": 14
    },
    {
        "tons": 65,
        "isc": 21,
        "ist": 15,
        "isa": 10,
        "isl": 15
    },
    {
        "tons": 70,
        "isc": 22,
        "ist": 15,
        "isa": 11,
        "isl": 15
    },
    {
        "tons": 75,
        "isc": 23,
        "ist": 16,
        "isa": 12,
        "isl": 16
    },
    {
        "tons": 80,
        "isc": 25,
        "ist": 17,
        "isa": 13,
        "isl": 17
    },
    {
        "tons": 85,
        "isc": 27,
        "ist": 18,
        "isa": 14,
        "isl": 18
    },
    {
        "tons": 90,
        "isc": 29,
        "ist": 19,
        "isa": 15,
        "isl": 19
    },
    {
        "tons": 95,
        "isc": 30,
        "ist": 20,
        "isa": 16,
        "isl": 20
    },
    {
        "tons": 100,
        "isc": 31,
        "ist": 21,
        "isa": 17,
        "isl": 21
    },
    {
        "tons": 105,
        "isc": 33,
        "ist": 22,
        "isa": 18,
        "isl": 22
    },
    {
        "tons": 110,
        "isc": 35,
        "ist": 23,
        "isa": 19,
        "isl": 23
    },
    {
        "tons": 115,
        "isc": 36,
        "ist": 24,
        "isa": 20,
        "isl": 24
    },
    {
        "tons": 120,
        "isc": 37,
        "ist": 25,
        "isa": 21,
        "isl": 25
    },
    {
        "tons": 125,
        "isc": 38,
        "ist": 26,
        "isa": 21,
        "isl": 26
    },
    {
        "tons": 130,
        "isc": 40,
        "ist": 27,
        "isa": 22,
        "isl": 27
    },
    {
        "tons": 135,
        "isc": 41,
        "ist": 28,
        "isa": 22,
        "isl": 28
    },
    {
        "tons": 140,
        "isc": 42,
        "ist": 29,
        "isa": 23,
        "isl": 29
    },
    {
        "tons": 145,
        "isc": 43,
        "ist": 30,
        "isa": 24,
        "isl": 30
    },
    {
        "tons": 150,
        "isc": 44,
        "ist": 31,
        "isa": 25,
        "isl": 31
    }
]
}
`);

// Parse above JSON tables
const weaponTable = JSON.parse(tableArsenal);
const engineTable = JSON.parse(tableEngine);
const isTable = JSON.parse(tableIS);