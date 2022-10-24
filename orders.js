var dashboard = async function (){
  
    try{
      let access_token = localStorage.getItem("access_token")
      let response = await fetch("https://freddy.codesubmit.io/dashboard",{
        method: 'get',
        headers: {
          "Authorization": "Bearer " +access_token,
          "content-type" : "application/json; charset=UTF-8"
        },
        mode: 'cors',
        cache: 'default'
      });
      let data = await response.json();
      // let weekTotal ={}
      
      // for (i=1;i<=7;i++){
        
      //   return console.log(data.dashboard.sales_over_time_week[i].total)
        
      // }
      // // console.log(data.dashboard.sales_over_time_week[1].total)
      // console.log(weekTotal)
      console.log(data)
      return data;
    }catch(err){
      return err;
    } 
    
    
  
  }
  dashboard()