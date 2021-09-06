/* ৯. একটা সিম্পল ওয়েবসাইট বানাও। সেখানে দুইটা ইনপুট ফিল্ড থাকবে। একটা ফিল্ডে লিখবে প্রোডাক্ট এর নাম। আর সেকেন্ড ইনপুট ফিল্ডে থাকবে প্রোডাক্ট এর প্রাইস। তারপর একটা বাটন থাকবে। সেই বাটনে চাপ দিলে। প্রোডাক্ট এর নাম আর দাম ব্রাউজারের লোকাল স্টোরেজে সেইভ হয়ে যাবে। এবং চাইলে একাধিক প্রোডাক্ট এবং সেটার দাম লোকাল স্টোরেজে সেইভ করতে পারবে। 

১০. যখন একটা প্রোডাক্ট এবং দাম লোকাল স্টোরেজে সেভ করবে। সেটা ওয়েবসাইট এ ও দেখাবে। এমনকি যদি ওয়েবসাইট নতুন করে লোড করে করে তাহলেও লোকাল স্টোরেজে এ সেভ হয়ে থাকা ডাটা থেকে বের করে এনে ওয়েবসাইট এ দেখাবে।  */


const addproduct =()=>{
    const productNameId = document.getElementById('product-name');
    const productNameValue = productNameId.value;
    const productPriceId = document.getElementById('product-price');
    const productPriceValue = productPriceId.value;
    const prices = 'price'
    // displayProduct(productNameValue,productPriceValue);
    addLocalStorage(productNameValue,productPriceValue);
    productNameId.value = '';
    productPriceId.value = '';
}

const displayProduct = (name,price) =>{
    const div = document.getElementById('div');
    const h1 = document.createElement('h1');
    h1.innerText = `Product Name : ${name} , Price : ${price}`;
    div.appendChild(h1);
}


const getCart = ()=>{
    const cart = localStorage.getItem('cart');
    let cartObj;
    if(cart){
        cartObj = JSON.parse(cart)
    }
    else{
        cartObj = {};
    }
    return cartObj;
}

// const addLocalStorage =(name,price)=>{
//     const cart = getCart();
//     if(cart[name]){       
//         cart[name] = cart[name] +1;
//         cart['priceOf'+name] = cart[name] * price;
//     }
//     else{
//         cart[name] = 1;
//         cart['priceOf'+name] = price;
//         // displayProduct(name,price);
        
//     }   
//     const cartStingified = JSON.stringify(cart);
//     localStorage.setItem('cart',cartStingified);
// }

const addLocalStorage =(name,price)=>{
    const cart = getCart();
    if(cart[name]){       
        cart[name] = Number(cart[name]) + 1 * price;
        displayProduct(name,cart[name]);
    }
    else{
        cart[name] = price;
        displayProduct(name,price);  
    }   
    const cartStingified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStingified);
}

const displayLocalProduct = ()=>{
    const cart = getCart();
    for(const name in cart){
        displayProduct(name,cart[name]);
    }
}

displayLocalProduct();



const placeOrder=()=>{
    document.getElementById('div').textContent = '';
    localStorage.removeItem('cart');
}