const slider = document.querySelector('.slideshowcontainer')
let holding = false;
let firstClickX;
let alreadyLeftscrolled;

slider.addEventListener('mousedown', e =>{
    holding = true;
    firstClickX = e.pageX - slider.offsetLeft;
    alreadyLeftscrolled = slider.scrollLeft;

})
slider.addEventListener('mousemove', e =>{
    if(!holding) return;
    const X = e.pageX - slider.offsetLeft;
    const scrolled = (x - firstClickX);
    slider.scrollLeft = alreadyLeftscrolled - scrolled;
    console.log(alreadyLeftscrolled - scrolled);


})
slider.addEventListener('mouseup', () =>{
    holding = false;

})
slider.addEventListener('mouseleave', () =>{
    holding = false;

})