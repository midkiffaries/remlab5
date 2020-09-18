/**************************
 * Base JavaScript
**************************/
"use strict";    

// REMLAB version
const RemlabVersion = "4.9.2009 - Development";

// Declare Global Variables and settings
const HostName = window.location.host,
    OriginURL = `${window.location.protocol}//${HostName}/`,        
    PathName = window.location.pathname,
    HrefURL = PathName + window.location.search,
    Locale = "en-US";

// Keyup Events
document.addEventListener("keyup", () => {
    if (event.keyCode === 27) { // Esc Key
        closeModals('dialog-html');
        closeModals('dialog-image');
    }
    if (event.keyCode === 13) { // Enter Key
        closeModals('dialog-alert');
    }
},false);

// Display Alert Modal Box -- text: displayed text | bgColor: background-color
function AlertModal(text, bgColor) {
    var dialog;
    
    // Main dialog box
    dialog = document.createElement("dialog");
    dialog.setAttribute("open", "open");
    dialog.setAttribute("class", "dialog-alert");
    dialog.setAttribute("role", "alertdialog");
    dialog.setAttribute("onclick", "closeModals('dialog-alert')");
    dialog.setAttribute("style", "background-color: " + bgColor);
    dialog.appendChild(document.createTextNode(text));

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
    var aDialog = {
        dialog: document.createElement("dialog"),
        div: document.createElement("div"),
        p: document.createElement("p"),
        buttonYes: document.createElement("button"),
        buttonNo: document.createElement("button")
    };

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

// Include pages.js
/*
(function(){
    const script = document.createElement('script');
    script.src = 'assets/js/pages.js';
    document.head.appendChild(script);
}());
*/
// Load an external JS document and display it in a modal window
function HtmlModal(JsVar) {    
    var aDialog = {
        dialog: document.createElement("dialog"),
		header: document.createElement("div"),
        inner: document.createElement("div"),
        html: document.createElement("div"),
        button: document.createElement("button")
    };

    // Disable page scrolling
    document.body.classList.add("disable-scroll");

    // Dialog attributes
    aDialog.dialog.setAttribute("open", "open");        
    aDialog.dialog.setAttribute("class", "dialog-html " + JsVar);

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
    document.getElementById("HTML_Frame").innerHTML = JsVar;

    // Display Dialog
    setTimeout(() => { 
        aDialog.dialog.classList.toggle("dialog-open");
    }, 150);
}
    
// Close all open dialog nodes specific "c = ClassName"
function closeModals(c) {
    var dialog = document.getElementsByClassName(c), 
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
const toUnderline = v => (v == null || v == "(blank line)") ? null : v;

// Convert tons into Kg
const tons2Kg = v => v * 907;

// Convert Jumping MP into meters
const mp2Meters = v => v * 30;

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
        if (i % r === 0 && i != 0) a += `<br>\n`;
        a += theCircle;
    }
    return a;
}