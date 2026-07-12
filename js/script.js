const container = document.getElementById("scroll-container");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

next.addEventListener("click", () => {
  container.scrollBy({ left: 305, behavior: "smooth" });
});

prev.addEventListener("click", () => {
  container.scrollBy({ left: -305, behavior: "smooth" });
});

// AOS.refresh();
