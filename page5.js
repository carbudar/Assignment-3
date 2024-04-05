document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const submissionListDiv = document.getElementById('submissionList');

    document.getElementById('submitButton').addEventListener('click', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault(); 

        // Get the value of the input fields
        const p5text = document.getElementById('p5text').value;
        

        // Save the values to local storage
        localStorage.setItem('p5text', p5text);
    

        // Redirect to the next page
        window.location.href = 'page6.html';
    });
});