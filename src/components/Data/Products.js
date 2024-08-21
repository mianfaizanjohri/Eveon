import test from '../../assets/Pshoot/test.png';
import one from '../../assets/Pshoot/2.png';
import two from '../../assets/Pshoot/3.png';

export const products = [
  {
    id: 1,
    name: 'Eveon Leopard',
    images: {
      Red: [test, one, two],
      Black: [
        'https://bikeindia.in/wp-content/uploads/2017/07/Matte-Black-Dominar-1.jpg',
        'https://via.placeholder.com/600/000000',
        'https://via.placeholder.com/600/333333',
      ],
      Blue: [
        'https://imgd.aeplcdn.com/1280x720/n/bw/models/colors/yamaha-select-model-racing-blue-1575873052608.jpg?q=100',
        'https://via.placeholder.com/600/0000FF',
        'https://via.placeholder.com/600/6666FF',
      ],
    },
    price: '260,000 PKR',
    model: 'Model A1',
    colors: ['Red', 'Black', 'Blue'],
    specifications: {
      motor: '1200 W BLDC QS',
      speed: '50-55 KM/H',
      range: '120 KM (ECO MODE)',
      battery: '72V 38 AH GRAPHENE',
      tyreSize: '12 INCH ALLOY RIM',
      brake: 'FRONT & REAR BIGGER DISK',
    },
  },
  // {
  //   id: 2,
  //   name: 'Eveon Pronto',
  //   images: {
  //     Green: [
  //       'https://eveon.pk/path/to/green-pronto-image.png',
  //       'https://via.placeholder.com/600/00FF00',
  //       'https://via.placeholder.com/600/66FF66',
  //     ],
  //     Yellow: [
  //       'https://eveon.pk/path/to/yellow-pronto-image.png',
  //       'https://via.placeholder.com/600/FFFF00',
  //       'https://via.placeholder.com/600/FFDD00',
  //     ],
  //     Black: [
  //       'https://eveon.pk/path/to/black-pronto-image.png',
  //       'https://via.placeholder.com/600/000000',
  //       'https://via.placeholder.com/600/333333',
  //     ],
  //   },
  //   price: '199,000 PKR',
  //   model: 'Model B2',
  //   colors: ['Green', 'Yellow', 'Black'],
  //   specifications: {
  //     motor: '1200 W BLDC QS',
  //     speed: '50-55 KM/H',
  //     range: '80-90 KM',
  //     battery: '72V 32 AH GRAPHENE',
  //     tyreSize: '10 INCH ALLOY RIM',
  //     brake: 'FRONT DISK REAR DRUM BRAKE',
  //   },
  // },
  // {
  //   id: 3,
  //   name: 'Eveon JOY',
  //   images: {
  //     White: [
  //       'https://eveon.pk/path/to/white-joy-image.png',
  //       'https://via.placeholder.com/600/FFFFFF',
  //       'https://via.placeholder.com/600/EEEEEE',
  //     ],
  //     Gray: [
  //       'https://eveon.pk/path/to/gray-joy-image.png',
  //       'https://via.placeholder.com/600/808080',
  //       'https://via.placeholder.com/600/AAAAAA',
  //     ],
  //     Black: [
  //       'https://eveon.pk/path/to/black-joy-image.png',
  //       'https://via.placeholder.com/600/000000',
  //       'https://via.placeholder.com/600/333333',
  //     ],
  //   },
  //   price: '175,000 PKR',
  //   model: 'Model C3',
  //   colors: ['White', 'Gray', 'Black'],
  //   specifications: {
  //     motor: '1000 W BLDC QS',
  //     speed: '45-50 KM/H',
  //     range: '60-70 KM',
  //     battery: '60V 26 AH GRAPHENE',
  //     tyreSize: '10 INCH ALLOY RIM',
  //     brake: 'FRONT DISK REAR DRUM BRAKE',
  //   },
  // },
];
