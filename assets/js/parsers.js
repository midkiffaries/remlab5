/**************************
 * Page Parser Functions
**************************/

// Improve the behavior of input types
(function(){
    const inputNum = document.getElementsByTagName("input"), l = inputNum.length;
	
    for (let i = 0; i < l; i++) {
        let inputAttrib = inputNum[i].getAttribute("type");
        
        // Custom charset for input[type="number"] and input[type="tel"]        
        if (inputAttrib === "number" || inputAttrib === "tel") {
            // Accept only numbers and relative chars
            inputNum[i].onkeypress = () => event.charCode >= 40 && event.charCode <= 57;
        }
        
        // Change the value of the output[for] element based on the range element
        if (inputAttrib === "range") {
            inputNum[i].oninput = function() {
                let out = this.nextElementSibling;
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
    const acc = document.getElementsByClassName("accordion"), l = acc.length;
    for (let i = 0; i < l; i++) {
        acc[i].firstChild.nextSibling.onclick = function() {
            this.classList.toggle("active");
            let panel = this.nextSibling.nextSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        }
    }
	// Stylesheet
	let st = document.createElement("style");
    st.textContent = (`
    .accordion > button {
        width: 100%;
        text-align: left;
        background: transparent;
        border: 0;
        border-top: 1px solid #eee;
        font-size: 1.2em;
        line-height: 1em;
        outline: none;
        padding: 0.55em;
    }
    .accordion > button::before {
        content: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cpath d='M16 9H9v7H7V9H0V7h7V0h2v7h7z'/%3E%3C/svg%3E");
        margin: 0 0.5em 0 0;
        display: inline-block;
        transition: transform 0.4s ease-in-out 0s;
        transform-origin: 50% 50%;
        will-change: transform;
    }
    .accordion > button.active::before {
        -webkit-transform: rotate(135deg);
        transform: rotate(135deg);
    }
    .accordion > section {
        padding: 0 1em;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.2s ease-out;
        border-bottom: 1px solid #eee;
        will-change: auto;
    }
    `);
	document.body.appendChild(st); 	
}());

// Stepper - Add buttons around type="Number" element with class="stepper"
(function(){
    // Get all elements on page with class="stepper"
    const inc = document.getElementsByClassName("stepper"), l = inc.length;
    for (let i = 0; i < l; i++) {
        let id = inc[i].getAttribute("id"),
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
        el.previousElementSibling.onmousedown = function () {
            let x = this.nextElementSibling;
            if (parseInt(x.value) > parseInt(x.min)) {
                x.value = parseInt(x.value) - parseInt(x.step);
                el.dispatchEvent(new Event('change'));
            }
        };

        // Button step up
        el.nextElementSibling.onmousedown = function () {
            let x = this.previousElementSibling;
            if (parseInt(x.value) < parseInt(x.max)) {
                x.value = parseInt(x.value) + parseInt(x.step);
                el.dispatchEvent(new Event('change'));
            }
        };

        // Fire the onchange event for the input element
        el.addEventListener('change', () => {
            updateForm();
        });
    }
	// Stylesheet
	let st = document.createElement("style");
    st.textContent = (`
    .stepper-container {
        height: 2em;
        display: inline-block;
        border: 1px solid #999;
    }
    .stepper {
        vertical-align: top;
        width: 3em;
        height: 100%;
        font-size: 1.2em;
        text-align: center;
        border: none;
        background: transparent;
        padding: 0;
    }
    .stepper-button {
        width: 1.3em;
        height: 1.2em;
        line-height: 0.2em;
        font-size: 1.5em;
        padding: 0.2em;
        background: transparent;
        border: none;
    }
    `);
    document.body.appendChild(st); 	
}());

// Populate <ul> or <ol> with class="select-list" id="(id)" data-list="(arrayname)"    
(function(){
    const inc = document.getElementsByClassName("select-list"), l = inc.length;
    // Add <ul> or <ol> element attributes
    for (let i = 0; i < l; i++) {
        let id = inc[i].getAttribute("id"),
            listbox = document.getElementById(id),
            lgth = eval(listbox.getAttribute("data-list")).length;
                
        // Create each <li> element        
        for (let j = 0; j < lgth; j++) {
            let li = document.createElement("li"),
                inp = document.createElement("input"),
                la = document.createElement("label");

            // List item
            listbox.appendChild(li);
            li.appendChild(inp);
            li.appendChild(la);

            // Input Checkbox
            inp.setAttribute("type", "checkbox");
            inp.setAttribute("id", `${id}-${j}`);
            inp.setAttribute("value", j);

            // Label and text
            la.setAttribute("for", `${id}-${j}`);
            la.setAttribute("role", "listitem");
            la.textContent = eval(listbox.getAttribute("data-list") + "[" + j + "]");
        }
    }
	// Stylesheet
	let st = document.createElement("style");
    st.textContent = (`
    .select-list {
        display: block;
        overflow-y: scroll;
        overflow-x: hidden;
        text-overflow: ellipsis;
        -webkit-user-select: none;
        user-select: none;
    }
    .select-list li {
        list-style: none;
        line-height: 0.9em;
    }    
    .select-list input {
        opacity: 0 !important;
        width: 0 !important;
        overflow: hidden;
        z-index: -1;
        position: absolute;
    }
    .select-list input + label:hover {
        background-color: #fafafa;
    }
    .select-list input:checked + label {
        background-color: #eee;
        font-weight: bold;
    }
    .select-list label {
        padding: 4px;
        width: 100%;
        overflow-x: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .select-list::-webkit-scrollbar {
        width: 0.8em;
    }
    .select-list::-webkit-scrollbar-track {
        background: #eee; 
    }
    .select-list::-webkit-scrollbar-thumb {
        background: #888; 
    }
    .select-list::-webkit-scrollbar-thumb:hover {
        background: #666; 
    }
    `);
    document.body.appendChild(st);
}());

// Populate <select> with class="select" id="(id)" data-list="(arrayname)"
(function(){
    const inc = document.getElementsByClassName("select"), l = inc.length;
    
    // Add <select> element attributes
    for (let i = 0; i < l; i++) {
        let id = inc[i].getAttribute("id"),
            el = document.getElementById(id),
            list = document.getElementById(id).getAttribute("data-list"),
            lgth = eval(list).length;
        
        // Create each <option> element
        for (let j = 0; j < lgth; j++) {
            let opt = document.createElement("option");
            opt.value = j;
            opt.textContent = eval(list + "[" + j + "]");
            el.appendChild(opt);
        }
    }
}());

// Panel Switch Element block, use class="panelswitch"
(function(){
    const panelswitch = document.getElementsByClassName("panelswitch"), 
		l = panelswitch.length;
	
    for (let i = 0; i < l; i++) {
		panelswitch[i].firstChild.nextElementSibling.addEventListener("click", () => {
			panelswitch[i].firstChild.nextElementSibling.classList.toggle("panel-button-active");
			panelswitch[i].lastChild.previousSibling.classList.toggle("panel-active");
		},true);
    }
}());

// TableSort: Sort any table with class="sortable"
(function(){
    const table = document.querySelector("table.sortable"),
        ths = table.querySelectorAll("thead th"), 
        row = table.querySelectorAll("tbody tr"), 
        tBody = table.querySelector("tbody"), 
        docF = document.createDocumentFragment();

    for (let i = 0; i < ths.length; i++){
        ths[i].addEventListener("click", function(e) {
            let thsArray = [].slice.call(ths),
                rowArray = [].slice.call(row),
                target = e.target,
                thsIndex = thsArray.indexOf(target);

            rowArray.sort(function(a,b){
                let tdA = a.children[thsIndex].textContent,
                    tdB = b.children[thsIndex].textContent;
                
                if (!isNaN(tdA)) {
                    tdA = parseFloat(tdA);
                    tdB = parseFloat(tdB);
                }

                if (tdA > tdB) {
                    return 1;
                } else if (tdA < tdB) {
                    return -1;
                } else {
                    return 0;
                }
            });

            rowArray.forEach(function(row){
                docF.appendChild(row);
            });

            tBody.appendChild(docF);             
        }, false);
    }
    // Stylesheet
	let st = document.createElement("style");
    st.textContent = (`
    .sortable thead th {
        cursor: pointer;
    }
    .sortable thead th:not(:empty)::after {
        content: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='14'%3E%3Cpath d='M4.235 0L0 5.928h8.47zm0 14l4.234-5.928H0z' fill='%23ccc'/%3E%3C/svg%3E");
        padding-left: 3px;
    }
    `);
    document.body.appendChild(st); 	
}()); 