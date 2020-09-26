/**************************
 * Section Panels Constructor
**************************/

// Section Panel Data Constructor
function SectionPanel(id, title, size, body, help, footer) {
    this.id = id; // Section ID
    this.title = title; // Section Title
    this.size = size; // Section Width
    this.body = body; // Form Content
    this.help = help; // Info and Help
    this.footer = footer; // Footer Content
}

// Section HTML Template
const sectionTemplate = (id, title, size, body, help, footer) => (`
    <section class="section-box width-${size} section-${id}">
        <header class="section-header">
            <h2>${title}</h2>
        </header>
        <div role="tablist" class="panelswitch">
            <button class="panelswitch_button">Info</button>
            <div role="tabpanel" class="section-body">
                ${body}
            </div>
            <div role="tabpanel" class="section-help">
                ${help}
            </div>
        </div>
        <footer class="section-footer">
            ${footer}
            <ul class="section-totals">
                <li>Mass <output id="out${id}Mass">0.0</output> tons</li>
                <li>Crits <output id="out${id}Crits">0</output></li>
                <li>Cost <output id="out${id}Cost" class="cbills">0</output></li>
            </ul>
        </footer>
    </section>
`);

// Section : Engine and Movement
const sEngine = new SectionPanel(
    // id
    "Engine", 
    
    // title
    "Engine &amp; Movement",
    
    // size
    "half",
    
    // body
    `
    <p><label>Walking <abbr>MP</abbr></label> <span class="stepper-container"><input type="number" id="stepWalking" class="stepper" value="${Mech.walkingMP}" min="1" max="20" step="1"></span> Running <abbr>MP</abbr> <output for="stepWalking" id="outRunning">${Mech.runningMP}</output></p>
    <p><label>Type</label> <select id="selEngine" class="select" data-list="a_EngineType"></select> <output id="outEngineRating">${Mech.engineRating} ${Mech.engineBrand}</output></p>
    <p><label>Legs</label> <input type="radio" name="selLegs" id="radioM1" class="radio-button" value="0" checked><label for="radioM1" role="button">2</label><input type="radio" name="selLegs" id="radioM2" class="radio-button" value="1"><label for="radioM2" role="button">4</label></p>
    `, 
    
    // help
    `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lorem eros. Proin ipsum neque, gravida rutrum felis a, porttitor luctus sem. Vivamus tincidunt sapien interdum tortor rhoncus ornare.</p>`,
    
    // footer
    ``,
);

// Section : Jump Jets
const sJumpjets = new SectionPanel(
    // id
    "JumpJets", 
    
    // title
    "Jump Jets",
    
    // size
    "half",
    
    // body
    `
    <p><label>Jumping <abbr>MP</abbr></label> <span class="stepper-container"><input type="number" id="stepJumping" class="stepper" value="${Mech.jumpingMP}" min="0" max="${Mech.walkingMP}" step="1"></span></p>
    <p><label>Type</label> <select id="selJumpJets" class="select" data-list="a_JJType" disabled></select></p>
    `, 
    
    // help
    `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lorem eros. Proin ipsum neque, gravida rutrum felis a, porttitor luctus sem. Vivamus tincidunt sapien interdum tortor rhoncus ornare.</p>`,
    
    // footer
    ``,
);

// Section : Heat Sinks
const sHeatSinks = new SectionPanel(
    // id
    "HeatSinks", 
    
    // title
    "Heat Sinks",
    
    // size
    "half",
    
    // body
    `
    <p><label>Heat Sinks</label> <span class="stepper-container"><input type="number" id="stepHeatSinks" class="stepper" value="${Mech.heatsinksBase}" min="10" max="40" step="1"></span></p>
    <p><label>Type</label> <select id="selHeatSinks" class="select" data-list="a_HSType" disabled></select></p>
    `, 
    
    // help
    `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lorem eros. Proin ipsum neque, gravida rutrum felis a, porttitor luctus sem. Vivamus tincidunt sapien interdum tortor rhoncus ornare.</p>`,
    
    // footer
    ``,
);

// Section : Internal Components
const sComponents = new SectionPanel(
    // id
    "Internal", 
    
    // title
    "Internal Components",
    
    // size
    "half",
    
    // body
    `
    <p><label>Internal Structure</label> <select id="selInternalSruct" class="select" data-list="a_ISType" disabled></select></p>
    <p><label>Gyroscope</label> <select id="selGyro" class="select" data-list="a_GyroType" disabled></select></p>
    <p><label>Cockpit</label> <select id="selCockpit" class="select" data-list="a_CockpitType" disabled></select></p>
    <p><label>Targeting System</label> <select id="selTargeting" class="select" data-list="a_TargetType" disabled></select></p>
    `, 
    
    // help
    `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lorem eros. Proin ipsum neque, gravida rutrum felis a, porttitor luctus sem. Vivamus tincidunt sapien interdum tortor rhoncus ornare.</p>`,
    
    // footer
    ``,
);

// Section : Armor
const sArmor = new SectionPanel(
    // id
    "Armor", 
    
    // title
    "Armor",
    
    // size
    "full",
    
    // body
    `
    <p><label>Type</label> <select id="selArmor" class="select" data-list="a_ArmorType" disabled></select> Armor Points <output id="outArmorTotal">${Mech.armorTotal}</output>/<output id="outArmorTotalMax">${Mech.armorTotalMax}</output>
        <input type="checkbox" id="chkBalance" disabled><label for="chkBalance">Balance Armor</label></p> 
    <fieldset>
        <legend>Head</legend>
        <p><label>Head</label> <span class="stepper-container"><input type="number" id="stepArmorH" class="stepper" value="${Mech.AH}" min="0" max="${Mech.armorHead}" step="1"></span> <output id="outMaxH">${Mech.armorHead}</output></p> 
    </fieldset>

    <fieldset>
        <legend>Torsos</legend>
        <p><label>Left</label> <span class="stepper-container"><input type="number" id="stepArmorLT" class="stepper" value="${Mech.ALT}" min="0" max="${Mech.IST*2}" step="1"></span> 
            Rear <span class="stepper-container"><input type="number" id="stepArmorLTR" class="stepper" value="${Mech.ALTR}" min="0" max="9" step="1"></span> <output id="outMaxLT">${Mech.IST*2}</output></p> 
        <p><label>Center</label> <span class="stepper-container"><input type="number" id="stepArmorCT" class="stepper" value="${Mech.ACT}" min="0" max="${Mech.ICT*2}" step="1"></span> 
            Rear <span class="stepper-container"><input type="number" id="stepArmorCTR" class="stepper" value="${Mech.ACTR}" min="0" max="9" step="1"></span> <output id="outMaxCT">${Mech.ISC*2}</output></p> 
        <p><label>Right</label> <span class="stepper-container"><input type="number" id="stepArmorRT" class="stepper" value="${Mech.ART}" min="0" max="${Mech.IST*2}" step="1"></span>
            Rear <span class="stepper-container"><input type="number" id="stepArmorRTR" class="stepper" value="${Mech.ARTR}" min="0" max="9" step="1"></span> <output id="outMaxRT">${Mech.IST*2}</output></p> 
    </fieldset>

    <fieldset>
        <legend>Arms</legend>
        <p><label>Left</label> <span class="stepper-container"><input type="number" id="stepArmorLA" class="stepper" value="${Mech.ALA}" min="0" max="${Mech.ISA*2}" step="1"></span> <output id="outMaxLA">${Mech.ISA*2}</output></p> 
        <p><label>Right</label> <span class="stepper-container"><input type="number" id="stepArmorRA" class="stepper" value="${Mech.ARA}" min="0" max="${Mech.ISA*2}" step="1"></span> <output id="outMaxRA">${Mech.ISA*2}</output></p> 
    </fieldset> 

    <fieldset>
        <legend>Legs</legend>
        <p><label>Left</label> <span class="stepper-container"><input type="number" id="stepArmorLL" class="stepper" value="${Mech.ALL}" min="0" max="${Mech.ISL*2}" step="1"></span> <output id="outMaxLL">${Mech.ISL*2}</output></p> 
        <p><label>Right</label> <span class="stepper-container"><input type="number" id="stepArmorRL" class="stepper" value="${Mech.ARL}" min="0" max="${Mech.ISL*2}" step="1"></span> <output id="outMaxRL">${Mech.ISL*2}</output></p> 
    </fieldset> 

    <fieldset>
        <legend>Auto Fill</legend>
        <p><button id="btnArmorFill-100" onclick="autoFillArmor(1)">Max</button></p>
        <p><button id="btnArmorFill-75" onclick="autoFillArmor(0.75)">75%</button></p>
        <p><button id="btnArmorFill-50" onclick="autoFillArmor(0.5)">50%</button></p>
        <p><button id="btnArmorFill-25" onclick="autoFillArmor(0.25)">25%</button></p>
        <p><button id="btnArmorFill-0" onclick="autoFillArmor(0)">None</button></p>
    </fieldset>
    `, 
    
    // help
    `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lorem eros. Proin ipsum neque, gravida rutrum felis a, porttitor luctus sem. Vivamus tincidunt sapien interdum tortor rhoncus ornare.</p>`,
    
    // footer
    ``,
);

// Section : Weapons and Equipment
const sWeapons = new SectionPanel(
    // id
    "Weapons", 
    
    // title
    "Weapons &amp; Equipment",
    
    // size
    "full",
    
    // body
    `
    <table class="table-weapons">
        <thead>
            <tr>
                <th></th>
                <th>Type</th>
                <th>Heat</th>
                <th>Damage</th>
                <th>Min</th>
                <th>Short</th>
                <th>Medium</th>
                <th>Long</th>
                <th>Tons</th>
                <th>Crits</th>
                <th>Ammo</th>
                <th>Cost</th>
                <th>BV</th>
            </tr>
        </thead>
        <tbody id="tblWeapons">${completeWeaponsTable()}</tbody>
    </table>

    <div class="list-weapons">
        <ol>
            ${compactWeaponsTable()}
        </ol>
    </div>

    <div class="">
        <h5>Left Arm</h5>
        <ul id="LA-List"></ul>
    </div>

    <div class="mech-crit-table">
        <h5>Left Arm</h5>
        <ol id="listCritList_LA"></ol>
        
        <h5>Left Torso</h5>
        <ol id="listCritList_LT"></ol>

        <h5>Head</h5>
        <ol id="listCritList_H"></ol>

        <h5>Right Torso</h5>
        <ol id="listCritList_RT"></ol>

        <h5>Right Arm</h5>
        <ol id="listCritList_RA"></ol>

        <h5>Left Leg</h5>
        <ol id="listCritList_LL"></ol>

        <h5>Center Torso</h5>
        <ol id="listCritList_CT"></ol>

        <h5>Right Leg</h5>
        <ol id="listCritList_RL"></ol>
    </div>
    `, 
    
    // help
    `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lorem eros. Proin ipsum neque, gravida rutrum felis a, porttitor luctus sem. Vivamus tincidunt sapien interdum tortor rhoncus ornare.</p>`,
    
    // footer
    ``,
);

// Section : Warrior
const sWarrior = new SectionPanel(
    // id
    "Warrior", 
    
    // title
    "Warrior",
    
    // size
    "full",
    
    // body
    `
    <p><label>Name</label> <input type="text" id="txtPilotName" maxlength="40" placeholder="(blank line)" spellcheck="false" autocorrect="off" value="${Warrior.name}"></p>
    <p><label>Race</label> <input type="radio" name="radRace" id="radioR1" value="Human" class="radio-button" checked><label for="radioR1" role="button">Human</label><input type="radio" name="radRace" id="radioR2" value="Clanner" class="radio-button"><label for="radioR2" role="button">Clanner</label></p>
    <p><label>Affiliation</label> <select id="selAffiliation" class="select" data-list="a_Affiliation"></select><input type="text" id="txtAffiliation" maxlength="35" placeholder="(blank line)" spellcheck="false" autocorrect="off" style="display:none" value="${Warrior.affiliationUser}"> <button id="btnAffiliation" class="change-input">+</button></p>
    <p><label>Miniature</label> <input id="txtMiniature" type="text" maxlength="24" placeholder="(blank line)" spellcheck="false" autocorrect="off"></p>
    <p><label>Experience</label> <select id="selExperience" class="select" data-list="a_Experience"></select> <button id="btnRandom" aria-label="Randomize Skills">Randomize</button></p>
    <p><label>Piloting Skill</label> <input type="range" id="rngPiloting" value="${Warrior.piloting}" min="0" max="7"><output for="rngPiloting">${Warrior.piloting}</output></p>
    <p><label>Gunnery Skill</label> <input type="range" id="rngGunnery" value="${Warrior.gunnery}" min="0" max="7"><output for="rngGunnery">${Warrior.gunnery}</output></p>
    <p><label>Auto-Eject</label> <label for="chkAutoEject">Disabled</label><input type="checkbox" id="chkAutoEject" checked><label for="chkAutoEject" class="switch" role="switch"></label><label for="chkAutoEject">Enabled</label></p>
    `, 
    
    // help
    `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lorem eros. Proin ipsum neque, gravida rutrum felis a, porttitor luctus sem. Vivamus tincidunt sapien interdum tortor rhoncus ornare.</p>`,
    
    // footer
    `<p></p>`,
);

// Section : Design Quirks
const sQuirks = new SectionPanel(
    // id
    "Quirks", 
    
    // title
    "Design Quirks",
    
    // size
    "full",
    
    // body
    `
    <p><label>Positive</label></p>
    <ol role="listbox" class="select-list" id="selDQPositive" data-list="a_DQPositive" style="height:6em"></ol>
    <p><label>Negative</label></p>
    <ol role="listbox" class="select-list" id="selDQNegative" data-list="a_DQNegative" style="height:6em"></ol>
    `, 
    
    // help
    `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lorem eros. Proin ipsum neque, gravida rutrum felis a, porttitor luctus sem. Vivamus tincidunt sapien interdum tortor rhoncus ornare.</p>`,
    
    // footer
    `<p>The number of <i>Positive</i> and <i>Negative</i> quirks should be equal.</p>`,
);

// Section : Technical Readout
const sReadout = new SectionPanel(
    // id
    "Readout", 
    
    // title
    "Technical Readout",
    
    // size
    "full",
    
    // body
    `
    <p>
        <label>Year Introduced</label> <input id="txtYear" type="number" value="${Mech.year}" maxlength="4" placeholder="3025" pattern="[0-9]*" inputmode="numeric" style="width:4em">
        <label>Era</label> <select id="selEra" class="select" data-list="a_Era"></select>
    </p>
    <p><label>Overview</label> <textarea id="txtOverview" placeholder="(summary)">${Mech.overviewTR}</textarea></p>
    <p><label>Capabilities</label> <textarea id="txtCapabilities" placeholder="(summary)">${Mech.capabilitiesTR}</textarea></p>
    <p><label>Battle History</label> <textarea id="txtHistory" placeholder="(summary)">${Mech.historyTR}</textarea></p>
    <p><label>Deployment</label> <textarea id="txtDeployment" placeholder="(summary)">${Mech.deploymentTR}</textarea></p>
    <p><label>Variants</label> <textarea id="txtVariants" placeholder="(summary)">${Mech.overviewTR}</textarea></p>
    <p><label>Notable Units</label> <textarea id="txtNotable" placeholder="(summary)">${Mech.notableTR}</textarea></p>
    `, 
    
    // help
    `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lorem eros. Proin ipsum neque, gravida rutrum felis a, porttitor luctus sem. Vivamus tincidunt sapien interdum tortor rhoncus ornare.</p>`,
    
    // footer
    `<p>Note: This content only appears on the technical readout.</p>`,
);

// Side Bar content
const sideBar = (`
    <div class="sidebar_baseinfo">
        <p><input id="txtType" type="text" maxlength="40" placeholder="Mech Type" value="${Mech.type}" spellcheck="false" autocorrect="off" autofocus></p>
        <p><label>Chassis</label> <select id="selChassis" class="select" data-list="a_ChassisType"></select></p>
        <p><label>Mass</label> <span class="stepper-container"><input type="number" id="stepMass" value="${Mech.mass}" min="10" max="100" step="5" class="stepper" readonly></span> tons <output id="outWeightClass">${weightClass(Mech.mass)}</output></p>
        <p><label>Tech</label> <input type="radio" name="selTechnology" id="radioT1" value="0" class="radio-button" checked><label for="radioT1" role="button">Inner Sphere</label><input type="radio" name="selTechnology" id="radioT2" value="1" class="radio-button" disabled><label for="radioT2" role="button">Clan</label></p>
        <p><label>Ruleset</label> <select id="selRuleset" class="select" data-list="a_RuleSet" disabled></select></p>
    </div>
    <hr>
    <div class="sidebar_results">
        <p><label>Mass</label> <output id="outCurrentMass">${Mech.totalMass}</output> / <output id="outTotalMass">${Mech.mass}</output> tons</p>
        <p><label>Crit Slots</label> <output id="outCurrentCrits">${Mech.totalCrits}</output> / <output id="outTotalCrits">${Mech.baseCrits}</output></p>
        <p><label>Total Cost</label> <output id="outTotalCost" class="cbills">${addComma(Mech.totalCost)}</output></p>
    </div>
    <div class="sidebar_results">
        <p><label>Battle Value</label> <output id="outTotalBV">${addComma(Mech.totalBV)}</output></p>
        <p><label>Alpha Strike</label> <output id="outAlphaStrike">${Mech.damageTotal}</output> (<output id="outDamagePerTon">${addDecimal(Mech.damagePerTon)}</output> per ton)</p>
        <p><label>Heat Management</label> <output id="outTotalHeat">${Mech.heatTotal}</output> / <output id="outHeatSinks">${Mech.heatsinks + Mech.heatsinksBase}</output></p>
    </div>
    <hr>
    <div class="sidebar_buttons">
        <p><button id="btnCreateRS">Create Record Sheet</button></p>
        <p><button id="btnCreateTR">Create Technical Readout</button></p>
        <hr>
        <p><button id="btnResetPage" onclick="ConfirmModal('Are you sure you want to start over?','document.forms[0].reset()')">Start Over</button></p>
    </div>
`);

// Populate the grid
document.getElementById("SectionsGrid").innerHTML = (
    //sectionTemplate(sectionTech.id, sectionTech.title, sectionTech.size, sectionTech.body, sectionTech.help, sectionTech.footer) + 
    sectionTemplate(sEngine.id, sEngine.title, sEngine.size, sEngine.body, sEngine.help, sEngine.footer) +
    sectionTemplate(sJumpjets.id, sJumpjets.title, sJumpjets.size, sJumpjets.body, sJumpjets.help, sJumpjets.footer) +
    sectionTemplate(sHeatSinks.id, sHeatSinks.title, sHeatSinks.size, sHeatSinks.body, sHeatSinks.help, sHeatSinks.footer) +
    sectionTemplate(sComponents.id, sComponents.title, sComponents.size, sComponents.body, sComponents.help, sComponents.footer) +
    sectionTemplate(sArmor.id, sArmor.title, sArmor.size, sArmor.body, sArmor.help, sArmor.footer) +
    sectionTemplate(sWeapons.id, sWeapons.title, sWeapons.size, sWeapons.body, sWeapons.help, sWeapons.footer) +
    sectionTemplate(sWarrior.id, sWarrior.title, sWarrior.size, sWarrior.body, sWarrior.help, sWarrior.footer) +
    sectionTemplate(sQuirks.id, sQuirks.title, sQuirks.size, sQuirks.body, sQuirks.help, sQuirks.footer) +
    sectionTemplate(sReadout.id, sReadout.title, sReadout.size, sReadout.body, sReadout.help, sReadout.footer)
);

// Populate the side bar
document.getElementById("SideBar").innerHTML = sideBar;

// Footer Info
document.getElementById("AppVersion").textContent = RemlabVersion;

// Update form based on user input
const updateForm = () => {
    // Totals Side Bar
        // Get
    Mech.mass = elID('stepMass').value;
        // Post
    elID('outWeightClass').value = weightClass(Mech.mass);
    elID('outTotalMass').value = addDecimal(Mech.mass);
    elID('outCurrentMass').value = addDecimal(Mech.totalMass);
    elID('outTotalCrits').value = Mech.baseCrits;
    elID('outCurrentCrits').value = Mech.totalCrits;
    elID('outTotalCost').value = addComma(Mech.totalCost);

    // Engine Section
        // Get
    Mech.walkingMP = elID('stepWalking').value;
    Mech.engineType = elID('selEngine').value;
        // Post
    elID('outRunning').value = Mech.runningMP;
    elID('outEngineRating').value = `${Mech.engineRating} ${Mech.engineBrand}`;
    elID('outEngineMass').value = addDecimal(Mech.engineMass);
    elID('outEngineCrits').value = Mech.engineCrits;
    elID('outEngineCost').value = addComma(Mech.engineCost);

    // Jump Jets Section
        // Get
    Mech.jumpingMP = parseInt(elID('stepJumping').value);
    Mech.jumpjetsType = elID('selJumpJets').value;
        // Post
    elID('outJumpJetsMass').value = addDecimal(Mech.jumpjetsMass);
    elID('outJumpJetsCrits').value = Mech.jumpjetsCrits;
    elID('outJumpJetsCost').value = addComma(Mech.jumpjetsCost);

    // Heat Sinks Section
        // Get
    Mech.heatsinks = elID('stepHeatSinks').value;
    Mech.heatsinkType = elID('selHeatSinks').value;
        // Post
    elID('outHeatSinksMass').value = addDecimal(Mech.heatsinksMass);
    elID('outHeatSinksCrits').value = Mech.heatsinksCrits;
    elID('outHeatSinksCost').value = addComma(Mech.heatsinksCost);

    // Internal Comp Section
        // Get
    Mech.isType = elID('selInternalSruct').value;
    Mech.gyroType = elID('selGyro').value;
    Mech.cockpitType = elID('selCockpit').value;
    Mech.targetingType = elID('selTargeting').value;
        // Post
    elID('outInternalMass').value = addDecimal(Mech.internalComponentsMass);
    elID('outInternalCrits').value = Mech.internalComponentsCrits;
    elID('outInternalCost').value = addComma(Mech.internalComponentsCost);    

    // Armor Secton
        // Get
    Mech.armorType = elID('selArmor').value;
    Mech.AH = parseInt(elID('stepArmorH').value);
    Mech.ALT = parseInt(elID('stepArmorLT').value);
    Mech.ACT = parseInt(elID('stepArmorCT').value);
    Mech.ART = parseInt(elID('stepArmorRT').value);
    Mech.ALTR = parseInt(elID('stepArmorLTR').value);
    Mech.ACTR = parseInt(elID('stepArmorCTR').value);
    Mech.ARTR = parseInt(elID('stepArmorRTR').value);
    Mech.ALA = parseInt(elID('stepArmorLA').value);
    Mech.ARA = parseInt(elID('stepArmorRA').value);
    Mech.ALL = parseInt(elID('stepArmorLL').value);
    Mech.ARL = parseInt(elID('stepArmorRL').value);
        // Post
    elID('outArmorTotal').value = Mech.armorTotal;
    elID('outArmorTotalMax').value = Mech.armorTotalMax;
    elID('outArmorMass').value = addDecimal(Mech.armorMass);
    elID('outArmorCrits').value = Mech.armorCrits;
    elID('outArmorCost').value = addComma(Mech.armorCost);
    elID('outMaxLT').value = Mech.IST * 2;
    elID('outMaxCT').value = Mech.ISC * 2;
    elID('outMaxRT').value = Mech.IST * 2;
    elID('outMaxLA').value = Mech.ISA * 2;
    elID('outMaxRA').value = Mech.ISA * 2;
    elID('outMaxLL').value = Mech.ISL * 2;
    elID('outMaxRL').value = Mech.ISL * 2;

    // Weapons Section
        // Post
    elID('outWeaponsMass').value = addDecimal(Mech.weaponsMass);
    elID('outWeaponsCrits').value = Mech.weaponsCrits;
    elID('outWeaponsCost').value = addComma(Mech.weaponsCost); 

    // Design Quirks Section
        // Get
    //Mech.positiveDQ = document.forms[0];
        // Post

    // Warrior Section
        // Get
    Warrior.name = elID('txtPilotName').value;
    Warrior.race = document.forms[0].radRace.value;
    Warrior.affiliation = elID('selAffiliation').value;
    Warrior.affiliationUser = elID('txtAffiliation').value;
    Warrior.miniature = elID('txtPilotName').value;
    Warrior.experience = elID('selExperience').value;
    Warrior.piloting = elID('rngPiloting').value;
    Warrior.gunnery = elID('rngGunnery').value;
    Warrior.autoeject = elID('chkAutoEject').checked;
};

// Armor auto fill buttons logic
const autoFillArmor = v => {
	// Balance the front and rear armor of the torsos
    let CTfront = parseInt((Mech.ISC * 2) * 0.8),
        CTrear = (Mech.ISC * 2) - CTfront,
        STfront = parseInt((Mech.IST * 2) * 0.8),
        STrear = (Mech.IST * 2) - STfront;

	// Post data
    elID('stepArmorH').value = parseInt(9 * v);
	elID('stepArmorLT').value = parseInt(STfront * v);
    elID('stepArmorLTR').value = parseInt(STrear * v);
	elID('stepArmorCT').value = parseInt(CTfront * v);
    elID('stepArmorCTR').value = parseInt(CTrear * v);
	elID('stepArmorRT').value = parseInt(STfront * v);
    elID('stepArmorRTR').value = parseInt(STrear * v);
    elID('stepArmorLA').value = (Mech.ISA * 2) * v;
    elID('stepArmorRA').value = (Mech.ISA * 2) * v;
    elID('stepArmorLL').value = (Mech.ISL * 2) * v;
	elID('stepArmorRL').value = (Mech.ISL * 2) * v;
};

// Populate the complete weapons table
function completeWeaponsTable() {
    let w, sR, sM, sL, tr = "";
    
    // Loop for each entry in weaponTable
    for (let i in weaponTable.weapon) {
        w = weaponTable.weapon[i];

        // Display everything but structure items (0) and only Basic ruleset (0)
        if (w.type > 0 && w.rules == 0) {
            // Parse int ranges
            sR = w.rangeShort;
            sM = w.rangeMedium;
            sL = w.rangeLong;

            // Generate each table row
            tr += (`
            <tr data-id="${i}">
                <td>
                    <button class="tblweapons-add" onclick="addWeapon(${i})">+</button>
                    <button class="tblweapons-info" onclick="infoWeapon(${i})">?</button>
                </td>
                <td>${w.name}</td>
                <td>${w.heat}</td>
                <td>${w.damage}</td>
                <td>${zeroToDash(w.rangeMin)}</td>
                <td>${displayRange(1, sR)}</td>
                <td>${displayRange(sR, sM)}</td>
                <td>${displayRange(sM, sL)}</td>
                <td>${addDecimal(w.tons)}</td>
                <td>${w.crits}</td>
                <td>${zeroToDash(w.ammo)}</td>
                <td>${addComma(w.cost)}</td>
                <td>${w.bv}</td>
            </tr>
            `);
        }
    }

    return tr;
}

// Display Compact Weapons List
function compactWeaponsTable() {
    let li = "";

    // Loop for each entry in weaponTable
    for (let i in weaponTable.weapon) {
        w = weaponTable.weapon[i];

        // Display everything but structure items (0) and only Basic ruleset (0)
        if (w.type > 0 && w.rules == Mech.rules) {
            // Generate each table row
            li += (`
            <li data-id="${i}">
                <h6>${w.name}</h6>
                <p><button class="tblweapons-info" onclick="infoWeapon(${i})">Info</button> <button class="tblweapons-add" onclick="addWeapon('LA',${weaponTable.weapon[i].id})">Add</button></p>
                <p>${w.heat} | ${w.damage} | ${rangeClass(w.rangeLong)}<br>${addDecimal(w.tons)}t | ${w.crits} crits</p>
            </li>
            `);
        }
    }

    return li;    
}

// List the contents of a crit location array
function listCritsbyLoc(v) {
    let id = `listCritList_${v}`,
        max = eval('Mech.maxcrits_' + v),
        loc = eval('Mech.assigned_' + v),
        li = "",
        w;

    // Increment through selected location array 
    for (let i = 0; i < max; i++) {
        // Check if location array has contents
        w = weaponTable.weapon[loc[i]];

        // Populate slot
        if (loc[i] >= 0) {
            li += `<li>${w.name} <button class="remove" data-id="${w.id}" onclick="removeWeapon('LA',${w.id})">x</button></li>`;
            // If weapon takes up more than 1 crit
            if (w.crits > 1) {
                for (let j = 1; j < w.crits; j++) {
                    li += `<li>${w.name}</li>`;
                }
            }
        } else {
            // Empty slot
            li += `<li>–</li>`;
        }
    }

    elID(id).innerHTML = li;
}

// Populate the Crit Location Diagram
listCritsbyLoc('LA');
listCritsbyLoc('LT');
listCritsbyLoc('H');
listCritsbyLoc('RT');
listCritsbyLoc('RA');
listCritsbyLoc('LL');
listCritsbyLoc('CT');
listCritsbyLoc('RL');



function addWeapon(v, id) {
    Mech.assigned_LA.push(id);
    listCritsbyLoc('LA');
}


function removeWeapon(v, id) {
    let a = Mech.assigned_LA.indexOf(id);
    Mech.assigned_LA.pop(a);
    listCritsbyLoc('LA');
}