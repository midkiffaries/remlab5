/**************************
 * Base JavaScript
**************************/

"use strict";    

// REMLAB version
const RemlabVersion = "4.9.2012 DEV";
const TodaysDate = new Date();

// Declare Global Variables and settings
const HostName = window.location.host,
    OriginURL = `${window.location.protocol}//${HostName}/`,        
    PathName = window.location.pathname,
    HrefURL = PathName + window.location.search,
    Locale = "en-US";

// Keyup Events
document.addEventListener("keyup", (e) => {
	e = e || window.event;
    if (e.keyCode === 27) { // Esc Key
        closeModals('dialog-html');
        closeModals('dialog-image');
    }
    if (e.keyCode === 13) { // Enter Key
        closeModals('dialog-alert');
    }
},false);

// Display Alert Modal Box -- text: displayed text | bgColor: background-color
function AlertModal(text, bgColor) {
    let dialog, st = document.createElement("style");

    // Main dialog box
    dialog = document.createElement("dialog");
    dialog.setAttribute("open", "open");
    dialog.setAttribute("class", "dialog-alert");
    dialog.setAttribute("role", "alertdialog");
    dialog.setAttribute("onclick", `closeModals('dialog-alert')`);
    dialog.appendChild(document.createTextNode(text));

    // Append style
    st.textContent = (`
    .dialog-alert {
        border: none;
        width: 100%;
        height: 2.8em;
        padding: 0.8em;
        text-align: center;
        font-size: 1.4em;
        opacity: 0;
        transition: opacity 0.15s ease-in-out 0s;
        background-color: ${bgColor};
    }
    .dialog-open {
        opacity: 1;
    }   
    .dialog-close {
        transition: opacity 0.15s ease-out 0s;
        opacity: 0;
    }    
    `);
    dialog.appendChild(st);

    // Append to page body
    document.body.appendChild(dialog);

    // Display dialog
    setTimeout(() => { 
        dialog.classList.toggle("dialog-open") 
    }, 100);
    setTimeout(() => { 
        dialog.classList.toggle("dialog-open"); 
        closeModals('dialog-alert') 
    }, 6000);
}

// Display Confirmation Modal Box -- text: displayed text | action: Yes button's action/function
function ConfirmModal(text, action) {
    let aDialog = {
        style: document.createElement("style"),
        dialog: document.createElement("dialog"),
        div: document.createElement("div"),
        p: document.createElement("p"),
        buttonYes: document.createElement("button"),
        buttonNo: document.createElement("button")
    };

    // Append style
    aDialog.style.textContent = (`
    .dialog-confirm {
        border: none;
        width: 100vw;
        height: 100%;
        background-color: rgba(255,255,255,0.6);
        opacity: 0;
        transition: opacity 0.16s ease-in-out 0s;
        -webkit-backdrop-filter: grayscale(40%);
        backdrop-filter: grayscale(40%);
    }
    .dialog-confirm div {
        max-width: 50vw;
        margin: 30vh auto 0 auto;
        padding: 1em;    
        transform: translate(0, -100%);
        background-color: #fff;
        box-shadow: 0 14px 14px -7px rgba(0,0,0,0.8), 5px 5px 18px 5px rgba(0,0,0,0);
        border: 1px solid #eee;
        text-align: right;
    }
    .dialog-confirm p {
        margin-top: 2px;
        font-size: 1.2em;
        text-align: left;
    }
    .dialog-confirm p::before {
        content: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cpath d='M20.9 14.8q1.5-1.5 1.5-3.6 0-2.6-1.9-4.5T16 4.8q-2.6 0-4.5 1.9t-1.9 4.5h3.2q0-1.3 1-2.3 1-1 2.2-1 1.3 0 2.3 1 1 1 1 2.3 0 1.3-1 2.2l-2 2q-1.9 2.1-1.9 4.6v.8h3.2q0-2.5 1.9-4.5zm-3.3 12.4V24h-3.2v3.2zM16 0q6.6 0 11.3 4.7Q32 9.4 32 16q0 6.6-4.7 11.3Q22.6 32 16 32q-6.6 0-11.3-4.7Q0 22.6 0 16 0 9.4 4.7 4.7 9.4 0 16 0z'/%3E%3C/svg%3E");
        padding: 0.1em 0.4em 1em 0.1em;
        display: block;
        float: left;
    }
    .dialog-confirm button {
        margin-right: 0.9em;
        min-width: 5em;
    }   
    .dialog-open {
        opacity: 1;
    }
    .dialog-open div {
        transform: scale(1);
    }
    .dialog-close {
        transition: opacity 0.15s ease-out 0s;
        opacity: 0;
    }
    @media only screen and (min-width: 320px) and (max-width: 812px) {
        .dialog-confirm div {
            max-width: 99%;
        }
    }
    `);
    aDialog.dialog.appendChild(aDialog.style);    

    // Dialog attributes
    aDialog.dialog.setAttribute("open", "open");        
    aDialog.dialog.setAttribute("class", "dialog-confirm");
    aDialog.dialog.setAttribute("role", "alertdialog");
    aDialog.dialog.appendChild(aDialog.div);

    // Text
    aDialog.div.appendChild(aDialog.p);
    aDialog.p.appendChild(document.createTextNode(text));

    // Button Yes
    aDialog.div.appendChild(aDialog.buttonYes);
    aDialog.buttonYes.appendChild(document.createTextNode("Yes"));
    aDialog.buttonYes.setAttribute("onclick", "closeModals('dialog-confirm');" + action);
    aDialog.buttonYes.setAttribute("type", "button");
    aDialog.buttonYes.setAttribute("autofocus", "autofocus");

    // Button No
    aDialog.div.appendChild(aDialog.buttonNo);
    aDialog.buttonNo.appendChild(document.createTextNode("No"));
    aDialog.buttonNo.setAttribute("onclick", "closeModals('dialog-confirm')");
    aDialog.buttonNo.setAttribute("type", "button");
    
    // Append to page body
    document.body.appendChild(aDialog.dialog);

    // Display Dialog
    setTimeout(() => { 
        aDialog.dialog.classList.toggle("dialog-open") 
    }, 150);
}

// Load an external JS document and display it in a modal window
function HtmlModal(JsVar, c) {
    let aDialog = {
        style: document.createElement("style"),
        dialog: document.createElement("dialog"),
		header: document.createElement("div"),
        inner: document.createElement("div"),
        html: document.createElement("div"),
        button: document.createElement("button")
    };

    // Append style
    aDialog.style.textContent = (`
    .dialog-html {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        background-color: rgba(240,240,240,0.9);
        border: none;
        opacity: 0;
        transition: opacity 0.15s ease-in-out 0s;
        -webkit-backdrop-filter: grayscale(40%);
        backdrop-filter: grayscale(40%);
    }
    .dialog-top {
        max-width: 70vw;
        max-height: calc(85vh - 15vh);
        padding: 1.1em;
        margin: 0 auto 0 auto;
    }
    .dialog-body {
        max-width: 70vw;
        min-height: 16em;
        max-height: calc(85vh - 5vh);
        margin: 1vh auto 0 auto;
        padding: 1em;
        background-color: #fcfcfc;
        box-shadow: 0px 10px 14px -7px rgba(0,0,0,0.7), 5px 5px 16px 5px rgba(0,0,0,0);
        transform: scale(0.8);
        transition: transform 0.15s ease-in-out 0s;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    #HTML_Frame {
        margin-top: -2em;
    }
    .dialog-html-close {
        position: absolute;
        width: 1.3em;
        height: 1.3em;
        padding: 1.4em;
        right: 0;
        top: 0;
        border: none;
        filter: drop-shadow(1px 1px 2px rgba(0,0,0,0.3));
        background: no-repeat center center / 1.4em;
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath d='M30 24l-9-9 9-9-6-6-9 9-9-9-6 6 9 9-9 9 6 6 9-9 9 9z'/%3E%3C/svg%3E");
    }
    .dialog-html-close:hover {
        background-color: transparent;
        filter: invert() drop-shadow(0 0 10px rgba(0,0,0,0.3));
    }
    .dialog-html-close:focus:hover {
        filter: none;
    }
    .dialog-html-close:active {
        opacity: 0.5;
    }
    .dialog-open {
        opacity: 1;
    }
    .dialog-open div {
        transform: scale(1);
    }	
    .dialog-close {
        transition: opacity 0.15s ease-out 0s;
        opacity: 0;
    }
    .disable-scroll {
        overflow: hidden;
        height: auto;
    }
    @media only screen and (min-width: 320px) and (max-width: 812px) {
        .dialog-body {
            max-width: 99%;
            margin: 1vh auto;
            max-height: 85vh
        }
        .dialog-top {
            max-width: 99%;
            margin: 0 auto;
        }
    }
    `);
    aDialog.dialog.appendChild(aDialog.style);

    // Disable page scrolling
    document.body.classList.add("disable-scroll");

    // Dialog attributes
    aDialog.dialog.setAttribute("open", "open");        
    aDialog.dialog.setAttribute("class", "dialog-html " + c);

    // Dialog Top
	aDialog.dialog.appendChild(aDialog.header);
    aDialog.header.setAttribute("class", "dialog-top");

    // Close button
    aDialog.header.appendChild(aDialog.button);
    aDialog.button.setAttribute("onclick", "closeModals('dialog-html')");
    aDialog.button.setAttribute("class", "dialog-html-close");
    aDialog.button.setAttribute("aria-label", "Close dialog box");
	
	// Inner Element
	aDialog.dialog.appendChild(aDialog.inner);
    aDialog.inner.setAttribute("class", "dialog-body");
    aDialog.inner.appendChild(aDialog.html);
    aDialog.html.setAttribute("id", "HTML_Frame");
	
    // Append to page body
    document.body.appendChild(aDialog.dialog);
    document.getElementById("HTML_Frame").innerHTML = JsVar(c);

    // Display Dialog
    setTimeout(() => { 
        aDialog.dialog.classList.toggle("dialog-open");
    }, 150);
}
    
// Close all open dialog nodes specific "c = ClassName"
function closeModals(c) {
    let dialog = document.getElementsByClassName(c), 
        l = dialog.length;
    
    if (l) {
        for (let i = 0; i < l; i++) {
            document.body.classList.remove("disable-scroll");
            dialog[i].classList.add("dialog-close");
            setTimeout(() => { 
                dialog[i].parentNode.removeChild(dialog[i]);
            }, 150);
        }
    }
}

// Dark mode switch
(function(){
	let buttonText, theme;
	const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)"),
		modeButton = document.querySelector(".light-switch"),
		currentTheme = localStorage.getItem("theme");	
	
	// Get locally saved moode
	if (currentTheme == 'dark') {
        document.body.classList.toggle("dark-mode");
	} else if (currentTheme == 'light') {
        document.body.classList.toggle("light-mode");
	}
	
	// Set initial button title
	buttonText = (document.body.classList.contains('dark-mode')) ? 'light':'dark';
	modeButton.setAttribute("title", `Switch to ${buttonText} mode`);
	
	// Generate button switch logic
	modeButton.onclick = () => {
		//if (isDarkMode.matches) {
		//	document.body.classList.toggle("light-mode");
		//	document.body.classList.toggle("dark-mode");
		//	theme = document.body.classList.contains("light-mode") ? "light":"dark";
		//} else {
			document.body.classList.toggle("dark-mode");
			theme = document.body.classList.contains("dark-mode") ? "dark":"light";
		//}
		
		// Set button title
		buttonText = (document.body.classList.contains('dark-mode')) ? 'light':'dark';
		modeButton.setAttribute("title", `Switch to ${buttonText} mode`);
		
		// Store last used state
        localStorage.setItem("theme", theme);
	}	
}());

/**************************
* Global REMLAB Functions
**************************/

// The record sheet circle - hash &#9675; or ○
const theCircle = "○";

// Abbriviate document element ID
const elID = v => document.getElementById(v);

// Check if the value is a number and if not make it a 0
const isNumber = v => (isNaN(v)) ? 0: v;

// Generate a random number between a min and max
const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Add commas to long numbers
const addComma = v => (isNumber(v)) ? v.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",") : v;

// Change a zero into a dash
const zeroToDash = v => (v == 0 || v == null) ? "–" : v;

// Add an extra decimal place to a number
const addDecimal = v => (isNumber(v)) ? parseFloat(v).toFixed(1) : v;

// Convert null entries into underlines for the printout
const toUnderline = v => (v == "(blank line)") ? "" : v;

// Convert tons into Kg
const tons2Kg = v => v * 907;

// Convert Jumping MP into meters
const mp2Meters = v => v * 30;

// Display damage as either m-d "min-max" or d "max"
const displayDamage = (m, d) => (m > 0) ? `${m}-${d}` : d;

// Display distance range or damage range as Low-High
function displayRange(l, h) {
    if (l == h - 1 || h <= 1 || l == 0) {
        return zeroToDash(h);
    } else {
        if (l == 1) {
            return `${l}-${h}`;
        } else {
            return `${l+1}-${h}`;
        }
    }
}

// Display circle ticks for the record sheet
function displayTicks(v, r) {
    let a = '';
    for (let i = 0; i < v; i++) {
        if (i % r === 0 && i != 0) a += "<br>\n";
        a += theCircle;
    }
    return a;
}