let progress = document.querySelectorAll(".progress")
let skillsPresent = document.querySelectorAll(".box h6")
let body = document.querySelector("body")


window.onscroll=function(){
    if(window.scrollY >= 1000){
      progress.forEach(prog =>{
        prog.style.width = prog.dataset.width
    })
    }
}


// start color option
let color = document.querySelectorAll(".main-option")
color.forEach(col =>{
  col.style.backgroundColor = col.dataset.color
  col.onclick=()=>{
    body.className = ''
    body.classList.add(col.dataset.color)
    document.documentElement.style.setProperty("--main-color", col.dataset.color);
  }
})
// end color option 




//start setting transform 
let gear = document.querySelector(".gear")
let setting = document.querySelector(".settings")
let overflow = document.querySelector(".bodyoverflow")
gear.onclick = function() {
  const open = setting.classList.toggle("open");
  gear.classList.toggle("active")
  overflow.classList.toggle("active", open);
}
//end setting transform 

// start random image
// let imgs = ['../img/01.jpg','../img/02.jpg','../img/03.jpg','../img/04.jpg','../img/05.jpg','../img/06.png','../img/07.png','../img/08.png','../img/09.png','../img/10.png']
// let landing = document.querySelector(".landing")
// setInterval(()=>{
//   let randomImg = Math.floor(Math.random() * imgs.length)
//   landing.style.backgroundImage = 'url(' + imgs[randomImg] + ')'
// },5000)
// end random image 







// start toggle nav 

let toggle = document.querySelector(".nav__toggle")
let nav = document.querySelector(".nav__link")
toggle.onclick = function () {
nav.classList.toggle("active")
}

// end toggle nav 


















