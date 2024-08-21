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
import CartModal from '../components/Cartmodal/Cartmodal'; // Import the CartModal component

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
          <div className="w-full p-4 md:w-3/4 md:p-8">
            <div className="container mx-auto">
              <Box
                display="grid"
                gridTemplateColumns={{ base: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' }}
                gap={6}
              >
                {products.map((product) => (
                  <Card key={product.id} maxW="sm" mx="auto">
                    <CardBody>
                      <Image
                        src={product.images[selectedColors[product.id]][0]} // Display the first image of the selected color
                        alt={product.name}
                        borderRadius="lg"
                        objectFit="cover"
                        width="100%"
                        height={{ base: '200px', md: '250px', lg: '300px' }} // Responsive height
                      />
                      <Stack mt="6" spacing="3">
                        <Heading size="md">{product.name}</Heading>
                        <Text>{product.model}</Text>
                        <Text color="blue.600" fontSize="2xl">
                          {formatPrice(product.price)}
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
                        {/* <Button
                          variant="solid"
                          colorScheme="blue"
                          onClick={() => handleAddToCart(product)}
                        >
                          Buy now
                        </Button> */}
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
              </Box>
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
