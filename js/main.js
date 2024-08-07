
let mobile=document.querySelector('.barBox .mobile');
mobile.addEventListener('click',function (){
    let boxNav=document.querySelector('.boxNav')
    let closeNav=document.querySelector('.boxNav .close-nav')
    boxNav.style.display='block';
    closeNav.classList='animate close-nav';
    closeNav.style.right='0';
})
let close=document.querySelector('.close-nav .close');
close.addEventListener('click',function (){
    let boxNav=document.querySelector('.boxNav')
    let closeNav=document.querySelector('.boxNav .close-nav');
    setTimeout( ()=>{
        closeNav.classList='animate1 close-nav';
        closeNav.style.right='-1000px';
    })
   setTimeout(()=>{
       boxNav.style.display='none';
   },1000)
})



let links=document.querySelectorAll('.nav li a');
links=[...links];
links.map((elem)=>{
    elem.onmouseover=()=>{
        elem.children[1].style.transform='scale(1,1)';
    }
    elem.onmouseout=()=>{
        elem.children[1].style.transform='scale(0,0)';
    }
});

let categoriesDeclare=document.querySelector('.categoriesBox .categoriesDeclare');
categoriesDeclare.addEventListener('mouseover',function (){
    categoriesDeclare.children[1].style.transform='scale(1,1)';
})
categoriesDeclare.addEventListener('mouseout',()=>{
    categoriesDeclare.children[1].style.transform='scale(0,0)';
})


let sliderSwiper=document.querySelector('.slider .swiper');
let next= document.querySelector('.slider .swiper .swiper-button-next');
let prev= document.querySelector('.slider .swiper .swiper-button-prev');
sliderSwiper.addEventListener('mouseover',function (){
   next.style.display='block';
   prev.style.display='block';
})
sliderSwiper.addEventListener('mouseout',function (){
   next.style.display='none';
   prev.style.display='none';
})