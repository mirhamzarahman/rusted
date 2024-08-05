Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {videos: ["./1.mp4", "./2.mp4", "./3.mp4",]});



  gsap.to(".fleftlm", {
    scrollTrigger: {
        trigger: ".F_img",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1
    },
    y: "-300%",
    ease: Power1
  })

  let sections = document.querySelectorAll(".fleftlm");
  Shery.imageEffect(".img", {
    style: 4,
    
    
    slideStyle: (setScroll) => {
     sections.forEach(function(section, index) {
        ScrollTrigger.create({
                trigger: section,
                start: "top top",
                scrub: 1,
                onUpdate: function (prog) {
                    setScroll(prog.progress+index)
                },
            });
     });
    },
  });