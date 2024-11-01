import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../store/cartSlice';
import { products } from '../components/Data/Products';
import Layout from '../components/layout/Layout';
import CartModal from '../components/Cartmodal/Cartmodal';

const Shop = () => {
  const [selectedColors, setSelectedColors] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = product.colors[0]; // Default to the first color
      return acc;
    }, {})
  );

  const [isCartOpen, setIsCartOpen] = useState(false);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const handleColorChange = (productId, color) => {
    setSelectedColors({
      ...selectedColors,
      [productId]: color,
    });
  };

  const handleAddToCart = (product) => {
    const selectedItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      color: selectedColors[product.id],
    };
    dispatch(addToCart(selectedItem));
    setIsCartOpen(true); // Open the cart modal
  };

  const handleViewDetails = (product) => {
    navigate(`/product/${product.id}`, {
      state: { product: { ...product, selectedColor: selectedColors[product.id] } },
    });
  };

  const formatPrice = (price) => {
    return `${price.toLocaleString()} PKR`;
  };

  return (
    <>
      <Layout>
        <div className="flex">
          <div className="w-full p-4 md:w-3/2  md:p-8 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
                >
                  <div
                    className="h-64 overflow-hidden cursor-pointer"
                    onClick={() => handleViewDetails(product)}
                  >
                    <img
                      src={product.images[selectedColors[product.id]][0]}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {product.name}
                    </h2>
                    <p className="text-gray-600">{product.model}</p>
                    <p className="text-blue-600 text-xl mt-2">
                      {formatPrice(product.price)}
                    </p>
                    <div className="mt-3">
                      {product.colors.map((color) => (
                        <button
                          key={color}
                          className={`inline-block px-3 py-1 mr-2 mb-2 rounded border ${
                            selectedColors[product.id] === color
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-200 text-gray-800'
                          }`}
                          onClick={() => handleColorChange(product.id, color)}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                    <div className="mt-4 flex justify-end items-center">
                      <button
                        className="text-blue-600 hover:underline cursor-pointer"
                        onClick={() => handleViewDetails(product)}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>

      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} closeModal={() => setIsCartOpen(false)} />
    </>
  );
};

export default Shop;
