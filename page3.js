document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const submissionListDiv = document.getElementById('submissionList');


    document.getElementById('submitButton').addEventListener('click', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault(); 

        // Get the value of the input fields
        const clock1 = document.getElementById('clock1').value;
        const clock2 = document.getElementById('clock2').value;
        const sleepQual = document.getElementById('sleepQual').value;

        // Save the values to local storage
        localStorage.setItem('clock1', clock1);
        localStorage.setItem('clock2', clock2);
        localStorage.setItem('sleepQual', sleepQual);
    

        // Redirect to the next page
        window.location.href = 'page4.html';
    });
});