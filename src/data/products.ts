import { Product } from "../types/Product.inter";

// colors : #1C1D1D #FE7B7A #FEC673 #85FFB4 #71F7FF #6A7BFF #473834 #73667A

import {
  img1,
  img2,
  img6,
  img7,
  img12,
  img10,
  img11,
  img13,
} from "../assets/images";

const products: Product[] = [
  {
    id: 1,
    title: "Police Gray Eyeglasses",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptates.",
    rates: 3,
    img: img1,
    category: "Eye Glasses",
    colors: ["#78707E"],
    quantity: 1,
  },
  {
    id: 2,
    title: "Say Ban Matt Black",
    price: 200,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptates.",
    rates: 1,
    img: img2,
    category: "Eye Glasses",
    colors: ["#1C1D1D"],
    quantity: 1,
  },
  {
    id: 3,
    title: "Ziaomi mi band2",
    price: 171,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptates.",
    rates: 4,
    img: img6,
    category: "Watch",
    colors: ["#1C1D1D", "#FE7B7A", "#85FFB4"],
    quantity: 1,
  },
  {
    id: 4,
    title: "Kossil Watch Brown",
    price: 117,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptates.",
    rates: 2,
    img: img7,
    category: "Watch",
    colors: ["#473834", "#73667A"],
    quantity: 0,
  },
  {
    id: 5,
    title: "Silver Hight Neck Sweater",
    price: 210,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptates.",
    rates: 4,
    img: img10,
    category: "Clothes",
    colors: ["#1C1D1D"],
    quantity: 1,
  },
  {
    id: 6,
    title: "Women Fashion",
    price: 140,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptates.",
    rates: 5,
    img: img13,
    category: "Clothes",
    colors: ["#1C1D1D"],
    quantity: 0,
  },
  {
    id: 7,
    title: "Nike Red",
    price: 210,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptates.",
    rates: 4,
    img: img11,
    category: "Shoes",
    colors: ["#FE7B7A"],
    quantity: 1,
  },
  {
    id: 8,
    title: "North Star Blue",
    price: 210,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptates.",
    rates: 4,
    img: img12,
    category: "Shoes",
    colors: ["#6A7BFF"],
    quantity: 1,
  },
];

export default products;
