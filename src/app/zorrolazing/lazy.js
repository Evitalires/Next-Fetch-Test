"use client";
let totalImg = 0;
let loadedImg = 0;

export const resetReport = () => {
  totalImg = 0;
  loadedImg = 0;
  console.log(`👍Total images: ${totalImg}`);
  console.log(`✅Images loaded: ${loadedImg}`);
};
export const report = (clean) => {
  console.log(`👍Total images: ${totalImg}`);
  console.log(`✅Images loaded: ${loadedImg}`);
};

const insIntersecting = (entry) => {
  return entry.isIntersecting; // true if is inside screen
};
const loadImage = (entry) => {
  const node = entry.target;
  observer.unobserve(node);
  const image = node.firstChild;
  image.src = image.dataset.src;
  loadedImg++;
};
const observer = new IntersectionObserver((entries) => {
  entries.filter(insIntersecting).forEach(loadImage);
  totalImg++;
  report();
});

export const registerImage = (imagen) => {
  observer.observe(imagen);
};
