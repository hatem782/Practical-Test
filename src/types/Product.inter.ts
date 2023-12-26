import { StaticImageData } from "next/image";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  rates: number;
  img: StaticImageData;
  category: string;
  colors: string[];
  quantity: number;
}
