//js for login

let tokens = {
  access_token:"",
  refresh_token:""
}
form =document.getElementById('form')

form.addEventListener('submit',function(e){
      e.preventDefault()

      var name=document.getElementById('username').value
      var password=document.getElementById('password').value
      
      fetch("https://freddy.codesubmit.io/login",{
        method:'POST',
        body:JSON.stringify({
          username:name,
          password:password
        }),
        headers:{
           "content-type" : "application/json; charset=UTF-8" 
        }
          
      })
    .then(function(response){
        return response.json()
        
        
      })
    .then(function(data){
        tokens.access_token = data.access_token
        tokens.refresh_token = data.refresh_token
        localStorage.setItem("access_token",tokens.access_token)
        localStorage.setItem("refresh_token",tokens.refresh_token)
        window.location.href="dashboard.html"

        
      })


    });

 
 
 