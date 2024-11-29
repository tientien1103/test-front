import Image from "next/image";
import React from "react";
import Icon from "../assets/ic.cate.png";

function CardCategory({ item }) {
  return (
    <div className="flex gap-2 p-2 border-2 border-white hover:bg-[#E6f1ff] rounded-lg cursor-pointer">
      <Image src={Icon} width={40} height={40} alt="icon" />
      <p className="text-xs font-normal self-center">{item}</p>
    </div>
  );
}

export default CardCategory;
