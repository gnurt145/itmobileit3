let index = 0
const imgNumber = document.querySelectorAll('.slider-content-left-top img')
const rightbtn = document.querySelector('.right-btn')
const leftbtn = document.querySelector('.bx-chevron-left')

rightbtn.addEventListener("click", function(){
  index = index + 1
  if(index > imgNumber.length - 1){
    index = 0
  }
  document.querySelector(".slider-content-left-top").style.right = index*100 + "%"
  }
)
leftbtn.addEventListener("click", function(){
  index = index - 1
  if(index < 0 ){
    index = imgNumber.length - 1
  }
  document.querySelector(".slider-content-left-top").style.right = index*100 +"%"
})

function removeactive(){
  let imgactive = document.querySelector('.active')
  imgactive.classList.remove("active")
}

// -------------------slider 1
const imgNumberLi = document.querySelectorAll('.slider-content-left-bottom li')
imgNumberLi.forEach(function(image, index){
  image.addEventListener("click", function(){
    removeactive()
    document.querySelector(".slider-content-left-top").style.right = index*100 +"%"
    image.classList.add("active")
  })
})
// ---------------------slider 2
function imgAuto(){
  index  = index + 1
  if(index > imgNumber.length - 1){
    index = 0
  }
  removeactive()
  document.querySelector(".slider-content-left-top").style.right = index*100 + "%"
  imgNumberLi[index].classList.add("active")
}
setInterval(imgAuto,5000)