document.addEventListener("DOMContentLoaded",function(){ 
    const form = document.getElementById('userForm');
    const submissionListDiv = document.getElementById('submissionList');//page1


    document.querySelector("#name").addEventListener("keyup",function(){
        let val = this.value;
       localStorage.setItem("name", val)
    })
    document.getElementById('submitButton').addEventListener('click', function(event) {//end
        // Prevent the default form submission behavior
        event.preventDefault(); 

        // Get the value of the input fields
        const name = document.getElementById('name').value;
        const dayDate = document.getElementById('dayDate').value;

        // Check if the name and dayDate fields are not empty
        if (name.trim() === '' || dayDate.trim() === '') {
            alert('Please fill out both Name and Day/Date fields.');
            return; // Exit the function if fields are not filled out
        }

        
        // Save the values to local storage
        localStorage.setItem('name', name);
        localStorage.setItem('dayDate', dayDate);

        // Redirect to the submission page
        window.location.href = 'page1.html';
    });
})


