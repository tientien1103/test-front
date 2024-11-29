import Image from "next/image";
import React from "react";
import ProductImg from "../../assets/img.png";

function CardProduct({ img }) {
  return (
    <div className="flex flex-col">
      <Image
        src={ProductImg}
        width={164}
        height={164}
        alt="product-img"
        className="rounded-lg"
      />
      <div className="flex flex-col gap-8">
        <p className="text-sm text-primary font-semibold">1.500.000 đ</p>
        <p className="text-[#4A5568] text-xs">
          Táo Mỹ & Nam Phi túi 1.5kg <br /> (1 Túi)
        </p>
      </div>
    </div>
  );
}

export default CardProduct;
