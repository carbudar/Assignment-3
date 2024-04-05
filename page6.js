document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submitButton');

    submitButton.addEventListener('click', function(event) {
        // Prevent the default button behavior
        event.preventDefault(); 

             // Get the value of the input fields
             const p6text = document.getElementById('p6text').value;
        

             // Save the values to local storage
             localStorage.setItem('p6text', p6text);
         
     
             // Redirect to the next page
             window.location.href = 'page6.html';


        // Redirect to the next page
        window.location.href = 'page7.html';
    });
});

function saveHappyCheckedState() {
    const checkbox = document.getElementById('happy');
    localStorage.setItem('happyChecked', checkbox.checked);
}

function saveExciteCheckedState() {
    const checkbox = document.getElementById('excite');
    localStorage.setItem('exciteChecked', checkbox.checked);
}

function saveSadCheckedState() {
    const checkbox = document.getElementById('sad');
    localStorage.setItem('sadChecked', checkbox.checked);
}

function saveAngerCheckedState() {
    const checkbox = document.getElementById('anger');
    localStorage.setItem('angerChecked', checkbox.checked);
}

function saveFearCheckedState() {
    const checkbox = document.getElementById('fear');
    localStorage.setItem('fearChecked', checkbox.checked);
}
function saveAnxiousCheckedState() {
    const checkbox = document.getElementById('anxious');
    localStorage.setItem('anxiousChecked', checkbox.checked);
}

function saveDisappointCheckedState() {
    const checkbox = document.getElementById('disappoint');
    localStorage.setItem('disappointChecked', checkbox.checked);
}

function saveConfuseCheckedState() {
    const checkbox = document.getElementById('confuse');
    localStorage.setItem('confuseChecked', checkbox.checked);
}
function saveAffectionCheckedState() {
    const checkbox = document.getElementById('affection');
    localStorage.setItem('affectionChecked', checkbox.checked);
}

function saveCalmCheckedState() {
    const checkbox = document.getElementById('calm');
    localStorage.setItem('calmChecked', checkbox.checked);
}

function saveExhaustCheckedState() {
    const checkbox = document.getElementById('exhaust');
    localStorage.setItem('exhaustChecked', checkbox.checked);
}

function saveEmbarassCheckedState() {
    const checkbox = document.getElementById('embarass');
    localStorage.setItem('embarassChecked', checkbox.checked);
}


