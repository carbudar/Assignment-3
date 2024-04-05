document.addEventListener('DOMContentLoaded', () => {
    const submissionListDiv = document.getElementById('submissionList');



    // Ensure the submission list container exists and is initially empty
    submissionListDiv.innerHTML = '<ul id="submissionListItems"></ul>';

    // Get the name from local storage
    const dayDate = localStorage.getItem('dayDate');//welcome.html
    const p2range = localStorage.getItem('p2range');//page2.html
    const sleepQual = localStorage.getItem('sleepQual');//page3.html
    const p4text = localStorage.getItem('p4text');//page4.html
    const p5text = localStorage.getItem('p5text');//page5.html
    const p6text = localStorage.getItem('p6text');//page5.html
    const p7text = localStorage.getItem('p7text');//page7.html
    const p8text = localStorage.getItem('p8text');//page8.html

    let c1 = localStorage.getItem('clock1');
    let c2 = localStorage.getItem('clock2');
    let timeDiff = c2 - c1;

    // Construct the submission text
    let submissionText = `[Day/ Date: ${dayDate}], [Overall day rating: ${p2range}/10], [Total sleep time: ${timeDiff}, Sleep Quality: ${sleepQual}],[(+): ${p4text}], 
    [(-): ${p5text}],[Triggers: ${p6text}],  [ANTs: ${p7text}], [Habits/Patterns: ${p8text}]`;

    // Create a new list item for the submission
    const newItem = document.createElement('li');
    newItem.textContent = submissionText;

    // Append the new item to the submission list
    document.getElementById('submissionListItems').appendChild(newItem);
    
});


document.addEventListener("DOMContentLoaded", function() {
    const checkedList = document.getElementById('submissionList');
    const happyChecked = localStorage.getItem('happyChecked');

    const checkedList1 = document.getElementById('submissionList');
    const exciteChecked = localStorage.getItem('exciteChecked');

    const checkedList2 = document.getElementById('submissionList');
    const sadChecked = localStorage.getItem('sadChecked');

    const checkedList3 = document.getElementById('submissionList');
    const angerChecked = localStorage.getItem('angerChecked');

    const checkedList4 = document.getElementById('submissionList');
    const fearChecked = localStorage.getItem('fearChecked');

    const checkedList5 = document.getElementById('submissionList');
    const anxiousChecked = localStorage.getItem('anxiousChecked');

    const checkedList6 = document.getElementById('submissionList');
    const disappointChecked = localStorage.getItem('disappointChecked');

    const checkedList7 = document.getElementById('submissionList');
    const confuseChecked = localStorage.getItem('confuseChecked');

    const checkedList8 = document.getElementById('submissionList');
    const calmChecked = localStorage.getItem('calmChecked');

    const checkedList9 = document.getElementById('submissionList');
    const embarassChecked = localStorage.getItem('embarassChecked');

    const checkedList10 = document.getElementById('submissionList');
    const affectionChecked = localStorage.getItem('affectionChecked');

    const checkedList11 = document.getElementById('submissionList');
    const exhaustChecked = localStorage.getItem('exhaustChecked');


    if (happyChecked === 'true') {
        const listItem = document.createElement('li');
        listItem.textContent = "Happiness";
        checkedList.appendChild(listItem);
    }

    if (sadChecked === 'true') {
        const listItem = document.createElement('li');
        listItem.textContent = "Sadness";
        checkedList.appendChild(listItem);
    }

    if (exciteChecked === 'true') {
        const listItem = document.createElement('li');
        listItem.textContent = "Excitement";
        checkedList.appendChild(listItem);
    }
    if (angerChecked === 'true') {
        const listItem = document.createElement('li');
        listItem.textContent = "Anger";
        checkedList.appendChild(listItem);
    }

    if (fearChecked === 'true') {
        const listItem = document.createElement('li');
        listItem.textContent = "Fear";
        checkedList.appendChild(listItem);
    }

    if (anxiousChecked === 'true') {
        const listItem = document.createElement('li');
        listItem.textContent = "Anxious";
        checkedList.appendChild(listItem);
    }

    if (disappointChecked === 'true') {
        const listItem = document.createElement('li');
        listItem.textContent = "Disappoint";
        checkedList.appendChild(listItem);
    }

    if (confuseChecked === 'true') {
        const listItem = document.createElement('li');
        listItem.textContent = "Confusion";
        checkedList.appendChild(listItem);
    }

    if (calmChecked === 'true') {
        const listItem = document.createElement('li');
        listItem.textContent = "Angry";
        checkedList.appendChild(listItem);
    }

    if (embarassChecked === 'true') {
        const listItem = document.createElement('li');
        listItem.textContent = "Embarass";
        checkedList.appendChild(listItem);
    }

    if (affectionChecked === 'true') {
        const listItem = document.createElement('li');
        listItem.textContent = "Affection";
        checkedList.appendChild(listItem);
    }

    if (exhaustChecked === 'true') {
        const listItem = document.createElement('li');
        listItem.textContent = "Exhausted";
        checkedList.appendChild(listItem);
    }

});