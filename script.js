const elements = document.querySelectorAll(".reveal");

const revealOnScroll = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15
  }
);

elements.forEach(element => revealOnScroll.observe(element));

const codedStructure = document.querySelector(".coded-structure");

function updateParallax() {
  if (!codedStructure) return;

  const move = window.scrollY * 0.08;

  codedStructure.style.transform =
    `translate(-50%, calc(-50% + ${move}px))`;
}

updateParallax();

window.addEventListener("scroll", updateParallax);
