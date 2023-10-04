"use client";
import { useEffect } from "react";
const baseUrl = "https://platzi-avo.vercel.app";

console.log("Happy codding");

//web api

export default function Home() {
  useEffect(() => {
    const main = document.getElementsByTagName("main")[0];
    const aguacates = document.querySelector("#aguacates");

    // window is accessible here.
    window
      .fetch(`${baseUrl}/api/avo`)
      .then((res) => res.json())
      .then((responseJSON) => {
        const allItems = [];
        responseJSON.data.forEach((item) => {
          // crear imagen
          const imagen = document.createElement("img");
          imagen.src = `${baseUrl}${item.image}`;

          // crear titulo
          const title = document.createElement("h2");
          title.textContent = item.name;
          title.className = "text-xl";

          // crear precio
          const price = document.createElement("div");
          price.textContent = item.price;

          //aguacate item
          const aguacate = document.createElement("div");
          aguacate.append(imagen, title, price);
          aguacate.className = "w-80 p-4 m-4";

          //push
          allItems.push(aguacate);
        });
        aguacates.append(...allItems);
      });
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-14">
      <h1 className="text-5xl border-red-400 border-8 p-4"> Aguacates</h1>
      <div
        id="aguacates"
        className="m-8 w-full border-yellow-400 border-8 p-4 grid grid-cols-2"
      ></div>
    </main>
  );
}
