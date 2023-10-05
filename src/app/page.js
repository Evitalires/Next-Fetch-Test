"use client";
import { useEffect } from "react";
const BASE_URL = "https://platzi-avo.vercel.app";

const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat("en-En", {
    style: "currency",
    currency: "USD",
  }).format(price);
  return newPrice;
};

export default function Home() {
  useEffect(() => {
    const aguacates = document.querySelector("#aguacates");

    async function getAguacates() {
      const res = await fetch(`${BASE_URL}/api/avo`);
      const resJSON = await res.json();
      const allItems = [];
      resJSON.data.forEach((aguacate) => {
        const image = document.createElement("img");
        image.className =
          "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
        image.src = `${BASE_URL}${aguacate.image}`;

        // Create heading
        // <h2 class="text-lg">Erin Lindford</h2>
        const title = document.createElement("h2");
        title.className = "text-gray-600 text-lg";
        title.textContent = aguacate.name;

        // Create Price
        // <div class="text-gray-600">(555) 765-4321</div>
        const price = document.createElement("div");
        price.className = "text-gray-600";
        price.textContent = formatPrice(aguacate.price);

        // Wrap price & title
        // <div class="text-center md:text-left"><price ><title ></div>
        const priceAndTitle = document.createElement("div");
        priceAndTitle.className = "text-center md:text-left";
        priceAndTitle.appendChild(title);
        priceAndTitle.appendChild(price);

        //aguacate item
        // Wrap Img and priceAndTitle
        // <div class="md:flex bg-white rounded-lg p-6">
        const card = document.createElement("div");
        card.className =
          "md:flex bg-white rounded-lg p-6 m-4 hover:bg-gray-300";
        card.appendChild(image);
        card.appendChild(priceAndTitle);

        //push
        allItems.push(card);
      });
      aguacates.append(...allItems);
    }
    getAguacates(BASE_URL);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-14">
      <h1 className="text-5xl p-4"> Aguacates Store</h1>
      <div id="aguacates" className="m-8 w-full p-4 grid grid-cols-2"></div>
    </main>
  );
}
