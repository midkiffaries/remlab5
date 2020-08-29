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
        </footer>
    </section>
`);

// Section : Technology Base
const sectionTech = new SectionPanel(
    // id
    "technology", 
    
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
    "engine", 
    
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
    `<ul>
        <li>Mass <output id="outEngineMass">${Mech.engineMass}</output> tons</li>
        <li>Crits <output id="outEngineCrit">${Mech.engineCrits}</output></li>
        <li>Cost <output id="outEngineCost" class="cbills">${Mech.engineCost}</output></li>
    </ul>`,
);

// Section : Jump Jets
const sectionJumpjets = new SectionPanel(
    // id
    "jumpjets", 
    
    // title
    "Jump Jets",
    
    // size
    "half",
    
    // body
    `
    <p><label>Jumping <abbr>MP</abbr></label> <span class="stepper-container"><input type="number" id="stepJumping" class="stepper" value="${Mech.jumpingMP}" min="0" max="${Mech.walkingMP}" step="1"></span></p>
    <p><label>Type</label> <select id="selJumpJetsType" class="select" data-list="a_JJType" disabled></select></p>
    `, 
    
    // help
    `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lorem eros. Proin ipsum neque, gravida rutrum felis a, porttitor luctus sem. Vivamus tincidunt sapien interdum tortor rhoncus ornare.</p>`,
    
    // footer
    `<ul>
        <li>Mass <output id="outJumpJetsMass">${Mech.jumpjetsMass}</output> tons</li>
        <li>Crits <output id="outJumpJetsCrit">${Mech.jumpjetsCrits}</output></li>
        <li>Cost <output id="outJumpJetsCost" class="cbills">${Mech.jumpjetsCost}</output></li>
    </ul>`,
);

// Section : Heat Sinks
const sectionHeatSinks = new SectionPanel(
    // id
    "heatsinks", 
    
    // title
    "Heat Sinks",
    
    // size
    "half",
    
    // body
    `
    <p><label>Heat Sinks</label> <span class="stepper-container"><input type="number" id="stepHeatSinks" class="stepper" value="${Mech.heatsinks}" min="0" max="30" step="1"></span></p>
    <p><label>Type</label> <select id="selHeatsinks" class="select" data-list="a_HSType" disabled></select></p>
    `, 
    
    // help
    `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lorem eros. Proin ipsum neque, gravida rutrum felis a, porttitor luctus sem. Vivamus tincidunt sapien interdum tortor rhoncus ornare.</p>`,
    
    // footer
    `<ul>
        <li>Mass <output id="outHeatSinksMass">${Mech.heatsinksMass}</output> tons</li>
        <li>Crits <output id="outHeatSinksCrit">${Mech.heatsinksCrits}</output></li>
        <li>Cost <output id="outHeatSinksCost" class="cbills">${Mech.heatsinksCost}</output></li>
    </ul>`,
);

// Section : Internal Components
const sectionComponents = new SectionPanel(
    // id
    "components", 
    
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
    `<ul>
        <li>Mass <output id="outInternalMass">${Mech.internalComponentsMass}</output> tons</li>
        <li>Crits <output id="outInternalCrit">${Mech.internalComponentsCrits}</output></li>
        <li>Cost <output id="outInternalCost" class="cbills">${Mech.internalComponentsCost}</output></li>
    </ul>`,
);

// Section : Design Quirks
const sectionQuirks = new SectionPanel(
    // id
    "quirks", 
    
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
    "armor", 
    
    // title
    "Armor",
    
    // size
    "full",
    
    // body
    `
    <p><label>Type</label> <select id="selArmor" class="select" data-list="a_ArmorType" disabled></select> Armor Points <output id="spnArmorTotal">0</output>/<output id="outArmorTotalMax">0</output>
        <input type="checkbox" id="chkBalance" disabled checked> <label for="chkBalance">Balance Armor</label></p> 
    <p><label>Head</label> <span class="stepper-container"><input type="number" id="stepArmorH" class="stepper" value="${Mech.AH}" min="0" max="9" step="1"></span> <output id="outMaxH">9</output></p>
    `, 
    
    // help
    `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lorem eros. Proin ipsum neque, gravida rutrum felis a, porttitor luctus sem. Vivamus tincidunt sapien interdum tortor rhoncus ornare.</p>`,
    
    // footer
    `<ul>
        <li>Mass <output id="outArmorMass">${Mech.armorMass}</output> tons</li>
        <li>Crits <output id="outArmorCrit">${Mech.armorCrits}</output></li>
        <li>Cost <output id="outArmorCost" class="cbills">${Mech.armorCost}</output></li>
    </ul>`,
);

// Section : Weapons and Equipment
const sectionWeapons = new SectionPanel(
    // id
    "weapons", 
    
    // title
    "Weapons &amp; Equipment",
    
    // size
    "full",
    
    // body
    `
    <table>
        <thead>
            <tr>
                <th>Type</th>
                <th>Tons</th>
                <th>Crits</th>
                <th>More</th>
            </tr>
        </thead>
        <tbody id="tblWeapons"></tbody>
    </table>
    `, 
    
    // help
    `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lorem eros. Proin ipsum neque, gravida rutrum felis a, porttitor luctus sem. Vivamus tincidunt sapien interdum tortor rhoncus ornare.</p>`,
    
    // footer
    `<ul>
        <li>Mass <output id="outWeaponsMass">${Mech.weaponsMass}</output> tons</li>
        <li>Crits <output id="outWeaponsCrit">${Mech.weaponsCrits}</output></li>
        <li>Cost <output id="outWeaponsCost" class="cbills">${Mech.weaponsCost}</output></li>
    </ul>`,
);

// Section : Warrior
const sectionWarrior = new SectionPanel(
    // id
    "warrior", 
    
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
    <p><label>Piloting Skill</label> <input type="range" id="rngPiloting" value="${Warrior.piloting}" min="0" max="7"><output>${Warrior.piloting}</output></p>
    <p><label>Gunnery Skill</label> <input type="range" id="rngGunnery" value="${Warrior.gunnery}" min="0" max="7"><output>${Warrior.gunnery}</output></p>
    <p><label>Auto-Eject</label> <label for="chkAutoEject">Disabled</label><input type="checkbox" id="chkAutoEject" name="chkAutoEject" checked><label for="chkAutoEject" class="switch" role="switch"></label><label for="chkAutoEject">Enabled</label></p>
    `, 
    
    // help
    `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lorem eros. Proin ipsum neque, gravida rutrum felis a, porttitor luctus sem. Vivamus tincidunt sapien interdum tortor rhoncus ornare.</p>`,
    
    // footer
    `<p>More...</p>`,
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
    sectionTemplate(sectionWarrior.id, sectionWarrior.title, sectionWarrior.size, sectionWarrior.body, sectionWarrior.help, sectionWarrior.footer)
);

// Footer Info
document.getElementById("AppVersion").textContent = RemlabVersion;

// Update form based on user input
const updateForm = () => {
    // Totals Side Bar
    Mech.mass = elID('stepMass').value;
    elID('outWeightClass').value = weightClass(Mech.mass);
    elID('outTotalMass').value = addDecimal(Mech.mass);
    elID('outCurrentMass').value = addDecimal(Mech.totalMass);
    elID('outTotalCrits').value = Mech.baseCrits;
    elID('outCurrentCrits').value = Mech.totalCrits;

    // Engine Section
    Mech.walkingMP = elID('stepWalking').value;
    Mech.engineType = elID('selEngine').value;
    elID('outRunning').value = Mech.runningMP;
    elID('outEngineRating').value = `${Mech.engineRating} ${Mech.engineBrand}`;
    elID('outEngineMass').value = addDecimal(Mech.engineMass);
    elID('outEngineCost').value = addComma(Mech.engineCost);

    // Jump Jets Section
    Mech.jumpingMP = elID('stepJumping').value;
    Mech.jumpjetsType = elID('selJumpJets').value;

    // Heat Sinks Section
    Mech.heatsinks = elID('stepHeatsinks').value;
    Mech.heatsinkType = elID('selHeatsinks').value;

    // Internal Comp Section
    Mech.isType = elID('selInternalSruct').value;
    Mech.gyroType = elID('selGyro').value;
    Mech.cockpitType = elID('selCockpit').value;
    Mech.targetingType = elID('selTargeting').value;

    // Design Quirks Section

    // Armor Secton
    Mech.armorType = elID('selArmor').value;
    // Weapons Section

    // Warrior Section
};