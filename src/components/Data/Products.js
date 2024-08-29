import Rstorage from "../../assets/Pshoot/RED/Rstorage.png";
import Rlamp from "../../assets/Pshoot/RED/Rlamp.png";
import Rbrake from "../../assets/Pshoot/RED/Rbrake.png";
import Rtyre from "../../assets/Pshoot/RED/Rtyre.png";
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
import gre1 from "../../assets/Pshoot/LEOPARD/Green/gre1.png";
import gre2 from "../../assets/Pshoot/LEOPARD/Green/gre2.png";
import gre3 from "../../assets/Pshoot/LEOPARD/Green/gre3.png";
import gre4 from "../../assets/Pshoot/LEOPARD/Green/gre4.png";
import Grstorage from "../../assets/Pshoot/LEOPARD/Gray/Grstorage.png";
import Grlamp from "../../assets/Pshoot/LEOPARD/Gray/Grlamp.png";
import Grbrake from "../../assets/Pshoot/LEOPARD/Gray/Grbrake.png";
import Grtyre from "../../assets/Pshoot/LEOPARD/Gray/Grtyre.png";
import Fgrestorage from "../../assets/Pshoot/LEOPARD/Green/Fgrestorage.png";
import Fgretyre from "../../assets/Pshoot/LEOPARD/Green/Fgretyre.png";
import Fgrebrake from "../../assets/Pshoot/LEOPARD/Green/Fgrebrake.png";
import Fgrelamp from "../../assets/Pshoot/LEOPARD/Green/Fgrelamp.png";
import storage from "../../assets/Pshoot/FWhite/storage.png";
import tyre from "../../assets/Pshoot/FWhite/tyre.png";
import diskbrake from "../../assets/Pshoot/FWhite/diskbrake.png";
import daylight from "../../assets/Pshoot/FWhite/daylight.png";
import digitalmeter from "../../assets/Pshoot/FWhite/digitalmeter.png";
import cruidecontrol from "../../assets/Pshoot/FWhite/cruidecontrol.png";
import Rj1 from "../../assets/Pshoot/JOY/Rj1.png";
import Rj2 from "../../assets/Pshoot/JOY/Rj2.png";
import Wj1 from "../../assets/Pshoot/JOY/Wj1.png";

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
        { image: Rstorage, title: "Storage Space" },
        { image: Rtyre, title: "Tyre" },
        { image: Rbrake, title: "Disk Brake" },
        { image: Rlamp, title: "Daylight Running Lamp" },
        { image: digitalmeter, title: "Digital Meter" },
        { image: cruidecontrol, title: "Cruise Control" },
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
      Green: [gre1, gre2, gre3, gre4],
    },
    featureImages: {
      Grey: [
        { image: Grstorage, title: "Storage Space" },
        { image: Grtyre, title: "Tyre" },
        { image: Grbrake, title: "Disk Brake" },
        { image: Grlamp, title: "Daylight Running Lamp" },
        { image: digitalmeter, title: "Digital Meter" },
        { image: cruidecontrol, title: "Cruise Control" },
      ],
      Green: [
        { image: Fgrestorage, title: "Storage Space" },
        { image: Fgretyre, title: "Tyre" },
        { image: Fgrebrake, title: "Disk Brake" },
        { image: Fgrelamp, title: "Daylight Running Lamp" },
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
        value: "Maintains a set speed, freeing the rider from constantly pressing the throttle.",
      },
      {
        title: "Reverse Gear",
        value: "Easily back up the scooter, making parking and tight turns a breeze.",
      },
    ],
  },

  {
    id: 3,
    name: "JOY",
    images: {
      Red: [Rj1, Rj2],
      white: [Wj1],
    },
    featureImages: {
      Red: [
        // { image: Rstorage, title: "Storage Space" },
        // { image: Rtyre, title: "Tyre" },
        // { image: Rbrake, title: "Disk Brake" },
        // { image: Rlamp, title: "Daylight Running Lamp" },
        // { image: digitalmeter, title: "Digital Meter" },
        // { image: cruidecontrol, title: "Cruise Control" },
      ],
      white: [
        // { image: storage, title: "Storage Space" },
        // { image: tyre, title: "Tyre" },
        // { image: diskbrake, title: "Disk Brake" },
        // { image: daylight, title: "Daylight Running Lamp" },
        // { image: digitalmeter, title: "Digital Meter" },
        // { image: cruidecontrol, title: "Cruise Control" },
      ]
    },
    price: "Rs 175,000",
    colors: ["white", "Red"],
    specifications: {
      Motor: "1000 W BLDC QS",
      Speed: "45-50 KM/H",
      Range: "60-70 KM",
      Battery: "60V 26 AH GRAPHENE",
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
        value: "45-50 Km/h",
      },
      {
        title: "Range",
        value: "60-70 KM",
      },
      {
        title: "Battery Type",
        value: "60V 26 AH GRAPHENE",
      },
      {
        title: "Electric Motor Power",
        value: "1000 Watts",
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
