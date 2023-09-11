let currSlide = 0;
function controller(x){
    currSlide += x;
    slideShow(currSlide);
};
slideShow(currSlide);
function slideShow(num){
    let slides = document.getElementsByClassName('slide');
    if(num == slides.length)
    {
        currSlide = 0;
        num = 0;
    }
    if(num < 0)
    {
        currSlide = slides.length - 1;
        num = slides.length - 1;
    }
    for(let element of slides)
    {
        element.style.display = "none";
    }
    slides[num].style.display = "block";
};