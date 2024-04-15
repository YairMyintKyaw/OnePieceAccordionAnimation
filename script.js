
const tl_accordion = gsap.timeline({
    scrollTrigger:{
        trigger:".main",
        scrub:true,
        pin:true,
        snap: 1,
        start:"top top",
        end:"+=2500"
    }
});

tl_accordion.to(".accordion__item:nth-child(2)",{
    top: -125
}).to(".accordion__bg:nth-of-type(2)",{
    opacity:1,
    top: 0
},"<").to(".accordion__bg:nth-of-type(1)",{
    opacity: 0
},"<")
.to(".accordion__item:nth-child(3)",{
    top: -250
}).to(".accordion__bg:nth-of-type(3)",{
    opacity:1,
    top: 0
},"<").to(".accordion__bg:nth-of-type(2)",{
    opacity: 0
},"<")
.to(".accordion__item:nth-child(4)",{
    top: -375
}).to(".accordion__bg:nth-of-type(4)",{
    opacity:1,
    top: 0
},"<").to(".accordion__bg:nth-of-type(3)",{
    opacity: 0
},"<")






// Smooth scroll
const lenis = new Lenis(
    {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    }
  )
  
  lenis.on('scroll', (e) => {
    // console.log(e)
  })
  
  function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf)