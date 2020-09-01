/**************************
Section Panels Constructor
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

// Section : Technology Base
const sectionTech = new SectionPanel(
    // id
    "Technology", 
    
    // title
    "Technology Base", 

    // size
    "half",
    
    // body
    `<p>
    <label>Ruleset</label> <select id="selRuleset" class="select" data-list="a_RuleSet" disabled></select>
    <label>Edition</label> <select id="selEdition" class="select" data-list="a_Edition" disabled></select>
    </p>
    <p>
    <label>Technology</label> <input id="radioT1" name="selTechnology" type="radio" class="radio-button" checked><label for="radioT1" role="button">Inner Sphere</label><input id="radioT2" name="selTechnology" type="radio" class="radio-button" disabled><label for="radioT2" role="button">Clan</label>
    </p>
    <p>
    <label>Era</label> <select id="selEra" class="select" data-list="a_Era"></select>
    <label>Year</label> <input id="txtYear" type="number" value="${Mech.year}" maxlength="4" placeholder="3025" pattern="[0-9]*" inputmode="numeric" style="width:4em">
    </p>`, 
    
    // help
    `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lorem eros. Proin ipsum neque, gravida rutrum felis a, porttitor luctus sem. Vivamus tincidunt sapien interdum tortor rhoncus ornare.</p>`,
    
    // footer
    `<p>Rules are limited to Inner Sphere (3025)</p>`,
);

// Section : Engine and Movement
const sectionEngine = new SectionPanel(
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
    <p><label>Legs</label> <input id="radioM1" name="selLegs" type="radio" class="radio-button" value="0" checked><label for="radioM1" role="button">2</label><input id="radioM2" name="selLegs" type="radio" class="radio-button" value="1" disabled><label for="radioM2" role="button">4</label></p>
    `, 
    
    // help
    `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lorem eros. Proin ipsum neque, gravida rutrum felis a, porttitor luctus sem. Vivamus tincidunt sapien interdum tortor rhoncus ornare.</p>`,
    
    // footer
    ``,
);

// Section : Jump Jets
const sectionJumpjets = new SectionPanel(
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
const sectionHeatSinks = new SectionPanel(
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
const sectionComponents = new SectionPanel(
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

// Section : Design Quirks
const sectionQuirks = new SectionPanel(
    // id
    "Quirks", 
    
    // title
    "Design Quirks",
    
    // size
    "half",
    
    // body
    `
    <p><label>Positive</label></p>
    <ol role="listbox" class="select-list" id="selDQPositive" data-list="a_DQPositive" style="height:6em"></ol>
    <!--p><label>Negative</label></p>
    <ol-- role="listbox" class="select-list" id="selDQNegative" data-list="a_DQNegative" style="height:6em"></ol-->
    `, 
    
    // help
    `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lorem eros. Proin ipsum neque, gravida rutrum felis a, porttitor luctus sem. Vivamus tincidunt sapien interdum tortor rhoncus ornare.</p>`,
    
    // footer
    `<p>The number of <i>Positive</i> and <i>Negative</i> should be equal.</p>`,
);

// Section : Armor
const sectionArmor = new SectionPanel(
    // id
    "Armor", 
    
    // title
    "Armor",
    
    // size
    "full",
    
    // body
    `
    <p><label>Type</label> <select id="selArmor" class="select" data-list="a_ArmorType" disabled></select> Armor Points <output id="outArmorTotal">${Mech.armorTotal}</output>/<output id="outArmorTotalMax">${Mech.armorTotalMax}</output>
        <input type="checkbox" id="chkBalance" disabled checked><label for="chkBalance">Balance Armor</label></p> 
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
        <p><button id="btnArmorFill-100">Max</button></p>
        <p><button id="btnArmorFill-75">75%</button></p>
        <p><button id="btnArmorFill-50">50%</button></p>
        <p><button id="btnArmorFill-25">25%</button></p>
        <p><button id="btnArmorFill-0">None</button></p>
    </fieldset>
    `, 
    
    // help
    `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lorem eros. Proin ipsum neque, gravida rutrum felis a, porttitor luctus sem. Vivamus tincidunt sapien interdum tortor rhoncus ornare.</p>`,
    
    // footer
    ``,
);

// Section : Weapons and Equipment
const sectionWeapons = new SectionPanel(
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
        <tbody id="tblWeapons"></tbody>
    </table>

    <div>
        <div>
            <p>NAME</p>
            <p>MASS | CRITS</p>
            <p>MORE...</p>
        </div>
    </div>

    <div>
        <div>
            <h4>Location</h4>
            <ol>
                <li>item</li>
            </ol>
        </div>
    </div>
    `, 
    
    // help
    `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lorem eros. Proin ipsum neque, gravida rutrum felis a, porttitor luctus sem. Vivamus tincidunt sapien interdum tortor rhoncus ornare.</p>`,
    
    // footer
    ``,
);

// Section : Warrior
const sectionWarrior = new SectionPanel(
    // id
    "Warrior", 
    
    // title
    "Warrior",
    
    // size
    "full",
    
    // body
    `
    <p><label>Name</label> <input type="text" id="txtPilotName" maxlength="40" placeholder="(blank line)" spellcheck="false" autocorrect="off" value="${Warrior.name}"></p>
    <p><label>Race</label> <input id="radioR1" name="selRace" type="radio" class="radio-button" checked><label for="radioR1" role="button">Human</label><input id="radioR2" name="selRace" type="radio" class="radio-button"><label for="radioR2" role="button">Clanner</label></p>
    <p><label>Affiliation</label> <select id="selAffiliation" class="select" data-list="a_Affiliation"></select><input type="text" id="txtAffiliation" maxlength="35" placeholder="(blank line)" spellcheck="false" autocorrect="off" style="display:none" value="${Warrior.affiliationUser}"> <button id="btnAffiliation" class="change-input">+</button></p>
    <p><label>Miniature</label> <input id="txtMiniature" type="text" maxlength="24" placeholder="(blank line)" spellcheck="false" autocorrect="off"></p>
    <p><label>Experience</label> <select id="selExperience" class="select" data-list="a_Experience"></select> <button id="btnRandom" aria-label="Randomize Skills">Randomize</button></p>
    <p><label>Piloting Skill</label> <input type="range" id="rngPiloting" value="${Warrior.piloting}" min="0" max="7"><output for="rngPiloting">${Warrior.piloting}</output></p>
    <p><label>Gunnery Skill</label> <input type="range" id="rngGunnery" value="${Warrior.gunnery}" min="0" max="7"><output for="rngGunnery">${Warrior.gunnery}</output></p>
    <p><label>Auto-Eject</label> <label for="chkAutoEject">Disabled</label><input type="checkbox" id="chkAutoEject" name="chkAutoEject" checked><label for="chkAutoEject" class="switch" role="switch"></label><label for="chkAutoEject">Enabled</label></p>
    `, 
    
    // help
    `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lorem eros. Proin ipsum neque, gravida rutrum felis a, porttitor luctus sem. Vivamus tincidunt sapien interdum tortor rhoncus ornare.</p>`,
    
    // footer
    `<p>INFO</p>`,
);

// Section : Technical Readout
const sectionReadout = new SectionPanel(
    // id
    "Readout", 
    
    // title
    "Technical Readout",
    
    // size
    "full",
    
    // body
    `
    <p><label>Overview</label> <textarea id="txtOverview" placeholder="(Generated)">${Mech.overviewTR}</textarea></p>
    <p><label>Capabilities</label> <textarea id="txtCapabilities" placeholder="(Generated)">${Mech.capabilitiesTR}</textarea></p>
    <p><label>Battle History</label> <textarea id="txtHistory">${Mech.historyTR}</textarea></p>
    <p><label>Deployment</label> <textarea id="txtDeployment">${Mech.deploymentTR}</textarea></p>
    <p><label>Variants</label> <textarea id="txtVariants">${Mech.overviewTR}</textarea></p>
    <p><label>Notable Units</label> <textarea id="txtNotable">${Mech.notableTR}</textarea></p>
    `, 
    
    // help
    `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lorem eros. Proin ipsum neque, gravida rutrum felis a, porttitor luctus sem. Vivamus tincidunt sapien interdum tortor rhoncus ornare.</p>`,
    
    // footer
    `<p>Content only appears on the technical readout.</p>`,
);

// Populate the grid
document.getElementById("SectionsGrid").innerHTML = (
    sectionTemplate(sectionTech.id, sectionTech.title, sectionTech.size, sectionTech.body, sectionTech.help, sectionTech.footer) + 
    sectionTemplate(sectionEngine.id, sectionEngine.title, sectionEngine.size, sectionEngine.body, sectionEngine.help, sectionEngine.footer) +
    sectionTemplate(sectionJumpjets.id, sectionJumpjets.title, sectionJumpjets.size, sectionJumpjets.body, sectionJumpjets.help, sectionJumpjets.footer) +
    sectionTemplate(sectionHeatSinks.id, sectionHeatSinks.title, sectionHeatSinks.size, sectionHeatSinks.body, sectionHeatSinks.help, sectionHeatSinks.footer) +
    sectionTemplate(sectionComponents.id, sectionComponents.title, sectionComponents.size, sectionComponents.body, sectionComponents.help, sectionComponents.footer) +
    sectionTemplate(sectionQuirks.id, sectionQuirks.title, sectionQuirks.size, sectionQuirks.body, sectionQuirks.help, sectionQuirks.footer) +
    sectionTemplate(sectionArmor.id, sectionArmor.title, sectionArmor.size, sectionArmor.body, sectionArmor.help, sectionArmor.footer) +
    sectionTemplate(sectionWeapons.id, sectionWeapons.title, sectionWeapons.size, sectionWeapons.body, sectionWeapons.help, sectionWeapons.footer) +
    sectionTemplate(sectionWarrior.id, sectionWarrior.title, sectionWarrior.size, sectionWarrior.body, sectionWarrior.help, sectionWarrior.footer) +
    sectionTemplate(sectionReadout.id, sectionReadout.title, sectionReadout.size, sectionReadout.body, sectionReadout.help, sectionReadout.footer)
);

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

    // Design Quirks Section

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

    // Weapons Section
        // Post
    elID('outWeaponsMass').value = addDecimal(Mech.weaponsMass);
    elID('outWeaponsCrits').value = Mech.weaponsCrits;
    elID('outWeaponsCost').value = addComma(Mech.weaponsCost); 

    // Warrior Section
        // Get
    Warrior.name = elID('txtPilotName').value;
    Warrior.race = document.forms.selRace.value;
    Warrior.affiliation = elID('selAffiliation').value;
    Warrior.affiliationUser = elID('txtAffiliation').value;
    Warrior.miniature = elID('txtPilotName').value;
    Warrior.experience = elID('selExperience').value;
    Warrior.piloting = elID('rngPiloting').value;
    Warrior.gunnery = elID('rngGunnery').value;
    Warrior.autoeject = elID('chkAutoEject').value;
};