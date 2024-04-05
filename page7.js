document.addEventListener('DOMContentLoaded', () => {
    // Add event listener to the submit button
    document.getElementById('submitButton').addEventListener('click', function(event) {
        // Prevent the default button behavior
        event.preventDefault(); 

        // Get the value of the input field
        const p7text = document.getElementById('p7text').value;

        // Save the value to local storage
        localStorage.setItem('p7text', p7text);

        // Redirect to the next page
        window.location.href = 'page8.html';
    });

    // Add event listener to the back button
    document.querySelector('.backBtn').addEventListener('click', function() {
        // Redirect to the previous page
        window.location.href = 'page6.html';
    });
});
