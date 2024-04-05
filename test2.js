document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const submissionListDiv = document.getElementById('submissionList');

    document.getElementById('submitButton').addEventListener('click', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault(); 

        // Get the value of the input fields
        const p8text = document.getElementById('p8text').value;
        

        // Save the values to local storage
        localStorage.setItem('p8text', p8text);
    

        // Redirect to the next page
        window.location.href = 'end.html';
    });
});