/**************************
 * Page Cards Content & Logic
**************************/

// Section Card Data Constructor
function SectionPanel(id, title, size, body, help, footer) {
    this.id = id; // Section ID
    this.title = title; // Section Title
    this.size = size; // Section Width
    this.body = body; // Form Content
    this.help = help; // Info and Help
    this.footer = footer; // Footer Content
}

/************************
 * Card HTML Template 
 ************************/

const sectionTemplate = (id, title, size, body, help, footer) => (`
    <section class="card width-${size} card-${id}">
        <header class="card-header">
            <h2>${title}</h2>
        </header>
        <div role="tablist" class="panelswitch card-body">
            <!--button role="switch" class="panelswitch-button">Info</button-->
            <div role="tabpanel" class="card-main">
                ${body}
            </div>
            <div role="tabpanel" class="card-help">
                ${help}
            </div>
        </div>
        <footer class="card-footer">
            ${footer}
            <ul class="card-totals">
                <li>Mass <output id="out${id}Mass"></output> tons</li>
                <li>Crits <output id="out${id}Crits"></output></li>
                <li>Cost <output id="out${id}Cost" class="cbills"></output></li>
            </ul>
        </footer>
    </section>
`);


/************************
 * Card: Engine & Movement 
 ************************/

const sEngine = new SectionPanel(
    // id
    "Engine", 
    
    // title
    "Engine &amp; Movement",
    
    // size
    "half",
    
    // body
    `
    <p><label>Walking <abbr>MP</abbr></label> <span class="stepper-container"><input type="number" id="stepWalking" class="stepper" value="${Mech.walkingMP}" min="1" max="20" step="1" readonly></span> Running <abbr>MP</abbr> <output for="stepWalking" id="outRunning">${Mech.runningMP}</output></p>
    <p><label>Type</label> <select id="selEngine" class="select" data-list="a_EngineType"></select> <output id="outEngineRating">${Mech.engineRating} ${Mech.engineBrand}</output></p>
    <p><label>Legs</label> <input type="radio" name="selLegs" id="radioM1" class="radio-button" value="0" checked><label for="radioM1" role="button">2</label><input type="radio" name="selLegs" id="radioM2" class="radio-button" value="1"><label for="radioM2" role="button">4</label></p>
    `, 
    
    // help
    `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lorem eros. Proin ipsum neque, gravida rutrum felis a, porttitor luctus sem. Vivamus tincidunt sapien interdum tortor rhoncus ornare.</p>`,
    
    // footer
    ``,
);


/************************
 * Card: Internal Components 
 ************************/

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


/************************
 * Card: Jump Jets 
 ************************/

 const sJumpjets = new SectionPanel(
    // id
    "JumpJets", 
    
    // title
    "Jump Jets",
    
    // size
    "half",
    
    // body
    `
    <p><label>Jumping <abbr>MP</abbr></label> <span class="stepper-container"><input type="number" id="stepJumping" class="stepper" value="${Mech.jumpingMP}" min="0" max="${Mech.walkingMP}" step="1" readonly></span></p>
    <p><label>Type</label> <select id="selJumpJets" class="select" data-list="a_JJType" disabled></select></p>
    `, 
    
    // help
    `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lorem eros. Proin ipsum neque, gravida rutrum felis a, porttitor luctus sem. Vivamus tincidunt sapien interdum tortor rhoncus ornare.</p>`,
    
    // footer
    ``,
);


/************************
 * Card: Heat Sinks 
 ************************/

const sHeatSinks = new SectionPanel(
    // id
    "HeatSinks", 
    
    // title
    "Heat Sinks",
    
    // size
    "half",
    
    // body
    `
    <p><label>Heat Sinks</label> <span class="stepper-container"><input type="number" id="stepHeatSinks" class="stepper" value="${Mech.heatsinksBase}" min="10" max="40" step="1" readonly></span></p>
    <p><label>Type</label> <select id="selHeatSinks" class="select" data-list="a_HSType" disabled></select></p>
    `, 
    
    // help
    `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lorem eros. Proin ipsum neque, gravida rutrum felis a, porttitor luctus sem. Vivamus tincidunt sapien interdum tortor rhoncus ornare.</p>`,
    
    // footer
    ``,
);


/************************
 * Card: Armor 
 ************************/

const sArmor = new SectionPanel(
    // id
    "Armor", 
    
    // title
    "Armor",
    
    // size
    "full",
    
    // body
    `
    <p>
        <label>Type</label> <select id="selArmor" class="select" data-list="a_ArmorType" disabled></select> Armor Points <output id="outArmorTotal">${Mech.armorTotal}</output>/<output id="outArmorTotalMax">${Mech.armorTotalMax}</output>
        <input type="checkbox" id="chkBalance" disabled><label for="chkBalance">Balance Armor</label>
    </p> 
    
    <div class="col-3">
        <fieldset>
            <legend>Head</legend>
            <p><label>Head</label> <span class="stepper-container"><input type="number" id="stepArmorH" class="stepper" value="${Mech.AH}" min="0" max="${Mech.armorHead}" step="1" readonly></span> <output id="outMaxH">${Mech.armorHead}</output></p> 
        </fieldset>

        <fieldset>
            <legend>Torsos</legend>
            <p><label>Left</label> <span class="stepper-container"><input type="number" id="stepArmorLT" class="stepper" value="${Mech.ALT}" min="0" max="${Mech.IST*2}" step="1" readonly></span> 
                Rear <span class="stepper-container"><input type="number" id="stepArmorLTR" class="stepper" value="${Mech.ALTR}" min="0" max="9" step="1" readonly></span> <output id="outMaxLT">${Mech.IST*2}</output></p> 
            <p><label>Center</label> <span class="stepper-container"><input type="number" id="stepArmorCT" class="stepper" value="${Mech.ACT}" min="0" max="${Mech.ICT*2}" step="1" readonly></span> 
                Rear <span class="stepper-container"><input type="number" id="stepArmorCTR" class="stepper" value="${Mech.ACTR}" min="0" max="9" step="1" readonly></span> <output id="outMaxCT">${Mech.ISC*2}</output></p> 
            <p><label>Right</label> <span class="stepper-container"><input type="number" id="stepArmorRT" class="stepper" value="${Mech.ART}" min="0" max="${Mech.IST*2}" step="1" readonly></span>
                Rear <span class="stepper-container"><input type="number" id="stepArmorRTR" class="stepper" value="${Mech.ARTR}" min="0" max="9" step="1" readonly></span> <output id="outMaxRT">${Mech.IST*2}</output></p> 
        </fieldset>
    </div>

    <div class="col-3">
        <fieldset>
            <legend>Arms</legend>
            <p><label>Left</label> <span class="stepper-container"><input type="number" id="stepArmorLA" class="stepper" value="${Mech.ALA}" min="0" max="${Mech.ISA*2}" step="1" readonly></span> <output id="outMaxLA">${Mech.ISA*2}</output></p> 
            <p><label>Right</label> <span class="stepper-container"><input type="number" id="stepArmorRA" class="stepper" value="${Mech.ARA}" min="0" max="${Mech.ISA*2}" step="1" readonly></span> <output id="outMaxRA">${Mech.ISA*2}</output></p> 
        </fieldset> 

        <fieldset>
            <legend>Legs</legend>
            <p><label>Left</label> <span class="stepper-container"><input type="number" id="stepArmorLL" class="stepper" value="${Mech.ALL}" min="0" max="${Mech.ISL*2}" step="1" readonly></span> <output id="outMaxLL">${Mech.ISL*2}</output></p> 
            <p><label>Right</label> <span class="stepper-container"><input type="number" id="stepArmorRL" class="stepper" value="${Mech.ARL}" min="0" max="${Mech.ISL*2}" step="1" readonly></span> <output id="outMaxRL">${Mech.ISL*2}</output></p> 
        </fieldset> 
    </div>

    <div class="col-3">
        <fieldset class="autofill-buttons">
            <legend>Auto Fill</legend>
            <p><button id="btnArmorFill-100" onclick="autoFillArmor(1)">Max</button></p>
            <p><button id="btnArmorFill-75" onclick="autoFillArmor(0.75)">75%</button></p>
            <p><button id="btnArmorFill-50" onclick="autoFillArmor(0.5)">50%</button></p>
            <p><button id="btnArmorFill-25" onclick="autoFillArmor(0.25)">25%</button></p>
            <p><button id="btnArmorFill-0" onclick="autoFillArmor(0)">None</button></p>
        </fieldset>
    </div>
    `, 
    
    // help
    `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lorem eros. Proin ipsum neque, gravida rutrum felis a, porttitor luctus sem. Vivamus tincidunt sapien interdum tortor rhoncus ornare.</p>`,
    
    // footer
    ``,
);


/************************
 * Card: Weapons & Equip 
 ************************/

const sWeapons = new SectionPanel(
    // id
    "Weapons", 
    
    // title
    "Weapons &amp; Equipment",
    
    // size
    "full",
    
    // body
    `
    <section class="accordion" role="tablist">
        <button role="tab">Weapons Table</button>
        <section role="tabpanel">
            <table class="table-weapons sortable">
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
        </section>
    </section>

    <div class="list-weapons col-2">
        <ol>
            ${compactWeaponsTable()}
        </ol>
    </div>

    <div class="locations-list col-2">
        ${locationList('Left Arm', 'LA')}
        ${locationList('Head', 'H')}
        ${locationList('Right Arm', 'RA')}
        ${locationList('Left Torso', 'LT')}
        ${locationList('Center Torso','CT')}
        ${locationList('Right Torso', 'RT')}
        ${locationList('Left Leg', 'LL')}
        <section>
            <h5>Mandatory</h5>
            <ul>
                <li>Heat Sinks (0)</li>
                <li>Jump Jets (0)</li>
            </ul>
        </section>
        ${locationList('Right Leg','RL')}
    </div>
    `, 
    
    // help
    `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lorem eros. Proin ipsum neque, gravida rutrum felis a, porttitor luctus sem. Vivamus tincidunt sapien interdum tortor rhoncus ornare.</p>`,
    
    // footer
    ``,
);


/************************
 * Card: Warrior/Pilot/Crew 
 ************************/

const sWarrior = new SectionPanel(
    // id
    "Warrior", 
    
    // title
    "Warrior",
    
    // size
    "full",
    
    // body
    `
    <div class="col-2">
        <p><label>Name</label> <input type="text" id="txtPilotName" maxlength="40" placeholder="(blank line)" spellcheck="false" autocorrect="off" value="${Warrior.name}"></p>
        <p><label>Race</label> <input type="radio" name="radRace" id="radioR1" value="Human" class="radio-button" checked><label for="radioR1" role="button">Human</label><input type="radio" name="radRace" id="radioR2" value="Clanner" class="radio-button"><label for="radioR2" role="button">Clanner</label></p>
        <p><label>Affiliation</label> <select id="selAffiliation" class="select" data-list="a_Affiliation"></select><input type="text" id="txtAffiliation" maxlength="35" placeholder="(blank line)" spellcheck="false" autocorrect="off" style="display:none" value="${Warrior.affiliationUser}"><button role="switch" id="btnAffiliation" class="button-flip" aria-label="Switch to manual input or list input" disabled></button></p>
        <p><label>Miniature</label> <input id="txtMiniature" type="text" maxlength="24" placeholder="(blank line)" spellcheck="false" autocorrect="off"></p>
    </div>
    <div class="col-2">
        <p><label>Experience</label> <select id="selExperience" class="select" data-list="a_Experience"></select> <button id="btnRandom" aria-label="Randomize Skills">Randomize</button></p>
        <p><label>Piloting Skill</label> <input type="range" id="rngPiloting" value="${Warrior.piloting}" min="0" max="7"><output for="rngPiloting">${Warrior.piloting}</output></p>
        <p><label>Gunnery Skill</label> <input type="range" id="rngGunnery" value="${Warrior.gunnery}" min="0" max="7"><output for="rngGunnery">${Warrior.gunnery}</output></p>
        <p><label>Auto-Eject</label> <label for="chkAutoEject">Disabled</label><input type="checkbox" id="chkAutoEject" checked><label for="chkAutoEject" class="switch" role="switch"></label><label for="chkAutoEject">Enabled</label></p>
    </div>
    `, 
    
    // help
    `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lorem eros. Proin ipsum neque, gravida rutrum felis a, porttitor luctus sem. Vivamus tincidunt sapien interdum tortor rhoncus ornare.</p>`,
    
    // footer
    `<p></p>`,
);


/************************
 * Card: Design Quirks 
 ************************/

const sQuirks = new SectionPanel(
    // id
    "Quirks", 
    
    // title
    "Design Quirks",
    
    // size
    "full",
    
    // body
    `
    <div class="col-2">
        <label>Positive</label>
        <ol role="listbox" class="select-list" id="selDQPositive" data-list="a_DQPositive" style="height:6em"></ol>
    </div>
    <div class="col-2">
        <label>Negative</label>
        <ol role="listbox" class="select-list" id="selDQNegative" data-list="a_DQNegative" style="height:6em"></ol>
    </div>
    `, 
    
    // help
    `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lorem eros. Proin ipsum neque, gravida rutrum felis a, porttitor luctus sem. Vivamus tincidunt sapien interdum tortor rhoncus ornare.</p>`,
    
    // footer
    `<p>The number of <i>Positive</i> and <i>Negative</i> quirks should be equal.</p>`,
);


/************************
 * Card: Technical Readout 
 ************************/

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
        <label>Year Introduced</label> <input id="txtYear" type="number" value="${Mech.year}" maxlength="4" placeholder="3025" pattern="[0-9]*" inputmode="numeric" style="width:5em" list="List-Year">
        <datalist id="List-Year">
            <option value="2750">
            <option value="3025">
            <option value="3028">
            <option value="3039">
            <option value="3050">
            <option value="3055">
            <option value="3058">
            <option value="3060">
            <option value="3067">
            <option value="3075">
            <option value="3085">
            <option value="3135">
            <option value="3145">
            <option value="3150">
        </datalist>
        <label>Era</label> <select id="selEra" class="select" data-list="a_Era"></select>
    </p>
    <div class="col-2">
        <p><label>Overview</label> <textarea id="txtOverview" placeholder="(summary)">${Mech.overviewTR}</textarea></p>
        <p><label>Capabilities</label> <textarea id="txtCapabilities" placeholder="(summary)">${Mech.capabilitiesTR}</textarea></p>
        <p><label>Battle History</label> <textarea id="txtHistory" placeholder="(summary)">${Mech.historyTR}</textarea></p>
    </div>
    <div class="col-2">
        <p><label>Deployment</label> <textarea id="txtDeployment" placeholder="(summary)">${Mech.deploymentTR}</textarea></p>
        <p><label>Variants</label> <textarea id="txtVariants" placeholder="(summary)">${Mech.overviewTR}</textarea></p>
        <p><label>Notable Units</label> <textarea id="txtNotable" placeholder="(summary)">${Mech.notableTR}</textarea></p>
    </div>
    `, 
    
    // help
    `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lorem eros. Proin ipsum neque, gravida rutrum felis a, porttitor luctus sem. Vivamus tincidunt sapien interdum tortor rhoncus ornare.</p>`,
    
    // footer
    `<p>Note: This content only appears on the technical readout.</p>`,
);


/************************
 * Card: Side Bar Totals 
 ************************/

const sideBarTotals = (`
    <div class="sidebar-input">
        <p><input id="txtType" type="text" maxlength="40" placeholder="Mech Type" value="${Mech.type}" spellcheck="false" autocorrect="off" autofocus></p>
        <p><label>Chassis</label> <select id="selChassis" class="select" data-list="a_ChassisType"></select></p>
        <p><label>Mass</label> <span class="stepper-container"><input type="number" id="stepMass" value="${Mech.mass}" min="10" max="100" step="5" class="stepper" readonly></span> tons <small><output id="outWeightClass">${weightClass(Mech.mass)}</output></small></p>
        <p><label>Tech</label> <input type="radio" name="selTechnology" id="radioT1" value="0" class="radio-button" checked><label for="radioT1" role="button">Inner Sphere</label><input type="radio" name="selTechnology" id="radioT2" value="1" class="radio-button" disabled><label for="radioT2" role="button">Clan</label></p>
        <p><label>Ruleset</label> <select id="selRuleset" class="select" data-list="a_RuleSet" disabled></select></p>
    </div>
    <div class="sidebar-totals">
        <p><label>Mass</label> <output id="outCurrentMass">${Mech.totalMass}</output> / <output id="outTotalMass">${Mech.mass}</output> tons</p>
        <p><label>Crit Slots</label> <output id="outCurrentCrits">${Mech.totalCrits}</output> / <output id="outTotalCrits">${Mech.baseCrits}</output></p>
        <p><label>Total Cost</label> <output id="outTotalCost" class="cbills">${addComma(Mech.totalCost)}</output></p>
        <p><label>Battle Value</label> <output id="outTotalBV">${addComma(Mech.totalBV)}</output></p>
        <p><label>Alpha Strike</label> <output id="outAlphaStrike">${Mech.damageTotal}</output> <small>[<output id="outDamagePerTon">${addDecimal(Mech.damagePerTon)}</output> per ton]</small></p>
        <p><label>Heat Management</label> <output id="outTotalHeat">${Mech.heatTotal}</output> / <output id="outHeatSinks">${Mech.heatsinks + Mech.heatsinksBase}</output></p>
    </div>
    <menu class="sidebar-print">
        <p><button id="btnCreateRS" onclick="HtmlModal(RecordSheetModal,'recordsheetModal')">Create Record Sheet</button></p>
        <p><button id="btnCreateTR" onclick="HtmlModal(TechReadoutModal,'techreadoutModal')">Create Technical Readout</button></p>
        <!--p><button id="btnResetPage" onclick="ConfirmModal('Are you sure you want to start over?','document.forms[0].reset()')">Start Over</button></p-->
    </menu>
`);


/************************
 * Append to Page 
 ************************/

// Populate the side bar
document.getElementById("SideBar").innerHTML = sideBarTotals;

// Populate the grid
document.getElementById("SectionsGrid").innerHTML = (
    sectionTemplate(sEngine.id, sEngine.title, sEngine.size, sEngine.body, sEngine.help, sEngine.footer) +
    sectionTemplate(sComponents.id, sComponents.title, sComponents.size, sComponents.body, sComponents.help, sComponents.footer) +
    sectionTemplate(sJumpjets.id, sJumpjets.title, sJumpjets.size, sJumpjets.body, sJumpjets.help, sJumpjets.footer) +
    sectionTemplate(sHeatSinks.id, sHeatSinks.title, sHeatSinks.size, sHeatSinks.body, sHeatSinks.help, sHeatSinks.footer) +
    sectionTemplate(sArmor.id, sArmor.title, sArmor.size, sArmor.body, sArmor.help, sArmor.footer) +
    sectionTemplate(sWeapons.id, sWeapons.title, sWeapons.size, sWeapons.body, sWeapons.help, sWeapons.footer) +
    sectionTemplate(sWarrior.id, sWarrior.title, sWarrior.size, sWarrior.body, sWarrior.help, sWarrior.footer) +
    sectionTemplate(sQuirks.id, sQuirks.title, sQuirks.size, sQuirks.body, sQuirks.help, sQuirks.footer) +
    sectionTemplate(sReadout.id, sReadout.title, sReadout.size, sReadout.body, sReadout.help, sReadout.footer)
);

// Footer Info
document.getElementById("AppVersion").textContent = RemlabVersion;


/************************
 * Page Logic 
 ************************/

// Update form based on user input
const updateForm = () => {
    // Totals Side Bar
        // Get
    Mech.type = elID('txtType').value;
    Mech.mass = elID('stepMass').value;
        // Post
    elID('outWeightClass').value = weightClass(Mech.mass);
    elID('outTotalMass').value = addDecimal(Mech.mass);
    elID('outCurrentMass').value = addDecimal(Mech.totalMass);
    elID('outTotalCrits').value = Mech.baseCrits;
    elID('outCurrentCrits').value = Mech.totalCrits;
    elID('outTotalCost').value = addComma(Mech.totalCost);
    elID('outTotalBV').value = addComma(Mech.totalBV);

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


/************************
 * Weapons Card Logic 
 ************************/

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
                    <button class="tblweapons-add" onclick="addWeapon('LA', ${i})">+</button>
                    <button class="tblweapons-info" onclick="HtmlModal(WeaponInfoModal, ${i})">?</button>
                </td>
                <td>${w.name}</td>
                <td>${w.heat}</td>
                <td>${displayDamage(w.minDamage, w.damage)}</td>
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
    let li = "", damage;

    // Loop for each entry in weaponTable
    for (let i in weaponTable.weapon) {
        w = weaponTable.weapon[i];

        // Display everything but structure items (0) and only Basic ruleset (0)
        if (w.type > 0 && w.rules == Mech.rules) {
            // Generate each table row
            li += (`
            <li data-id="${i}">
                <span class="weapon-name">${w.name}</span>
                <span><button class="tblweapons-info" onclick="HtmlModal(WeaponInfoModal, ${i})">Info</button> <button class="tblweapons-add" onclick="addWeapon('LA',${weaponTable.weapon[i].id})">Add</button></span>
                <span>${w.heat} | ${displayDamage(w.minDamage, w.damage)} | ${rangeClass(w.rangeLong)}<br>${addDecimal(w.tons)}t | ${w.crits} crits</span>
            </li>
            `);
        }
    }

    return li;    
}

// Location List
function locationList(n, v) {    
    let s = (`
    <section>
        <h5>${n}</h5>`);
    
    // If location is one of the arms
    if (v == 'LA' || v == 'RA') {
        s += (`
        <ul>
            <li><input type="checkbox" id="chkLowerArm_${v}" onclick="checkActuator()" checked disabled><label for="chkLowerArm_${v}">Lower Arm</label></li>
            <li><input type="checkbox" id="chkHand_${v}" onclick="checkActuator()" checked><label for="chkHand_${v}">Hand</label></li>
            <li><input type="checkbox" id="chkHatchet_${v}" onclick="checkActuator()" disabled><label for="chkHatchet_${v}">Hatchet</label></li>
        </ul>`);
    }
    s += (`
        <ul id="critList_${v}">
        </ul>
        <p>Crits Available <output id="outCrits_${v}"></output></p>
    </section>`);

    return s;
} 

// onload: Populate the Crit Location Diagram 
compactListCritsbyLoc('LA');
compactListCritsbyLoc('LT');
compactListCritsbyLoc('H');
compactListCritsbyLoc('RT');
compactListCritsbyLoc('RA');
compactListCritsbyLoc('LL');
compactListCritsbyLoc('CT');
compactListCritsbyLoc('RL');

// List the contents of a crit location array in a compact list
function compactListCritsbyLoc(v) {
    let id = `critList_${v}`,
        max = Mech[`maxcrits_${v}`],
        loc = Mech[`assigned_${v}`],
        li = "",
        w;

    // Increment through selected location array 
    for (let i = 0; i < max; i++) {
        // Check if location array has contents
        w = weaponTable.weapon[loc[i]];

        // Populate slot
        if (loc[i] >= 0) {

            // Check if item is a a weapon or a hardpoint
            if (w.tons > 0) {
                // Weapon
                li += `<li>${w.name} <button class="tbllocation-remove" data-id="${w.id}" onclick="removeWeapon('LA',${w.id})" aria-label="Delete weapon">✕</button></li>`;
            }
        }
    }

    elID(id).innerHTML = li;
    elID('outCrits_'+v).textContent = max - Mech[`crits_${v}`];

    updateForm();
}

// Add weapon (id) to assigned location (v)
function addWeapon(v, id) {
    let loc = Mech[`assigned_${v}`],
        max = Mech[`maxcrits_${v}`],
        w = weaponTable.weapon[id].crits;

    // Check if item id can fit in v
    if (Mech[`crits_${v}`] + w <= max) {
        // Add to crits_v
        Mech[`crits_${v}`] += w;
        // Add to assigned_v
        loc.push(id);
        // List location contents
        //listCritsbyLoc(v);
        compactListCritsbyLoc(v);
    }
}

// Remove weapon (id) from assigned location (v)
function removeWeapon(v, id) {
    let a = Mech[`assigned_${v}`].indexOf(id),
        w = weaponTable.weapon[id].crits;
    
    // Remove from crits_v
    Mech[`crits_${v}`] -= w;

    // Remove item
    Mech[`assigned_${v}`].pop(a);
    //listCritsbyLoc(v);
    compactListCritsbyLoc(v);
}


/************************
 * Armor Card Logic 
 ************************/

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
    
    updateForm();
};