// Js for week bar graph
var canvasElement=document.getElementById("week");
var config ={
    type: "bar",
    data: {
        labels:["Today","yesterday","Day 3","Day 4","Day 5","Day 6","Day 7"],
        datasets:[{
            label:"number of orders",
            data:[20,30,40,50,70,80,100],
            backgroundcolor:["rgb(0,0,0)","rgb(0,0,0)","rgb(0,0,0)","rgb(0,0,0)","rgb(0,0,0)","rgb(0,0,0)","rgb(0,0,0)"]

        }],
    }
}

var weekChart= new Chart(canvasElement,config)

// Js for year bar graph
var canvasElement=document.getElementById("year");
var config ={
    type: "bar",
    data: {
        labels:["this month","last month","month 3","month 4","month 5","month 6","month 7","month 8","month 9","month 10","month 11","month 12"],
        datasets:[{
            label:"number of orders",
            data:[20,30,40,50,70,80,100,120,200,1000,3000,4000],

        }],
    }
}

var yearChart= new Chart(canvasElement,config)

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


