[].forEach.call(document.querySelectorAll("nav > ul > li"), function (link) {
    link.addEventListener("mouseover", onEnter);
    link.addEventListener("mouseout", onLeave);
  });
  
  function onEnter() {
    this.classList.add("hover");
  }
  
  function onLeave() {
    this.classList.remove("hover");
  }
  

const circle1 = document.getElementById("second-circle");
const circle2 = document.getElementById("first-circle");
const news1 = document.querySelector(".news1");
const news2 = document.querySelectorAll(".news2 > .card");


circle1.addEventListener("click" , () => {
    for(let i=0; i< news1.children.length; i++){
        news1.children[i].style.display = "none";
    }
    for(let i=0; i< news2.length; i++){
        news2[i].style.display = "grid";
    }
    circle1.style.color = "#000000b4";
    circle2.style.color = "#171a1791";  
});


circle2.addEventListener("click" , () => {
    for(let i=0; i< news2.length; i++){
        news2[i].style.display = "none";
    }
    for(let i=0; i< news1.children.length; i++){
        news1.children[i].style.display = "grid";
    }
    circle2.style.color = "#000000b4";
    circle1.style.color = "#171a1791";
});


circle1.addEventListener("mouseover" , () => {
    circle1.style.color = "#000000b4";
    circle1.style.fontSize = "10px";
    circle2.style.color = "#171a1791"; 
});

circle1.addEventListener("mouseout" , () => {
    circle1.style.fontSize = "8px";
});

circle2.addEventListener("mouseover" , () => {
    circle2.style.color = "#000000b4";
    circle2.style.fontSize = "10px";
    circle1.style.color = "#171a1791";  
});

circle2.addEventListener("mouseout" , () => {
    circle2.style.fontSize = "8px";  
});


const dropdown = document.querySelector('.dropdown');
const header2 = document.querySelector('.header2');
const container = document.querySelector('.container');
let counter = 0;


dropdown.addEventListener('click' , () => {
    if((counter % 2) === 0 ){
        let myDiv = document.createElement('div');
        myDiv.className = "user-box";
        myDiv.innerHTML = 
            '<div class="user-prof">' + 
                '<a href="#">' +
                    '<i class="fa-solid fa-user"></i>مشاهده پروفایل' +
                '</a>' + 
            '</div>' +
            '<div class="log-out"> ' +
                '<a href="#">' +
                    '<i class="fa-solid fa-right-from-bracket"></i>خروج از حساب' +
                '</a>' +
            '</div>' ;
        header2.before(myDiv);
    }
});
container.addEventListener('click' , () => {
    counter++;
    if((counter %  2) === 0){
        let user_box = document.querySelector('.user-box');
        user_box.remove();
    }
});

const nextBtn = document.querySelector('.square:first-child');
const PrevBtn = document.querySelector('.square:last-child');
const PostBox1 = document.querySelector('.post-box1');
const PostBox2 = document.querySelector('.post-box2');
const PostBox3 = document.querySelector('.post-box3');

let flag1 = false;
let flag2 = false;

nextBtn.addEventListener('click' , () => {
    if((flag1 === false)){
        PostBox2.style.display = 'none';
        PostBox3.style.display = 'grid';
        flag1 = true;
        flag2 = false;
    }   
});

PrevBtn.addEventListener('click' , () => {
    if(flag2 === false){
        PostBox2.style.display = 'grid';
        PostBox3.style.display = 'none';
        flag2 = true;
        flag1 = false;
    }   
});








  

  
  