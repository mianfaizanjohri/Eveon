import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { products } from '../components/Data/Products';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Button, Spinner } from '@chakra-ui/react';
import Layout from '../components/layout/Layout';

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const product = products.find((product) => product.id === parseInt(id));
  const initialColor = location.state?.selectedColor || product.colors[0];
  const [selectedColor, setSelectedColor] = useState(initialColor);
  const [imageIndex, setImageIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [featureLoading, setFeatureLoading] = useState(Array(product.images[selectedColor].length).fill(true));

  useEffect(() => {
    setImageIndex(0); // Reset the image index when color changes
  }, [selectedColor]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
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

  const handleFeatureImageLoad = (index) => {
    setFeatureLoading((prevLoading) => {
      const newLoading = [...prevLoading];
      newLoading[index] = false;
      return newLoading;
    });
  };

  const handleAddToCart = () => {
    const selectedItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      color: selectedColor,
      image: product.images[selectedColor][imageIndex], // Add the current image to the selectedItem object
    };
    navigate('/order', { state: { selectedItem } }); // Navigate to the order page with state
  };

  const features = [
    {
      image: product.images[selectedColor][0],
      title: 'Daylight Running Lamp',
    },
    {
      image: product.images[selectedColor][1],
      title: 'Big Storage Space',
    },
    {
      image: product.images[selectedColor][2],
      title: 'Digital Instrument Cluster',
    },
    {
      image: product.images[selectedColor][3],
      title: 'Digital Instrument Cluster',
    },
  ];

  return (
    <>
      <Layout>
        <div className="container mx-auto p-4 flex flex-col lg:flex-row items-center">
          {/* Left Side */}
          <div className="lg:w-3/5 flex flex-col items-center">
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
                  className={`w-full h-auto object-contain rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 ${loading ? 'opacity-0' : 'opacity-100'}`}
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
          <div className="lg:w-3/6 lg:ml-8 mt-8 lg:mt-0 text-center lg:text-left">
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

        {/* Performance Details Section */}
        <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-gray-50">
          <div className="md:w-2/3 text-left">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">Performance Details of {product.name}</h1>
            <p className="text-gray-600 text-justify leading-relaxed mb-6">
              {product.description}
            </p>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0 md:ml-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <ul className="space-y-4">
                {product.detailedSpecifications.map((spec, index) => (
                  <li key={index} className="flex justify-between shadow-lg p-3">
                    <span className="font-bold text-lg text-green-600">{spec.title}</span>
                    <span className='font-bold'>{spec.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="container mx-auto py-8">
          <h2 className="text-center text-3xl font-bold mb-8">{product.name} FEATURES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-2">
            {features.map((feature, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {featureLoading[index] && (
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <Spinner size="xl" color="green.500" />
                  </div>
                )}
                <img
                  src={feature.image}
                  alt={feature.title}
                  className={`w-full bg-gray-100 h-auto object-cover border-2 border-green-500 rounded-lg mb-4 ${featureLoading[index] ? 'opacity-0' : 'opacity-100'}`}
                  onLoad={() => handleFeatureImageLoad(index)}
                />
                <p className="text-xl underline font-bold text-green-600 text-center">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default DetailPage;
