
// Fade in effect
document.addEventListener("DOMContentLoaded", function () {
    document.body.style.opacity = 1;
})

// Scrolling effect for course we offer section
document.addEventListener("DOMContentLoaded" , function(){
    const scroolbox = document.querySelector(".fcbox1");
    let scroolwidth = scroolbox.scrollWidth;
    setInterval(function(){
        scroolbox.scrollLeft +=300;

        if(scroolbox.scrollLeft >= scroolwidth - scroolbox.offsetWidth){
            scroolbox.scrollLeft = 0;
        }
    },5000);
});



