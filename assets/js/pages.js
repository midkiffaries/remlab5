/**************************
Pages JavaScript
**************************/

// About box content
const AboutPage = `
<h2>About REMLAB 4.0</h2>
<img src="assets/images/remlab-icon.svg" alt="Remlab Logo" loading="lazy" style="width:25%;float:right">
<p>REMLAB Web Mech Designer is an online tool for creating <i>BattleTech&reg;</i> Mechs for use in the board game. REMLAB is written entirely in <i>JavaScript</i>.</p>

<h3>History</h3>
<p>Starting way back in 2004...</p>

<h3>Future</h3>
<p>???</p>

<h3>References &amp; Resources</h3>
<ul>
    <li><a href="https://bg.battletech.com" target="_blank">BattleTech.com</a></li>
    <li><a href="http://www.sarna.net" target="_blank">Sarna BattleTechWiki</a></li>
    <li><a href="http://www.battletechgame.com" target="_blank">BattleTech Computer Game</a></li>
    <li><i>...And of course all the source books.</i></li>
</ul>
`;

// Help box content
const HelpPage = `
<h2>Help with REMLAB</h2>
<p>Here are some tips for using REMLAB:</p>

<h3>Limitations</h3>
<p>Rules base - Level 1 / 3025 / Succession Wars.</p>

<h3>Printing</h3>
<p>Printing results will vary some what from browser-to-browser.</p>
<p>Tips to improve printing results:</p>
<ol>
    <li>Cut margin down as much as possible, 0.5in (1.3cm) should be good.</li>
    <li>Disable the <i>header</i> and <i>footer</i> information.</li>
    <li>Turn on <b>Print Backgrounds</b>, this is not that important.</li>
</ol>
<p>Right now, REMLAB uses the your base operating system's default system font.</p>

<h3>Saving</h3>
<p>Currently, there is no way to save Mechs in REMLAB. The only thing you can do is <b>Print/Save to a <abbr>PDF</abbr> file</b>, a feature most mordern web browsers have built into them.</p>

<h3>Browser Compatablility</h3>
<p>The latest version of the big four browsers (Edge, Chrome, Firefox, and Safari) should work correctly with REMLAB.</p>
`;

// Weapon Info box content
const WeaponInfoPage = `
<div class="modal-weaponinfo">
    <h2 id="WeaponInfo-Name"></h2>

    <h3 id="WeaponInfo-Type"></h3>

    <p id="WeaponInfo-Info"></p>

    <table>
        <tr>
            <th>Year of introduction</th>
            <th>Technology Rating</th>
            <th>Availability</th>
        </tr>
        <tr>
            <td id="WeaponInfo-Year"></td>
            <td id="WeaponInfo-Rating"></td>
            <td id="WeaponInfo-Avail"></td>
        </tr>
    </table>

    <table>
        <caption>Economy</caption>
        <tr>
            <th>Tons</th>
            <th>Critical Slots</th>
            <th>Cost</th>
            <th>Battle Value</th>
        </tr>
        <tr>
            <td id="WeaponInfo-Mass">0.0</td>
            <td id="WeaponInfo-Crits">0</td>
            <td id="WeaponInfo-Cost" class="cbill">0</td>
            <td id="WeaponInfo-BV">0</td>
        </tr>
    </table>

    <table>
        <caption>Combat</caption>
        <tr>
            <th>Heat</th>
            <th>Damage</th>
            <th>Shots per Ton</th>
            <th>Delay (Solaris)</th>
        </tr>
        <tr>
            <td id="WeaponInfo-Heat">0</td>
            <td id="WeaponInfo-Damage">0</td>
            <td id="WeaponInfo-Ammo">0</td>
            <td id="WeaponInfo-Delay">0</td>
        </tr>
    </table>

    <table>
        <caption>Ranges</caption>
        <tr>
            <th>Min</th>
            <th>Short</th>
            <th>Medium</th>
            <th>Long</th>
            <th>Extreme</th>
        </tr>
        <tr>
            <td id="WeaponInfo-Min">0</td>
            <td id="WeaponInfo-Short">0</td>
            <td id="WeaponInfo-Med">0</td>
            <td id="WeaponInfo-Long">0</td>
            <td id="WeaponInfo-Ext">0</td>
        </tr>
    </table>

    <div class="WeaponInfo-footer">
        <button id="WeaponInfo-btnAdd">Add</button>
    </div>
</div>
`;


// Section - Tech Base
const techbaseSection = `
<section class="section-box size-half">
    <header class="section-header">
        <h2>Technology Base</h2>
    </header>

    <div role="tablist" class="panelswitch">
        <button class="panelswitch_button">Info</button>
        <div role="tabpanel" class="section-body">
            <p>
                <label>Ruleset</label> <select id="selRuleset" class="select" data-list="a_RuleSet" disabled></select>
                <label>Edition</label> <select id="selEdition" class="select" data-list="a_Edition" disabled></select>
            </p>
            <p>
                <label>Technology</label> <input id="radioT1" name="selTechnology" type="radio" class="radio-button" checked><label for="radioT1" role="button">Inner Sphere</label><input id="radioT2" name="selTechnology" type="radio" class="radio-button"><label for="radioT2" role="button">Clan</label>
            </p>
            <p>
                <label>Era</label> <select id="selEra" class="select" data-list="a_Era"></select>
                <label>Year</label> <input id="txtYear" type="number" value="${Mech.year}" maxlength="4" placeholder="3025" pattern="[0-9]*" inputmode="numeric" style="width:4em" onchange="Stats.year=parseInt(this.value)">
            </p>
        </div>
        <div role="tabpanel" class="section-help">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lorem eros. Proin ipsum neque, gravida rutrum felis a, porttitor luctus sem. Vivamus tincidunt sapien interdum tortor rhoncus ornare.</p>
        </div>
    </div>
    
    <footer class="section-footer">
        <p>Rules are limited to Inner Sphere (3025)</p>
    </footer>
</section>
`;

// Section - Movement
const movementSection = `
<section class="section-box size-half">
    <header class="section-header">
        <h2>Engine &amp; Movement</h2>
    </header>

    <div role="tablist" class="panelswitch">
        <button class="panelswitch_button">Info</button>
        <div role="tabpanel" class="section-body">
            <p>
                <label>Walking <abbr>MP</abbr></label> <span class="stepper-container"><input type="number" id="stepWalking" class="stepper" value="${Mech.walkingMP}" min="1" max="20" step="1"></span> Running <abbr>MP</abbr> <output for="stepWalking" id="outRunning">${Mech.runningMP}</output>
            </p>
            <p>
                <label>Type</label> <select id="selEngineType" class="select" data-list="a_EngineType"></select> <output id="outEngineRating">${Mech.engineRating} ${Mech.engineBrand}</output>
            </p>
            <p>
            <label>Legs</label> <input id="radioM1" name="selLegs" type="radio" class="radio-button" value="0" checked><label for="radioM1" role="button">2</label><input id="radioM2" name="selLegs" type="radio" class="radio-button" value="1" disabled><label for="radioM2" role="button">4</label>
            <!--input type="checkbox" id="chkMasc" disabled><label-- for="chkMasc"><abbr title="Myomer Accelerator Signal Circuitry">MASC</abbr></label-->
            </p>
        </div>
        <div role="tabpanel" class="section-help">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lorem eros. Proin ipsum neque, gravida rutrum felis a, porttitor luctus sem. Vivamus tincidunt sapien interdum tortor rhoncus ornare.</p>
        </div>
    </div>
    
    <footer class="section-footer">
        <ul>
            <li>Mass <output id="outEngineMass">${Mech.engineMass}</output> tons</li>
            <li>Crits <output id="outEngineCrit">0</output></li>
            <li>Cost <output id="outEngineCost" class="cbills">${Mech.engineCost}</output></li>
        </ul>
    </footer>
</section>
`;

// name, title, content, help
//function sectionTemplate(section_name, section_title, section_content, section_help) {
//   return `
var Test = (section_name, section_title, section_content, section_help) => `
    <section class="section-box size-half ${section_name}">
        <header class="section-header">
            <h2>${section_title}</h2>
        </header>
    
        <div role="tablist" class="panelswitch">
            <button class="panelswitch_button">Info</button>
            <div role="tabpanel" class="section-body">
                ${section_content}
            </div>
            <div role="tabpanel" class="section-help">
                ${section_help}
            </div>
        </div>
        
        <footer class="section-footer">
            <ul>
                <li>Mass <output id="out${section_name}"Mass">${Mech[section_name+'Mass']}</output> tons</li>
                <li>Crits <output id="out${section_name}"Crit">0</output></li>
                <li>Cost <output id="out${section_name}"Cost" class="cbills">${Mech[section_name+'Cost']}</output></li>
            </ul>
        </footer>
    </section>
    `;
//}

// Header Navigation
document.getElementById('btnHelp').onclick = () => HtmlModal(HelpPage);
document.getElementById('btnAbout').onclick = () => HtmlModal(AboutPage);

// Footer Info
document.getElementById("AppVersion").textContent = RemlabVersion; 

// Populate the grid
document.getElementById("SectionsGrid").innerHTML = techbaseSection + movementSection + Test("a","b","c","d");

// Update form based on user input
var updateForm = () => {
    Mech.walkingMP = elID('stepWalking').value;
    elID('outRunning').textContent = Mech.runningMP;
    elID('outEngineRating').textContent = Mech.engineRating + " " + Mech.engineBrand;
    elID('outEngineMass').textContent = addDecimal(Mech.engineMass);
};
