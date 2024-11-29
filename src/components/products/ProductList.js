import Image from "next/image";
import React from "react";
import CardProduct from "./CardProduct";
import BannerImg from "../../assets/banner-product.png";

const PRODUCT_LIST = [
  "item1",
  "item2",
  "item3",
  "item4",
  "item5",
  "item6",
  "item7",
];

function ProductList() {
  return (
    <div>
      <div className="flex">
        <Image
          src={BannerImg}
          width={480}
          height={96}
          alt="banner-img"
          className="rounded-lg"
        />
        <div className="border border-white bg-[#E6f1ff] rounded-lg w-full h-[96px]" />
      </div>
      <div className="grid grid-cols-7">
        {PRODUCT_LIST.map((item) => (
          <CardProduct key={item} />
        ))}
      </div>
      <p className="text-blue-500 text-center pt-4">Xem tất cả</p>
    </div>
  );
}

export default ProductList;
