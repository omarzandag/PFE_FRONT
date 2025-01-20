// Select the button and inputs
const loginButton = document.getElementById("login-btn");
const employeeId = document.getElementById("employee-id");
const password = document.getElementById("password");
// Predefined credentials
const admin_Username = "admin";
const admin_Password = "x";

const emp_Username = "user";
const emp_Password = "x";

// Get the form element
const loginForm = document.getElementById("loginForm");

// Add an event listener for form submission
loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get the username and password values
    const username = document.getElementById("employee-id").value;
    const password = document.getElementById("password").value;

    // Validate the credentials
    if (username === emp_Username  && password === emp_Password) {
        // Redirect to the home page
        window.location.href = "/emp/acceuil_emp.html";

        }else if(username === admin_Username && password === admin_Password){
          window.location.href = "/admin/Acceuill_adm.html";
      
    } else {
        // Show an error message
        const errorMessage = document.getElementById("errorMessage");
        errorMessage.style.display = "block";
    }
});

// Add a click event listener to the button
loginButton.addEventListener("click", function () {
  // Check if the ID or password is empty
  if (employeeId.value.trim() === "" || password.value.trim() === "") {
    // Show a prompt at the top of the page
    alert("tu dois entrer le id et le mot de passe");
  } else {
  }
});
