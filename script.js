function addtocart(nameid, priceid, qtyid){
  let name = document.getElementById(nameid).innerText;
  let price = parseInt( document.getElementById(priceid).innerText);
  let qty = parseInt( document.getElementById(qtyid).value );
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
  alert(name + "added to cart!");
}
if(document.getElementById("cartlist")){
  document.getElementById("cartlist").innerHTML = localStorage.getItem("cart");

  document.getElementById("total").innerHTML = localStorage.getItem("Total");
}
function clearcart(){
  localStorage.removeItem("cart");
  localStorage.removeItem("Total");
  document.getElementById("cartlist").innerHTML="";
    document.getElementById("totalprice").innerHTML="$0";
alert("Cart has been cleared!");
}
