import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Stack,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Text,
  Select,
} from '@chakra-ui/react';
import { FaMotorcycle } from 'react-icons/fa';

const Modalbtn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Stack>
      <Button
        onClick={onOpen}
        display={{ base: 'none', lg: 'inherit' }}
        size={'md'}
        color={'white'}
        bgColor={'black'}
        fontWeight={'600'}
        fontSize={{ base: '13px', xl: '12px' }}
        leftIcon={<FaMotorcycle size={15} />}
        px={'26px'}
        _hover={{
          color: 'white',
          bgColor: 'black',
        }}
      >
        Test Drive
      </Button>

      <Modal size={'xl'} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            color={'#000'}
            fontWeight={'500'}
            fontSize={{ base: '13px', xl: '32px' }}
          >
            Book your Test Drive Now!
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={5}>
            <Stack gap={4}>
              <FormControl isRequired>
                <FormLabel fontSize={'16px'} fontWeight={'700'} color={'#000'}>
                  Name
                </FormLabel>
                <HStack gap={{base:4,md:0}}>
                  <Stack>
                    <Input
                      focusBorderColor="#000"
                      // // borderRadius={0}
                      border={'1px solid #ccc'}
                      w={{base:'100%',md:'80%'}}
                    />
                    <Text fontSize={'13px'}>First</Text>
                  </Stack>
                  <Stack>
                    <Input
                      focusBorderColor="#000"
                      // // borderRadius={0}
                      border={'1px solid #ccc'}
                     
                      w={{base:'100%',md:'80%'}}
                    />
                    <Text fontSize={'13px'}>Last</Text>
                  </Stack>
                </HStack>
              </FormControl>
              <FormControl isRequired>
                <FormLabel fontSize={'16px'} fontWeight={'700'} color={'#000'}>
                  Phone Number
                </FormLabel>
                <Input
                  type="number"
                  focusBorderColor="#000"
                  // borderRadius={0}
                  border={'1px solid #ccc'}
                  w={{ base: '100%', md: '80%' }}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel fontSize={'16px'} fontWeight={'700'} color={'#000'}>
                  Address
                </FormLabel>
                <Input
                  type="text"
                  focusBorderColor="#000"
                  // borderRadius={0}
                  border={'1px solid #ccc'}
                  w={{ base: '100%', md: '80%' }}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel fontSize={'16px'} fontWeight={'700'} color={'#000'}>
                  City
                </FormLabel>
                <Select
                  focusBorderColor="#000"
                  // borderRadius={0}
                  border={'1px solid #ccc'}
                  w={{ base: '100%', md: '80%' }}
                >
                  <option>Lahore</option>
                </Select>
              </FormControl>
              <FormControl isRequired>
                <FormLabel fontSize={'16px'} fontWeight={'700'} color={'#000'}>
                  Email
                </FormLabel>
                <Input
                  type="email"
                  focusBorderColor="#000"
                  // borderRadius={0}
                  border={'1px solid #ccc'}
                  w={{ base: '100%', md: '80%' }}
                />
              </FormControl>
              <Button
                fontSize={'16px'}
                fontWeight={'300'}
                color={'#333'}
                bgColor={'#eee'}
                w={'fit-content'}
                borderRadius={'0'}
                border={'1px solid #ccc'}
                _hover={{
                  bgColor:'#ddd'
                }}
              >
                Submit
              </Button>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Stack>
  );
};

export default Modalbtn;
