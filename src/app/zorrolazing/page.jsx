/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect } from "react";

export default function ZorroLazing() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-14 bg-slate-200 text-blue-950">
      <h1 className="text-5xl p-4">
        <a href="/">Aguacates Store </a>|
        <a href="/zorrolazing"> Zorro lazing </a>
      </h1>
      <div id="images">
        <div className="p-4">
          <picture>
            <img
              src="https://randomfox.ca/images/2.jpg"
              alt="fox Random"
              className="mx-auto"
              width={320}
            />
          </picture>
        </div>
      </div>
    </main>
  );
}
