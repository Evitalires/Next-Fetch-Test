"use client";
const insIntersecting = (entry) => {
  return entry.isIntersecting; // true if is inside screen
};
const action = (entry) => {
  console.log("visible");
  const node = entry.target;
  observer.unobserve(node);
};
const observer = new IntersectionObserver((entries) => {
  entries.filter(insIntersecting).forEach(action);
});

export const registerImage = (imagen) => {
  observer.observe(imagen);
};
