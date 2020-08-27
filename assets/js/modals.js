/**************************
HTML Modals Content
**************************/

// Buttons modal logic
document.getElementById('btnHelp').onclick = () => HtmlModal(HelpModal);
document.getElementById('btnAbout').onclick = () => HtmlModal(AboutModal);

// About modal content
const AboutModal = `
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

// Help modal content
const HelpModal = `
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

// Weapon Info modal content
const WeaponInfoModal = `
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