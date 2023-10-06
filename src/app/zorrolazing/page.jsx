"use client";
import { useEffect } from "react";
import { registerImage } from "./lazy";

export default function ZorroLazing() {
  function addImage() {
    const newImage = createImageNode();
    images.append(newImage);
    registerImage(newImage);
    console.log("addFox");
  }
  function cleanImages(e) {
    console.log("clean fox");
    images.innerHTML = "";
  }
  function random() {
    const max = 122;
    const min = 1;
    const random = Math.floor(Math.random() * (max - min) + min);
    return random;
    console.log(random);
  }
  function createImageNode() {
    const imagen = document.createElement("img");
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;
    imagen.alt = "zorro";
    imagen.className = "mx-auto rounded-lg";
    imagen.width = "320";
    const picture = document.createElement("picture");
    picture.className = "flex bg-gray-300 min-h-min my-4 rounded-lg";
    picture.style.minHeight = "fit";
    picture.append(imagen);

    return picture;
  }
  useEffect(() => {
    const images = document.getElementById("images");
    const cleanFox = document.getElementById("cleanFox");
    cleanFox.addEventListener("click", cleanImages);
    const addFox = document.getElementById("addFox");
    addFox.addEventListener("click", addImage);
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-14 bg-slate-200 text-blue-950">
      <h1 className="text-5xl p-4 ">
        <a href="/">Aguacates Store </a>|
        <a href="/zorrolazing"> Zorro lazing </a>
      </h1>
      <div>
        <button
          id="addFox"
          className="p-2 m-4 px-4 rounded-lg bg-purple-700 text-white hover:bg-purple-600"
        >
          Add fox
        </button>
        <button
          id="cleanFox"
          className="p-2 px-4 rounded-lg bg-blue-600 text-white hover:bg-blue-400"
        >
          Limpiar
        </button>
      </div>
      <picture
        width="100px"
        height="100px"
        className="bg-gray-500 flex min-w-fit"
      ></picture>
      <div id="images"></div>
    </main>
  );
}
