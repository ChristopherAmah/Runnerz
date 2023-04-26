fetch('login.json')
.then(response => response.json())
.then(data => {
 
  document.getElementById('floatingInput').value = data.username;
  document.getElementById('floatingPassword').value = data.password;
})
.catch(error => console.error(error));