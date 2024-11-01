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
import Gp from "../../assets/Pshoot/Grey/Gp.png";
import Gpstorage from "../../assets/Pshoot/Grey/Gpstorage.png";
import Gpbrake from "../../assets/Pshoot/Grey/Gpbrake.png";
import Gptyre from "../../assets/Pshoot/Grey/Gptyre.png";
import Gplamp from "../../assets/Pshoot/Grey/Gplamp.png";

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
import JG1 from "../../assets/Pshoot/JOY/JG1.png";
import Jtyre from "../../assets/Pshoot/JOY/Jtyre.png";
import Jstorage from "../../assets/Pshoot/JOY/Jstorage.png";
import JGlamp from "../../assets/Pshoot/JOY/JGlamp.png";
import Jbrake from "../../assets/Pshoot/JOY/Jbrake.png";
import LMNew from "../../assets/Pshoot/LEOPARD/Gray/LMNew.png";
import LCnew from "../../assets/Pshoot/LEOPARD/Gray/LCnew.png";

import LP1 from '../../assets/Pshoot/LEOPARD_PRO/LP1.png'
import LP2 from "../../assets/Pshoot/LEOPARD_PRO/LP2.png";
import LP3 from "../../assets/Pshoot/LEOPARD_PRO/LP3.png";
import LP4 from "../../assets/Pshoot/LEOPARD_PRO/LPW4.png";
import LP5 from "../../assets/Pshoot/LEOPARD_PRO/LP5.png";




export const products = [
  {
    id: 1,
    name: "PRONTO",
    images: {
      Red: [r1, r3, r2, r4],
      white: [w1, w2, w3, w4],
      Grey: [Gp, Gpstorage, Gpbrake, Gptyre],
    },
    featureImages: {
      Red: [
        { image: Rstorage, title: "Storage Space" },
        { image: Rtyre, title: "10 Inch Alloy Rim Tyre" },
        { image: Rbrake, title: "Front Disk Rear Drum Brake" },
        { image: Rlamp, title: "Daylight Running Lamp" },
        { image: digitalmeter, title: "Digital Meter" },
        { image: cruidecontrol, title: "Cruise Control" },
      ],
      white: [
        { image: storage, title: "Storage Space" },
        { image: tyre, title: "10 Inch Alloy Rim Tyre" },
        { image: diskbrake, title: "Front Disk Rear Drum Brake" },
        { image: daylight, title: "Daylight Running Lamp" },
        { image: digitalmeter, title: "Digital Meter" },
        { image: cruidecontrol, title: "Cruise Control" },
      ],
      Grey: [
        { image: Gpstorage, title: "Storage Space" },
        { image: Gptyre, title: "10 Inch Alloy Rim Tyre" },
        { image: Gpbrake, title: "Front Disk Rear Drum Brake" },
        { image: Gplamp, title: "Daylight Running Lamp" },
        { image: digitalmeter, title: "Digital Meter" },
        { image: cruidecontrol, title: "Cruise Control" },
      ],
    },
    price: "Rs 199,000",
    colors: ["white", "Red", "Grey"],
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
    description: `The PRONTO electric bike is a reliable and efficient choice for everyday commuting. It’s equipped with a powerful 1200 W BLDC QS motor, allowing you to reach speeds of 50-55 km/h, making it perfect for city rides. The bike features a 72V 32 AH graphene battery, providing a solid range of 80-90 km, ensuring you can cover significant distances on a single charge. With 10-inch alloy rims, the PRONTO offers stability and a smooth ride on various road surfaces.`,
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
        value: "18 Months Motor & 12 Months Batteries and Controller warranty",
      },
      {
        title: "Cruise control",
        value:
          "Maintains a set speed, freeing the rider from constantly pressing the throttle.",
      },
      {
        title: "Reverse Gear",
        value:
          "Easily back up the scooter, making parking and tight turns a breeze.",
      },
      {
        title: "Side Stand Sensor",
        value: "Available",
      },
    ],
  },

  {
    id: 2,
    name: "LEOPARD",
    images: {
      Silver: [g1, g2, g3, g4],
      Green: [gre1, gre2, gre3, gre4],
      Blue: [g1],
      White: [gre1],
    },
    featureImages: {
      Silver: [
        { image: Grstorage, title: "Storage Space" },
        { image: Grtyre, title: "12 Inch Alloy Rim Tyre" },
        { image: Grbrake, title: "Front & Rear Bigger Disk Brake" },
        { image: Grlamp, title: "Daylight Running Lamp" },
        { image: LMNew, title: "Digital Meter" },
        { image: LCnew, title: "Cruise Control" },
      ],
      Green: [
        { image: Fgrestorage, title: "Storage Space" },
        { image: Fgretyre, title: "12 Inch Alloy Rim Tyre" },
        { image: Fgrebrake, title: "Front & Rear Bigger Disk Brake" },
        { image: Fgrelamp, title: "Daylight Running Lamp" },
        { image: LMNew, title: "Digital Meter" },
        { image: LCnew, title: "Cruise Control" },
      ],
      Blue: [
        // { image: Fgrestorage, title: "Storage Space" },
        // { image: Fgretyre, title: "12 Inch Alloy Rim Tyre" },
        // { image: Fgrebrake, title: "Front & Rear Bigger Disk Brake" },
        // { image: Fgrelamp, title: "Daylight Running Lamp" },
        // { image: LMNew, title: "Digital Meter" },
        // { image: LCnew, title: "Cruise Control" },
      ],
      White: [
        // { image: Fgrestorage, title: "Storage Space" },
        // { image: Fgretyre, title: "12 Inch Alloy Rim Tyre" },
        // { image: Fgrebrake, title: "Front & Rear Bigger Disk Brake" },
        // { image: Fgrelamp, title: "Daylight Running Lamp" },
        // { image: LMNew, title: "Digital Meter" },
        // { image: LCnew, title: "Cruise Control" },
      ],
    },
    price: "Rs 260,000",
    colors: ["Silver", "Green", "Blue", "White"],
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
    description: `The LEOPARD electric bike is our main luxury product, offering a blend of style and power. It comes with a 1200 W motor, enabling speeds of 50-55 km/h. The bike features a 72V 38 AH graphene battery, providing a range of up to 120 km in eco mode. With 12-inch alloy rims, it ensures durability and stability. The front and rear bigger disk brakes offer enhanced safety. Available in grey and green, the bike’s sleek and modern design makes it perfect for city rides.`,
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
        value: "18 Months Motor & 12 Months Batteries and Controller warranty",
      },
      {
        title: "Cruise control",
        value:
          "Maintains a set speed, freeing the rider from constantly pressing the throttle.",
      },
      {
        title: "Reverse Gear",
        value:
          "Easily back up the scooter, making parking and tight turns a breeze.",
      },
      {
        title: "Side Stand Sensor",
        value: "Available",
      },
    ],
  },

  {
    id: 3,
    name: "JOY",
    images: {
      Red: [Rj1, Rj2],
      white: [Wj1],
      Grey: [JG1],
    },
    featureImages: {
      Red: [
        // { image: Rstorage, title: "Storage Space" },
        { image: Jtyre, title: "Tyre" },
        // { image: Rbrake, title: "Disk Brake" },
        // { image: Rlamp, title: "Daylight Running Lamp" },
        // { image: digitalmeter, title: "Digital Meter" },
        // { image: cruidecontrol, title: "Cruise Control" },
      ],
      white: [
        { image: Jstorage, title: "Storage Space" },
        { image: Jbrake, title: "Tyre" },
        // { image: diskbrake, title: "Disk Brake" },
        // { image: daylight, title: "Daylight Running Lamp" },
        // { image: digitalmeter, title: "Digital Meter" },
        // { image: cruidecontrol, title: "Cruise Control" },
      ],
      Grey: [
        // { image: Jstorage, title: "Storage Space" },
        // { image: tyre, title: "Tyre" },
        // { image: diskbrake, title: "Disk Brake" },
        { image: JGlamp, title: "Daylight Running Lamp" },
        // { image: digitalmeter, title: "Digital Meter" },
        // { image: cruidecontrol, title: "Cruise Control" },
      ],
    },
    price: "Rs 175,000",
    colors: ["white", "Red", "Grey"],
    specifications: {
      Motor: "1000 W BLDC QS",
      Speed: "45-50 KM/H",
      Range: "55-60 KM",
      Battery: "60V 23 AH GRAPHENE",
      TyreSize: "10 INCH ALLOY RIM",
      Brake: "FRONT DISK REAR DRUM BRAKE",
      // ElectricMotorPower: "2000 Watts",
      // WarrantyPeriod:
      //   "24 Months Motor & 12 Months Batteries and Controller warranty",
      // TopSpeed: "70 Km/h",
    },
    description: `The JOY electric bike is a versatile and affordable option, perfect for bachelors, students, and anyone looking for a practical mode of transportation. It features a 1000 W BLDC QS motor, enabling speeds of 45-50 km/h, making it well-suited for city commutes or casual rides. The bike is equipped with a 60V 23 AH graphene battery, providing a range of 55-60 km, ensuring you can easily cover your daily travel needs.`,
    detailedSpecifications: [
      {
        title: "Speed",
        value: "45-50 Km/h",
      },
      {
        title: "Range",
        value: "55-60 KM",
      },
      {
        title: "Battery Type",
        value: "60V 23 AH GRAPHENE",
      },
      {
        title: "Electric Motor Power",
        value: "1000 Watts",
      },
      {
        title: "Warranty Period",
        value: "18 Months Motor & 12 Months Batteries and Controller warranty",
      },
      {
        title: "Cruise control",
        value:
          "Maintains a set speed, freeing the rider from constantly pressing the throttle.",
      },
      {
        title: "Reverse Gear",
        value:
          "Easily back up the scooter, making parking and tight turns a breeze.",
      },
      {
        title: "Side Stand Sensor",
        value: "Available",
      },
    ],
  },
  {
    id: 4,
    name: "LEOPARD PRO",
    images: {
      green: [LP1, LP2],
      silver: [LP4],
      
    },
    featureImages: {
      silver: [
        { image: LP4, title: "Back view" },
        // { image: diskbrake, title: "Disk Brake" },
        // { image: daylight, title: "Daylight Running Lamp" },
        // { image: digitalmeter, title: "Digital Meter" },
        // { image: cruidecontrol, title: "Cruise Control" },
      ],
      green: [
        // { image: Jstorage, title: "Storage Space" },
        // { image: tyre, title: "Tyre" },
        // { image: diskbrake, title: "Disk Brake" },
        { image: LP3, title: "Tyre and disk brake" },
        { image: LP5, title: "Handle and meter view" },
        // { image: digitalmeter, title: "Digital Meter" },
        // { image: cruidecontrol, title: "Cruise Control" },
      ],
    },
    price: "Rs 200,000",
    colors: ["green", "silver"],
    specifications: {
      Motor: "2000 W QS World Top Class",
      Speed: "70 KM/H",
      Battery: "72V 38 AH Chilwee Brand GOLD GRAPHENE",
      TyreSize: "12 INCH ALLOY RIM",
      Brake: "FRONT DISK REAR DISK BRAKE",

      // ElectricMotorPower: "2000 Watts",
      // WarrantyPeriod:
      //   "24 Months Motor & 12 Months Batteries and Controller warranty",
      // TopSpeed: "70 Km/h",
    },
    description: `The Leopard Pro electric bike is a versatile and affordable option, perfect for bachelors, students, and anyone looking for a practical mode of transportation. It features a 2000 W BLDC QS motor, enabling speeds of 45-50 km/h, making it well-suited for city commutes or casual rides. The bike is equipped with a 72V 38 AH graphene battery, ensuring you can easily cover your daily travel needs.`,
    detailedSpecifications: [
      {
        title: "Speed",
        value: "70 Km/h",
      },
      {
        title: "Battery Type",
        value: "72V 38 AH GOLD GRAPHENE",
      },
      {
        title: "Battery Management System",
        value: "Available",
      },
      {
        title: "EBS Regenration System",
        value: "Available",
      },
      {
        title: "Anti-theft System",
        value: "Available",
      },
      {
        title: "Electric Motor Power",
        value: "2000 Watts",
      },
      {
        title: "Ground Clearence",
        value: "172 mm",
      },
      {
        title: "Warranty Period",
        value: "18 Months Motor & 12 Months Batteries and Controller warranty",
      },
      {
        title: "Cruise control",
        value:
          "Maintains a set speed, freeing the rider from constantly pressing the throttle.",
      },
      {
        title: "Reverse Gear",
        value:
          "Easily back up the scooter, making parking and tight turns a breeze.",
      },
      {
        title: "Side Stand Sensor",
        value: "Available",
      },
    ],
  },
];
