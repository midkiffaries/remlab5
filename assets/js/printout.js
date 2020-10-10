/**************************
 * Mech print out modals
**************************/

// Printout: Generate the Mech heat scale
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

// Generate the Heat Scale for the Record Sheet
const generateHeatScale = () => {
	let t = `<tr><th class="print-hs-box"></th><td>OVERFLOW</td></tr>`;
		l = a_HeatScale.length - 1;

	// Loop through the array
    for (let i = 0; i < l; i++) {
		t += `<tr><th>${l-i}</th><td>${a_HeatScale[i]}</td></tr>`;
	}
	
    return t;
};

// Record Sheet modal content
const RecordSheetModal = () => (`
<div class="print-container">
	<div class="print-sheet">
		<div class="print-body">
			<div class="print-leftside">
				<header class="print-header">
                    <h2>
                    <img src="assets/images/btech2010.svg" alt="Battletech">
                    <span class="print-subtitle"><span>${weightClass(Mech.mass)}</span> <span>${a_ChassisType[Mech.chassis]}</span> Record Sheet</span>
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
						<ol class="high"></ol>
						<ol class="low"></ol>

						<h4>Left Torso</h4>
						<ol class="high"></ol>
						<ol class="low"></ol>

						<h4>Left Leg</h4>
						<ol></ol>
					</div>

					<div>
						<h4>Head</h4>
						<ol></ol>

						<h4>Center Torso</h4>
						<ol class="high"></ol>
						<ol class="low"></ol>

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
						<ol class="high"></ol>
						<ol class="low"></ol>

						<h4>Right Torso</h4>
						<ol class="high"></ol>
						<ol class="low"></ol>

						<h4>Right Leg</h4>
						<ol></ol>
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
					<p><b>${Mech.heatTotal}</b> | <span>${a_HSType[Mech.heatsinkType]}</span> Heat Sinks</p>
					<p><span>${displayTicks(Mech.heatTotal)}</span></p>
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

</style>
`);