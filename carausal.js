let slideposition = 0;
let slides = document.getElementsByClassName('carousel_items')
let totalslides = slides.length
console.log(slides);

document.getElementById('carousel_action_prev').addEventListener("click" , function(){
    movetoprev();
});
document.getElementById('carousel_action_next').addEventListener("click" , function(){
    movetonext();
})

function updateslide(){
    for(let slide of slides){
        slide.classList.remove('carousel_item--visible');
        slide.classList.add('carousel_items--hidden')
    }
    slides[slideposition].classList.add('carousel_item--visible')
}
function movetonext(){
    if(slideposition === totalslides-1){
        slideposition = 0;
    }else{
        
        slideposition ++;
    }
    updateslide();
} 
function movetoprev(){
    if(slideposition === 0){
        slideposition = totalslides-1;
    }else{
       
        slideposition --;
    }
    updateslide();
}