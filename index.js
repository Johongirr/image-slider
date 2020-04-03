const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const images = document.querySelectorAll('.img')
let pointer = 0;


function leftClick (){
    if(pointer < 0) {
        pointer = images.length - 1;
    } else if (pointer == 5){
        pointer--;
    }
    images.forEach(image =>{
        image.classList.remove('active')
    })
  
    images[pointer].classList.add('active')
      
    pointer--
    console.log(pointer, 'left')
}

function rightClick (){
    if(pointer > images.length -1){
        pointer = 0;
    } else if (pointer == -1){
        pointer++;
    }
    images.forEach(image =>{
        image.classList.remove('active')
    })
    images[pointer].classList.add('active')
  
    
    pointer++  
    console.log(pointer, 'right')
}
leftBtn.addEventListener('click', leftClick);
rightBtn.addEventListener('click', rightClick);