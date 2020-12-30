/**************************
 * Mech print out modals
**************************/

// Record Sheet: Generate the Mech heat scale
const a_HeatScale = [
    'Shutdown',
    '',
    'Ammo Explosion, avoid on 8+',
    '',
    'Shutdown, avoid on 10+',
    '-5 Movement Points',
    '+4 Modifier to Fire',
    'Ammo Explosion, avoid on 6+',
    'Shutdown, avoid on 8+',
    '',
    '-4 Movement Points',
    'Ammo Explosion, avoid on 4+',
    'Shutdown, avoid on 6+',
    '+3 Modifier to Fire',
    '',
    '-3 Movement Points',
    'Shutdown, avoid on 4+',
    '+2 Modifier to Fire',
    '',
    '',
    '-2 Movement Points',
    '',
    '+1 Modifier to Fire',
    '',
    '',
    '-1 Movement Points',
    '',
    '',
    '',
    '',
    ''
];

// Record Sheet: Generate the Heat Scale for the Record Sheet
const generateHeatScale = () => {
	let t = `<tr><th class="print-hs-box"></th><td>OVERFLOW</td></tr>`;
		l = a_HeatScale.length - 1;

	// Loop through the array
    for (let i = 0; i < l; i++) {
		t += `<tr><th>${l-i}</th><td>${a_HeatScale[i]}</td></tr>`;
	}
	
    return t;
};

// Record Sheet: List the contents of a crit location array in a list
const listCritsLocation = (v) => {
    let max = Mech[`maxcrits_${v}`],
        loc = [...Mech[`assigned_${v}`]],
		li = `<ol class="high">`,
		low = `</ol><ol class="low">`,
		bracket = ['┓', '┃', '┛'],
		isLow = false,
        w;

	// If location has only 6 slots
	if (max < 12) li = `<ol>`;

	// Swap around slots in the head
	if (v == 'H') {
		if (loc.length < 6) loc.push(13);	
		loc.splice(5, 1);
		loc.splice(3, 0, loc[5]);
	}

    // Increment through selected location array 
    for (let i = 0; i < max; i++) {

		// Get weapon data from table
        w = weaponTable.weapon[loc[i]];

        // Populate slot
        if (loc[i] >= 0) {

			// Populate single line
			if (w.crits == 1) {
				// Split the crits list if there are more than 6 slots
				if (i == 6 && isLow == false) {
					isLow = true;
					li += low;
				}

				li += `<li>${w.name}</li>`;
			} else {
           		// If weapon takes up more than 1 crit
                for (let j = 0; j < w.crits; j++) {

					// Add brackets to multi crit items
					if (j == 0) li += `<li>${w.name} ${bracket[0]}</li>`; // Start Bracket
					else if (j == (w.crits - 1)) li += `<li>${w.name} ${bracket[2]}</li>`; // End Bracket
					else li += `<li>${w.name} ${bracket[1]}</li>`; // Middle Bracket

					// Split the crits list if there are more than 6 slots
					if ((i+j) >= 5 && isLow == false) {
						isLow = true;
						li += low;
					}
				}
				max = max - (w.crits - 1);
            }
        } else {
			// Split the crits list if there are more than 6 slots
			if (i == 6 && isLow == false) {
				isLow = true;
				li += low;
			}

            // Populate empty slot
            li += `<li><i>Roll Again</i></li>`;
        }
	}

    return li + `</ol>`;
};

// Record Sheet: List weapons
const rs_WeaponsList = (v) => {
	let w = weaponTable.weapon,
		loc = Mech[`assigned_${v}`],
		l = loc.length,
		tr = ``;

	for (let i = 0; i < l; i++ ) {
		if (w[loc[i]].type > 0) {
			tr += `<tr>`;
			tr += `<td>${v}</td>`;
			tr += `<td>${w[loc[i]].name}</td>`;
			tr += `<td>${w[loc[i]].heat}</td>`;
			tr += `<td>${w[loc[i]].damage}</td>`;
			tr += `<td>${w[loc[i]].rangeMin}</td>`;
			tr += `<td>${w[loc[i]].rangeShort}</td>`;
			tr += `<td>${w[loc[i]].rangeMedium}</td>`;
			tr += `<td>${w[loc[i]].rangeLong}</td>`;
			tr += `<td>${w[loc[i]].modifier}</td>`;
			tr += `</tr>`;
		}
	}

	return tr;
};


// Record Sheet print modal content
const RecordSheetModal = () => {
	return `
<div class="print-options" role="header">
	<button onclick="window.print()" class="button-gold"><img src="/assets/images/print.svg" alt=""> Print...</button>
	<label>Logo style</label>
	<select id="selChangeLogo" disabled>
		<option selected>2010s</option>
		<option>1990s</option>
		<option>1980s</option>
	</select>
</div>

<div class="print-container">
	<div class="print-sheet">
		<div class="print-body">
			<div class="print-leftside">
				<div class="print-header">
                    <h2>
						<img src="assets/images/btech2010.svg" alt="Battletech">
						<span class="print-subtitle">${weightClass(Mech.mass)} ${a_ChassisType[Mech.chassis]} Record Sheet</span>
					</h2>
					<div class="print-header-right">Miniature<br><b class="dotted">${Warrior.miniature}</b></div>
				</div>

				<div class="print-armordiagram">
					<h3>Armor Diagram</h3>
					<div class="print-armor-col">
						<div class="print-armorbox">
							<h4>Left Arm <small>[10,11]</small></h4>
							<div>
								<span>${displayTicks(Mech.ALA, 10)}</span>
								<span class="print-isbox">${displayTicks(Mech.ISA, 10)}</span>
							</div>
						</div>
						<div class="print-center">
							<div>Armor<br><b>${a_ArmorType[Mech.armorType]}</b></div>
							<div>Targeting<br><b>${a_TargetType[Mech.targetingType]}</b></div>
						</div>
					</div>
					<div class="print-armor-col">
						<div class="print-armorbox">
							<h4>Left Torso <small>[8]</small></h4>
							<div>
								<span>${displayTicks(Mech.ALT, 10)}</span>
								<span class="print-isbox">${displayTicks(Mech.IST, 10)}</span>
								<span class="print-reararmor">${displayTicks(Mech.ALTR, 10)}</span>
							</div>
						</div>
						<div class="print-armorbox">
							<h4>Left Leg <small>[9]</small></h4>
							<div>
								<span>${displayTicks(Mech.ALL, 10)}</span>
								<span class="print-isbox">${displayTicks(Mech.ISL, 10)}</span>
							</div>
						</div>
					</div>
					<div class="print-armor-col">
						<div class="print-armorbox">
							<h4>Head <small>[12]</small></h4>
							<div>
								<span>${displayTicks(Mech.AH, 10)}</span>
								<span class="print-isbox">${displayTicks(Mech.ISH, 10)}</span>
							</div>
						</div>
						<div class="print-armorbox">
							<h4>Center Torso <small>[2,7]</small></h4>
							<div>
								<span>${displayTicks(Mech.ACT, 10)}</span>
								<span class="print-isbox">${displayTicks(Mech.ISC, 10)}</span>
								<span class="print-reararmor">${displayTicks(Mech.ACTR, 10)}</span>
							</div>
						</div>
					</div>
					<div class="print-armor-col">
						<div class="print-armorbox">
							<h4>Right Torso <small>[6]</small></h4>
							<div>
								<span>${displayTicks(Mech.ART, 10)}</span>
								<span class="print-isbox">${displayTicks(Mech.IST, 10)}</span>
								<span class="print-reararmor">${displayTicks(Mech.ARTR, 10)}</span>
							</div>
						</div>
						<div class="print-armorbox">
							<h4>Right Leg <small>[5]</small></h4>
							<div>
								<span>${displayTicks(Mech.ARL, 10)}</span>
								<span class="print-isbox">${displayTicks(Mech.ISL, 10)}</span>
							</div>
						</div>
					</div>
					<div class="print-armor-col">
						<div class="print-armorbox">
							<h4>Right Arm <small>[3,4]</small></h4>
							<div>
								<span>${displayTicks(Mech.ARA, 10)}</span>
								<span class="print-isbox">${displayTicks(Mech.ISA, 10)}</span>
							</div>
						</div>
						<div class="print-center">
							<div>Structure<br><b>${a_ISType[Mech.isType]}</b></div>
							<div>Gyroscope<br><b>${a_GyroType[Mech.gyroType]}</b></div>
						</div>
					</div>
				</div>

				<div class="print-critstable">
					<h3>Critical Hit Table</h3>
					<div>
						<h4>Left Arm</h4>
						${listCritsLocation('LA')}

						<h4>Left Torso</h4>
						${listCritsLocation('LT')}

						<h4>Left Leg</h4>
						${listCritsLocation('LL')}
					</div>

					<div>
						<h4>Head</h4>
						${listCritsLocation('H')}

						<h4>Center Torso</h4>
						${listCritsLocation('CT')}

						<div class="print-hitboxes">
							<p><label>Engine Hits</label> ${displayTicks(3)}</p>
							<p><label>Gyro Hits</label> ${displayTicks(2)}</p>
							<p><label>Sensor Hits</label> ${displayTicks(2)}</p>
							<p><label>Life Support</label> ${displayTicks(1)}</p>
						</div>

						<div class="print-costbv">
							<p>Cost: <b class="cbills">${addComma(Mech.totalCost)}</b></p>
							<p>Battle Value: <b>${addComma(Mech.totalBV)}</b></p>
						</div>

					</div>

					<div>
						<h4>Right Arm</h4>
						${listCritsLocation('RA')}

						<h4>Right Torso</h4>
						${listCritsLocation('RT')}

						<h4>Right Leg</h4>
						${listCritsLocation('RL')}
					</div>

				</div>
			</div>

			<aside class="print-rightside">
				<div class="print-data">
					<h3>Mech Data</h3>
					<p><b class="dotted">${Mech.type}</b></p>
					<p>Tonnage: <b>${Mech.mass}</b></p>
					<p>Technology: <b>${a_TechBase[Mech.techbase]}</b></p>
					<p>Ruleset: <b>${a_RuleSet[Mech.rules]}</b></p>
					<p>Movement Points:</p>
					<ul>
						<li><label>Walking:</label> <b>${Mech.walkingMP}</b></li>
						<li><label>Running:</label> <b>${Mech.runningMP}</b></li>
						<li><label>Jumping:</label> <b>${Mech.jumpingMP}</b></li>
					</ul>
				</div>
				<div class="print-warrior">
					<h3>Warrior</h3>
					<p>Name: <span class="dotted">${Warrior.name}</span></p>
					<p>Affiliation: <span class="dotted">${toUnderline(a_Affiliation[Warrior.affiliation])}</span></p>
					<p>Gunnery: <b>${Warrior.gunnery}</b> &nbsp; Piloting: <b>${Warrior.piloting}</b> &nbsp;&nbsp; <i>${a_Experience[Warrior.experience]}</i></p>
					<table class="print-warriorstats">
						<tr>
							<th>Hits Taken</th>
							<th>1</th>
							<th>2</th>
							<th>3</th>
							<th>4</th>
							<th>5</th>
							<th>6</th>
						</tr>
						<tr>
							<th>Consciousness</th>
							<td>3</td>
							<td>5</td>
							<td>7</td>
							<td>10</td>
							<td>11</td>
							<td>&times;</td>
						</tr>
					</table>
					<p>Auto-Eject: <b>${Warrior.autoeject}</b></p>
				</div>
				<div class="print-heat">
					<h3>Heat Data</h3>
					<p><b>${Mech.heatsinks}</b> | ${a_HSType[Mech.heatsinkType]} Heat Sinks</p>
					<p style="font-size:1.1em">${displayTicks(Mech.heatsinks, 15)}</p>
				</div>
				<div class="print-heatscale">
					<h3>Heat Scale</h3>
					<table class="print-heatscale" style="border-top:0">
						${generateHeatScale()}
					</table>
				</div>
			</aside>
		</div>

		<div class="print-bottom">
			<div class="print-weapons">
				<h3>Weapons &amp; Equipment</h3>
				<table>
					<thead>
						<tr>
							<th></th>
							<th>Type</th>
							<th>Heat</th>
							<th>Dmg</th>
							<th>Min</th>
							<th>Short</th>
							<th>Med</th>
							<th>Long</th>
							<th>Mod</th>
						</tr>
					</thead>
					<tbody class="print-weaponslist">
					${rs_WeaponsList('LA')}
					${rs_WeaponsList('RA')}
					${rs_WeaponsList('LT')}
					${rs_WeaponsList('RT')}
					${rs_WeaponsList('CT')}
					${rs_WeaponsList('H')}
					${rs_WeaponsList('LL')}
					${rs_WeaponsList('RL')}
					</tbody>
				</table>
			</div>

			<div class="print-ammo">
				<h3>Ammunition</h3>
				<table>
					<thead>
						<tr>
							<th></th>
							<th>Type</th>
							<th>Shots</th>
						</tr>
					</thead>
					<tbody class="print-ammolist">
					</tbody>
				</table>
			</div>
		</div>

		<footer class="print-footer">
			<p>Created with <a href="https://github.com/midkiffaries/remlab5">REMLAB <span>${RemlabVersion}</span></a> on <time>${TodaysDate.getFullYear()}</time>. Please recycle this document.</p>
		</footer>
	</div>
</div>

<style>
/* Stop page scrolling - fixes issues with printing */
body {
	overflow: hidden !important;
	width: 100wh;
	height: 90vh;
}

.dialog-body, 
.dialog-top {
	margin: 1em;
	line-height: 1;
	max-width: 100%;
}

.dialog-body .cbills::before {
	font-size: 0.5em;
}

/* Display underline on empty elements */
.dotted:empty {
    width: 80%;
    height: 1em;
    border-bottom: 1pt dotted #bbb;
    display: inline-block;
    white-space: nowrap;
}

.print-options {
	background: #eee;
	border: 1px solid #ddd;
	padding: 0.5em 0.6em;
	width: 100%;
	margin-top: 2em;
}

.print-options button img {
	height: 1.2em;
	vertical-align: -3px;
}

.print-container {
	margin-top: 2em;
	font-family: arial;
}

.print-sheet {
	font-size: 0.7em;
}

.print-sheet .indent {
    text-indent: 2.6em;
}

.print-header h2 {
    margin: 0;
    font-size: 2.25em;
	letter-spacing: 0;
}

.print-header img {
	height: 1.5em;
}

.print-header-right {
    float: right;
    margin: -4em 8px 0 0;
    font-size: 0.9em;
    width: 10em;
    overflow: hidden;
}

.print-subtitle {
    display: block;
    font-size: 0.55em;
    text-transform: uppercase;
    font-weight: bold;
}

.print-body h3, .print-bottom h3 {
    margin: 2px 0 6px 0;
    font-size: 1.1em;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
}
    
.print-leftside {
    float: left;
    width: 73%;
    border-right: 2pt solid #aaa;
    margin-bottom: 2px;
}

.print-rightside {
    float: right;
    width: 27%;
    padding-left: 2px;
}

.print-rightside p {
    margin: 5px 0;
    font-size: 0.8em;
}

.print-data {
    padding-left: 3px;
}

.print-data ul {
    list-style: none;
    padding: 0 15px;
    margin: 0;
    font-size: 0.8em;
}

.print-data ul label {
    width: 5em;
}

.print-warrior {
    border-top: 3pt solid #aaa;
    margin-top: 4px;
    padding-left: 3px;
}

.print-warriorstats td, .print-warriorstats th {
    border: 1pt solid #aaa;
    width: 10%;
    text-align: center;
    font-size: 0.7em;
}

.print-warriorstats tr th:first-of-type {
    text-align: left;
    background: #eee;
    width: 90px;
}

.print-heat {
    border-top: 3pt solid #aaa;
    margin-top: 4px;
    padding-left: 3px;
}

.print-heatscale {
    border-top: 3pt solid #aaa;
    margin-top: 4px;  
    padding-left: 2px;
}

.print-heatscale table {
    font-size: 0.8em !important;
    margin-bottom: 5px;
}

.print-heatscale table th {
    text-align: center;
    padding: 1px 6px;
    margin: 0;
    line-height: 0.9em;
    border: 1pt solid #bbb;
    color: #555;
    width: 2.7em;
}

.print-heatscale table td {
    line-height: 0.9em;
}

.print-hs-box {
    width: 1.8em;
    height: 1.1em;
}

.print-armordiagram {
    min-height: 18em;
    padding-top: 8px;
}

.print-armordiagram h4 {
    font-weight: bold;
	letter-spacing: -0.5px;
}

.print-armordiagram h4 span {
    font-size: 0.6em;
}

.print-armor-col {
    float: left;
    width: 20%;
    padding: 2px 3px;
    font-size: 0.9em;
}

.print-armorbox {
    margin-bottom: 4px;
}

.print-armorbox h4 {
    font-size: 1em;
    margin: 0 0 1px 2px;
}

.print-armorbox h4 span {
    font-weight: 400;
    font-size: 7px !important;
    color: #555;
}

.print-armorbox div {
    border: 1pt solid #ccc;
    border-radius: 2pt;
}

.print-armorbox div span {
    display: block;
    padding-left: 2px;
}

.print-isbox {
    background: #eee;
    color: #666;
    border-top: 1pt solid #ccc;
    border-radius: 0 0 1pt 1pt;
}

.print-reararmor:not(:empty) {
    border-top: 1pt solid #ccc;
}

.print-center {
    text-align: center;
    margin-top: 2.5em;
}

.print-center div {
    border: 2pt solid #555;
    border-radius: 4pt;
    margin-bottom: 1em;
}

.print-critstable {
    clear: both;
    padding: 5px 0 0 0;
    position: relative;
    border-top: 3pt solid #aaa;
    margin-right: 2px;
}

.print-critstable > div {
    font-size: 0.8em;
    margin: 0 10px 3px 12px;
    width: 29%;
    float: left;
}

.print-critstable h4 {
    text-align: left;
    padding: 5px 0 0 0;
	margin: 0;
	font-size: 1.2em;
}

.print-critstable ol {
    margin: 0 1px 4px -5px;
    padding: 0 5px 0 20px;
    font-size: 0.9em;
}

.print-critstable li::marker {
	font-weight: bold;
}

.print-critstable i {
    color: #aaa;
}

.print-critstable .high::before {
    content: "1-3";
    color: #777;
    font-size: 0.9em;
    position: absolute;
    margin: 26px 0 0 -29px;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
}

.print-critstable .low::before {
    content: "4-6";
    color: #777;
    font-size: 0.9em;
    position: absolute;
    margin: 24px 0 0 -29px;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
}

.print-hitboxes {
    margin-top: 1.5em;
    border: 2pt solid #333;
    border-radius: 6pt;
    width: 12em;
}

.print-hitboxes p {
    text-align: left;
    margin: 8px;
}

.print-hitboxes label {
    width: 6em;
    display: inline-block;
    text-align: right;
}

.print-crits-roll {
    float: left;
    transform: rotate(-90deg);
    margin: 30px 0 0 -10px;
    font-size: 0.9em;
    color: gray;
}

.print-bottom {
    border-top: 3pt solid #aaa;
    clear: both;
}

.print-weapons {
    width: 62%;
    float: left;
    margin-top: 2px;
    border-right: 2pt solid #aaa;
    min-height: 11em;
}

.print-weapons table {
    font-size: 0.8em;
}

.print-weapons th, .print-weapons td {
    text-align: center;
    overflow-x: hidden;
}

.print-weapons tr th:nth-of-type(2), .print-weapons tr td:nth-of-type(2) {
    text-align: left;
}

.print-ammo {
    width: 38%;
    float: right;
    margin-top: 2px;
}

.print-ammo table {
    font-size: 0.8em;
}

.print-ammo table tbody tr td:last-of-type {
    font-size: 5pt;
}

.print-footer {
    clear: both;
    color: #888 !important;
    text-align: right;
    padding: 0 10px 0 0;
    margin: 0;
    font-size: 0.75em;
}

.print-footer a {
    color: #888;
    text-decoration: none;
}


@media only print {
    /* Hide the interface */    
	.page-header, 
	.page-main, 
	.page-footer, 
	.print-options, 
	.dialog-top {
		display: none !important;
	}
	
	dialog,
	.dialog-body,
	.dialog-html,
	.print-container {
		background-color: #fff;
		position: absolute;
		border: 0 !important;
		margin: 0 !important;
		padding: 0 !important;
		width: 100% !important;
		height: 100% !important;
		top: 0 !important;
		box-shadow: none !important;
		overflow: visible;
	}

	.print-container {
		margin-top: 2em !important;
	}

}
</style>
`};

// Record Sheet: List weapons
const tr_WeaponsList = (v) => {
	let w = weaponTable.weapon,
		loc = Mech[`assigned_${v}`],
		l = loc.length,
		tr = ``;

	for (let i = 0; i < l; i++ ) {
		if (w[loc[i]].type > 0) {
			tr += `<tr>`;
			tr += `<td>${w[loc[i]].name}</td>`;
			tr += `<td>${v}</td>`;
			tr += `<td>${w[loc[i]].crits}</td>`;
			tr += `<td>${addDecimal(w[loc[i]].tons)}</td>`;
			tr += `</tr>`;
		}
	}

	return tr;
};

// Record Sheet: List weapons
const tr_ArmamentList = (v) => {
	let w = weaponTable.weapon,
		loc = Mech[`assigned_${v}`],
		l = loc.length,
		tr = ``;

	for (let i = 0; i < l; i++ ) {
		if (w[loc[i]].type > 0) {
			tr += `<li>${w[loc[i]].name}</li>`;
		}
	}

	return tr;
};



// Technical Readout print modal content
const TechReadoutModal = () => {
	// Clean up the appearance of the jumpjet stats
	let jjtype, jjcap;

	if (Mech.jumpingMP == 0) {
		jjtype = 'none';
		jjcap = 'none';
	} else {
		jjtype = a_JJType[Mech.jumpjetsType];
		jjcap = mp2Meters(Mech.jumpingMP) + ' meters';
	}

	// Display Design Quirks
	let designQuirks = "";
	
	for (let i = 0; i < Mech.positiveDQ.length; i++) {
		if (Mech.positiveDQ[i] == true) {
			designQuirks += a_DQPositive[i] + ", ";
		}
	}

	for (let i = 0; i < Mech.negativeDQ.length; i++) {
		if (Mech.negativeDQ[i] == true) {
			designQuirks += a_DQNegative[i] + ", ";
		}
	}

	return `
<div class="print-options" role="header">
	<button onclick="window.print()" class="button-gold"><img src="/assets/images/print.svg" alt=""> Print...</button>
	<label>Logo style</label>
	<select id="selChangeLogo" disabled>
		<option selected>2010s</option>
		<option>1990s</option>
		<option>1980s</option>
	</select>
</div>

<div class="print-container">
    <div class="print-sheet">
        <div class="print-body">
			<h2 class="print-header">
				<img src="assets/images/btech2010.svg" alt="BattleTech">
				<span class="print-subtitle">${weightClass(Mech.mass)} ${a_ChassisType[Mech.chassis]} Record Sheet</span>
			</h2>

            <h3>${Mech.type}</h3>
            
            <div class="print-leftside">
                <p><b>Mass:</b> ${Mech.mass} tons</p>
                <p><b>Chassis:</b> ${a_ChassisType[Mech.chassis]}</p>
                <p><b>Power Plant:</b> ${Mech.engineRating} ${Mech.engineBrand}</p>
                <p><b>Cruising Speed:</b> ${mp2Kph[Mech.walkingMP]} kph</p>
                <p><b>Maxiumum Speed:</b> ${mp2Kph[Mech.runningMP]} kph</p>
                <p><b>Jump Jets:</b> ${jjtype}</p>
                <p class="indent"><b>Jump Capacity:</b> ${jjcap}</p>
                <p><b>Armor:</b> ${a_ArmorType[Mech.armorType]}</p>
                <p><b>Armament:</b></p>
				<ul>
					${tr_ArmamentList('LA')}
                </ul>
                <p><b>Manufacturer:</b> Unknown</p> 
                <p class="indent"><b>Primary Factory:</b> Unknown</p>
                <p><b>Communications System:</b> Standard</p>
                <p><b>Targeting &amp; Tracking System:</b> ${a_TargetType[Mech.targetingType]}</p>
				
                <p>${Mech.overviewTR}</p>
                <h4>Capabilities</h4>
                <p>${Mech.capabilitiesTR}</p>
                <h4>Battle History</h4>
                <p>${Mech.historyTR}</p>
                <h4>Deployment</h4>
                <p>${Mech.deploymentTR}</p>
                <h4>Variants</h4>
                <p>${Mech.variantsTR}</p>
                <h4>Notable Units</h4>
                <p>${Mech.notableTR}</p>
            </div>
            
            <div class="print-rightside">
                <table class="tr-stats">
                    <tr>
                        <td>Type:</td>
                        <th colspan="2">${Mech.type}</th>
                    </tr>
                    <tr>
                        <td>Technology Base:</td>
                        <td colspan="2">${a_TechBase[Mech.techbase]} (${a_RuleSet[Mech.rules]})</td>
					</tr>
                    <tr>
                        <td>Introduction:</td>
                        <td colspan="2">${a_Era[Mech.era]} (${Mech.year})</td>
                    </tr>
                    <tr>
                        <td>Ruleset:</td>
                        <td colspan="2">${a_RuleSet[Mech.rules]}</td>
                    </tr>
                    <tr>
                        <td>Tonnage:</td>
                        <td colspan="2">${Mech.mass}</td>
                    </tr>
                    <tr>
                        <td>Cost:</td>
                        <td colspan="2" class="cbills">${addComma(Mech.totalCost)}</td>
                    </tr>
                    <tr>
                        <td>Battle Value:</td>
                        <td colspan="2">${addComma(Mech.totalBV)}</td>
                    </tr>
                    <tr>
                        <th>Equipment</th>
                        <th></th>
                        <th>Mass</th>
                    </tr>
                    <tr>
                        <td>Internal Structure:</td>
                        <td></td>
                        <td>${addDecimal(Mech.isMass)}</td>
                    </tr>            
                    <tr>
                        <td>Engine:</td>
                        <td></td>
                        <td>${addDecimal(Mech.engineMass)}</td>
                    </tr>
                    <tr>
                        <td class="indent2">Walking MP:</td>
                        <td>${Mech.walkingMP}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class="indent2">Running MP:</td>
                        <td>${Mech.runningMP}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class="indent2">Jumping MP:</td>
                        <td>${Mech.jumpingMP}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Heat Sinks:</td>
                        <td>${Mech.heatsinks}</td>
                        <td>${addDecimal(Mech.heatsinksMass)}</td>
                    </tr>
                    <tr>
                        <td>Gyro:</td>
                        <td></td>
                        <td>${addDecimal(Mech.gyroMass)}</td>
                    </tr>
                    <tr>
                        <td>Cockpit:</td>
                        <td></td>
                        <td>${addDecimal(Mech.cockpitMass)}</td>
                    </tr>
                    <tr>
                        <td>Armor Factor:</td>
                        <td></td>
                        <td>${addDecimal(Mech.armorMass)}</td>
                    </tr>
                    <tr>
                        <th></th>
                        <th class="center"><i>Internal Structure</i></th>
                        <th class="center"><i>Armor Value</i></th>
                    </tr>
                    <tr>
                        <td class="indent2">Head</td>
                        <td class="center">${Mech.ISH}</td>
                        <td class="center">${Mech.AH}</td>
                    </tr>
                    <tr>
                        <td class="indent2">Center Torso</td>
                        <td class="center">${Mech.ISC}</td>
                        <td class="center">${Mech.ACT}</td>
                    </tr>
                    <tr>
                        <td class="indent2">Center Torso (rear)</td>
                        <td></td>
                        <td class="center">${Mech.ACTR}</td>
                    </tr>
                    <tr>
                        <td class="indent2">L/R Torso</td>
						<td class="center">${Mech.IST}/${Mech.IST}</td>
                        <td class="center">${Mech.ALT}/${Mech.ART}</td>
                    </tr>
                    <tr>
                        <td class="indent2">L/R Torso (rear)</td>
                        <td></td>
                        <td class="center">${Mech.ARTR}/${Mech.ALTR}</td>
                    </tr>
                    <tr>
                        <td class="indent2">L/R Arms</td>
						<td class="center">${Mech.ISA}/${Mech.ISA}</td>
                        <td class="center">${Mech.ALA}/${Mech.ARA}</td>
                    </tr>
                    <tr>
                        <td class="indent2">L/R Legs</td>
						<td class="center">${Mech.ISL}/${Mech.ISL}</td>
                        <td class="center">${Mech.ALL}/${Mech.ARL}</td>
                    </tr>
                </table>
                
                <table class="tr-weapons">
                    <thead>
                        <tr>
                            <th>Weapons and Ammo</th>
                            <th>Location</th>
                            <th>Crits</th>
                            <th>Tons</th>
                        </tr>
                    </thead>
                    <tbody>
						${tr_WeaponsList('RA')}
						${tr_WeaponsList('RT')}
						${tr_WeaponsList('CT')}
						${tr_WeaponsList('LT')}
						${tr_WeaponsList('LA')}
						${tr_WeaponsList('H')}
						${tr_WeaponsList('RL')}
						${tr_WeaponsList('LL')}
                    </tbody>
                </table>
                <p><b>Notes:</b> ${designQuirks}</p>
            </div>
        </div>
		<footer class="print-footer">
			<p>Created with <a href="https://github.com/midkiffaries/remlab5">REMLAB <span>${RemlabVersion}</span></a> on <time>${TodaysDate.getFullYear()}</time>. Please recycle this document.</p>
		</footer>
    </div>
</div>

<style>
/* Stop page scrolling - fixes issues with printing */
body {
    overflow: hidden !important;
	width: 100wh;
	height: 90vh;
}

.dialog-body, 
.dialog-top {
	margin: 1em;
	line-height: 1;
	max-width: 100%;
}

.dialog-body .cbills::before {
	font-size: 0.9em;
}

.print-options {
	background: #eee;
	border: 1px solid #ddd;
	padding: 0.5em 0.6em;
	width: 100%;
	margin-top: 2em;
}

.print-options button img {
	height: 1.2em;
	vertical-align: -3px;
}

.print-body {
	font-size: 0.9em;
	font-family: arial;
}

.print-header img {
	height: 1.5em;
}

.print-header span {
	display: block;
	font-size: 0.8em;
}

.print-body p {
	margin: 0.5em 0;
}

.print-leftside {
	width: 50%;
	float: left;
}

.print-rightside {
	width: 50%;
	float: right;
}

.print-leftside ul {
	margin: 0;
}

.print-leftside li {
	list-style: none;
}

.indent {
	margin-left: 2em !important;
}

.indent2 {
	padding-left: 2.5em;
}

.center {
	text-align: center;
}

@media only print {
    /* Hide the interface */    
	.page-header, 
	.page-main, 
	.page-footer, 
	.print-options, 
	.dialog-top {
		display: none !important;
	}
	
	dialog,
	.dialog-body,
	.dialog-html,
	.print-container {
		background-color: #fff;
		position: absolute;
		border: 0 !important;
		margin: 0 !important;
		padding: 0 !important;
		width: 100% !important;
		height: 100% !important;
		top: 0 !important;
		box-shadow: none !important;
		overflow: visible;
	}
}
</style>
`};