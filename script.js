// Animate features on scroll for techy effect (no glow or mouse logic needed anymore)
document.addEventListener("DOMContentLoaded", function () {
  // Intersection observer for features
  const features = document.querySelectorAll('.feature');
  const options = { threshold: 0.15 };
  const onEntry = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  };
  const observer = new window.IntersectionObserver(onEntry, options);
  features.forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
  // No more card glow or button JS needed
});