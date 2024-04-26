let productDiv=document.querySelector(".product");
let categoryListDiv=document.querySelector(".categorylist");
let product;
let finalproduct;
let mens = document.querySelector(".men");
let women = document.querySelector(".women");
let kids = document.querySelector(".kids");
let span = document.querySelector("span");


let compare= async (str)=>
{
    product =await fetch("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json");
finalproduct=await product.json();
finalproduct.categories.forEach(element=>
{
    if(element.category_name==str)
    {
        //console.log(element);
        displayProduct(element);
    }
});
}




let displayProduct= async (element)=>{

        // finalproduct.categories.forEach(element => {
        //     console.log(element.category_name);

            productDiv.innerHTML="";
            categoryListDiv.innerHTML="";
        // let x=finalproduct.categories;

        element.category_products.forEach(ele =>
        {
           
            productDiv.innerHTML+=`<div class="productItems">
            
            <div>${ele.badge_text}</div>
            <img src="${ele.image}">
            <h3>${ele.title}</h3>
            <p>${ele.vendor}</p>
            <br>
            <p><b>Rs.${ele.price}.00</b></p>
            <p class="offprice" >${ele.compare_at_price}.00</p>
            <p class="off">${parseFloat(((ele.compare_at_price-ele.price)/ele.compare_at_price)*100).toFixed(2)}% Off</p>
            <div class="cart">Add to Cart</div>
           </div>`
                     
        } );

    }



mens.addEventListener("click",()=>
{
    console.log("Men event listener");
    
    colorchange(mens,women,kids);
    
    compare("Men");
}
);
women.addEventListener("click",("click",()=>
{
    console.log("woMen event listener");
    colorchange(women,mens,kids);
   
    compare("Women");
})
);
kids.addEventListener("click",("click",()=>
{
    console.log("kids event listener");

    colorchange(kids,mens,women);
    
    compare("Kids");
}
));
function colorchange(btn,btn2,btn3)
{
    btn.style.backgroundColor="black";
    btn.style.color="white";
    btn2.style.backgroundColor="#ccc";
    btn2.style.color="black";
    btn3.style.backgroundColor="#ccc";
    btn3.style.color="black";
}