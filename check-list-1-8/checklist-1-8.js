/* ১. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট দেখাবে। */
setTimeout(()=>{
    console.log('It work after 3.5 secound');
},3500)

/* ২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও  */

const promptButton =()=>{
    const promtvalue = prompt('Enter a Number');
    const sum = Number(promtvalue) + 200;
    alert(`sum result with 200 is = ${sum}`);
}
/* ৩. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও  */
const confirmButton =()=>{
    const confirmvalue = confirm('Are yoou want to see website href');
    if(confirmvalue){
        alert(location.href);
        console.log(location.href);
    }
    else{
        console.log(false);
    }
}
/* ৪. Cookies কি জিনিস। এইটা দিয়ে কি করা হয়। সেটা ইংরেজিতে ৫ থেকে ৭ লাইনের মধ্যে লিখে ফেলো।  */
/* 
1.Cookies can save your Data 
2.it can tracking your movement...so you can sow product like you search
3.it can save your userId and passord..for this if you login a website first time cannot give userId and passord 
4.but some website used temporary cookies ....so website need userId and pass everytime
5.website can count total user by cookie becuse every user id havea id by cookie
6.if you visit a website many time website can understand you a same user by cookie id
*/

/* ৫. local storage আর session storage এর মধ্যে তিনটা পার্থক্য লিখে ফেলো। ইংরেজিতে। (নিজের মতো করে লিখবে ) */
/*
--------------------cookies---- local storage-------session storage 
1.capasity---smaller than local and session----bigger than sesion and cookie---smaller than local

2.browser------HTML4/5------HTML5------------HTML4/5
3.accessible------any window------any window------------same tab
4.expires------manually------never------------tab close
5.storage------browser and server------browser only------------browser only

*/



// [হোম ওয়ার্ক] 
/* 
৬. জাভাস্ক্রিপ্ট এর কোড কিভাবে ব্রাউজারের মধ্যে রান করে। দরকার হলে গুগল বা ইউটিউবে সার্চ দিয়ে একটু ভালো করে দেখে রাখো।  */

/* ৭. জাভাস্ক্রিপ্ট এর কোন কোন জিনিস asynchronous সেটার একটা লিষ্ট গুগলে সার্চ দিয়ে বের করে ফেলো। এবং এই asynchronous বলতে কি বুঝায় সেটাও দেখে রাখো।  */

/* ৮. event loop লুপ কি জিনিস। এই রিলেটেড পুরা জিনিসটা আজকে অনেকেই বুঝবে না। তাও আরেকবার দেখে রাখবে।  */