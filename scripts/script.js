//On load, fire this function
window.addEventListener("load", function() {
    //Hide the success message
    hideOutput();
    //Store the entire form as a global variable
    var userForm = document.forms.userForm;
    //Store the user input field as a global variable
    var user = userForm.username;
    //Store the password input field as a global variable
    var password = userForm.password;


    //Listen for this button to be clicked, then call the validateContent() function
    userForm.addEventListener("submit", function(event) {
        event.preventDefault();
        if (!user.value || user.value === "") {
            highlightUser();
        } else if (!password.value || password.value === "") {
            highlightPassword();
        } else {
            //Reveal the hidden area
            showContent();
            //Display the validated credentials
            displayCredentials();
        }
    });


    //Hides the output area below the form
    function hideOutput() {
        document.getElementById('hiddenArea').style.display = 'none';
    }
    //Show the output area below the form
    function showContent() {
        document.getElementById('hiddenArea').style.display = 'inline';
    }
    //Set the 'user' input field to pink
    function highlightUser() {
        user.focus();
        user.style.backgroundColor = "pink";
    }
    //Set the 'password' input field to pink
    function highlightPassword() {
        password.focus();
        password.style.backgroundColor = "pink";
    }

    function displayCredentials() {
        //Capture the valid username
        var validUser = userForm.username.value;
        //Capture the valid password
        var validPassword = userForm.password.value;
        //Capture the paragraph for the username output
        var userOutput = document.getElementById('validUser');
        //Capture the paragraph for the password output
        var passwordOutput = document.getElementById('validPassword');

        //Populate the valid credentials
        userOutput.innerText += ` ${validUser}`;
        passwordOutput.innerText += ` ${validPassword}`;
    }
});