const app =
document.getElementById("app");



function router(){


let route =
window.location.hash;



if(route==="#/products"
|| route===""){


showProducts();


}


else if(route==="#/cart"){


showCart();


}


else{


showHome();


}


}




function showHome(){


app.innerHTML=`

<h2>
Welcome to ShopEasy
</h2>

<p>
Online product shopping platform
</p>

`;

}



function showProducts(){


app.innerHTML=`

<h2>
Products
</h2>

<div class="products">

${products.map(product=>`

<div class="card">


<img 
src="${product.image}"
loading="lazy">


<h3>
${product.name}
</h3>


<p>
₹${product.price}
</p>


<button onclick="addToCart(${product.id})">

Add Cart

</button>


</div>


`).join("")}


</div>

`;

}



function showCart(){


app.innerHTML=`

<h2>
Shopping Cart
</h2>


${cart.map((item,index)=>`

<div class="card">


<h3>
${item.name}
</h3>


<p>
₹${item.price}
</p>


<button onclick="removeFromCart(${index})">

Remove

</button>


</div>


`).join("")}


`;

}



window.addEventListener(
"hashchange",
router
);



router();