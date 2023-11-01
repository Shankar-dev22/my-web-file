function imagecontainer(){
    var imgbook = document.querySelector("#main-Book-img")
var playbtn = document.querySelector("#play-btn")

imgbook.addEventListener("mouseenter", function () {
    gsap.to(playbtn, {
        scale: 1,
        opacity: 1
        
    })   
    })
    imgbook.addEventListener("mouseleave", function () {
        gsap.to(playbtn, {
            scale: 0,
            opacity: 0
        })
    })
    imgbook.addEventListener("mousemove", function (dets) {
        gsap.to(playbtn, {
            left:dets.x,
            top:dets.y
           
           
        })
    })
}
imagecontainer()

function loadinganimation()
{
    gsap.from("#page1 h1",{
        y:100,
        delay:0.5,
        opacity:0,
        duration:0.9,
        stagger:0.3
    })    
    gsap.from("#page1 #main-Book-img",{
        scale:0.8,
        delay:1.2,
        opacity:0,
        duration:1,
    })  
}
loadinganimation()

