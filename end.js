document.addEventListener('DOMContentLoaded', () => {
    // Ensure the submission list container exists and is initially empty
    const submissionListDiv = document.getElementById('submissionList');
    submissionListDiv.innerHTML = '<ul id="submissionListItems"></ul>';

    // Retrieve previous submissions from localStorage
    let previousSubmissions = JSON.parse(localStorage.getItem('submissions')) || [];

    // Get the data from the current page
    const dayDate = localStorage.getItem('dayDate'); // welcome.html
    const p2range = localStorage.getItem('p2range'); // page2.html
    const sleepQual = localStorage.getItem('sleepQual'); // page3.html
    const p4text = localStorage.getItem('p4text'); // page4.html
    const p5text = localStorage.getItem('p5text'); // page5.html
    const p6text = localStorage.getItem('p6text'); // page5.html
    const p7text = localStorage.getItem('p7text'); // page7.html
    const p8text = localStorage.getItem('p8text'); // page8.html

    let c1 = localStorage.getItem('clock1');
    let c2 = localStorage.getItem('clock2');
    let timeDiff = c2 - c1;

    // Construct the submission text
    let submissionText = `[Day/ Date: ${dayDate}], [Overall day rating: ${p2range}/10], [Total sleep time: ${timeDiff}, Sleep Quality: ${sleepQual}],[(+): ${p4text}], 
    [(-): ${p5text}],[Triggers: ${p6text}],  [ANTs: ${p7text}], [Habits/Patterns: ${p8text}]`;

    // Add the current submission to the list of previous submissions
    previousSubmissions.push(submissionText);

    // Update localStorage with the updated submissions
    localStorage.setItem('submissions', JSON.stringify(previousSubmissions));

    // Clear the current list items
    const submissionListItems = document.getElementById('submissionListItems');
    submissionListItems.innerHTML = '';

    // Append all submissions to the list
    previousSubmissions.forEach(submission => {
        const newItem = document.createElement('li');
        newItem.textContent = submission;
        submissionListItems.appendChild(newItem);
    });

    // Append emotions to the list
    const emotions = ['happy', 'excite', 'sad', 'anger', 'fear', 'anxious', 'disappoint', 'confuse', 'calm', 'embarass', 'affection', 'exhaust'];
    emotions.forEach(emotion => {
        const checked = localStorage.getItem(`${emotion}Checked`);
        if (checked === 'true') {
            const listItem = document.createElement('li');
            listItem.textContent = emotion.charAt(0).toUpperCase() + emotion.slice(1);
            submissionListItems.appendChild(listItem);
        }
    });
});
