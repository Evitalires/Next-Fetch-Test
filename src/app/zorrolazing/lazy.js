"use client";
const insIntersecting = (entry) => {
  return entry.isIntersecting; // true if is inside screen
};
const loadImage = (entry) => {
  const node = entry.target;
  observer.unobserve(node);
  const image = node.firstChild;
  image.src = image.dataset.src;
  console.log(image);
};
const observer = new IntersectionObserver((entries) => {
  entries.filter(insIntersecting).forEach(loadImage);
});

export const registerImage = (imagen) => {
  observer.observe(imagen);
};
