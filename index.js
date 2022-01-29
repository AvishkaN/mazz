let see_mor = document.querySelector(".see_more")
let distric = document.querySelector(".place-link-all")

see_mor.addEventListener("click" , () => {
    distric.style.height = "100%"
    distric.style.overflow = "visible"
    see_mor.style.display = "none"
})


var Search_Bar = document.querySelector(".serach-bar")
var open_Btn2 = document.querySelector(".search-s")
var close_Btn2 = document.querySelector(".close-search")
var menu_open_Btn = document.querySelector(".menu-serach-icon")

var login_Bar = document.querySelector(".login-bar")
var open_Btn3 = document.querySelector(".open-login")
var close_Btn3 = document.querySelector(".close-login")

var Menu_Bar = document.querySelector(".menu-bar")
var open_Btn = document.querySelector(".open-menu")
var close_Btn = document.querySelector(".close-menu")


open_Btn.addEventListener("click" , () =>{
  Menu_Bar.style.left ="0";
  Search_Bar.style.right ="-100%";
  login_Bar.style.right ="-100%";

})

close_Btn.addEventListener("click" , () =>(
  Menu_Bar.style.left ="-100%"
))


menu_open_Btn.addEventListener("click" , () => {
     Search_Bar.style.right ="0";
     login_Bar.style.right ="-100%";
     console.log("sdasa")
})

open_Btn2.addEventListener("click" , () =>{
   Search_Bar.style.right ="0";
   Menu_Bar.style.left ="-100%"

})

close_Btn2.addEventListener("click" , () =>(
   Search_Bar.style.right ="-130%"
))
  //  rerere


open_Btn3.addEventListener("click" , () =>{
   login_Bar.style.right ="0";
   Menu_Bar.style.left ="-100%";
   Search_Bar.style.right ="-100%";

})

close_Btn3.addEventListener("click" , () =>(
   login_Bar.style.right ="-130%"
))



let show_btn_cat = document.querySelector(".category-show-btn") 
let hide_btn_cat = document.querySelector(".category-hide-btn") 


show_btn_cat.addEventListener("click" , ()=>{
      document.querySelector(".Location").style.top ="0%";
})

hide_btn_cat.addEventListener("click" , ()=>{
      document.querySelector(".Location").style.top ="-100%";
})

let maincat = document.querySelectorAll(".main-cat-link");
let subcat = document.querySelectorAll(".sub-cat");


maincat.forEach(btn =>{
    btn.addEventListener("click" , ()=>{
        btn.classList.add("active")
       
        const filletrvalue = btn.getAttribute("data-fillter")
        console.log(filletrvalue)

    subcat.forEach(ulist =>{
        if(ulist.classList.contains( filletrvalue )){
            ulist.classList.toggle("display")
        }

        else{
            ulist.classList.remove("display")
        }
    })

    })

})



let show_btn_loc = document.querySelector(".location-show-btn") 
let hide_btn_loc = document.querySelector(".location-hide-btn") 


show_btn_loc.addEventListener("click" , ()=>{
      document.querySelector(".loc").style.top ="0%";
})

hide_btn_loc.addEventListener("click" , ()=>{
      document.querySelector(".loc").style.top ="-100%";
})


let districlist = document.querySelectorAll(".distric-link-private");
let places = document.querySelectorAll(".place");


districlist.forEach(btn =>{
    btn.addEventListener("click" , ()=>{
       
        const dtavalue = btn.getAttribute("data-fillter")
        console.log(dtavalue)

    places.forEach(place =>{
        if(place.classList.contains( dtavalue )){
            place.classList.add("place-show")
        }

        else{
            place.classList.remove("place-show")
        }
    })

    })
})


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3500); // Change image every 2 seconds
} 