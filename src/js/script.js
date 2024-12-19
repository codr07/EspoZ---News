// Initialize Lenis
const lenis = new Lenis({
    duration: 1.5
  });
  
  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);

  gsap.from(".hero-content",{
    opacity: 0,
    scale:0,
  })

  gsap.to("#info1 span",{
    transform:"translateX(-100%)",
    scrollTrigger:{
      trigger:"#info1",
      scroller:"body",
      start: "top 50%",
      end: "top -10%",
      scrub:1.5,
    }
  })

  gsap.to("#info1 span i",{
    transform:"rotateY(180deg)",
    scrollTrigger:{
      trigger:"#info1",
      scroller:"body",
      start: "top 50%",
      end: "top 30%",
      scrub:1.5,
    }
  })

  gsap.from(".news-board h1",{
    scale:0,
    scrollTrigger:{
      trigger:".news-board",
      scroller:"body",
      start: "top 70%",
      end: "top 30%",
      scrub:1.5,
    }
  })

  gsap.from(".news-board .discord-section .qr",{
    scale:0,
    scrollTrigger:{
      trigger:".news-board",
      scroller:"body",
      start: "top 10%",
      end: "top 30%",
      scrub:1.5,
    }
  })
  gsap.from(".news-board .discord-section .text",{
    transform: "translateX(-170%)",
    scrollTrigger:{
      trigger:".news-board",
      scroller:"body",
      start: "top 10%",
      end: "top 30%",
      scrub:1.5,
    }
  })

  gsap.from(".news-board .telegram-section .qr",{
    scale:0,
    scrollTrigger:{
      trigger:".news-board .telegram-section",
      scroller:"body",
      start: "top 70%",
      end: "top 60%",
      scrub:1.5,
    }
  })

  gsap.from(".news-board .telegram-section .text",{
    transform: "translateX(170%)",
    scrollTrigger:{
      trigger:".news-board .telegram-section",
      scroller:"body",
      start: "top 70%",
      end: "top 60%",
      scrub:1.5,
    }
  })