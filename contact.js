function validateForm() {
    // Get the values of the input fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Validate the input values
    if (name == "") {
      alert("Please enter your name");
      return false;
    }
    if (email == "") {
      alert("Please enter your email address");
      return false;
    }
    if (message == "") {
      alert("Please enter a message");
      return false;
    }
  
    // If all input values are valid, submit the form
    return true;
  }