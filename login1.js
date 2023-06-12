const users = {
    "moyo": {
      "username":"Moyo",
      "password": "moyo123", 
      "email": "moyo@gmail.com"
    },
    "chris": {
      "username":"Chris",
      "password": "chris123",
      "email": "chris@gmail.com"
    } 
  };


function checkCredentials(event) {
  event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (users[username] && users[username].password === password) {
      //stores details
      localStorage.setItem("loggedInUser", JSON.stringify(users[username]));

      window.location.href = "index.html";
    } else {
      alert("Incorrect username or password");
    }
  }