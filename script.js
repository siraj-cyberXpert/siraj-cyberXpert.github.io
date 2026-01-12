gsap.from(".hero-title", { y: -50, opacity: 0, duration: 1 });
gsap.from(".hero-sub", { y: 50, opacity: 0, delay: 0.5, duration: 1 });
gsap.from(".section", {
  scrollTrigger: {
    trigger: ".section",
    start: "top 80%"
  },
  opacity: 0,
  y: 40,
  stagger: 0.3
});
