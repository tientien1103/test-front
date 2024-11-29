"use client";
import CardCategory from "@/components/CardCategory";
import ProductList from "@/components/products/ProductList";
import { SideBarList } from "@/constant/SideBarMenu";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const slides = [
    { id: 1, content: "Slide 1" },
    { id: 2, content: "Slide 2" },
    { id: 3, content: "Slide 3" },
    { id: 4, content: "Slide 4" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  return (
    <main className="w-full min-h-screen p-4">
      <section>
        {/* <div>
          <div className="bg-[#E6f1ff] w-[1224px] h-[302px]" />
        </div> */}
        <div className="relative w-full max-w-[1224px] mx-auto overflow-hidden border-2 border-white rounded-lg">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="min-w-full flex items-center justify-center bg-[#E6f1ff] h-64"
              >
                <p className="text-xl text-blue-700">{slide.content}</p>
              </div>
            ))}
          </div>
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            onClick={handlePrev}
          >
            &lt;
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            onClick={handleNext}
          >
            &gt;
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-8 rounded-full ${
                  currentIndex === index ? "bg-white" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mx-auto w-full">
          {SideBarList.map((item) => (
            <div
              key={item}
              className="flex flex-col justify-center align-middle"
            >
              <CardCategory />
              <p>Cate name</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-8 pt-10">
        <ProductList />
      </section>

      <section className="pb-8">
        <ProductList />
      </section>

      <section className="pb-8">
        <ProductList />
      </section>

      <section className="pb-8">
        <ProductList />
      </section>
    </main>
  );
}
