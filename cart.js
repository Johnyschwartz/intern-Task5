let cart =
JSON.parse(localStorage.getItem("cart"))
|| [];



function addToCart(id){


let product =
products.find(
item=>item.id===id
);



cart.push(product);



localStorage.setItem(
"cart",
JSON.stringify(cart)
);


alert("Added to cart");


}



function removeFromCart(index){


cart.splice(index,1);


localStorage.setItem(
"cart",
JSON.stringify(cart)
);


router();


}