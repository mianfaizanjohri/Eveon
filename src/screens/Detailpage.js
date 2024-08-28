import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { products } from '../components/Data/Products';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Button, Spinner } from '@chakra-ui/react';
import Layout from '../components/layout/Layout';
// import { FaTruckFast } from "react-icons/fa6";
// import { FaShieldAlt } from "react-icons/fa";

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
  const [mainImage, setMainImage] = useState(product.images[selectedColor][0]); // Default main imageconst [mainImage, setMainImage] = useState(product.images[selectedColor][0]); // Default main image


  useEffect(() => {
    setImageIndex(0); // Reset the image index when color changes
  }, [selectedColor]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setMainImage(product.images[color][0]); // Reset the main image to the first image of the new color
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
        <div className="bg-gray-50 p-8">
          <div className="mx-auto overflow-hidden">
            <div className="flex flex-wrap">
              {/* Image Gallery */}
              <div className="w-full md:w-1/2 p-6 flex flex-col justify-center items-center">
                <img
                  src={mainImage}
                  alt={product.name}
                  width={500}
                  height={600}
                  className="w-[500px] h-auto rounded-lg shadow-sm"
                />
                <div className="flex justify-center mt-4 space-x-2">
                  {product.images[selectedColor].map((img, index) => (
                    <div key={index} className="w-1/5">
                      <img
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        width={100}
                        height={120}
                        className="w-auto h-auto cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300"
                        onClick={() => setMainImage(img)} // Set the clicked thumbnail as the main image
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div className="w-full md:w-1/2 p-6">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">{product.name}</h1>
                <div className="mb-2 flex gap-2">
                  <p className="text-xl text-gray-400 line-through">{product.oldPrice}</p>
                  <p className="text-xl font-bold text-red-600">{product.newPrice}</p>
                </div>

                {/* Color Selection */}
                <div className="mb-4">
                  <p className="text-lg font-semibold text-gray-800">Select Color:</p>
                  <div className="flex gap-4 mt-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        className={`px-4 py-2 rounded-md shadow-sm border ${selectedColor === color ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'}`}
                        onClick={() => handleColorChange(color)}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                <ul className="list-disc list-inside text-gray-600 mb-4">
                  <div className='flex items-center gap-3'>
                    {/* <FaTruckFast /> */}
                    <p>FREE delivery over Rs. 3499!</p>
                  </div>
                  <div className='md:ml-5 text-xs text-gray-400 p-3'>
                    <p>Rs.200 delivery charges nationwide.</p>
                    <p>Delivery within 2-5 days.</p>
                  </div>

                  <div className='flex items-center gap-3'>
                    {/* <FaShieldAlt /> */}
                    <p>FREE returns and exchanges!</p>
                  </div>
                  <div className='md:ml-5 text-sm text-gray-400 p-3'>
                    <p><span className='text-gray-500 font-bold'>100%</span> <span className='text-xs'>customer satisfaction guaranteed.</span></p>
                    <p><span className='text-gray-500 font-bold'>FREE LIFETIME</span> <span className='text-xs'>returns and exchanges.</span></p>
                  </div>
                </ul>
                <div className='mx-auto flex'>
                  <button
                    className="w-full bg-gray-700 text-white px-6 py-2 rounded-md shadow-md hover:bg-gray-900 transition-colors duration-300"
                    onClick={() => handleAddToCart(product)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Performance Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 p-8 bg-gray-50 items-start">
          <div className="md:col-span-2 text-left">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">Performance Details of {product.name}</h1>
            <p className="text-gray-600 text-justify leading-relaxed mb-6">
              {product.description}
            </p>
          </div>
          <div className="md:col-span-2 bg-white shadow-md rounded-lg p-6">
            <ul className="space-y-4">
              {product.detailedSpecifications.map((spec, index) => (
                <li key={index} className="flex justify-between shadow-lg p-3">
                  <span className="font-bold text-sm   text-green-600">{spec.title}</span>
                  <span className='font-bold text-sm  '>{spec.value}</span>
                </li>
              ))}
            </ul>
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
