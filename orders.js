
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
        console.log(data)

        //populating the order search table
        let order =data.orders
        let tableData="";
        order.map((values)=>{
        tableData+=` <tr>
        <td>${values.product.name}</td>
        <td>${values.created_at}</td>
        <td>${values.total/values.product.quantity}</td>
        <td>${values.status}</td>
        </tr>`
     
    });
    document.getElementById("order_table").innerHTML= tableData;
      })

    }catch(err){
      return err;
    } 
    
    
  
  }
   search("cartoon")