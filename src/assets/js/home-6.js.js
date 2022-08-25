// tab
let tabBtn_1 = document.querySelectorAll('.tab-btn-1');
let tabText_1 = document.querySelectorAll('.tab-text-1');

let tabBtn = document.querySelectorAll('.tab-btn');
let tabText = document.querySelectorAll('.tab-text');

for(let i = 0; i < tabBtn.length; i++){
    tabBtn[i].addEventListener('click', function(){
        for(let j = 0; j < tabText.length; j++){
            tabText[j].classList.add('hidden-text');
            tabBtn[j].classList.remove('active');
        }
        tabText[i].classList.remove('hidden-text');
        tabBtn[i].classList.add('active');
    })
}


for(let i = 0; i < tabBtn_1.length; i++){
    tabBtn_1[i].addEventListener('click', function(){
        for(let j = 0; j < tabText_1.length; j++){
            tabText_1[j].classList.add('hidden-text');
        }
        tabText_1[i].classList.remove('hidden-text');
    })
}

// slider
let dot = document.querySelectorAll('.dot');
const mainSlider =document.querySelector('.main-slider');
let multiImagesSlider = ()=>{
    let moveper = 25
let count = 4
let ipadView = window.matchMedia("(max-width: 1024px)")
let mobileView = window.matchMedia("(max-width: 768px)")

if(ipadView.matches){
    moveper = 50
    count = 2
}

if(mobileView.matches){
    moveper = 100
    count = 1
}
function activeFunc(){
    for(let i = 0; i<dot.length; i++){
    if(i < count-1 ){
        dot[i].style.display = 'none';
    }else{

       

        dot[i].style.display = 'inline-block';
        if(i == count-1){
            dot[i].style.background = '#7b7979'
        }else{
            dot[i].style.background = 'transparent'
        }
        dot[i].addEventListener('click', function(e){
            for(let j =0 ; j<dot.length; j++){
                dot[j].style.background = 'transparent'
            }
            dot[i].style.background = '#7b7979';
        })

    }
}
}
activeFunc()
window.addEventListener('resize',function(){
    console.log(count);
    mainSlider.style.left = '0%'
    for(let i = 0; i<dot.length; i++){
    if(i < count-1 ){
        dot[i].style.display = 'none';
    }else{
        dot[i].style.display = 'inline-block';
        if(i == count-1){
            dot[i].style.background = '#7b7979'
        }else{
            dot[i].style.background = 'transparent'
        }
        dot[i].addEventListener('click', function(e){
            for(let j =0 ; j<dot.length; j++){
                dot[j].style.background = 'transparent'
            }
            dot[i].style.background = '#7b7979';
        })

    }
}
})
mainSlider.style.left = '0%'
for(let i= 0; i<dot.length; i++){
    dot[i].addEventListener('click',function(){
        if(i >= count){
        mainSlider.style.left = '-' + moveper*(i - (count-1)) + '%'
    }
    else{
        mainSlider.style.left = '0%'
    }
    })
    
}
}
multiImagesSlider()
window.addEventListener('resize',function(){
    multiImagesSlider()
})






let mobileBtn = document.querySelector('.menu');
let mobileMenu = document.querySelector('.sidebar');
let closeBtn = document.querySelector('.close');

mobileBtn.addEventListener('click', function(){
    mobileMenu.classList.remove('-ml-80')
})
closeBtn.addEventListener('click', function(){
    mobileMenu.classList.add('-ml-80')
})

//Back To Top Button Code Start
    let scrollBtn = document. querySelector('.scrollBtn')
    let nav = document.querySelector('.nav')
    window.onscroll = function(){
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollBtn.classList.remove('hidden');
            nav.classList.add('bg-gray-300')
          } else {
            scrollBtn.classList.add('hidden')
            nav.classList.remove('bg-gray-300')
          }
    }
    scrollBtn.addEventListener('click',function(e){
        window.scrollTo({top: 0, behavior: 'smooth'});
    })
//Back To Top Button Code End

//Home-five-js
    let navItem = document.querySelectorAll('.navItem');
    let navMenu = document. querySelectorAll('.navMenu');
    let body = document.querySelector('body');
   
    navItem.forEach(function(element, index){
        element.addEventListener('click', function(){
            navMenu[index].classList.toggle('hidden');
        })
    });
//Home-five-js

let exBtn = document.querySelectorAll('.exBtn');
let exMenu = document.querySelectorAll('.exMenu');

exBtn.forEach(function(a,b){
    a.addEventListener('click', function(){
        exMenu[b].classList.toggle('hidden')

        if(b == 0){
            exMenu[1].classList.add('hidden')
            exMenu[2].classList.add('hidden')
        }
        if(b == 1){
            exMenu[2].classList.add('hidden')
            exMenu[0].classList.add('hidden')
        }
        if(b == 2){
            exMenu[1].classList.add('hidden')
            exMenu[0].classList.add('hidden')
        }
    })
})

      