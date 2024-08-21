import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../components/Data/Products';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Button, Spinner } from '@chakra-ui/react';
import one from '../assets/Pshoot/test.png'
import two from '../assets/Pshoot/2.png'
import three from '../assets/Pshoot/3.png'

const DetailPage = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [imageIndex, setImageIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setImageIndex(0); // Reset the image index when color changes
  };

  const handleNextImage = () => {
    setLoading(true);
    setImageIndex((prevIndex) =>
      prevIndex === product.images[selectedColor].length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setLoading(true);
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images[selectedColor].length - 1 : prevIndex - 1
    );
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleAddToCart = () => {
    const selectedItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      color: selectedColor,
    };
    dispatch(addToCart(selectedItem));
  };

  const features = [
    {
      image: one, // Replace with the correct image path
      title: 'Daylight Running Lamp',
    },
    {
      image: two, // Replace with the correct image path
      title: 'Big Storage Space',
    },
    {
      image: three, // Replace with the correct image path
      title: 'Digital Instrument Cluster',
    },
    {
      image: one, // Replace with the correct image path
      title: 'Three Color Options',
    },
  ];

  return (
    <>
      <div className="container mx-auto p-4 flex flex-col lg:flex-row items-center">
        {/* Left Side */}
        <div className="lg:w-2/5 flex flex-col items-center">
          <div className="relative w-full h-auto mb-4">
            <FaArrowLeft
              size={24}
              onClick={handlePrevImage}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer z-10 text-gray-600 hover:text-gray-800 transition-colors"
            />
            <div className="relative w-full h-auto">
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <Spinner size="xl" color="blue.500" />
                </div>
              )}
              <img
                src={product.images[selectedColor][imageIndex]}
                alt={product.name}
                className={`w-full h-auto object-contain rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 ${loading ? 'opacity-0' : 'opacity-100'
                  }`}
                onLoad={handleImageLoad}
              />
            </div>
            <FaArrowRight
              size={24}
              onClick={handleNextImage}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer z-10 text-gray-600 hover:text-gray-800 transition-colors"
            />
          </div>
          <div className="flex justify-center space-x-2 mb-4">
            {product.colors.map((color) => (
              <Button
                key={color}
                onClick={() => handleColorChange(color)}
                variant={selectedColor === color ? 'solid' : 'outline'}
                colorScheme="blue"
                className="text-sm font-semibold"
              >
                {color}
              </Button>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-3/5 lg:ml-8 mt-8 lg:mt-0 text-center lg:text-left">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">{product.name}</h1>
          <p className="text-xl text-gray-600 mb-4">{product.model}</p>
          <p className="text-2xl font-semibold text-blue-600 mb-6">{product.price}</p>

          <div className="bg-gray-100 p-4 rounded-lg shadow-lg mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Specifications</h2>
            <ul className="text-gray-700">
              <li className="mb-2"><strong>Motor:</strong> {product.specifications.motor}</li>
              <li className="mb-2"><strong>Speed:</strong> {product.specifications.speed}</li>
              <li className="mb-2"><strong>Range:</strong> {product.specifications.range}</li>
              <li className="mb-2"><strong>Battery:</strong> {product.specifications.battery}</li>
              <li className="mb-2"><strong>Tyre Size:</strong> {product.specifications.tyreSize}</li>
              <li><strong>Brake:</strong> {product.specifications.brake}</li>
            </ul>
          </div>

          <Button
            colorScheme="blue"
            onClick={handleAddToCart}
            className="w-full lg:w-auto px-6 py-3 rounded-md text-white font-semibold bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
          >
            BOOK NOW
          </Button>
        </div>
      </div>
      <div className="container mx-auto p-4 flex flex-col lg:flex-row items-center">
        {/* Left Side - Description */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Performance Details of Evee C1</h2>
          <p className="text-gray-700 mb-4">
            Unlock the thrill of urban exploration with our high-powered electric scooter, engineered to elevate your ride. Cruise through city streets at exhilarating speeds of up to 55 KM/hr, enjoying the freedom to roam with a range of up to 65 KM on a single charge. With cutting-edge technology and unmatched performance, our scooter is your ticket to electrifying adventures in style and sustainability.
          </p>
          <p className="text-gray-700 mb-4">
            Designed for the modern explorer, our electric scooter merges sleek aesthetics with dynamic functionality, setting a new standard for urban mobility. Whether weaving through traffic or cruising along scenic routes, embrace the excitement of every journey with our innovative ride, redefining the way you experience city life.
          </p>
        </div>

        {/* Right Side - Specifications */}
        <div className="lg:w-1/2 bg-gray-100 p-6 rounded-lg shadow-lg text-left">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-lg font-semibold text-green-600">Speed</p>
              <p className="text-xl font-bold text-gray-800">55 Km/h</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-green-600">Range</p>
              <p className="text-xl font-bold text-gray-800">60 KM</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-green-600">Battery Type</p>
              <p className="text-xl font-bold text-gray-800">60V 26Ah Graphene Batteries</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-green-600">Electric Motor Power</p>
              <p className="text-xl font-bold text-gray-800">1200 Watts</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-green-600">Warranty Period</p>
              <p className="text-xl font-bold text-gray-800">24 Months Motor & 12 Months Batteries and Controller warranty</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-8">
        <h2 className="text-center text-3xl font-bold mb-8">Evee C1 FEATURES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-auto object-cover border-2 border-green-500 rounded-lg mb-4"
              />
              <p className="text-xl font-medium text-green-600 text-center">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6 space-x-2">
          <span className="inline-block w-3 h-3 bg-black rounded-full"></span>
          <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
          <span className="inline-block w-3 h-3 bg-black rounded-full"></span>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
