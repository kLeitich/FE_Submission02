

async function dashboard(){
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
    console.log(data)
    return data;
  }catch(err){
    return err;
  }
}
 dashboard()












// Js for week bar graph
const week = document.getElementById("graph");

const graphDataWeek = {
  
  data: [{
      name: "today",
      value: 30,
    },
    {
      name: "yesterday",
      value: 20,
    },
    {
      name: "day 3",
      value: 80,
    },
    {
      name: "day 4",
      value: 30,
    },
    {
      name: "day 5",
      value: 20,
    },
    {
      name: "day 6",
      value: 80,
    },
     {
       name:"day 7"
     }
  ]
}

function createGraphIn(week, graphDataWeek) {
  
  const numOfBars = graphDataWeek.data.length;
  var barContainer = document.createElement("div");
  barContainer.classList.add("bar-container");
  for (var i = 0; i < numOfBars; i++) {
    var currentData = graphDataWeek.data[i];
    
    var bar = document.createElement("div");
    bar.classList.add('bar');
    bar.style.height = currentData.value + "%";
    barContainer.appendChild(bar);
    
    var barDescription = document.createElement("p");
    barDescription.classList.add('desc');
    barDescription.innerText = currentData.name;
    bar.appendChild(barDescription);
  }
  week.appendChild(barContainer); 
}
createGraphIn(week, graphDataWeek);

// Js for year bar graph
const year = document.getElementById("graph1");

const graphDataYear = {
  
  data: [{
      name: "this month",
      value: 30,
    },
    {
      name: "last month",
      value: 20,
    },
    {
      name: "month 3",
      value: 80,
    },
    {
      name: "month 4",
      value: 30,
    },
    {
      name: "month 5",
      value: 20,
    },
    {
      name: "month 6",
      value: 80,
    },
     {
       name:"month 7",
       value:100
     },
     {
       name: "month 8",
       value: 80,
     },
     {
       name: "month 9",
       value: 30,
     },
     {
       name: "month 10",
       value: 20,
     },
     {
       name: "month 11",
       value: 80,
     },
      {
        name:"month 12",
        value:100
      }
  ]
}

function createGraphIn(year, graphDataYear) {
  
  const numOfBars = graphDataYear.data.length;
  var barContainer = document.createElement("div");
  barContainer.classList.add("bar-container");
  for (var i = 0; i < numOfBars; i++) {
    var currentData = graphDataYear.data[i];
    
    var bar = document.createElement("div");
    bar.classList.add('bar');
    bar.style.height = currentData.value + "%";
    barContainer.appendChild(bar);
    
    var barDescription = document.createElement("p");
    barDescription.classList.add('desc');
    barDescription.innerText = currentData.name;
    bar.appendChild(barDescription);
  }
  year.appendChild(barContainer); 
}
createGraphIn(year, graphDataYear);



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


