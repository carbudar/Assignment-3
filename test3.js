document.addEventListener('DOMContentLoaded', () => {
    const submissionListDiv = document.getElementById('submissionList');

    // Ensure the submission list container exists and is initially empty
    submissionListDiv.innerHTML = '<ul id="submissionListItems"></ul>';

    // Get the name from local storage
    const name = localStorage.getItem('submittedName');

    // Construct the submission text
    let submissionText = `Name: ${name}`;

    // Create a new list item for the submission
    const newItem = document.createElement('li');
    newItem.textContent = submissionText;

    // Append the new item to the submission list
    document.getElementById('submissionListItems').appendChild(newItem);
    
});
