//text
let sidebar = document.querySelectorAll(".sidebar .navigation ul li a > span");
let uli = document.querySelector(".sidebar .navigation ul");

//content
let main = document.querySelectorAll(".main > div");
let divi = document.querySelector(".main");
//icon
let main2 = document.querySelectorAll(".navigation ul li a > i");
let icon = document.querySelector(".sidebar .navigation ul ");
//a
let a_click_many = document.querySelectorAll(".navigation ul li > a");
let a_click = document.querySelector(".navigation ul");


//alert(parseInt(trys.getPropertyValue("height")));

let scroll_div = document.querySelector(".about-container");



for(let i = 0 ; i < sidebar.length; i++){
    a_click_many[i].addEventListener("click",function(){

      
        a_click.querySelector(".acts").classList.remove("acts");
        a_click_many[i].classList.add("acts");

        uli.querySelector(".active").classList.remove("active");
        sidebar[i].classList.add("active");

        divi.querySelector(".active").classList.remove("active");
        main[i].classList.add("active");
        main[i].scrollTop = 0;
        
        icon.querySelector(".actives").classList.remove("actives");
        main2[i].classList.add("actives");

        
    });
}

//When Snap Scroll it will active the next scroll
let scroll_div_length = document.querySelectorAll(".about-container > div");

var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, { threshold: 0.5 });

  scroll_div_length.forEach(function(section) {
    observer.observe(section);
});

//Changing Active for Container / Navigation Icon and A
let box2 = document.querySelector(".box:nth-child(2)");

box2.addEventListener("click",function(){
  uli.querySelector(".active").classList.remove("active");
  sidebar[2].classList.add("active");

  divi.querySelector(".active").classList.remove("active");
  main[2].classList.add("active");
  main[2].scrollTop = 0;
  
  icon.querySelector(".actives").classList.remove("actives");
  main2[2].classList.add("actives");

});

// Email Sending
var btn = document.getElementById("btn");
btn.addEventListener("click",function(e){
    var user = document.getElementById("user").value;
    var messages = document.getElementById("message").value;
    
    var subject = document.getElementById("subject").value;

    var body = "By: " + user + '<br>' + messages; 
    e.preventDefault()
    //email
    Email.send({
    SecureToken : "292f8872-8715-45d6-a192-226ec8a1a7a2",
    To : 'rencelltobelonia67@gmail.com',
    From : 'rencelltobelonia67@gmail.com',
    Subject : subject,
    Body : body
    
    }).then(
    
    message => alert(message)
    
    );
    //clear fields
    clear()
})

function clear(){
    document.getElementById("user").value = "";
    document.getElementById("message").value = "";
    document.getElementById("subject").value = "";
}