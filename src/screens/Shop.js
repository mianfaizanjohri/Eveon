import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../store/cartSlice';
import {
  Box,
  Image,
  Badge,
  Button,
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
} from '@chakra-ui/react';
import { products } from '../components/Data/Products';
import Layout from '../components/layout/Layout';

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
    setIsCartOpen(true); // Open the cart sidebar
  };

  const handleViewDetails = (product) => {
    navigate(`/product/${product.id}`, {
      state: { product: { ...product, selectedColor: selectedColors[product.id] } },
    });
  };

  return (
    <>
      <Layout>
        <div className="flex">
          <div className="w-3/4 p-8">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Card key={product.id} maxW="sm">
                    <CardBody>
                      <Image
                        src={product.images[selectedColors[product.id]][0]} // Display the first image of the selected color
                        alt={product.name}
                        borderRadius="lg"
                      />
                      <Stack mt="6" spacing="3">
                        <Heading size="md">{product.name}</Heading>
                        <Text>{product.model}</Text>
                        <Text color="blue.600" fontSize="2xl">
                          {product.price}
                        </Text>
                        <Box mt="2">
                          {product.colors.map((color) => (
                            <Badge
                              key={color}
                              borderRadius="full"
                              px="2"
                              mr="1"
                              colorScheme={selectedColors[product.id] === color ? 'blue' : 'gray'}
                              cursor="pointer"
                              onClick={() => handleColorChange(product.id, color)}
                            >
                              {color}
                            </Badge>
                          ))}
                        </Box>
                      </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                      <ButtonGroup spacing="2">
                        <Button
                          variant="solid"
                          colorScheme="blue"
                          onClick={() => handleAddToCart(product)}
                        >
                          Buy now
                        </Button>
                        <Button
                          variant="ghost"
                          colorScheme="blue"
                          onClick={() => handleViewDetails(product)}
                        >
                          Details
                        </Button>
                      </ButtonGroup>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Cart Sidebar */}
          <div className={`w-1/4 bg-gray-100 p-4 ${isCartOpen ? 'block' : 'hidden'}`}>
            <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index} className="flex justify-between mt-2">
                    <div>
                      {item.name} - {item.color}
                    </div>
                    <div>{item.price}</div>
                  </li>
                ))}
              </ul>
            )}
            <Button className="mt-4" colorScheme="blue" onClick={() => setIsCartOpen(false)}>
              Close Cart
            </Button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Shop;
