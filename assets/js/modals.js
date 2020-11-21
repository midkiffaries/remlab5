/**************************
 * HTML Modal Content
**************************/

// Buttons modal logic
document.getElementById('btnHelp').onclick = () => HtmlModal(HelpModal, 'helpModal');
document.getElementById('btnAbout').onclick = () => HtmlModal(AboutModal, 'aboutModal');

// About modal content
const AboutModal = () => (`
<h2>About REMLAB ${RemlabVersion}</h2>
<figure><img src="assets/images/remlab-icon.svg" alt="Remlab Logo" loading="lazy"></figure>
<p>REMLAB Web Mech Designer is an online tool for creating <i>BattleTech&reg;</i> Mechs for use in the board game. REMLAB is written entirely in <i>JavaScript</i>.</p>

<h3>Disclaimer</h3>
<p>REMLAB is first and for most a personal programming project more so than a final working product. My ultimate goal is to produce something that is presentable in a portfolio or at a job interview. Development of this web app is on a sporadic basis and in my free time. If I do find time to continue development of this app, and expand on the features and lore I will do so... otherwise the code in its entirety on GitHub.</p>

<h3>Limitations</h3>
<p>REMLAB's current ruleset: <i>Basic / Level 1 / 3025 / Succession Wars</i></p>

<h3>History</h3>
<p>The first version of REMLAB dates back to <time>2005</time> when it was created as an early <abbr title="Asynchronous JavaScript And XML">AJAX</abbr> and <abbr>PHP</abbr> powered web app.</p>
<p>The second version I release in <time>2007</time> and it was built upon that same codebase, however with that version I expanded upon the game rules and features.</p>
<p>The Third version, released in <time>2010</time>, was never finished, but it too was based upon the same PHP codebase, however I had intended to completely redesign the interface. This version would have been the most comprehensive version of REMLAB. It featured more unit types beyond Mechs.  It can still be found on <a href="http://remlab.sourceforge.net" target="_blank">SourceForge</a>.</p>
<p>For the fourth version, I chose to go back to the drawing board and I rewrote the entire codebase from scratch, back in <time>2017</time>. In doing so, I moved from <abbr>PHP</abbr> to JavaScript for the main logic and an <abbr>XML</abbr> database. This version was never entirely complete, but it did mostly work correctly.</p>

<h3>References &amp; Resources</h3>
<ul>
    <li><a href="https://www.battletech.com" target="_blank">Official BattleTech Site</a></li>
    <li><a href="https://www.sarna.net" target="_blank">Sarna BattleTechWiki</a></li>
    <li><a href="https://docs.google.com/document/d/12ynqpNhOIcBqit8aGiwcOVje6Hscs9Ns5KAVNdJCw04/edit?usp=sharing" target="_blank">REMLAB development document on Google Docs</a></li>
</ul>

<style>
.aboutModal figure {
    width: 24%;
    float: right;
    margin: 0.6em;
}
</style>
`);


// Help modal content
const HelpModal = () => (`
<h2>Help with REMLAB ${RemlabVersion}</h2>
<p>Below are some tips for using REMLAB. As a web app there may be some inconsistencies from one browser to the next especially when it comes to printing.</p>

<h3>Printing</h3>
<p>Printing results will vary somewhat from browser-to-browser.</p>
<p>Tips to improve printing results:</p>
<ol>
    <li>Cut margin down as much as possible, 0.5in (1.3cm) should be good.</li>
    <li>Disable the <code>header</code> and <code>footer</code> information.</li>
    <li>Turn on <code>Print Backgrounds</code>, this is not that important.</li>
</ol>

<h3>Saving Data</h3>
<p>Currently, there is no way to save Mechs in REMLAB. The only thing you can do is <code>Print/Save to a <abbr>PDF</abbr> file</code>, a feature most modern web browsers have built into them.</p>

<h3>Browser Compatibility</h3>
<p>The latest versions of the big four browsers (<i>Edge, Chrome, Firefox, &amp; Safari</i>) should work correctly with REMLAB. Older browsers may run into compatibility complications.</p>
`);


// Weapon Info modal content
const WeaponInfoModal = (id) => {
    let w = weaponTable.weapon[id], 
        ammo = "";
    
    // If weapon has ammo display 'Add ammo' button
    if (w.ammo > 0) {
        ammo = `<button onclick="${id}" class="button-gold">Add Ammo</button>`;
    }

    return `
<div class="wi-body">
    <header class="wi-header">
        <h2>${w.name}</h2>
        <h3>${a_WeaponClass[w.type]}</h3>
        <p>${a_RuleSet[w.rules]} Ruleset</p>
    </header>

    <p>${w.desc}</p>

    <table class="wi-info">
        <tr>
            <th>Year of Introduction</th>
            <th>Technology Rating</th>
            <th>Availability</th>
        </tr>
        <tr>
            <td>${w.year}</td>
            <td>${a_TechRating[w.techRating]}</td>
            <td>${a_AvailabilityRating[w.availability]}</td>
        </tr>
    </table>

    <table class="wi-economy">
        <caption>Economy</caption>
        <tr>
            <th>Tons</th>
            <th>Critical Slots</th>
            <th>Cost</th>
            <th>Battle Value</th>
        </tr>
        <tr>
            <td>${addDecimal(w.tons)}</td>
            <td>${w.crits}</td>
            <td class="cbills">${addComma(w.cost)}</td>
            <td>${w.bv}</td>
        </tr>
    </table>

    <table class="wi-combat">
        <caption>Combat</caption>
        <tr>
            <th>Heat</th>
            <th>Damage</th>
            <th>Modifier</th>
            <th>Shots per ton</th>
            <th>Delay <small>(Solaris)</small></th>
        </tr>
        <tr>
            <td>${w.heat}</td>
            <td>${w.damage}</td>
            <td>${w.modifier}</td>
            <td>${zeroToDash(w.ammo)}</td>
            <td>${w.delay}</td>
        </tr>
    </table>

    <table class="wi-ranges">
        <caption>Ranges</caption>
        <tr>
            <th>Minimum</th>
            <th>Short</th>
            <th>Medium</th>
            <th>Long</th>
            <th>Extreme</th>
        </tr>
        <tr>
            <td>${zeroToDash(w.rangeMin)}</td>
            <td>${zeroToDash(w.rangeShort)}</td>
            <td>${zeroToDash(w.rangeMedium)}</td>
            <td>${zeroToDash(w.rangeLong)}</td>
            <td>${zeroToDash(w.rangeExtreme)}</td>
        </tr>
    </table>

    <footer class="wi-footer">
        <button onclick="${id}" class="button-gold">Add ${w.name}</button>
        ${ammo}
    </footer>
</div>

<style>
.wi-header h3 {
    font-size: 1.4em;
    margin: 0;
    float: left;
    color: #777;
    text-transform: uppercase;
}

.wi-header p {
    float: right;
    margin-top: -3em;
    color: #666;
}

.wi-body table caption {
    font-size: 1.3em;
    padding: 0;
    margin-top: 0.5em;
    background-color: rgba(100,100,100,0.1);
}

.wi-body table th,
.wi-body table td {
    text-align: center;
}

.wi-footer button {
    margin: 12px 4px;
}
</style>
`};
