//function for getting dashboard data

 var dashboard = async function (){
  
  try{
    let access_token = localStorage.getItem("access_token")
    console.log(access_token)
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
    
    console.log(data)

    //populating the best sellers table
    let bestSeller =data.dashboard.bestsellers
    let tableData="";
    bestSeller.map((values)=>{
      tableData+=` <tr>
      <td>${values.product.name}</td>
      <td>${values.revenue/values.units}</td>
      <td>${values.units}</td>
      <td>${values.revenue}</td>
    </tr>`
     
    });
    document.getElementById("table_body").innerHTML= tableData;

    //bar graph data for week from api
    let salesWeek=data.dashboard.sales_over_time_week;
    // console.log(salesWeek[1].total)
    document.getElementById("today").innerHTML= `<p>$${salesWeek[1].total} / ${salesWeek[1].orders} orders</p>`;
    let weekData=[];
    for (i in salesWeek){
      weekData+=salesWeek[i].total+ ","
    }
    
    var wLabel = ["today", "yesterday", "day 3", "day 4", "day 5","day 6","day 7"];
    
    new Chart("myChart", {
      type: "bar",
      data: {
        labels: wLabel,
        datasets: [{
          minBarLength: 40,
          data: weekData
        }]
      },
      options: {
        plugins: {
          legend: {
              display: false,
             
          }
      }
      }
    });

    //bar graph data for year from api
    let salesYear=data.dashboard.sales_over_time_year;
    document.getElementById("lMonth").innerHTML= `<p>$${salesYear[1].total} / ${salesYear[1].orders} orders</p>`;
    // console.log(salesYear)
    let yearData=[];
    for (i in salesYear){
      yearData+=salesYear[i].total+ ","
    }
   
    var yLabel = ["this month", "last month", "month 3", "month 4", "month 5","month 6","month 7", "month 8", "month 9", "month 10","month 11","month 12"];
    
    new Chart("myChartY", {
      type: "bar",
      data: {
        labels: yLabel,
        datasets: [{
          minBarLength: 2,
          data: yearData
      }]
      },
      options: {
        
        plugins: {
          legend: {
              display: false,
             
          }
      }
      }
    });

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
    localStorage.access_token = data.access_token
    dashboard()
    return data;
  }catch(err){
    return err;
  } 
  
}
// refresh()

setInterval(refresh,3000)

//function for switch between week and year bar graph

function toggleDiv(week,year)
{
   week = document.getElementById(week);
   year = document.getElementById(year);
   if( year.style.display == "none" )
   {
      week.style.display = "none";
      year.style.display = "block";
   }
   else
   {
      week.style.display = "block";
      year.style.display = "none";
   }
}

document.getElementById("logOut").addEventListener("click",function () {
  window.location.href="index.html";
  localStorage.clear();

  
})