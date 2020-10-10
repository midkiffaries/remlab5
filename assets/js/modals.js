/**************************
 * HTML Modal Content
**************************/

// Buttons modal logic
document.getElementById('btnHelp').onclick = () => HtmlModal(HelpModal, 'helpModal');
document.getElementById('btnAbout').onclick = () => HtmlModal(AboutModal, 'aboutModal');

// About modal content
const AboutModal = () => (`
<h2>About REMLAB ${RemlabVersion}</h2>
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
`);

// Help modal content
const HelpModal = () => (`
<h2>Help with REMLAB</h2>
<p>Here are some tips for using REMLAB:</p>

<h3>Limitations</h3>
<p>Rules base - <em>Level 1 / 3025 / Succession Wars</em></p>

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
`);

// Weapon Info modal content
const WeaponInfoModal = () => (`
<div class="WeaponInfo-body">
    <h2 id="Info-name"></h2>

    <h3 id="Info-type"></h3>

    <p id="Info-rules"></p>

    <p id="Info-desc"></p>

    <table>
        <tr>
            <th>Year of Introduction</th>
            <th>Technology Rating</th>
            <th>Availability</th>
        </tr>
        <tr>
            <td id="Info-year"></td>
            <td id="Info-techRating"></td>
            <td id="Info-availability"></td>
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
            <td id="Info-tons">0.0</td>
            <td id="Info-crits">0</td>
            <td id="Info-cost" class="cbills">0</td>
            <td id="Info-bv">0</td>
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
            <td id="Info-heat">0</td>
            <td id="Info-damage">0</td>
            <td id="Info-ammo">0</td>
            <td id="Info-delay">0</td>
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
            <td id="Info-rangeMin">0</td>
            <td id="Info-rangeShort">0</td>
            <td id="Info-rangeMedium">0</td>
            <td id="Info-rangeLong">0</td>
            <td id="Info-rangeExtreme">0</td>
        </tr>
    </table>

    <div class="WeaponInfo-footer">
        <button id="Info-btnAdd" onclick="addWeapon(0)">Add</button>
    </div>
</div>
`);

// Display Weapon Info Modal and populate it
function infoWeapon(id) {
    let w = weaponTable.weapon[id];

    HtmlModal(WeaponInfoModal);

    elID('Info-name').textContent = w.name;
    elID('Info-rules').textContent = `${a_RuleSet[w.rules]} Ruleset`;
    elID('Info-type').textContent = a_WeaponClass[w.type];
    elID('Info-desc').textContent = w.desc;
    elID('Info-year').textContent = w.year;
    elID('Info-techRating').textContent = a_TechRating[w.techRating];
    elID('Info-availability').textContent = a_AvailabilityRating[w.availability];
    elID('Info-tons').textContent = addDecimal(w.tons);
    elID('Info-crits').textContent = w.crits;
    elID('Info-cost').textContent = addComma(w.cost);
    elID('Info-bv').textContent = w.bv;
    elID('Info-heat').textContent = w.heat;
    elID('Info-damage').textContent = w.damage;
    elID('Info-ammo').textContent = zeroToDash(w.ammo);
    elID('Info-delay').textContent = w.delay;
    elID('Info-rangeMin').textContent = zeroToDash(w.rangeMin);
    elID('Info-rangeShort').textContent = zeroToDash(w.rangeShort);
    elID('Info-rangeMedium').textContent = zeroToDash(w.rangeMedium);
    elID('Info-rangeLong').textContent = zeroToDash(w.rangeLong);
    elID('Info-rangeExtreme').textContent = zeroToDash(w.rangeExtreme);
}