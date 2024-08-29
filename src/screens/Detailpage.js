import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { products } from '../components/Data/Products';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Button, Spinner, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure } from '@chakra-ui/react';
import Layout from '../components/layout/Layout';
import { FaMotorcycle } from "react-icons/fa6";

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure(); // Modal state management
  const product = products.find((product) => product.id === parseInt(id));
  const initialColor = location.state?.selectedColor || product.colors[0];
  const [selectedColor, setSelectedColor] = useState(initialColor);
  const [imageIndex, setImageIndex] = useState(0);
  const [mainImageLoading, setMainImageLoading] = useState(true); // Main image loading state
  const [featureLoading, setFeatureLoading] = useState(Array(product.images[selectedColor].length).fill(true));
  const [mainImage, setMainImage] = useState(product.images[selectedColor][0]); // Default main image

  useEffect(() => {
    setImageIndex(0); // Reset the image index when the color changes
  }, [selectedColor]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setMainImageLoading(true); // Set loading state to true
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

  const handleNextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % product.images[selectedColor].length);
    setMainImage(product.images[selectedColor][(imageIndex + 1) % product.images[selectedColor].length]);
  };

  const handlePrevImage = () => {
    setImageIndex((prevIndex) => (prevIndex - 1 + product.images[selectedColor].length) % product.images[selectedColor].length);
    setMainImage(product.images[selectedColor][(imageIndex - 1 + product.images[selectedColor].length) % product.images[selectedColor].length]);
  };

  return (
    <>
      <Layout>
        <div className="bg-gray-50 p-8">
          <div className="mx-auto overflow-hidden">
            <div className="flex flex-wrap">
              {/* Image Gallery */}
              <div className="w-full md:w-1/2 p-6 flex flex-col justify-center items-center">
                {mainImageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <Spinner size="xl" color="green.500" />
                  </div>
                )}
                <img
                  src={mainImage}
                  alt={product.name}
                  width={500}
                  height={600}
                  className={`w-[500px] h-auto rounded-lg shadow-sm cursor-pointer ${mainImageLoading ? 'opacity-0' : 'opacity-100'}`}
                  onLoad={() => setMainImageLoading(false)} // Set loading state to false when the image loads
                  onClick={onOpen} // Open modal on click
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
                        onClick={() => {
                          setMainImageLoading(true); // Set loading state to true when a new thumbnail is clicked
                          setMainImage(img);
                          setImageIndex(index);
                        }} // Set the clicked thumbnail as the main image
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div className="w-full md:w-1/2 p-6">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">{product.name}</h1>
                <div className="mb-2 flex gap-2">
                  {/* <p className="text-xl text-gray-400 line-through">{product.price}</p> */}
                  <p className="text-xl font-bold text-red-600">{product.price}</p>
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

                {/* Product Specifications */}
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <li key={index} className="flex items-center gap-3">
                      <p>
                        <span className="font-semibold text-gray-800">{key.replace(/([A-Z])/g, ' $1')}: </span>
                        {value}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className='mx-auto flex'>
                  <button
                    className="w-full bg-gray-700 text-white px-6 py-2 rounded-md shadow-md hover:bg-gray-900 transition-colors duration-300"
                    onClick={() => handleAddToCart(product)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 p-8 bg-gray-200 items-start">
          <div className="md:col-span-2 text-left">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center lg:mt-20">Performance Details of {product.name}</h1>
            <p className="text-gray-600 text-justify leading-relaxed mb-6 lg:mt-5">
              {product.description}
            </p>
          </div>
          <div className="md:col-span-2 bg-white shadow-md rounded-lg p-6">
            <ul className="space-y-4">
              {product.detailedSpecifications.map((spec, index) => (
                <li key={index} className="flex justify-between shadow-lg p-3">
                  <span className="font-bold text-sm text-green-600">{spec.title}</span>
                  <span className='font-bold text-sm'>{spec.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="container mx-auto py-8">
          <h2 className="text-center text-3xl font-bold mb-8">{product.name} FEATURES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-2">
            {product.featureImages[selectedColor] && product.featureImages[selectedColor].length > 0 ? (
              product.featureImages[selectedColor].map((feature, index) => (
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
                  <p className="text-xl underline font-bold text-green-600 text-center">{feature.title}</p>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-xl text-gray-600">
                No data available
              </div>
            )}
          </div>
        </div>

      </Layout>

      {/* Image Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{product.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="flex justify-center items-center">
            <Button
              onClick={handlePrevImage}
              position="absolute"
              left="10%"
              zIndex="10"
              backgroundColor="transparent"
              _hover={{ backgroundColor: "transparent" }}
              _focus={{ boxShadow: "none" }}
            >
              <FaArrowLeft size={30} />
            </Button>
            <img src={mainImage} alt={product.name} className="max-h-[80vh] max-w-[90vw]" />
            <Button
              onClick={handleNextImage}
              position="absolute"
              right="10%"
              zIndex="10"
              backgroundColor="transparent"
              _hover={{ backgroundColor: "transparent" }}
              _focus={{ boxShadow: "none" }}
            >
              <FaArrowRight size={30} />
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DetailPage;
