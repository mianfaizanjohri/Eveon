import React from 'react';
import {
  Heading,
  Stack,
  Text,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Input,
  Select,
  Checkbox,
} from '@chakra-ui/react';

const OrderBook = () => {
  const [value, setValue] = React.useState('1');
  return (
    <Stack>
      <Stack
        bgColor={'#fff'}
        boxShadow={'lg'}
        border={'1px solid #dadce0'}
        borderRadius={'8px'}
      >
        <Stack bgColor={' #db4437'} borderTopRadius={'8px'} px={7} py={3}>
          <Heading
            fontSize={{ base: '16px', md: '17px', lg: '17px' }}
            fontWeight={'400'}
            color={'#fff'}
          >
            Model
          </Heading>
        </Stack>

        <Stack px={7} py={3}>
          <FormControl isRequired>
            <FormLabel
              fontSize={{ base: '16px', md: '16px', lg: '17px' }}
              fontWeight={'400'}
              color={'#202124'}
              pb={4}
            >
              Choose your model
            </FormLabel>
            <RadioGroup onChange={setValue} value={value}>
              <Stack direction="column" gap={4} pb={4}>
                <Radio
                  fontSize={{ base: '16px', md: '16px', lg: '17px' }}
                  fontWeight={'400'}
                  color={'#202124'}
                  colorScheme="red"
                  value="1"
                >
                  Eveon C1
                </Radio>
                <Radio
                  fontSize={{ base: '16px', md: '16px', lg: '17px' }}
                  fontWeight={'400'}
                  color={'#202124'}
                  colorScheme="red"
                  value="2"
                >
                  Eveon Leopard (Space Grey Colour)
                </Radio>
                <Radio
                  fontSize={{ base: '16px', md: '16px', lg: '17px' }}
                  fontWeight={'400'}
                  color={'#202124'}
                  colorScheme="red"
                  value="3"
                >
                  Eveon C1 Air
                </Radio>
                <Radio
                  fontSize={{ base: '16px', md: '16px', lg: '17px' }}
                  fontWeight={'400'}
                  color={'#202124'}
                  colorScheme="red"
                  value="4"
                >
                  Flipper
                </Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
        </Stack>
      </Stack>

      <Stack
        bgColor={'#fff'}
        boxShadow={'lg'}
        border={'1px solid #dadce0'}
        borderRadius={'8px'}
      >
        <Stack bgColor={' #db4437'} borderTopRadius={'8px'} px={7} py={3}>
          <Heading
            fontSize={{ base: '16px', md: '17px', lg: '17px' }}
            fontWeight={'400'}
            color={'#fff'}
          >
            Color Options
          </Heading>
        </Stack>

        <Stack px={7} py={3}>
          <FormControl isRequired>
            <FormLabel
              fontSize={{ base: '16px', md: '16px', lg: '17px' }}
              fontWeight={'400'}
              color={'#202124'}
              pb={4}
            >
              Choose a colour
            </FormLabel>
            <Select
              focusBorderColor="none"
              placeholder="Choose"
              width={'fit-content'}
            >
              <option value="option1">Ivory White</option>
              <option value="option2">Midnight Blue</option>
              <option value="option3">Ruby Red</option>
            </Select>
          </FormControl>
        </Stack>
      </Stack>

      <Stack gap={3}>
        <Stack
          bgColor={'#fff'}
          boxShadow={'lg'}
          border={'1px solid #dadce0'}
          borderRadius={'8px'}
        >
          <Stack bgColor={' #db4437'} borderTopRadius={'8px'} px={7} py={3}>
            <Heading
              fontSize={{ base: '16px', md: '17px', lg: '17px' }}
              fontWeight={'400'}
              color={'#fff'}
            >
              Personal Details
            </Heading>
          </Stack>

          <Stack px={7} py={3}>
            <FormControl isRequired>
              <FormLabel
                fontSize={{ base: '16px', md: '16px', lg: '17px' }}
                fontWeight={'700'}
                color={'#202124'}
                pb={4}
              >
                Name
              </FormLabel>
              <Input
                focusBorderColor="#db4437"
                variant="flushed"
                placeholder="Your answer"
                fontSize={{ base: '16px', md: '16px', lg: '16px' }}
                width={{ base: '100%', md: '60%' }}
              />
            </FormControl>
          </Stack>
        </Stack>

        <Stack
          bgColor={'#fff'}
          boxShadow={'lg'}
          border={'1px solid #dadce0'}
          borderRadius={'8px'}
        >
          <Stack px={7} py={6}>
            <FormControl isRequired>
              <FormLabel
                fontSize={{ base: '16px', md: '16px', lg: '17px' }}
                fontWeight={'700'}
                color={'#202124'}
                pb={4}
              >
                CNIC No. (Without Dashes)
              </FormLabel>
              <Input
                focusBorderColor="#db4437"
                variant="flushed"
                placeholder="Your answer"
                fontSize={{ base: '16px', md: '16px', lg: '16px' }}
                width={{ base: '100%', md: '60%' }}
              />
            </FormControl>
          </Stack>
        </Stack>

        <Stack
          bgColor={'#fff'}
          boxShadow={'lg'}
          border={'1px solid #dadce0'}
          borderRadius={'8px'}
        >
          <Stack px={7} py={6}>
            <FormControl isRequired>
              <FormLabel
                fontSize={{ base: '16px', md: '16px', lg: '17px' }}
                fontWeight={'700'}
                color={'#202124'}
                pb={4}
              >
                Contact Number
              </FormLabel>
              <Input
                focusBorderColor="#db4437"
                variant="flushed"
                placeholder="Your answer"
                fontSize={{ base: '16px', md: '16px', lg: '16px' }}
                width={{ base: '100%', md: '60%' }}
              />
            </FormControl>
          </Stack>
        </Stack>

        <Stack
          bgColor={'#fff'}
          boxShadow={'lg'}
          border={'1px solid #dadce0'}
          borderRadius={'8px'}
        >
          <Stack px={7} py={6}>
            <FormControl isRequired>
              <FormLabel
                fontSize={{ base: '16px', md: '16px', lg: '17px' }}
                fontWeight={'700'}
                color={'#202124'}
                pb={4}
              >
                Email Address
              </FormLabel>
              <Input
                focusBorderColor="#db4437"
                variant="flushed"
                placeholder="Your answer"
                fontSize={{ base: '16px', md: '16px', lg: '16px' }}
                width={{ base: '100%', md: '60%' }}
              />
            </FormControl>
          </Stack>
        </Stack>
      </Stack>

      <Stack gap={3}>
        <Stack
          bgColor={'#fff'}
          boxShadow={'lg'}
          border={'1px solid #dadce0'}
          borderRadius={'8px'}
        >
          <Stack bgColor={' #db4437'} borderTopRadius={'8px'} px={7} py={3}>
            <Heading
              fontSize={{ base: '16px', md: '17px', lg: '17px' }}
              fontWeight={'400'}
              color={'#fff'}
            >
              Payment Details
            </Heading>
          </Stack>

          <Stack px={7} py={3}>
            <FormControl isRequired>
              <FormLabel
                fontSize={{ base: '16px', md: '16px', lg: '17px' }}
                fontWeight={'400'}
                color={'#202124'}
                pb={4}
              >
                Choose your model
              </FormLabel>
              <RadioGroup onChange={setValue} value={value}>
                <Stack direction="column" gap={4} pb={4}>
                  <Radio
                    fontSize={{ base: '16px', md: '16px', lg: '17px' }}
                    fontWeight={'400'}
                    color={'#202124'}
                    colorScheme="red"
                    value="1"
                  >
                    Yes
                  </Radio>
                  <Radio
                    fontSize={{ base: '16px', md: '16px', lg: '17px' }}
                    fontWeight={'400'}
                    color={'#202124'}
                    colorScheme="red"
                    value="2"
                  >
                    No
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
          </Stack>
        </Stack>

        <Stack
          bgColor={'#fff'}
          boxShadow={'lg'}
          border={'1px solid #dadce0'}
          borderRadius={'8px'}
        >
          <Stack px={7} py={6}>
            <FormControl isRequired>
              <FormLabel
                fontSize={{ base: '16px', md: '16px', lg: '17px' }}
                fontWeight={'700'}
                color={'#202124'}
                pb={4}
              >
                Postal Address
              </FormLabel>
              <Input
                focusBorderColor="#db4437"
                variant="flushed"
                placeholder="Your answer"
                fontSize={{ base: '16px', md: '16px', lg: '16px' }}
                width={{ base: '100%', md: '60%' }}
              />
            </FormControl>
          </Stack>
        </Stack>

        <Stack
          bgColor={'#fff'}
          boxShadow={'lg'}
          border={'1px solid #dadce0'}
          borderRadius={'8px'}
        >
          <Stack px={7} py={6}>
            <FormControl isRequired>
              <FormLabel
                fontSize={{ base: '16px', md: '16px', lg: '17px' }}
                fontWeight={'700'}
                color={'#202124'}
                pb={4}
              >
                Payment Option
              </FormLabel>
              <Select focusBorderColor="none" placeholder="Choose">
                <option value="option1">Full Payment (Rs. 200,000)</option>
                <option value="option2">
                  Advance Booking Only (Rs. 5,000- Non-Refundable - Expected
                  Delivery Date will be communicated via SMS and call)
                </option>
              </Select>
            </FormControl>
          </Stack>
        </Stack>

        <Stack
          bgColor={'#fff'}
          boxShadow={'lg'}
          border={'1px solid #dadce0'}
          borderRadius={'8px'}
        >
          <Stack px={7} py={6} gap={0}>
            <Text
              fontSize={{ base: '16px', md: '16px', lg: '17px' }}
              fontWeight={'700'}
              color={'#202124'}
            >
              Bank Transfer Details
            </Text>
            <Text
              fontSize={{ base: '16px', md: '16px', lg: '17px' }}
              fontWeight={'400'}
              color={'#202124'}
            >
              Please transfer the amount to the following bank account:
            </Text>
            <Text
              fontSize={{ base: '16px', md: '16px', lg: '17px' }}
              fontWeight={'700'}
              color={'#202124'}
            >
              MEEZAN BANK LIMITED
            </Text>
            <Text
              fontSize={{ base: '16px', md: '16px', lg: '17px' }}
              fontWeight={'700'}
              color={'#202124'}
            >
              EVEON ELECTRIC PRIVATE LIMITED
            </Text>
            <Text
              fontSize={{ base: '16px', md: '16px', lg: '17px' }}
              fontWeight={'700'}
              color={'#202124'}
            >
              02540108552956
            </Text>
          </Stack>
        </Stack>

        <Stack
          bgColor={'#fff'}
          boxShadow={'lg'}
          border={'1px solid #dadce0'}
          borderRadius={'8px'}
        >
          <Stack px={7} py={6}>
            <FormControl isRequired>
              <FormLabel
                fontSize={{ base: '16px', md: '16px', lg: '17px' }}
                fontWeight={'700'}
                color={'#202124'}
                pb={4}
              >
                Attach screenshot of payment
              </FormLabel>
              <Input
                focusBorderColor="#db4437"
                variant="flushed"
                type="file"
                fontSize={{ base: '16px', md: '16px', lg: '16px' }}
                width={{ base: '100%', md: '60%' }}
              />
            </FormControl>
          </Stack>
        </Stack>

        <Stack
          bgColor={'#fff'}
          boxShadow={'lg'}
          border={'1px solid #dadce0'}
          borderRadius={'8px'}
        >
          <Stack px={7} py={6}>
            <FormControl isRequired>
              <FormLabel
                fontSize={{ base: '16px', md: '16px', lg: '17px' }}
                fontWeight={'700'}
                color={'#202124'}
                pb={4}
              >
                Confirmation
              </FormLabel>

              <Checkbox
                fontSize={{ base: '16px', md: '16px', lg: '16px' }}
                colorScheme="red"
              >
                I confirm that I have transferred the payment for booking an
                Eveon Electric Scooter. I also understand that my booking will
                only be confirmed when I attach proof of payment and its is
                validated by the company.
              </Checkbox>
            </FormControl>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default OrderBook;
