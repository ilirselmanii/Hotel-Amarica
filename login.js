function validateRegistrationForm() {
    // Get the values of the input fields
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Validate the input values
    if (username == "") {
      alert("Please enter a username");
      return false;
    }
    if (email == "") {
      alert("Please enter an email address");
      return false;
    }
    if (password == "") {
      alert("Please enter a password");
      return false;
    }
    if (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
      alert("Password must contain both letters and numbers");
      return false;
    }

    // If all input values are valid, submit the form
    return true;
  }

  function validateLoginForm() {
    // Get the values of the input fields
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validate the input values
    if (username == "") {
      alert("Please enter a username");
      return false;
    }
    if (password == "") {
      alert("Please enter a password");
      return false;
    }

    // If all input values are valid, submit the form
    return true;
  }