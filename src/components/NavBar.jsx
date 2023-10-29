import React from 'react';
import { Box, Flex, Link, Text } from '@chakra-ui/react';
import CartWidget from './CartWidget';


function Navbar() {
  return (
    <>
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      bg="teal.500"
      color="white"
      p={2}
    >
      <Box>
        <Text fontSize="2xl">Pigmalion</Text>
      </Box>
      <Box ml={4} display="flex" alignItems="center">
        <CartWidget fontSize="2xl" />
        <Text fontSize="lg" ml={1}>
          (0)
        </Text>
      </Box>
    </Flex>

    <Flex
      as="nav"
      align="center"
      justify="center"
      bg="teal.500"
      color="white"
      p={4}
    >
      <Box>
        <Link mr={10} fontSize="lg" href="#">
          Inicio
        </Link>
        <Link mr={10} fontSize="lg" href="#">
          Productos
        </Link>
        <Link fontSize="lg" href="#">
          Contacto
        </Link>
      </Box>
    </Flex>
    </>
    
  );
}

export default Navbar;