document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const submissionListDiv = document.getElementById('submissionList');

    document.getElementById('submitButton').addEventListener('click', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault(); 

        // Get the value of the input fields
        const p4text = document.getElementById('p4text').value;
        

        // Save the values to local storage
        localStorage.setItem('p4text', p4text);
    

        // Redirect to the next page
        window.location.href = 'page5.html';
    });
});