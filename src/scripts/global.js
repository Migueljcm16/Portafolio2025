import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  smooth: 2,
  effects: true,
  smoothTouch: 0.1,
  normalizeScroll: true
});

gsap.from(".inicio-desc-letras", {
    y: 500,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out"
});

gsap.from(".introduccion-mensaje-texto", {
    opacity: 0,
    duration: 3,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".introduccion",
        start: "top 60%", 
        toggleActions: "play none none none"
    }
});

gsap.from(".text1", {
    y: 200,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".contacto",
        start: "top 60%", 
        toggleActions: "play none none none"
    }
});

gsap.from(".text2", {
    y: 200,
    opacity: 0,
    duration: 1.5,
    delay: 0.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".contacto",
        start: "top 60%", 
        toggleActions: "play none none none"
    }
});