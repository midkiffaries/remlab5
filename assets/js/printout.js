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
        loc = Mech[`assigned_${v}`],
        li = `<ol class="high">`,
        w;

    // Increment through selected location array 
    for (let i = 0; i < max; i++) {
		// Split the crits list if its more than 6
		if (i == 6) li += `</ol><ol class="low">`

        w = weaponTable.weapon[loc[i]];

        // Populate slot
        if (loc[i] >= 0) {

			// Populate single line
			li += `<li>${w.name}</li>`;

            // If weapon takes up more than 1 crit
            if (w.crits > 1) {
                for (let j = 1; j < w.crits; j++) {
                    li += `<li>${w.name}</li>`;
                    max--;
                }
            }
        } else {
            // Empty slot
            li += `<li>–</li>`;
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
const RecordSheetModal = () => (`
<div class="print-container">
	<div class="print-sheet">
		<div class="print-body">
			<div class="print-leftside">
				<header class="print-header">
                    <h2>
                    <img src="assets/images/btech2010.svg" alt="Battletech">
                    <span class="print-subtitle">${weightClass(Mech.mass)} ${a_ChassisType[Mech.chassis]} Record Sheet</span>
					</h2>
					<div class="print-header-right">Miniature<br><b>${Warrior.miniature}</b></div>
				</header>

				<div class="print-armordiagram">
					<h3>Armor Diagram</h3>
					<div class="print-armor-col">
						<div class="print-armorbox">
							<h4>Left Arm <small>[10,11]</small></h4>
							<div>
								<span>${displayTicks(Mech.ALA)}</span>
								<span class="print-isbox">${displayTicks(Mech.ISA)}</span>
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
								<span>${displayTicks(Mech.ALT)}</span>
								<span class="print-isbox">${displayTicks(Mech.IST)}</span>
								<span class="print-reararmor">${displayTicks(Mech.ALTR)}</span>
							</div>
						</div>
						<div class="print-armorbox">
							<h4>Left Leg <small>[9]</small></h4>
							<div>
								<span>${displayTicks(Mech.ALL)}</span>
								<span class="print-isbox">${displayTicks(Mech.ISL)}</span>
							</div>
						</div>
					</div>
					<div class="print-armor-col">
						<div class="print-armorbox">
							<h4>Head <small>[12]</small></h4>
							<div>
								<span>${displayTicks(Mech.AH)}</span>
								<span class="print-isbox">${displayTicks(Mech.ISH)}</span>
							</div>
						</div>
						<div class="print-armorbox">
							<h4>Center Torso <small>[2,7]</small></h4>
							<div>
								<span>${displayTicks(Mech.ACT)}</span>
								<span class="print-isbox">${displayTicks(Mech.ISC)}</span>
								<span class="print-reararmor">${displayTicks(Mech.ACTR)}</span>
							</div>
						</div>
					</div>
					<div class="print-armor-col">
						<div class="print-armorbox">
							<h4>Right Torso <small>[6]</small></h4>
							<div>
								<span>${displayTicks(Mech.ART)}</span>
								<span class="print-isbox">${displayTicks(Mech.IST)}</span>
								<span class="print-reararmor">${displayTicks(Mech.ARTR)}</span>
							</div>
						</div>
						<div class="print-armorbox">
							<h4>Right Leg <small>[5]</small></h4>
							<div>
								<span>${displayTicks(Mech.ARL)}</span>
								<span class="print-isbox">${displayTicks(Mech.ISL)}</span>
							</div>
						</div>
					</div>
					<div class="print-armor-col">
						<div class="print-armorbox">
							<h4>Right Arm <small>[3,4]</small></h4>
							<div>
								<span>${displayTicks(Mech.ARA)}</span>
								<span class="print-isbox">${displayTicks(Mech.ISA)}</span>
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
					<p><b>${Mech.type}</b></p>
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
					<p>Name: <span>${Warrior.name}</span></p>
					<p>Affiliation: <span>${a_Affiliation[Warrior.affiliation]}</span></p>
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
					<p><b>${Mech.heatsinks}</b> | <span>${a_HSType[Mech.heatsinkType]}</span> Heat Sinks</p>
					<p><span>${displayTicks(Mech.heatsinks)}</span></p>
				</div>
				<div class="print-heatscale">
					<h3>Heat Scale</h3>
					<table class="print-heatscale">
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
			<p>Created with <a href="https://github.com/midkiffaries/remlab5">REMLAB <span>${RemlabVersion}</span></a> on <span>${TodaysDate.getFullYear()}</span>. Please recycle this document.</p>
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

.dialog-body {
	margin: 1em;
	max-width: 100%;
}

@media only print {
    /* Hide the interface */    
	.page-header, 
	.page-main, 
	.page-footer, 
	.print-settings, 
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
`);


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


	return `
<div class="print-container">
    <div class="print-sheet">
        <div class="print-body">
			<h2>
				<img src="assets/images/btech2010.svg" alt="Battletech">
				<span class="print-subtitle">${weightClass(Mech.mass)} ${a_ChassisType[Mech.chassis]} Record Sheet</span>
			</h2>

            <h1 id="P-MechType">${Mech.type}</h1>
            
            <div class="tr-leftside">
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
                <h3>Capabilities</h3>
                <p>${Mech.capabilitiesTR}</p>
                <h3>Battle History</h3>
                <p>${Mech.historyTR}</p>
                <h3>Deployment</h3>
                <p>${Mech.deploymentTR}</p>
                <h3>Variants</h3>
                <p>${Mech.variantsTR}</p>
                <h3>Notable Units</h3>
                <p>${Mech.notableTR}</p>
            </div>
            
            <div class="tr-rightside">
                <table class="tr-stats">
                    <tr>
                        <td>Type:</td>
                        <th colspan="2">${Mech.type}</th>
                    </tr>
                    <tr>
                        <td>Technology Base:</td>
                        <td colspan="2">${a_TechBase[Mech.techbase]}</td>
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
                    <tr >
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
                <p><b>Notes:</b> Design Quirks</p>
            </div>
        </div>
		<footer class="print-footer">
			<p>Created with <a href="https://github.com/midkiffaries/remlab5">REMLAB <span>${RemlabVersion}</span></a> on <span>${TodaysDate.getFullYear()}</span>. Please recycle this document.</p>
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

.dialog-body {
	margin: 1em;
	line-height: 1;
	max-width: 100%;
}

.indent {
	margin-left: 2em;
}

.indent2 {
	padding-left: 2.5em;
}

.center {
	text-align: center;
}

.tr-leftside ul {
	list-style: none;
}

@media only print {
    /* Hide the interface */    
	.page-header, 
	.page-main, 
	.page-footer, 
	.print-settings, 
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