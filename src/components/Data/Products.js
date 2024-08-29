import r1 from "../../assets/Pshoot/RED/r1.png";
import r2 from "../../assets/Pshoot/RED/r2.png";
import r3 from "../../assets/Pshoot/RED/r3.png";
import r4 from "../../assets/Pshoot/RED/r4.png";
import w1 from "../../assets/Pshoot/White/w1.png";
import w2 from "../../assets/Pshoot/White/w2.png";
import w3 from "../../assets/Pshoot/White/w3.png";
import w4 from "../../assets/Pshoot/White/w4.png";
import g1 from "../../assets/Pshoot/LEOPARD/Gray/g1.png";
import g2 from "../../assets/Pshoot/LEOPARD/Gray/g2.png";
import g3 from "../../assets/Pshoot/LEOPARD/Gray/g3.png";
import g4 from "../../assets/Pshoot/LEOPARD/Gray/g4.png";
import storage from "../../assets/Pshoot/FWhite/storage.png";
import tyre from "../../assets/Pshoot/FWhite/tyre.png";
import diskbrake from "../../assets/Pshoot/FWhite/diskbrake.png";
import daylight from "../../assets/Pshoot/FWhite/daylight.png";
import digitalmeter from "../../assets/Pshoot/FWhite/digitalmeter.png";
import cruidecontrol from "../../assets/Pshoot/FWhite/cruidecontrol.png";

// export const products = [
//   {
//     id: 1,
//     name: "PRONTO",
//     images: {
//       Red: [r1, r3, r2, r4],
//       white: [w1, w2, w3, w4],
//     },
//     price: "Rs 199,000",
//     colors: ["white", "Red"],
//     specifications: {
//       Motor: "1200 W BLDC QS",
//       Speed: "50-55 KM/H",
//       Range: "120 KM (ECO MODE)",
//       Battery: "72V 38 AH GRAPHENE",
//       TyreSize: "12 INCH ALLOY RIM",
//       Brake: "FRONT & REAR BIGGER DISK",
//       ElectricMotorPower: "2000 Watts",
//       WarrantyPeriod:
//         "24 Months Motor & 12 Months Batteries and Controller warranty",
//       TopSpeed: "70 Km/h",
//     },
//     description: `Introducing123 our cutting-edge electric scooter, meticulously engineered to satisfy the thrill-seeking desires of modern adventurers while championing eco-consciousness. Imagine effortlessly navigating through cityscapes, powered by the sheer force of our high-performance 2000W electric motor, propelling you to exhilarating speeds of up to 70 KM/hr. With an unmatched range of up to 120 KM, every ride becomes an adrenaline-fueled journey of exploration and discovery, urging you to push the boundaries and uncover new vistas.

//     Crafted with precision and innovation, our electric scooter transcends mere transportation—it's a symbol of style and sustainability. Its sleek design and sturdy construction guarantee both durability and reliability, ensuring each expedition is as seamless and electrifying as the last.`,
//     detailedSpecifications: [
//       {
//         title: "Speed123",
//         value: "70 Km/h",
//       },
//       {
//         title: "Range",
//         value: "120 KM",
//       },
//       {
//         title: "Battery Type",
//         value: "72V 35Ah Graphene Batteries",
//       },
//       {
//         title: "Electric Motor Power",
//         value: "2000 Watts",
//       },
//       {
//         title: "Warranty Period",
//         value: "24 Months Motor & 12 Months Batteries and Controller warranty",
//       },
//     ],
//   },
// ];


export const products = [
  {
    id: 1,
    name: "PRONTO",
    images: {
      Red: [r1, r3, r2, r4],
      white: [w1, w2, w3, w4],
    },
    featureImages: {
      Red: [
        { image: r1, title: "Storage Space" },
        { image: r2, title: "Tyre" },
        { image: r3, title: "Disk Brake" },
        { image: r4, title: "Daylight Running Lamp" },
        { image: r4, title: "Digital Meter" },
        { image: r4, title: "Cruise Control" },
      ],
      white: [
        { image: storage, title: "Storage Space" },
        { image: tyre, title: "Tyre" },
        { image: diskbrake, title: "Disk Brake" },
        { image: daylight, title: "Daylight Running Lamp" },
        { image: digitalmeter, title: "Digital Meter" },
        { image: cruidecontrol, title: "Cruise Control" },
      ]
    },
    price: "Rs 199,000",
    colors: ["white", "Red"],
    specifications: {
      Motor: "1200 W BLDC QS",
      Speed: "50-55 KM/H",
      Range: "80-90 KM",
      Battery: "72V 32 AH GRAPHENE",
      TyreSize: "10 INCH ALLOY RIM",
      Brake: "FRONT DISK REAR DRUM BRAKE",
      // ElectricMotorPower: "2000 Watts",
      // WarrantyPeriod:
      //   "24 Months Motor & 12 Months Batteries and Controller warranty",
      // TopSpeed: "70 Km/h",
    },
    description: `Introducing our cutting-edge electric scooter, meticulously engineered to satisfy the thrill-seeking desires of modern adventurers while championing eco-consciousness. Imagine effortlessly navigating through cityscapes, powered by the sheer force of our high-performance 2000W electric motor, propelling you to exhilarating speeds of up to 70 KM/hr. With an unmatched range of up to 120 KM, every ride becomes an adrenaline-fueled journey of exploration and discovery, urging you to push the boundaries and uncover new vistas.
    
    Crafted with precision and innovation, our electric scooter transcends mere transportation—it's a symbol of style and sustainability. Its sleek design and sturdy construction guarantee both durability and reliability, ensuring each expedition is as seamless and electrifying as the last.`,
    detailedSpecifications: [
      {
        title: "Speed",
        value: "50-55 Km/h",
      },
      {
        title: "Range",
        value: "80-90 KM",
      },
      {
        title: "Battery Type",
        value: "72V 32 AH GRAPHENE",
      },
      {
        title: "Electric Motor Power",
        value: "1200 Watts",
      },
      {
        title: "Warranty Period",
        value: "24 Months Motor & 12 Months Batteries and Controller warranty",
      },
      {
        title: "Cruise control",
        value: "Maintains a set speed, freeing the rider from constantly pressing the throttle.",
      },
      {
        title: "Reverse Gear",
        value: "Easily back up the scooter, making parking and tight turns a breeze.",
      },
    ],
  },

  {
    id: 2,
    name: "LEOPARD",
    images: {
      Grey: [g1, g2, g3, g4],
      Green: [w1, w2, w3, w4],
    },
    featureImages: {
      Grey: [
        { image: r1, title: "Storage Space" },
        { image: r2, title: "Tyre" },
        { image: r3, title: "Disk Brake" },
        { image: r4, title: "Daylight Running Lamp" },
        { image: r4, title: "Digital Meter" },
        { image: r4, title: "Cruise Control" },
      ],
      Green: [
        { image: storage, title: "Storage Space" },
        { image: tyre, title: "Tyre" },
        { image: diskbrake, title: "Disk Brake" },
        { image: daylight, title: "Daylight Running Lamp" },
        { image: digitalmeter, title: "Digital Meter" },
        { image: cruidecontrol, title: "Cruise Control" },
      ]
    },
    price: "Rs 260,000",
    colors: ["Grey", "Green"],
    specifications: {
      Motor: "1200 W BLDC QS",
      Speed: "50-55 KM/H",
      Range: "120 KM (ECO MODE)",
      Battery: "72V 38 AH GRAPHENE",
      TyreSize: "12 INCH ALLOY RIM",
      Brake: "FRONT & REAR BIGGER DISK",
      // ElectricMotorPower: "2000 Watts",
      // WarrantyPeriod:
      //   "24 Months Motor & 12 Months Batteries and Controller warranty",
      // TopSpeed: "70 Km/h",
    },
    description: `Introducing our cutting-edge electric scooter, meticulously engineered to satisfy the thrill-seeking desires of modern adventurers while championing eco-consciousness. Imagine effortlessly navigating through cityscapes, powered by the sheer force of our high-performance 2000W electric motor, propelling you to exhilarating speeds of up to 70 KM/hr. With an unmatched range of up to 120 KM, every ride becomes an adrenaline-fueled journey of exploration and discovery, urging you to push the boundaries and uncover new vistas.
    
    Crafted with precision and innovation, our electric scooter transcends mere transportation—it's a symbol of style and sustainability. Its sleek design and sturdy construction guarantee both durability and reliability, ensuring each expedition is as seamless and electrifying as the last.`,
    detailedSpecifications: [
      {
        title: "Speed",
        value: "50-55 Km/h",
      },
      {
        title: "Range",
        value: "120 KM (ECO MODE)",
      },
      {
        title: "Battery Type",
        value: "72V 38 Ah Graphene",
      },
      {
        title: "Electric Motor Power",
        value: "1200 Watts",
      },
      {
        title: "Warranty Period",
        value: "24 Months Motor & 12 Months Batteries and Controller warranty",
      },
      {
        title: "Cruise control",
        value: "Maintains a set speed, freeing the rider from constantly pressing the throttle.",
      },
      {
        title: "Reverse Gear",
        value: "Easily back up the scooter, making parking and tight turns a breeze.",
      },
    ],
  },
];
