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
            <button class="help-button" onclick="displayHelp('Help-${id}')"><img src="/assets/images/help.svg" alt="Info" aria-label="Info" style="width:1.5em"></button>
        </header>
        <div class="card-help" id="Help-${id}">
            <h3>★ About ${title}</h3>
            ${help}
        </div>
        <div class="card-body">
            ${body}
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
    <p><label>Walking <abbr>MP</abbr></label> <span class="stepper-container"><input type="number" id="stepWalking" class="stepper" value="${Mech.walkingMP}" min="1" max="16" step="1" readonly></span> Running <abbr>MP</abbr> <output for="stepWalking" id="outRunning">${Mech.runningMP}</output></p>
    <p><label>Type</label> <select id="selEngine" class="select" data-list="a_EngineType" disabled></select> <output id="outEngineRating">${Mech.engineBrand} ${Mech.engineRating}</output></p>
    <p><label>Legs</label> <input type="radio" name="selLegs" id="radioM1" class="radio-button" value="0" checked><label for="radioM1" role="button">2</label><input type="radio" name="selLegs" id="radioM2" class="radio-button" value="1"><label for="radioM2" role="button">4</label></p>
    <p><label>Myomer</label> <select id="selMyomer" class="select" data-list="a_MyomerType" disabled></select></p>
    `, 
    
    // help
    `
    <p><i>Walking MP</i> determines the average speed, and <i>running MP</i> is the top speed of this Mech. The <i>engine type</i> determines the kind of engine that powers this mech. This can have an affect on the size and cost of the engine. <i>Myomer</i> is the special movement speed and strength enhancements that are available to Mechs.</p>
    `,
    
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
    `
    <p>These options can affect the weight, size, and price of these listed components.</p>
    <p><i>Targeting System</i> provides some different combat targeting options.</p>
    `,
    
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
    `
    <p>Jump Jets allow the Mech to circumnavigate terrain by launching the Mech vertically. The <i>Jumping MP</i> cannot exceed the <i>Walking MP</i>.</p>
    <p><i>Type</i> provides more options that affect the weight and size of the jump jets.</p>
    `,
    
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
    `
    <p>Heat sinks dissipate heat generated by the Mech's movement and weapons. Fusion based engines provide 10 weight free heat sinks.</p>
    <p><i>Type</i> provides more options that affect the weight and size of the heat sinks.</p>
    `,
    
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
        <label>Type</label> <select id="selArmor" class="select" data-list="a_ArmorType" disabled></select> <label style="margin-left:0.8em">Armor Points</label> <output id="outArmorTotal">${Mech.armorTotal}</output>/<output id="outArmorTotalMax">${Mech.armorTotalMax}</output>
        <input type="checkbox" id="chkBalance" onchange="balanceArmor()" checked><label for="chkBalance" style="margin-left:1em">Balance Armor</label>
    </p> 
    
    <div class="col-3">
        <fieldset>
            <legend>Head</legend>
            <p><label>Head</label> <span class="stepper-container"><input type="number" id="stepArmorH" class="stepper" value="${Mech.AH}" min="0" max="${Mech.armorHead}" step="1" readonly></span> <output id="outMaxH">${Mech.armorHead}</output></p> 
        </fieldset>

        <fieldset>
            <legend>Torsos</legend>
            <p><label>Left</label> <span class="stepper-container"><input type="number" id="stepArmorLT" class="stepper" value="${Mech.ALT}" min="0" max="${Mech.IST*2}" step="1" onchange="elID('stepArmorRT').value=this.value" readonly></span> 
                Rear <span class="stepper-container"><input type="number" id="stepArmorLTR" class="stepper" value="${Mech.ALTR}" min="0" max="9" step="1" onchange="elID('stepArmorRTR').value=this.value" readonly></span> <output id="outMaxLT">${Mech.IST*2}</output></p> 
            <p><label>Center</label> <span class="stepper-container"><input type="number" id="stepArmorCT" class="stepper" value="${Mech.ACT}" min="0" max="${Mech.ICT*2}" step="1" readonly></span> 
                Rear <span class="stepper-container"><input type="number" id="stepArmorCTR" class="stepper" value="${Mech.ACTR}" min="0" max="9" step="1" readonly></span> <output id="outMaxCT">${Mech.ISC*2}</output></p> 
            <p><label>Right</label> <span class="stepper-container b-armor disabled"><input type="number" id="stepArmorRT" class="stepper" value="${Mech.ART}" min="0" max="${Mech.IST*2}" step="1" readonly></span>
                Rear <span class="stepper-container b-armor disabled"><input type="number" id="stepArmorRTR" class="stepper" value="${Mech.ARTR}" min="0" max="9" step="1" readonly></span> <output id="outMaxRT">${Mech.IST*2}</output></p> 
        </fieldset>
    </div>

    <div class="col-3">
        <fieldset>
            <legend>Arms</legend>
            <p><label>Left</label> <span class="stepper-container"><input type="number" id="stepArmorLA" class="stepper" value="${Mech.ALA}" min="0" max="${Mech.ISA*2}" step="1" onchange="elID('stepArmorRA').value=this.value" readonly></span> <output id="outMaxLA">${Mech.ISA*2}</output></p> 
            <p><label>Right</label> <span class="stepper-container b-armor disabled"><input type="number" id="stepArmorRA" class="stepper" value="${Mech.ARA}" min="0" max="${Mech.ISA*2}" step="1" readonly></span> <output id="outMaxRA">${Mech.ISA*2}</output></p> 
        </fieldset> 

        <fieldset>
            <legend>Legs</legend>
            <p><label>Left</label> <span class="stepper-container"><input type="number" id="stepArmorLL" class="stepper" value="${Mech.ALL}" min="0" max="${Mech.ISL*2}" step="1" onchange="elID('stepArmorRL').value=this.value" readonly></span> <output id="outMaxLL">${Mech.ISL*2}</output></p> 
            <p><label>Right</label> <span class="stepper-container b-armor disabled"><input type="number" id="stepArmorRL" class="stepper" value="${Mech.ARL}" min="0" max="${Mech.ISL*2}" step="1" readonly></span> <output id="outMaxRL">${Mech.ISL*2}</output></p> 
        </fieldset> 
    </div>

    <div class="col-3">
        <fieldset class="autofill-buttons">
            <legend>Auto Fill</legend>
            <p><button id="btnArmorFill-100" onclick="autoFillArmor(1)" class="button-hollow">Max</button></p>
            <p><button id="btnArmorFill-75" onclick="autoFillArmor(0.75)" class="button-hollow">75%</button></p>
            <p><button id="btnArmorFill-50" onclick="autoFillArmor(0.5)" class="button-hollow">50%</button></p>
            <p><button id="btnArmorFill-25" onclick="autoFillArmor(0.25)" class="button-hollow">25%</button></p>
            <p><button id="btnArmorFill-0" onclick="autoFillArmor(0)" class="button-hollow">None</button></p>
        </fieldset>
    </div>
    `, 
    
    // help
    `
    <p>External armor protects the Mech from damage. The maximum armor available to a Mech is based on the total mass of the Mech itself.</p>
    <p><i>Type</i> provides more options that affect the weight and size of the armor.</p>
    `,
    
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
                        <th>&nbsp;</th>
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
        <div class="col-3">
            ${locationList('Left Arm', 'LA')}
            ${locationList('Left Torso', 'LT')}
            ${locationList('Left Leg', 'LL')}
        </div>
        <div class="col-3">
            ${locationList('Head', 'H')}
            ${locationList('Center Torso','CT')}
            <section class="locations-mandatory">
                <h5>Mandatory</h5>
                <ul>
                    <li><button aria-label="Add Heat Sinks" class="button-gray" onclick="addWeapon(18)"><img src="assets/images/plus.svg" alt="+"> Heat Sinks</button> <output id="outMandatoryHS">${Mech.heatsinksIntCrits}</output></li>
                    <li><button aria-label="Add Jump Jets" class="button-gray" onclick="addWeapon(17)" disabled><img src="assets/images/plus.svg" alt="+"> Jump Jets</button> <output id="outMandatoryJJ">${Mech.jumpingMP}</output></li>
                </ul>
            </section>
        </div>
        <div class="col-3">
            ${locationList('Right Arm', 'RA')}       
            ${locationList('Right Torso', 'RT')}
            ${locationList('Right Leg','RL')}
        </div>
    </div>
    `, 
    
    // help
    `
    <p>Each the weapons and equipment listed have differing weights and sizes. Each item placed on a Mech has to be placed in a specific location on the Mech with consideration to the size of the location versus the weapon itself.</p>
    `,
    
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
        <p><label>Affiliation</label> <select id="selAffiliation" class="select" data-list="a_Affiliation"></select><input type="text" id="txtAffiliation" maxlength="35" placeholder="(blank line)" spellcheck="false" autocorrect="off" style="display:none" value="${Warrior.affiliationUser}"><button role="switch" id="btnAffiliation" class="button-flip button-gray" aria-label="Switch to manual input or list input" disabled></button></p>
        <p><label>Miniature</label> <input id="txtMiniature" type="text" maxlength="24" placeholder="(blank line)" spellcheck="false" autocorrect="off"></p>
    </div>
    <div class="col-2">
        <p><label>Experience</label> <select id="selExperience" class="select" data-list="a_Experience"></select> <button aria-label="Randomize Skills" class="button-gray" onclick="rndWarriorStats()">Randomize</button></p>
        <p><label>Piloting Skill</label> <input type="range" id="rngPiloting" value="${Warrior.piloting}" min="0" max="7"><output for="rngPiloting" id="outPiloting">${Warrior.piloting}</output></p>
        <p><label>Gunnery Skill</label> <input type="range" id="rngGunnery" value="${Warrior.gunnery}" min="0" max="7"><output for="rngGunnery" id="outGunnery">${Warrior.gunnery}</output></p>
        <p><label>Auto-Eject</label> <label for="chkAutoEject"><b>Disabled</b></label><input type="checkbox" id="chkAutoEject" checked><label for="chkAutoEject" class="switch" role="switch"></label><label for="chkAutoEject"><b>Enabled</b></label></p>
    </div>
    `, 
    
    // help
    `
    <p>The warrior is the pilot of the Mech. <i>Piloting skill</i> and <i>gunnery skills</i> are defaulted at he average skill levels for the tpyical mechwarrior. Changing the <i>experience</i> will allow for a different range of skill levels for the warrior, the lower the number the better the skill level.</p>
    <p><i>Auto-Eject</i> determines if the ejection system will automatically eject the warrior if a critical system in the Mech is destroyed.</p>
    `,
    
    // footer
    `<p>On the Record Sheet, <i>(blank line)</i> will display a dotted line.</p>`,
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
    `
    <p>Design quirks are advanced optional rules that have both negative and positive effects on the Mech's performance. The selected positive and negative quirks should be equal.</p>
    `,
    
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
            ${listOptions(a_yearIntro)}
        </datalist> 
        <label style="margin-left:0.8em">Era</label> <select id="selEra" class="select" data-list="a_Era" data-value="${Mech.era}"></select>
        <label style="margin-left:0.8em">Role</label> <select id="selMechRole" class="select" data-list="a_MechRole" data-value="${Mech.role}"></select>
    </p>
    <div class="col-2">
        <p><label>Overview</label> <textarea id="txtOverview" placeholder="(A brief summary of the this particular Mech)">${Mech.overviewTR}</textarea></p>
        <p><label>Capabilities</label> <textarea id="txtCapabilities" placeholder="(This Mech's unique capabilities)">${Mech.capabilitiesTR}</textarea></p>
        <p><label>Battle History</label> <textarea id="txtHistory" placeholder="(The combat history of the particular Mech)">${Mech.historyTR}</textarea></p>
    </div>
    <div class="col-2">
        <p><label>Deployment</label> <textarea id="txtDeployment" placeholder="(The factions that have been known to deploy this Mech)">${Mech.deploymentTR}</textarea></p>
        <p><label>Variants</label> <textarea id="txtVariants" placeholder="(The different variants of this Mech chassis)">${Mech.overviewTR}</textarea></p>
        <p><label>Notable Units</label> <textarea id="txtNotable" placeholder="(The notable unique units and thier warriors)">${Mech.notableTR}</textarea></p>
    </div>
    `, 
    
    // help
    `
    <p>Technical readout is for more specific information about the Mech and its history. This information only appears on the technical readout print out page.</p>
    `,
    
    // footer
    `<p>Note: This content only appears on the Technical Readout.</p>`,
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
        <p><label>Alpha Strike</label> <output id="outAlphaStrike">${Mech.damageTotal}</output> <small>[<output id="outDamagePerTon">${addDecimal(Mech.damagePerTon,2)}</output> per ton]</small></p>
        <p><label>Heat Management</label> <output id="outTotalHeat">${Mech.heatTotal}</output> / <output id="outHeatSinks">${Mech.heatsinks + Mech.heatsinksBase}</output></p>
    </div>
    <div class="sidebar-print" role="menu">
        <p><button id="btnCreateRS" onclick="HtmlModal(RecordSheetModal,'recordsheetModal')" class="button-gold">Create Record Sheet</button></p>
        <p><button id="btnCreateTR" onclick="HtmlModal(TechReadoutModal,'techreadoutModal')" class="button-gold">Create Technical Readout</button></p>
        <!--p><button id="btnResetPage" onclick="ConfirmModal('Are you sure you want to start over?','document.forms[0].reset()')">Clear</button></p-->
    </div>
`);


/************************
 * Append to Page 
 ************************/

// Populate the side bar
elID("SideBar").innerHTML = sideBarTotals;

// Populate the grid
elID("SectionsGrid").innerHTML = (
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
elID("AppVersion").textContent = App.version;


/************************
 * Page in/out Logic
 ************************/

// Update form based on user input | id = element that changed
const updateForm = id => {

    // Side Bar -------
    // Get data from form
    Mech.type = elID('txtType').value;
    Mech.mass = elID('stepMass').value;
    document.title = changeAppTitle(Mech.type);
    // Return data to form
    elID('outWeightClass').value = weightClass(Mech.mass);
    elID('outTotalMass').value = addDecimal(Mech.mass,1);
    elID('outCurrentMass').value = addDecimal(Mech.totalMass,1);
    elID('outTotalCrits').value = Mech.baseCrits;
    elID('outCurrentCrits').value = Mech.totalCrits;
    elID('outTotalCost').value = addComma(Mech.totalCost);
    elID('outTotalBV').value = addComma(Mech.totalBV);
    elID('outAlphaStrike').value = Mech.damageTotal;
    elID('outDamagePerTon').value = addDecimal(Mech.damagePerTon,2);
    elID('outTotalHeat').value = Mech.heatTotal;
    elID('outHeatSinks').value = Mech.heatsinks;

    // Engine Card -------
    // Max walking based on Mech mass
    elID('stepWalking').max = Mech.maxWalkingMP;
    if (Mech.walkingMP > Mech.maxWalkingMP) elID('stepWalking').value = 4;
    // Return data to form
    Mech.walkingMP = elID('stepWalking').value;
    Mech.engineType = elID('selEngine').value;
    Mech.legs = document.forms[0].selLegs.value;
    Mech.myomer = elID('selMyomer').value;

    // Post data to array
    elID('outRunning').value = Mech.runningMP;
    elID('outEngineRating').value = `${Mech.engineBrand} ${Mech.engineRating}`;
    elID('outEngineMass').value = addDecimal(Mech.engineMass,1);
    elID('outEngineCrits').value = Mech.engineCrits;
    elID('outEngineCost').value = addComma(Mech.engineCost);

    // Jump Jets Card -------
    // Max jumping based on WalkingMP
    elID('stepJumping').max = Mech.walkingMP;
    if (Mech.jumpingMP > Mech.walkingMP) elID('stepJumping').value = Mech.walkingMP; 
    // Get data from form
    Mech.jumpingMP = parseInt(elID('stepJumping').value);
    Mech.jumpjetsType = elID('selJumpJets').value;
    // Return data to form
    elID('outJumpJetsMass').value = addDecimal(Mech.jumpjetsMass,1);
    elID('outJumpJetsCrits').value = Mech.jumpjetsCrits;
    elID('outJumpJetsCost').value = addComma(Mech.jumpjetsCost);

    // Heat Sinks Card -------
    // Get data from form
    Mech.heatsinks = elID('stepHeatSinks').value;
    Mech.heatsinkType = elID('selHeatSinks').value;
    // Return data to form
    elID('outHeatSinksMass').value = addDecimal(Mech.heatsinksMass,1);
    elID('outHeatSinksCrits').value = Mech.heatsinksCrits + Mech.heatsinksIntCrits;
    elID('outHeatSinksCost').value = addComma(Mech.heatsinksCost);

    // Internal Comp Card -------
    // Get data from form
    Mech.isType = elID('selInternalSruct').value;
    Mech.gyroType = elID('selGyro').value;
    Mech.cockpitType = elID('selCockpit').value;
    Mech.targetingType = elID('selTargeting').value;
    // Return data to form
    elID('outInternalMass').value = addDecimal(Mech.internalComponentsMass,1);
    elID('outInternalCrits').value = Mech.internalComponentsCrits;
    elID('outInternalCost').value = addComma(Mech.internalComponentsCost);    

    // Armor Card -------
    // if Total mass changes 
    if (id == 'stepMass') {
        // Clear armor values
        elID('stepArmorH').value = 0;
        elID('stepArmorLT').value = 0;
        elID('stepArmorCT').value = 0;
        elID('stepArmorRT').value = 0;
        elID('stepArmorLTR').value = 0;
        elID('stepArmorCTR').value = 0;
        elID('stepArmorRTR').value = 0;
        elID('stepArmorLA').value = 0;
        elID('stepArmorRA').value = 0;
        elID('stepArmorLL').value = 0;
        elID('stepArmorRL').value = 0;
    } 

    // Get data from form
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

    // Front and rear torsos total armor max check
    aLT = torsoArmorChk(Mech.ALT, Mech.ALTR, Mech.IST * 2);
    aCT = torsoArmorChk(Mech.ACT, Mech.ACTR, Mech.ISC * 2);
    aRT = torsoArmorChk(Mech.ART, Mech.ARTR, Mech.IST * 2); 
    elID('stepArmorLT').max = aLT.front;
    elID('stepArmorLTR').max = aLT.rear;
    elID('stepArmorCT').max = aCT.front;
    elID('stepArmorCTR').max = aCT.rear;
    elID('stepArmorRT').max = aRT.front;
    elID('stepArmorRTR').max = aRT.rear;
    
    // Return data to form
    elID('outArmorTotal').value = Mech.armorTotal;
    elID('outArmorTotalMax').value = Mech.armorTotalMax;
    elID('outArmorMass').value = addDecimal(Mech.armorMass,1);
    elID('outArmorCrits').value = Mech.armorCrits;
    elID('outArmorCost').value = addComma(Mech.armorCost);
    elID('outMaxLT').value = Mech.IST * 2;
    elID('outMaxCT').value = Mech.ISC * 2;
    elID('outMaxRT').value = Mech.IST * 2;
    elID('outMaxLA').value = Mech.ISA * 2;
    elID('outMaxRA').value = Mech.ISA * 2;
    elID('outMaxLL').value = Mech.ISL * 2;
    elID('outMaxRL').value = Mech.ISL * 2;

    // Weapons Card -------
    // Return data to form
    elID('outMandatoryHS').value = Mech.heatsinksCrits + Mech.heatsinksIntCrits;
    elID('outMandatoryJJ').value = Mech.jumpingMP;
    elID('outWeaponsMass').value = addDecimal(Mech.weaponsMass,1);
    elID('outWeaponsCrits').value = Mech.weaponsCrits;
    elID('outWeaponsCost').value = addComma(Mech.weaponsCost); 

    // Warrior Card -------
    // Get data from form
    Warrior.name = elID('txtPilotName').value;
    Warrior.race = document.forms[0].radRace.value;
    Warrior.affiliation = elID('selAffiliation').value;
    Warrior.affiliationUser = elID('txtAffiliation').value;
    Warrior.miniature = elID('txtPilotName').value;
    Warrior.experience = parseInt(elID('selExperience').value);
    Warrior.piloting = parseInt(elID('rngPiloting').value);
    Warrior.gunnery = parseInt(elID('rngGunnery').value);
    Warrior.autoeject = elID('chkAutoEject').checked;

    // Design Quirks Card -------
    // Get data from form
    let positiveDQ = document.forms[0].selDQPositive || 0,
        negativeDQ = document.forms[0].selDQNegative || 0;
    // Clear arrays
    Mech.positiveDQ = [];
    Mech.negativeDQ = [];
    // Positive DQ
    for (let i = 0; i < positiveDQ.length; i++) {
        Mech.positiveDQ.push(positiveDQ[i].checked);
    }
    // Negative DQ
    for (let i = 0; i < negativeDQ.length; i++) {
        Mech.negativeDQ.push(negativeDQ[i].checked);
    }

    // Tech Readout Card -------
    // Get data from form
    Mech.year = elID('txtYear').value;
    Mech.era = elID('selEra').value;
    Mech.role = elID('selMechRole').value;
    Mech.overviewTR = elID('txtOverview').value;
    Mech.capabilitiesTR = elID('txtCapabilities').value;
    Mech.historyTR = elID('txtHistory').value;
    Mech.deploymentTR = elID('txtDeployment').value;
    Mech.variantsTR = elID('txtVariants').value;
    Mech.notableTR = elID('txtNotable').value;


    // Disable print buttons if Mech is over-weight or over-flowed on crit slots
    if (Mech.totalMass > Mech.mass || Mech.totalCrits > Mech.baseCrits) {
        elID('btnCreateRS').disabled = true;
        elID('btnCreateTR').disabled = true;
    } else {
        elID('btnCreateRS').disabled = false;
        elID('btnCreateTR').disabled = false;
    }
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
                <td><button class="tblweapons-add" onclick="addWeapon(${i})" aria-label="Add"><img src="assets/images/plus.svg" alt="+"></button></td>
                <td>${w.name}</td>
                <td>${w.heat}</td>
                <td>${displayDamage(w.minDamage, w.damage)}</td>
                <td>${zeroToDash(w.rangeMin)}</td>
                <td>${displayRange(1, sR)}</td>
                <td>${displayRange(sR, sM)}</td>
                <td>${displayRange(sM, sL)}</td>
                <td>${addDecimal(w.tons,1)}</td>
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
        if (w.type > 0 && w.type < 7 && w.rules == Mech.rules) {
            // Generate each table row
            li += (`
            <li data-id="${i}">
                <span class="weapon-add" onclick="addWeapon(${weaponTable.weapon[i].id})" aria-label="Add Weapon" role="button">
                    <span class="weapon-name">${w.name}</span>
                    <span class="weapon-data"><span class="heat">${w.heat}</span> <span class="damage">${displayDamage(w.minDamage, w.damage)}</span> <span>${rangeClass(w.rangeLong)}</span>
                    <br><span>${addDecimal(w.tons,1)}t</span> <span>${w.crits} crits</span> <span class="cbills">${w.cost/1000}k</span></span>
                </span>
                <span class="weapon-info"><button onclick="HtmlModal(WeaponInfoModal, ${i})" aria-label="More Info"><img src="assets/images/info.svg" alt="i"></button></span>
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
        <h5>${n}</h5>
        <p class="location-crits"><output id="outCrits_${v}"></output> Crits Available</p>   
    `);
    
    // If location is one of the arms
    if (v == 'LA' || v == 'RA') {
        s += (`
        <ul data-id="${v}">
            <li><input type="checkbox" id="chkLowerArm_${v}" onclick="checkActuator('${v}',2)" checked disabled><label for="chkLowerArm_${v}">Lower Arm</label></li>
            <li><input type="checkbox" id="chkHand_${v}" onclick="checkActuator('${v}',3)" checked><label for="chkHand_${v}">Hand</label></li>
            <li><input type="checkbox" id="chkHatchet_${v}" onclick="checkActuator('${v}',19)" disabled><label for="chkHatchet_${v}">Hatchet</label></li>
        </ul>`);
    }
    s += (`
        <ul id="critList_${v}">
        </ul>
        <p class="addto-button"><button id="addTo_${v}" class="button-gray">Add Weapon</button></p>
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
                li += `<li><button class="btn-remove" data-id="${w.id}" onclick="removeWeapon('${v}',${w.id})" aria-label="Delete weapon">✕</button> ${w.name} <span class="spn-crits" title="Crits used">${w.crits}</span></li>`;
            }
        }
    }

    // Display location content
    elID(id).innerHTML = li;
    elID('outCrits_'+v).textContent = max - Mech[`crits_${v}`];

    // Update the form info
    updateForm(id);
}

// Add/remove arm actuators and melee weapons
function checkActuator(v, id) {
    let w = weaponTable.weapon[id],
        max = Mech[`maxcrits_${v}`],
        a = Mech[`assigned_${v}`].indexOf(id);

    // Hand checked
    if (id == 3) {
        if (elID(`chkHand_${v}`).checked) {
            // Add hand
            Mech[`assigned_${v}`].splice(3, 0, id);
            Mech[`crits_${v}`]++;
            elID(`chkLowerArm_${v}`).disabled = true;
        } else {
            // Remove hand
            Mech[`assigned_${v}`].splice(a, 1);
            Mech[`crits_${v}`]--;
            elID(`chkLowerArm_${v}`).disabled = false;
        }
    }

    // Lower Arm checked
    if (id == 2) {
        if (elID(`chkLowerArm_${v}`).checked) {
            // Add lower arm
            Mech[`assigned_${v}`].splice(2, 0, id);
            Mech[`crits_${v}`]++;
            elID(`chkHand_${v}`).disabled = false;
        } else {
            // Remove lower arm
            Mech[`assigned_${v}`].splice(a, 1);
            Mech[`crits_${v}`]--;
            elID(`chkHand_${v}`).disabled = true;
        }
    }

    // List this location's contents
    compactListCritsbyLoc(v);
}

// Add weapon (id) to assigned location (v)
function addWeapon(id) {
    let w = weaponTable.weapon[id].crits,
        btn = document.getElementsByClassName('addto-button'),
        list = document.querySelector(".list-weapons").classList;

    const arrLoc = ['LA','LT','LL','H','CT','RA','RT','RL'];

    // Disabled weapons list while user selects a location
    list.toggle("disabled");

    // Display Add Here button to all locations
    for (let i = 0; i < btn.length; i++) {

        // Check if item id can fit in location
        if (Mech[`crits_${arrLoc[i]}`] + w <= Mech[`maxcrits_${arrLoc[i]}`])
            btn[i].style.visibility = 'visible';

        btn[i].onclick = () => {
            Mech[`crits_${arrLoc[i]}`] += w; // Add crits
            Mech[`assigned_${arrLoc[i]}`].push(id); // Add assigned
            compactListCritsbyLoc(arrLoc[i]); // List location contents

            // Hide the Add Here buttons from all locations
            for (let j = 0; j < btn.length; j++) {
                btn[j].removeAttribute("onclick");
                btn[j].style.visibility = 'hidden';
            }
            // Enable weapons list while user selects a location
            list.toggle("disabled");
        };
    }
}

// Remove weapon (id) from assigned location (v)
function removeWeapon(v, id) {
    let a = Mech[`assigned_${v}`].indexOf(id),
        w = weaponTable.weapon[id].crits;
    
    // Remove item from assigned_(v)
    Mech[`assigned_${v}`].splice(a, 1);

    // Remove crits from crits_(v)
    Mech[`crits_${v}`] -= w;

    // List this location's contents
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

	// Post data to form
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
    
    // Post data to array
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

    updateForm(0);
};


/************************
 * Warrior Card Logic 
 ************************/

// Randomly Generate the Warrior's Piloting and Gunnery Skills
function rndWarriorStats() {
    let min = 0, max = 0;

    // Min/max range based on warrior experience
    switch (Warrior.experience) {
        case 1: // Regular
            min = 3;
            max = 6;
            break;
        case 2: // Veteran
            min = 2;
            max = 6;
            break;
        case 3: // Elite
            min = 1;
            max = 5;
            break;
        default: // Green
            min = 4;
            max = 7;
    }
    
    Warrior.piloting = getRandomNum(min, max);
    Warrior.gunnery = getRandomNum(min, max);

    // Post to screen
    elID('rngPiloting').value = Warrior.piloting;
    elID('outPiloting').value = Warrior.piloting;
    elID('rngGunnery').value = Warrior.gunnery;
    elID('outGunnery').value = Warrior.gunnery;
}