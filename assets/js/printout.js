/**************************
 * Mech print out modals
**************************/

// Printout: Generate the Mech heat scale
const a_HeatScale = {
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
    9:  '',
    8:  '+1 Modifier to Fire',
    7:  '',
    6:  '',
    5:  '-1 Movement Points',
    4:  '',
    3:  '',
    2:  '',
    1:  '',
    0:  ''
};

// Record Sheet modal content
const RecordSheetModal = (`
<div class="print-container">
	<div class="print-sheet">
		<div class="print-body">
			<div class="print-leftside">
				<div class="print-header">
                    <h1>
                    <img id="P-HeaderLogo" src="assets/images/btech2010.svg" alt="Battletech">
                    <span class="print-subtitle"><span id="P-WeightClass">Light</span> <span id="P-ChassisType">BattleMech</span> Record Sheet</span>
					</h1>
					<div class="print-header-right">Miniature<br><b id="P-Miniature"></b></div>
				</div>

				<div class="print-armordiagram">
					<h3>Armor Diagram</h3>
					<div class="print-armor-col">
						<div class="print-armorbox">
							<h4>Left Arm <span>[10,11]</span></h4>
							<div>
								<span id="P-RS-LAArmor"></span>
								<span id="P-RS-LAIS" class="print-isbox"></span>
							</div>
						</div>
						<div class="print-center">
							<div>Armor<br><b id="P-ArmorType">Standard</b></div>
							<div>Targeting<br><b id="P-Targeting">Standard</b></div>
						</div>
					</div>
					<div class="print-armor-col">
						<div class="print-armorbox">
							<h4>Left Torso <span>[8]</span></h4>
							<div>
								<span id="P-RS-LTArmor"></span>
								<span id="P-RS-LTIS" class="print-isbox"></span>
								<span id="P-RS-LTArmorR" class="print-reararmor"></span>
							</div>
						</div>
						<div class="print-armorbox">
							<h4>Left Leg <span>[9]</span></h4>
							<div>
								<span id="P-RS-LLArmor"></span>
								<span id="P-RS-LLIS" class="print-isbox"></span>
							</div>
						</div>
					</div>
					<div class="print-armor-col">
						<div class="print-armorbox">
							<h4>Head <span>[12]</span></h4>
							<div>
								<span id="P-RS-HArmor"></span>
								<span id="P-RS-HIS" class="print-isbox"></span>
							</div>
						</div>
						<div class="print-armorbox">
							<h4>Center Torso <span>[2,7]</span></h4>
							<div>
								<span id="P-RS-CTArmor"></span>
								<span id="P-RS-CTIS" class="print-isbox"></span>
								<span id="P-RS-CTArmorR" class="print-reararmor"></span>
							</div>
						</div>
					</div>
					<div class="print-armor-col">
						<div class="print-armorbox">
							<h4>Right Torso <span>[6]</span></h4>
							<div>
								<span id="P-RS-RTArmor"></span>
								<span id="P-RS-RTIS" class="print-isbox"></span>
								<span id="P-RS-RTArmorR" class="print-reararmor"></span>
							</div>
						</div>
						<div class="print-armorbox">
							<h4>Right Leg <span>[5]</span></h4>
							<div>
								<span id="P-RS-RLArmor"></span>
								<span id="P-RS-RLIS" class="print-isbox"></span>
							</div>
						</div>
					</div>
					<div class="print-armor-col">
						<div class="print-armorbox">
							<h4>Right Arm <span>[3,4]</span></h4>
							<div>
								<span id="P-RS-RAArmor"></span>
								<span id="P-RS-RAIS" class="print-isbox"></span>
							</div>
						</div>
						<div class="print-center">
							<div>Structure<br><b id="P-InternalStuct">Standard</b></div>
							<div>Gyroscope<br><b id="P-GyroType">Standard</b></div>
						</div>
					</div>
				</div>

				<div class="print-critstable">
					<h3>Critical Hit Table</h3>
					<div>
						<h4>Left Arm</h4>
						<ol id="P-CritLA-H" class="high"></ol>
						<ol id="P-CritLA-L" class="low"></ol>

						<h4>Left Torso</h4>
						<ol id="P-CritLT-H" class="high"></ol>
						<ol id="P-CritLT-L" class="low"></ol>

						<h4>Left Leg</h4>
						<ol id="P-CritLL"></ol>
					</div>

					<div>
						<h4>Head</h4>
						<ol id="P-CritH"></ol>

						<h4>Center Torso</h4>
						<ol id="P-CritCT-H" class="high"></ol>
						<ol id="P-CritCT-L" class="low"></ol>

						<div class="print-hitboxes">
							<p><label>Engine Hits</label> &#9675;&#9675;&#9675;</p>
							<p><label>Gyro Hits</label> &#9675;&#9675;</p>
							<p><label>Sensor Hits</label> &#9675;&#9675;</p>
							<p><label>Life Support</label> &#9675;</p>
						</div>

						<div class="print-costbv">
							<p>Cost: <b id="P-TotalCost" class="cbill">00,000,000</b></p>
							<p>Battle Value: <b id="P-TotalBV">0000</b></p>
						</div>

					</div>

					<div>
						<h4>Right Arm</h4>
						<ol id="P-CritRA-H" class="high"></ol>
						<ol id="P-CritRA-L" class="low"></ol>

						<h4>Right Torso</h4>
						<ol id="P-CritRT-H" class="high"></ol>
						<ol id="P-CritRT-L" class="low"></ol>

						<h4>Right Leg</h4>
						<ol id="P-CritRL"></ol>
					</div>

				</div>
			</div>

			<div class="print-rightside">
				<div class="print-data">
					<h3>Mech Data</h3>
					<p><b id="P-MechType">${Mech.type}</b></p>
					<p>Tonnage: <b id="P-Tonnage">${Mech.mass}</b></p>
					<p>Technology: <b id="P-TechBase"></b></p>
					<p>Ruleset: <b id="P-Ruleset"></b></p>
					<p>Movement Points:</p>
					<ul>
						<li><label>Walking:</label> <b id="P-Walking"></b></li>
						<li><label>Running:</label> <b id="P-Running"></b></li>
						<!--li><label>Sprinting:</label> <b id="P-Sprinting"></b></li-->
						<li><label>Jumping:</label> <b id="P-Jumping"></b></li>
					</ul>
				</div>
				<div class="print-warrior">
					<h3>Warrior</h3>
					<p>Name: <span id="P-WarriorName"></span></p>
					<p>Affiliation: <span id="P-Affiliation"></span></p>
					<p>Gunnery: <b id="P-Gunnery"></b> &nbsp; Piloting: <b id="P-Piloting"></b> &nbsp;&nbsp; <i id="P-Experience"></i></p>
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
					<p>Auto-Eject: <b id="P-AutoEject"></b></p>
				</div>
				<div class="print-heat">
					<h3>Heat Data</h3>
					<p><b id="P-HeatSinks">10</b> | <span id="P-HSType">Single</span> Heat Sinks</p>
					<p><span id="P-HeatSinkTicks"></span></p>
				</div>
				<div class="print-heatscale">
					<h3>Heat Scale</h3>
					<table id="P-HeatScale">
					</table>
				</div>
			</div>
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
					<tbody id="P-WeaponsList">
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
					<tbody id="P-AmmoList">
					</tbody>
				</table>
			</div>
		</div>

		<footer class="print-footer">
			<p>Created with <a href="https://github.com/midkiffaries/remlab5"><span id="P-Version">REMLAB</span></a> on <span id="P-DateCreated">2020</span>. Please recycle this document.</p>
		</footer>
	</div>
</div>
`);