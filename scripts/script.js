//On load, fire this function
window.addEventListener("load", function() {
    hideOutput();
    //Store the user input field as a global variable
    var user = document.forms[0].credentials;
    //Store the password input field as a global variable
    var password = document.forms[0].password;
    //Store the validateBtn as a variable for local use
    let validateBtn = document.getElementById('validateBtn');
    //Listen for this button to be clicked, then call the validateContent() function
    validateBtn.addEventListener('click', validateContent);

    //A function of functions
    function validateContent() {
        if(!user.value || user.value === "") {
            highlightUser();
        } else if(!password.value || password.value === "") {
            highlightPassword();
        } else {
            showContent();
            displayCredentials();
        }
    }
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
        //This will set these variables to the value of their input field's when the function is called
        var validUser = document.forms[0].credentials.value;
        var validPassword = document.forms[0].password.value;

        //Populate the valid credentials
        document.getElementById('validUser').innerHTML += ` ${validUser}`;
        document.getElementById('validPassword').innerHTML += ` ${validPassword}`;
    }
});