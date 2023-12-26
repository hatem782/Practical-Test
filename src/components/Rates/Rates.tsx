import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./Rates.module.scss";
import starFilled from "./starFilled.svg";
import starUnfilled from "./starUnfilled.svg";

interface RatesProps {
  rates?: number;
  className?: string;
}

interface startType {
  img: StaticImageData;
  id: number;
}

function Rates(props: RatesProps) {
  const { rates = 0, className = "" } = props;

  const stars: startType[] = [];
  for (let i: number = 0; i < 5; i += 1) {
    const img = i < rates ? starFilled : starUnfilled;
    stars.push({ img, id: i });
  }

  return (
    <div className={`${styles.rates} ${className}`}>
      {stars.map((star) => (
        <Image key={star.id} src={star.img} alt="" />
      ))}
    </div>
  );
}

export default Rates;
