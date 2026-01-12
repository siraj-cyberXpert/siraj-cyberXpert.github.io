// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

/* =====================
   HERO ANIMATIONS
===================== */
gsap.from(".hero-title", {
  y: -50,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".hero-sub", {
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  ease: "power3.out"
});

gsap.from(".hero-desc", {
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.6,
  ease: "power3.out"
});

/* =====================
   SECTION SCROLL ANIMATION
===================== */
gsap.utils.toArray(".section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
  });
});

/* =====================
   WHAT I DO TEXT ANIMATION
===================== */
gsap.from(".do-item", {
  scrollTrigger: {
    trigger: ".what-i-do",
    start: "top 80%"
  },
  opacity: 0,
  x: -40,
  duration: 0.8,
  stagger: 0.25,
  ease: "power2.out"
});

/* =====================
   DARK / LIGHT MODE TOGGLE
===================== */
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    toggleBtn.textContent = "🌞 Light";
  } else {
    toggleBtn.textContent = "🌙 Dark";
  }
});
