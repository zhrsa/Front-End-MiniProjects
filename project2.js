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