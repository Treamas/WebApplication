/**
 * Application of Principles of Programming
 * Assignment Template 2021 - Javascript
 * @author Tim Orman
 */

/**
 * event handlers can go here
 */
//calculator event handlers - one for each button
document.getElementById("btnAddAPI").addEventListener("click", addNumbersAPI);
document.getElementById("btnSubtract").addEventListener("click", subtractNumbers);
document.getElementById("btnSubtractAPI").addEventListener("click", subtractNumbersAPI);
document.getElementById("btnMultiply").addEventListener("click", multiplyNumbers);
document.getElementById("btnMultiplyAPI").addEventListener("click", multiplyNumbersAPI);
document.getElementById("btnDivide").addEventListener("click", divideNumbers);
document.getElementById("btnDivideAPI").addEventListener("click", divideNumbersAPI);
document.getElementById("btnDeleteEntry").addEventListener("click", deleteEntry);
document.getElementById("btnAddEntry").addEventListener("click", addEntry);
document.getElementById("btnAddThought").addEventListener("click", addThoughts);
document.getElementById("btnDeleteThought").addEventListener("click", deleteThought);
//journal event handlers - one for each button

/**
 * callAPI()
 *
 * This function uses the built-in (to the browser) XMLHttpRequest object to request data from a server
 * The responseText property returns the response from the server as a string.
 *
 * You can use this function to complete calls to the api from the calculator functions.
 * Examine the url and elResponse parameters.
 * What types of values should they contain when passing them as arguments and calling this function?
 * @param url
 * @param elResponse
 */
function callAPI(url, elResponse) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            var response = JSON.parse(this.responseText);
            document.getElementById(elResponse).setAttribute("value", response.result);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

/**
 * Calculator Stuff
 */
/**
 * addNumbers()
 * This function does not use the app.py file to complete the task.
 *
 * Write a function that will
 * * retrieve the values from the text box elements on the page
 * * perform the calculation
 * * set the result element in the html page to display the result of the calculation
 */
function addNumbers(){
    let result;
    let num1 = Number(document.getElementById("add1").value);
    let num2 = Number(document.getElementById("add2").value);
    result = num1 + num2;
    document.getElementById("inputAdd").setAttribute("value", result);
}

/**
 * addNumbersAPI()
 * This function should perform the calculation in the app.py file
 *
 * Write a function that will
 * * retrieve the values from the text box elements on the page
 * * form a url string with the values as arguments
 * * Use callAPI() function to form and send a request object
 */
function addNumbersAPI(){
    let num1 = Number(document.getElementById("add1").value);
    let num2 = Number(document.getElementById("add2").value);
    let pythonRoute = "http://127.0.0.1:5000/api/add?num1=" + num1 + "&num2=" + num2;
    callAPI(pythonRoute, "inputAdd");
}

/**
 * subtractNumbers()
 * This function does not use the app.py file to complete the task.
 *
 * Write a function that will
 * * retrieve the values from the text box elements on the page
 * * perform the calculation
 * * set the result element in the html page to display the result of the calculation
 */
function subtractNumbers(){
    let result;
    let num1 = Number(document.getElementById("sub1").value);
    let num2 = Number(document.getElementById("sub2").value);
    result = num1 - num2;
    document.getElementById("inputSubtract").setAttribute("value", result);
}

/**
 * subtractNumbersAPI()
 * This function should perform the calculation in the app.py file
 *
 * Write a function that will
 * * retrieve the values from the text box elements on the page
 * * form a url string with the values as arguments
 * * Use callAPI() function to form and send a request object
 */
function subtractNumbersAPI(){
    let num1 = Number(document.getElementById("sub1").value);
    let num2 = Number(document.getElementById("sub2").value);
    let pythonRoute = "http://127.0.0.1:5000/api/subtract?num1=" + num1 + "&num2=" + num2;
    callAPI(pythonRoute, "inputSubtract")
}

/**
 * multiplyNumbers()
 * This function should perform the calculation in the app.py file
 *
 * Write a function that will
 * * retrieve the values from the text box elements on the page
 * * perform the calculation
 * * set the result element in the html page to display the result of the calculation
 */
function multiplyNumbers(){
    let sum;
    let num1 = Number(document.getElementById("multi1").value);
    let num2 = Number(document.getElementById("multi2").value);
    sum = num1 * num2;
    document.getElementById("inputMultiply").setAttribute("value", sum);
}

/**
 * multiplyNumbersAPI()
  * This function should perform the calculation in the app.py file
 *
 * Write a function that will
 * * retrieve the values from the text box elements on the page
 * * form a url string with the values as arguments
 * * Use callAPI() function to form and send a request object
 */
function multiplyNumbersAPI(){
    let num1 = Number(document.getElementById("multi1").value);
    let num2 = Number(document.getElementById("multi2").value);
    let pythonRoute = "http://127.0.0.1:5000/api/multiply?num1=" + num1 + "&num2=" + num2;
    callAPI(pythonRoute, "inputMultiply")
}

/**
 * divideNumbers()
 * This function does not use the app.py file to complete the task.
 *
 * Write a function that will
 * * retrieve the values from the text box elements on the page
 * * perform the calculation
 * * set the result element in the html page to display the result of the calculation
 * NOTE: once you have this function operational you need to validate the divisor
 * and ensure you do not have divide by zero errors.
 */
function divideNumbers(){
    let sum;
    let num1 = Number(document.getElementById("divi1").value);
    let num2 = Number(document.getElementById("divi2").value);
    if(num2 == 0)
    {
        document.getElementById("inputDivide").setAttribute("value", "Cannot divide by 0");
    }
    else
    {
        sum = num1 / num2;
        document.getElementById("inputDivide").setAttribute("value", sum);
    }
}

/**
 * divideNumbersAPI()
 * This function should perform the calculation in the app.py file
 *
 * Write a function that will
 * * retrieve the values from the text box elements on the page
 * * form a url string with the values as arguments
 * * Use callAPI() function to form and send a request object
 */
function divideNumbersAPI(){
    let num1 = Number(document.getElementById("divi1").value);
    let num2 = Number(document.getElementById("divi2").value);
    let pythonRoute = "http://127.0.0.1:5000/api/divide?num1=" + num1 + "&num2=" + num2;
    callAPI(pythonRoute, "inputDivide")
}

/**
 * Journal Stuff
 */
/**
 * getJournalEntries() - Get list of journal entries
 *
 * Write a function that will
 * * retrieve the JSON file of journal entries
 * * format the entries into a single string with appropriate html tags
 * * set the content of the "listEntries" element to the formatted string
 */
function getJournalEntries(){
    let url = "http://127.0.0.1:5000/api/journal";
    var errorString = "ERROR occurred while getting journal entries";
    let journalxhttp = new XMLHttpRequest();
    journalxhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            let response = JSON.parse(this.responseText);
            let journalEntries = JSON.parse(response.result);
            let journalList = "";
            let thePlace = 0;
            for(entry of journalEntries.journals)
            {
                journalList = journalList +"<li onclick=\"populateEntry(this)\" name='" + String(entry.name) +  "' date='" + String(entry.date) + "' note='" + String(entry.note) + "' id='" + journalEntries.journals.indexOf(entry) + "'>" + String(entry.name) + "</li>";
            }
            document.getElementById("listEntries").innerHTML = journalList;
        }

    };
    journalxhttp.open("GET", url, true);
    journalxhttp.send();
}
getJournalEntries();
/**
 * Dont forget to call the function that will retrieve the list entries when the page loads
 */


/**
 * populateEntry(item)
 *
 * Write a function that will
 * * get the data for a single journal entry from item parameter
 * * extract the individual pieces of data from the entry
 * * and put each piece of information into the text fields on the html page
 * @param item
 */
function populateEntry(item){
    document.getElementById("idEntry").setAttribute("value", item.getAttribute("id"));
    document.getElementById("dateEntry").setAttribute("value", item.getAttribute("date"));
    document.getElementById("namEntry").setAttribute("value", item.getAttribute("name"));
    document.getElementById("txtNote").value = item.getAttribute("note");
}

/**
 * addEntry() - add a journal entry
 *
 * Write a function that will
 * * create a new node list item element
 * * create a new text node element for the new list item and attach it to the new list item
 * * set other values of the list item - date, class, id, notes, student
 * * append the new node to the list of entries
 */
function addEntry(){
    let theID = String(document.getElementById("idAdd").value);
    let theDate = String(document.getElementById("dateAdd").value);
    let theName = String(document.getElementById("nameAdd").value);
    let theText = String(document.getElementById("txtAdd").value);
    let url = "/api/journal?theID=" + theID + "&theDate=" + theDate + "&theName=" + theName + "&theText=" + theText;
    let addxhttp = new XMLHttpRequest();
    addxhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            let response = JSON.parse(this.responseText);
            let journalEntries = JSON.parse(response.result);
            let journalList = "";
            for(entry of journalEntries.journals)
            {
                journalList = journalList +"<li onclick=\"populateEntry(this)\" name='" + String(entry.name) +  "' date='" + String(entry.date) + "' note='" + String(entry.note) + "' id='" + theID + "'>" + String(entry.name) + "</li>";
            }

            document.getElementById("listEntries").innerHTML = journalList;
        }
    };
    addxhttp.open("PUT", url, true);
    addxhttp.send();
    getJournalEntries();
}

/**
 * deleteEntry()
 *
 * Write a function that will
 * * delete a journal entry (list item) from the html page
 */
function deleteEntry(){
    let theName = String(document.getElementById("namEntry").value);

    let url = "/api/delete?theName=" + theName;
    let deletejournalxhttp = new XMLHttpRequest();
    deletejournalxhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            document.getElementById(document.getElementById("idEntry").value).remove();
        }
        //getJournalEntries();
    };
    deletejournalxhttp.open("DELETE", url, true);
    deletejournalxhttp.send();
}

/**
 * uploadJournal()
 *
 * Write a function that will
 * * get the data from the list entries on the html page
 * * put the entries from the list into a collection
 * * convert the collection into a JSON object
 * * send JSON object to the url in the flask api
 * * and handle the response
 */
function uploadJournal(){

}

function todaysThought()
{
    let url = "http://127.0.0.1:5000/api/thought"
    let thought = new XMLHttpRequest();
    thought.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            let response = JSON.parse(this.responseText);
            let thoughts = JSON.parse(response.result);
            let chooseThought = Math.floor(Math.random() * Object.keys(thoughts["TheThoughts"]).length);
            document.getElementById("thought").innerHTML = thoughts["TheThoughts"][chooseThought]["thought"];
        }
    };
    thought.open("GET", url, true);
    thought.send();
}
todaysThought();

function getAllThoughts()
{
    let url = "http://127.0.0.1:5000/api/allthoughts";
    var errorString = "ERROR occurred while getting journal entries";
    let thoughtxhttp = new XMLHttpRequest();
    thoughtxhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            let response = JSON.parse(this.responseText);
            let thoughtEntries = JSON.parse(response.result);
            let thoughtList = "";
            let i = 0;
            for (idea of thoughtEntries.TheThoughts)
            {
                //thoughtList = thoughtList +"<li name='" + String(idea.thought) +  "' id=''" + thoughtEntries.TheThoughts.indexOf(idea) + "'>" + String(idea.thought) + "</li>";
                thoughtList = thoughtList +"<li id=\"clickable\" onclick=\"selectThought(this)\" thought='" + String(idea.thought) + "' quotee='" + String(idea.quotee) + "' id=''" + thoughtEntries.TheThoughts.indexOf(idea) + "'>" + String(idea.thought) + "</li>";
                i = i + 1;
            }
            document.getElementById("theThoughtEntries").innerHTML = thoughtList;
        }

    };
    thoughtxhttp.open("GET", url, true);
    thoughtxhttp.send();
}
getAllThoughts();

function addThoughts(){
    let theThought = String(document.getElementById("thoughtAdd").value);
    let theQuotee = String(document.getElementById("quoteeAdd").value);
    let url = "http://127.0.0.1:5000/api/allthoughts?theThought=" + theThought + "&theQuotee=" + theQuotee;
    var errorString = "ERROR occurred while getting journal entries";
    let addthoughtxhttp = new XMLHttpRequest();
    addthoughtxhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            let response = JSON.parse(this.responseText);
            let thoughtEntries = JSON.parse(response.result);
            let thoughtList = "";
            for (idea of thoughtEntries.TheThoughts)
            {
                thoughtList = thoughtList + "<li id=\"clickable\" onclick=\"selectThought(this)\" thought='" + String(idea.thought) + "' quotee='" + String(idea.quotee) + "' id=''" + thoughtEntries.TheThoughts.indexOf(idea) + "'>" + String(idea.thought) + "</li>";
            }
            document.getElementById("theThoughtEntries").innerHTML = thoughtList;
        }
    };
    addthoughtxhttp.open("PUT", url, true);
    addthoughtxhttp.send();
    getAllThoughts();
}

function selectThought(item){
    document.getElementById("selectedThought").setAttribute("value", item.getAttribute("thought"));
    document.getElementById("selectedQuotee").setAttribute("value", item.getAttribute("quotee"));
    item = "";
}

function deleteThought(){
    let theThought = String(document.getElementById("selectedThought").value);
    //document.getElementById(document.getElementById("selectedThought").value).remove();
    let url = "http://127.0.0.1:5000/api/deleteThought?theThought=" + theThought;
    let deletethoughtxhttp = new XMLHttpRequest();
    deletethoughtxhttp.onreadystatechange = function()
    {
        /*if(this.readyState == 4 && this.status == 200)
        {
            response = JSON.parse(this.responseText);
            let thoughtEntries = JSON.parse(response.result);
            let thoughtList = "";
            for (idea of thoughtEntries.thought)
            {
                thoughtList = thoughtList +"<li id=\"clickable\" onclick=\"selectThought(this)\" thought='" + String(idea.thought) + "' quotee='" + String(idea.quotee) + "' id=''" + thoughtEntries.TheThoughts.indexOf(idea) + "'>" + String(idea.thought) + "</li>";
            }
            document.getElementById("btnAddThought").innerHTML = thoughtList;
        }*/
        getAllThoughts();
    };
    deletethoughtxhttp.open("DELETE", url, true);
    deletethoughtxhttp.send();
}


