let formSearch= document.getElementById("search")

formSearch.addEventListener('submit',function(e){
  e.preventDefault()
  let searchTerm = document.getElementById("search_term").value;
  search(searchTerm)
});
let search_term=""
 function search(search_term){
   
    try{
      let access_token = localStorage.getItem("access_token")
      fetch(`https://freddy.codesubmit.io/orders?page=1&q=${search_term}`,{
        method: 'get',
        headers: {
          "Authorization": "Bearer " +access_token,
          "content-type" : "application/json; charset=UTF-8"
        },
        mode: 'cors',
        cache: 'default'
      }).then(res=>res.json()).then((data)=>{
        

        //populating the order search table
        let order =data.orders
        
    const list_element = document.getElementById("order_table")
    const pagination_element = document.getElementById("pagination")
    let current_page = 1;
    let rows = 10;

    function pagination(items,wrapper,rows_per_page,page) {
      
      wrapper.innerHTML="";
      page --;

      let start= rows_per_page*page;
      let end = start+ rows_per_page;
      let paginated_items=items.slice(start,end)
      console.log(paginated_items)
      let tableData="";
        paginated_items.map((values)=>{
        tableData+=` <tr>
        <td>${values.product.name}</td>
        <td>${values.created_at}</td>
        <td>${values.total}</td>
        <td class="status">${values.status}</td>
        </tr>`
     
    });
    
    document.getElementById("order_table").innerHTML= tableData;
      
    }
    

    function setupPagination(items,wrapper,rows_per_page) {
      let page_count =Math.ceil(items.length/rows_per_page);
      let page_array =[]
      for (let i = 1;i<page_count+1;i++){
        page_array.push(i)
        
      }
      
      document.getElementById('arrow').addEventListener("click",function (){

       console.log(++current_page)
       pagination(order,list_element,rows,current_page);
    
        // }
      })
      
    }
    pagination(order,list_element,rows,current_page);
    setupPagination(order,pagination_element,rows)
   
      })

    }catch(err){
      return err;
    } 
    
    
  
  }
   search(search_term)

document.getElementById("logOut").addEventListener("click",function () {
  window.location.href="index.html";
  localStorage.clear();

  
})



// let formSearch= document.getElementById("search")

// formSearch.addEventListener('submit',function(e){
//   e.preventDefault()
//   let searchTerm = document.getElementById("search_term").value;
//   search(searchTerm)
// });
// let search_term=""
//  function search(search_term){
   
//     try{
//       let access_token = localStorage.getItem("access_token")
//       fetch(`https://freddy.codesubmit.io/orders?page=1&q=${search_term}`,{
//         method: 'get',
//         headers: {
//           "Authorization": "Bearer " +access_token,
//           "content-type" : "application/json; charset=UTF-8"
//         },
//         mode: 'cors',
//         cache: 'default'
//       }).then(res=>res.json()).then((data)=>{
        
//         let order =data.orders
//         const list_element = document.getElementById("order_table")
//     const pagination_element = document.getElementById("pagination")
//     let current_page = 1;
//     let rows = 10;

//     function pagination(items,wrapper,rows_per_page,page) {

//       wrapper.innerHTML="";
//       page --;

//       let start= rows_per_page*page;
//       let end = start+ rows_per_page;
//       let paginated_items=items.slice(start,end)
//       console.log(paginated_items)
//       let tableData="";
//         paginated_items.map((values)=>{
//         tableData+=` <tr>
//         <td>${values.product.name}</td>
//         <td>${values.created_at}</td>
//         <td>${values.total}</td>
//         <td id="status">${values.status}</td>
//         </tr>`
     
//     });
    
//     document.getElementById("order_table").innerHTML= tableData;
//       //   console.log(order)
//       //   let tableData="";
//       //   order.map((values)=>{
//       //   tableData+=
//       //   ` 
//       //   <tr>
//       //   <td>${values.product.name}</td>
//       //   <td>${values.created_at}</td>
//       //   <td>${values.total}</td>
//       //   <td class="status">${values.status}</td>
//       //   </tr>`
//       // if (values.status=="shipped"){
//       //   document.getElementsByClassName("status").style = "green"
//       //   console.log("i am here")

//       // }
    
//     // document.getElementById("order_table").innerHTML= tableData;
//     // },


//     )}catch(err){
//       return err;
//     } 
    
    
 
//   }
// search(search_term)

// // const colorChange =async ()=>{
// //   const results = await search(search_term)
// //   let statusText = document.getElementById("status")
// //   console.log(results)
// // }
// // colorChange()

// // let statusText = document.getElementById("status").value
// // console.log(statusText)
//   //  if(tableData.values.status== "shipped"){
//   //    status.appendChild("text-dark")
//   //  }

//    //function pagination

// $(document).ready(function () {
//   $('#example').DataTable({
//       pagingType: 'full_numbers',
//   });
// })



//    //function to logout

// document.getElementById("logOut").addEventListener("click",function () {
//   window.location.href="index.html";
//   localStorage.clear();

  
// });