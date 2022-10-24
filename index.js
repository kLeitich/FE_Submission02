//function for getting dashboard data
 
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

//function to refresh token

var refresh = async function (){
  
  try{
    let refresh_token = localStorage.getItem("refresh_token")
    let response = await fetch("https://freddy.codesubmit.io/refresh",{
      method: 'post',
      headers: {
        "Authorization": "Bearer " +refresh_token,
        "content-type" : "application/json; charset=UTF-8"
      },
      mode: 'cors',
      cache: 'default'
    });
    let data = await response.json();
    tokens.access_token = data.access_token
    localStorage.setItem("access_token",tokens.access_token)
    console.log(data)
    return data;
  }catch(err){
    return err;
  } 
  
}
// refresh()

//Js for week bar graph

var xValues = ["today", "yesterday", "day 3", "day 4", "day 5","day 6","day 7"];
var yValues = [];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
    }
  }
});