"use client";

import { ny } from "@/lib/utils";
import CachedImage from "./CachedImage";
import { Slider } from "./ui/slider";
import React from "react";

export default function BrowserComplexityExample() {
  const [selectedImage, setSelectedImage] = React.useState([1]);
  return (
    <div className="flex h-screen items-center flex-col mx-auto mb-32 xl:mb-64 w-full md:w-5/6 lg:w-3/4">
      <h1 className="text-4xl md:text-5xl font-bold text-center">How much browser do you want?</h1>
      <p className="mt-4 text-center text-md mx-auto w-2/3 text-muted-foreground">
        Zen is designed to be simple and easy to use. We believe that the best software is
        the one that you don't notice. However, we can assure you that if you want customization, we have you covered
      </p>
      <div className="w-64 mb-6 mt-12 flex gap-4">
        <span className="opacity-90">🌱</span>
        <Slider step={1} max={3} showSteps="half" value={selectedImage} onValueChange={setSelectedImage} />
        <span className="opacity-90">🌳</span>
      </div>
      <div className="mx-auto md:mb-36 flex justify-center">
        {[...Array(4)].map((_, i) => (
          <CachedImage
            width={1620}
            height={900}
            priority
            key={i}
            src={`www/public/browsers/image${i + 1}.png`}
            alt="Zen Browser"
            className={ny("rounded-md object-cover shadow object-right mx-12 w-full", selectedImage[0] === i 
                ? "" //"animate-fade-up duration-500 !opacity-100" 
                : "hidden")}
          />
        ))}
      </div>
    </div>
  )
}
