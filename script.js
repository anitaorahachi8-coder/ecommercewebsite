function addtocart(name, price, qty){
  let name = document.getElementById(p1).innerText;
  let price = parseInt( document.getElementById(price1).innerText;
  let qty = parseInt( document.getElementById(qtyId).value );
  let total = price*qty
  let store = localStorage.getItem("cart");
  if(store == null){
    store = "";
  }
  store +=
    "Product: "+ name +
    "/Price: $" + price +
    "/Quantity: "+ qty +
    "/Amount:$" + total+
    "<br> <br>";
  localStorage.setItem("cart",store);
  let grandTotal = localStorage.getItem("Total");
  if(grandTotal == null){
    grandTotal = 0;
  }
  grandTotal = Number(grandTotal) + Number(total);
  localStorage.setItem("Total",grandTotal);
  
}
if(document.getElementById("cartlist")){
  document.getElementById("cartlist").innerHTML = localStorage,getItem("cart");

  document.getElementById("total").innerHTML = localStorage.getItem("Total");
}
