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
    price: 260000, // Store price as a number
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
  // Add other products here...
];
