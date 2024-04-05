document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const submissionListDiv = document.getElementById('submissionList');

    document.getElementById('submitButton').addEventListener('click', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault(); 

        // Get the value of the input fields
        const p2range = document.getElementById('p2range').value;
        

        // Save the values to local storage
        localStorage.setItem('p2range', p2range);
    

        // Redirect to the next page
        window.location.href = 'page3.html';
    });
});