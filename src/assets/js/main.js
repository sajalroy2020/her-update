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


//slider
let nextBtn = document.querySelector('.next');
      let prevBtn = document.querySelector('.prev');
      let parentDiv = document.querySelector('.parent'); 
      let image = document.querySelectorAll('.img');
      let nmbr = document.querySelectorAll('.nmbr')
      let count = 0;

      nextBtn.addEventListener('click', function(){
            count++;
            if(count > image.length - 1){
                count = 0
            }
            nmbr[count].classList.add('bg-red-500')
            nmbr[count].classList.remove('bg-gray-500')
            if( count == 0){
                nmbr[1].classList.remove('bg-red-500');
                nmbr[2].classList.remove('bg-red-500');
                nmbr[2].classList.add('bg-gray-500');
                nmbr[1].classList.add('bg-gray-500');
            }
            if( count == 1){
                nmbr[0].classList.remove('bg-red-500');
                nmbr[2].classList.remove('bg-red-500');
                nmbr[2].classList.add('bg-gray-500');
                nmbr[0].classList.add('bg-gray-500');
            }
            if( count == 2){
                nmbr[1].classList.remove('bg-red-500');
                nmbr[0].classList.remove('bg-red-500');
                nmbr[0].classList.add('bg-gray-500');
                nmbr[1].classList.add('bg-gray-500');
            }
            parentDiv.style.left = -count*100 + '%'
      })
      prevBtn.addEventListener('click', function(){
            count--;
            if(count < 0){
                count = image.length -1
            }
            nmbr[count].classList.add('bg-red-500')
            nmbr[count].classList.remove('bg-gray-500')
            if( count == 0){
                nmbr[1].classList.remove('bg-red-500');
                nmbr[2].classList.remove('bg-red-500');
                nmbr[1].classList.add('bg-gray-500');
                nmbr[2].classList.add('bg-gray-500');
            }
            if( count == 1){
                nmbr[0].classList.remove('bg-red-500');
                nmbr[2].classList.remove('bg-red-500');
                nmbr[0].classList.add('bg-gray-500');
                nmbr[2].classList.add('bg-gray-500');
            }
            if( count == 2){
                nmbr[1].classList.remove('bg-red-500');
                nmbr[0].classList.remove('bg-red-500');
                nmbr[1].classList.add('bg-gray-500');
                nmbr[0].classList.add('bg-gray-500');
            }
            parentDiv.style.left = -count*100 + '%'
      })

      
      