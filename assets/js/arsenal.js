/**************************
Weapons and Equipment
**************************/

const Arsenal = `
    {
        "weapons": [
            {
                "type": "0",
                "name": "Shoulder",
                "nameShort": "Shoulder",
                "level": "1",
                "edition": "2",
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
                "crit": "1",
                "ammo": "0",
                "cost": "0",
                "bv": "0",
                "mod": "0",
                "special": "a",
                "year": "-",
                "desc": "-",
                "techRating": "b",
                "availability": "a",
                "fixed": "1"
            }
        ]
    }
`;

var myWeapon = JSON.parse(Arsenal);
document.getElementById("demo").textContent = myWeapon.weapons[0].name + " " + myWeapon.weapons[0].crit;