/*  fetch('login.json')
.then(response => response.json())
.then(data => {
 
  document.getElementById('floatingInput').value = data.username;z
  document.getElementById('floatingPassword').value = data.password;
  alert ('Log-in Successful');
})
.catch(error => console.error());
*/


fetch('login.json')
.then(response => response.json())
.then(data => {
    let userid = 1;
    const users = data.user

    const userData =users.find(user=> user.id === userid);
    // const userData = users.filter((user)=>{
    //     return user.id==userid
    // })
    if (userData) {
        console.log(userData);
    }else{
        console.error('User not found');
    }

  /*document.getElementById('floatingInput').value = data.username;
  document.getElementById('floatingPassword').value = data.password;
  alert ('Log-in Successful');*/
})
.catch(error => console.error(error));

