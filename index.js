document.addEventListener("DOMContentLoaded", function() {
    // Retrieve user details from local storage
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  
    // Check if user is logged in
    if (loggedInUser) {
      document.getElementById("loggedInUsername").textContent = "Welcome, " + loggedInUser.username;
    } else {
      // Redirect to login page if user is not logged in
      window.location.href = "login.html";
    }
  });