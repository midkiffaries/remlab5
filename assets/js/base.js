/**************************
Base JavaScript
**************************/
"use strict";    

// Declare Global Variables and settings
const RemlabVersion = "4.0 - Development", 
    HostName = window.location.host,
    OriginURL = window.location.protocol + "//" + HostName + "/",        
    PathName = window.location.pathname,
    HrefURL = PathName + window.location.search,
    Locale = "en-US";

document.getElementById("AppVersion").textContent = RemlabVersion; 

// Prevent all forms from submitting on button events
(function(){
    var formSubmit = document.getElementsByTagName("form"), l = formSubmit.length;
    for (let i = 0; i < l; i++) {
        formSubmit[i].onsubmit = function() {
            return event.preventDefault();
        }
    }
}());

// Improve the behavior of input types
(function(){
    var inputNum = document.getElementsByTagName("input"), l = inputNum.length;
    for (let i = 0; i < l; i++) {
        var inputAttrib = inputNum[i].getAttribute("type");
        
        // Custom charset for input[type="number"] and input[type="tel"]        
        if (inputAttrib === "number" || inputAttrib === "tel") {
            // Accept only numbers and relative chars
            inputNum[i].onkeypress = function() {
                return event.charCode >= 40 && event.charCode <= 57;
            }
        }
        // Custom charset for input[type="email"] and input[type="url"]
        if (inputAttrib === "email" || inputAttrib === "url") {
            // Accept everything but spaces
            inputNum[i].onkeypress = function() {
                return event.charCode >= 33 && event.charCode <= 122;
            }    
        }
        
        // Change the value of the output[for] element based on the range element
        if (inputAttrib === "range") {
            inputNum[i].oninput = function() {
                var out = this.nextElementSibling;
                if (out.getElementsByTagName("output") && out.getAttribute("for") == this.getAttribute("id")) {
                    out.value = this.value;                   
                }
            }
        }
        
        // Enforce a "maxlength" on all input elements
        inputNum[i].onkeyup = function() {
            if (this.value.length > this.maxLength && this.maxLength > 0) {
                this.value = this.value.slice(0,this.maxLength);
            }
        }
    }
}());

// Accordion Style Element, use class="accordion"
(function(){
    var acc = document.getElementsByClassName("accordion"), l = acc.length;
    for (let i = 0; i < l; i++) {
        acc[i].firstChild.nextSibling.onclick = function() {
            this.classList.toggle("active");
            var panel = this.nextSibling.nextSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        }
    }
}());

// Stepper - Add buttons around type="Number" element with class="stepper"
(function(){
    // Get all elements on page with class="stepper"
    var inc = document.getElementsByClassName("stepper"), l = inc.length;
    
    for (let i = 0; i < l; i++) {
        var id = inc[i].getAttribute("id"),
            el = document.getElementById(id),
            Minus = document.createElement("button"), 
            Plus = document.createElement("button");
        
        // Setup buttons
        Minus.textContent = "–";
        Minus.className = "stepper-button";
        Minus.setAttribute("aria-label", "Minus");
        Plus.textContent = "+";
        Plus.className = "stepper-button";
        Plus.setAttribute("aria-label", "Plus");
        
        // Create Minus
        Element.prototype.appendBefore = function (e) {
            e.parentNode.insertBefore(this, e);
        },false;
        
        // Create Plus
        Element.prototype.appendAfter = function (e) {
            e.parentNode.insertBefore(this, e.nextElementSibling);
        },false;
        
        // Create buttons on either side of the input element
        Minus.appendBefore(el);
        Plus.appendAfter(el);
        
        // Button step down
        el.previousElementSibling.onclick = function () {
            let x = this.nextElementSibling;
            if (parseInt(x.value) > parseInt(x.min)) {
                x.value = parseInt(x.value) - parseInt(x.step);
            }
        };

        // Button step up
        el.nextElementSibling.onclick = function () {
            let x = this.previousElementSibling;
            if (parseInt(x.value) < parseInt(x.max)) {
                x.value = parseInt(x.value) + parseInt(x.step);
            }            
        };
    }
}());

// Populate <select> with class="select" id="(id)" data-list="(arrayname)"
(function(){
    var inc = document.getElementsByClassName("select"), l = inc.length;
    
    // Add <select> element attributes
    for (let i = 0; i < l; i++) {
        var id = inc[i].getAttribute("id"),
            el = document.getElementById(id),
            list = document.getElementById(id).getAttribute("data-list"),
            lgth = eval(list).length;
        
        // Create each <option> element
        for (let j = 0; j < lgth; j++) {
            var opt = document.createElement("option");
            opt.value = j;
            opt.textContent = eval(list + "[" + j + "]");
            el.appendChild(opt);
        }
    }
}());

// Panel Switch Element block, use class="panelswitch"
(function(){
    var panelswitch = document.getElementsByClassName("panelswitch"), 
		l = panelswitch.length;
	
    for (let i = 0; i < l; i++) {
		panelswitch[i].firstChild.nextElementSibling.addEventListener("click", () => {
			panelswitch[i].firstChild.nextElementSibling.classList.toggle("panel-button-active");
			panelswitch[i].lastChild.previousSibling.classList.toggle("panel-active");
		},true);
    }
}());

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

// Display Confirmation Modal Box -- text: displayed text | action: Yes button's action/fucntion
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
        div: document.createElement("div"),
        section: document.createElement("section"),
        button: document.createElement("button")
    };

    // Disable page scrolling
    document.body.classList.add("disable-scroll");

    // Dialog attributes
    aDialog.dialog.setAttribute("open", "open");        
    aDialog.dialog.setAttribute("class", "dialog-html " + JsVar);

    // Dialog Box
    aDialog.dialog.appendChild(aDialog.div);
    aDialog.div.appendChild(aDialog.section);
    aDialog.section.setAttribute("id", "AjaxHTMLWindow");

    // Append to page body
    document.body.appendChild(aDialog.dialog);
    document.getElementById("AjaxHTMLWindow").innerHTML = JsVar;
    
    // Close button
    aDialog.div.appendChild(aDialog.button);
    aDialog.button.setAttribute("onclick", "closeModals('dialog-html')");
    aDialog.button.setAttribute("class", "dialog-html-close");
    aDialog.button.setAttribute("aria-label", "Close dialog box");

    // Display Dialog
    setTimeout(function(){ 
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
Global REMLAB Functions
**************************/

// The record sheet circle hash &#9675; or ○
const thecircle = "○";

// Header Navigation
document.getElementById('btnHelp').onclick = () => { HtmlModal(HelpPage) };
document.getElementById('btnAbout').onclick = () => { HtmlModal(AboutPage) };

// Change a zero into a dash
function zeroToDash(v) {
    if (v == 0 || v == null) {
        return "-";
    } else {
        return v;
    }
}

// Add commas to long numbers
function addComma(v) {
    return v.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
}

// Add an extra decimal place to a number
function addDecimal(v) {
    if (isNumber(v) || v == 0) {
        return parseFloat(v).toFixed(1);
    } else {
        return v;
    }
}

// Check if the value is a number and if not make it a 0
function isNumber(v) {
    if (isNaN(v)) {
        return 0;
    } else {
        return v;
    }
}

// Get the remainder for the armor mass
function armorMassAdjust() {
    var r = Stats.ATotal() % 16;
    if (r > 0 && r < 9) {
        return 0.5;
    } else if (r > 8) {
        return 1;
    } else {
        return 0;
    }
}

// Display distance range or damage range as Low-High
function displayRange(l, h) {
    if (l == h - 1 || h <= 1 || l == 0) {
        return zeroToDash(h);
    } else {
        if (l == 1) {
            return l + "-" + h;
        } else {
            return (l+1) + "-" + h;
        }
    }
}

// Display circle ticks for the record sheet
function displayTicks(v, r) {
    var a = '';
    for (let i = 0; i < v; i++) {
        if (i % r === 0 && i != 0) a += '<br>\n';
        a += thecircle;
    }
    return a;
}

// Generate a random number between a min and max
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Convert null and 0 entries into underlines
function toUnderline(v) {
    if (v == null || v == 0 || v == "(blank line)") {
        return null;
    } else {
        return v;
    }
}