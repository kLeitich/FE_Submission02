//js for login
var form =document.getElementById('form')

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
        return response
        console.log(response)
      })
    .then(function(data){
        return data
        console.log(data)
      })


    })