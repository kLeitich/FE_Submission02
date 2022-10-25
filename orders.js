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
        // console.log(data)

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
        <td id="status">${values.status}</td>
        </tr>`
     
    });
    
    document.getElementById("order_table").innerHTML= tableData;
      // for (i = 0;i<paginated_items.length;i++){
      //   // let item = paginated_items[i];
      //   // let item_element=document.createElement("div");
      //   // item_element.classList.add('item');
      //   // item_element.innerText = item
      // }
      
    }
    

    function setupPagination(items,wrapper,rows_per_page) {
      wrapper.innerHTML="";
      let page_count =Math.ceil(items.length/rows_per_page);
      for (let i = 1;i<page_count+1;i++){
        let btn = paginationButton(i,items)
        console.log(i)
        wrapper.appendChild(btn)

      }
      
    }
    function paginationButton(page,items){
      let button = document.createElement("button");
      button.innerText =page;

      if (current_page == page){
        button.classList.add("active");
        button.addEventListener("click", function (){
          current_page = page;
          pagination(order,list_element,rows,current_page);

          let current_button = document.querySelector(".pageNumbers button.active")
          current_button.classList.remove("active");
          button.classList.add('active')
        });
        
      }
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
   