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
		
        // Custom charset for input[type="email"] and input[type="url"]
        if (inputAttrib === "email" || inputAttrib === "url") {
            // Accept everything but spaces
            inputNum[i].onkeypress = () => event.charCode >= 33 && event.charCode <= 122;
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
/*
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
}()); 
*/