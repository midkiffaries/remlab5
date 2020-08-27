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
    <label>Technology</label> <input id="radioT1" name="selTechnology" type="radio" class="radio-button" checked><label for="radioT1" role="button">Inner Sphere</label><input id="radioT2" name="selTechnology" type="radio" class="radio-button"><label for="radioT2" role="button">Clan</label>
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
    <p><label>Type</label> <select id="selEngineType" class="select" data-list="a_EngineType"></select> <output id="outEngineRating">${Mech.engineRating} ${Mech.engineBrand}</output></p>
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
    <p><label>Jumping <abbr>MP</abbr></label> <span class="stepper-container"><input type="number" id="stepJumping" class="stepper" value="${Mech.jumpingMP}" min="0" max="12" step="1"></span></p>
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

// Populate the grid
document.getElementById("SectionsGrid").innerHTML = (
    sectionTemplate(sectionTech.id, sectionTech.title, sectionTech.size, sectionTech.body, sectionTech.help, sectionTech.footer) + 
    sectionTemplate(sectionEngine.id, sectionEngine.title, sectionEngine.size, sectionEngine.body, sectionEngine.help, sectionEngine.footer) +
    sectionTemplate(sectionJumpjets.id, sectionJumpjets.title, sectionJumpjets.size, sectionJumpjets.body, sectionJumpjets.help, sectionJumpjets.footer)

);

// Update form based on user input
const updateForm = () => {
    // Engine Section
    Mech.walkingMP = elID('stepWalking').value;
    elID('outRunning').textContent = Mech.runningMP;
    elID('outEngineRating').textContent = Mech.engineRating + " " + Mech.engineBrand;
    elID('outEngineMass').textContent = addDecimal(Mech.engineMass);
    elID('outEngineCost').textContent = addComma(Mech.engineCost);
};

// Footer Info
document.getElementById("AppVersion").textContent = RemlabVersion;