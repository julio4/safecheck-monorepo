import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Stack,
  Heading,
  Container,
  Input,
  Button,
  SimpleGrid,
  Center
} from '@chakra-ui/react';

import { Blur } from "../components/Blur";

export default function Home() {
  const [contract, setContract] = useState('')
  const [isValid, setValid] = useState(false)
  const navigate = useNavigate();

  const handleContractChange = (event) => {
    setContract(event.target.value)
    // Check it is a valid contract address
    setValid(event.target.value.match("^0x[a-fA-F0-9]{40}$") != null)
  }
  const handleContractSubmit = (event) => {
    event.preventDefault()
    if (isValid) {
      navigate(`/contract/${contract}`, { replace: true })
    }
  }

  return (
    <Box position={'relative'}>
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2, sm: 1 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}>
        <Stack spacing={{ base: 10, md: 20 }} justifyContent={"center"} pl={{ base: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
            SafeCheck
          </Heading>
        </Stack>
        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}>
          <Stack spacing={4}>
            <Heading
              color={'gray.800'}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
              <Center>
                Search a contract
              </Center>
            </Heading>
          </Stack>
          <Box as={'form'} mt={10}>
            <Stack spacing={4}>
              <Input
                onChange={handleContractChange}
                value={contract}
                placeholder="0x..."
                size="lg"
                bg={'gray.100'}
                border={0}
                color={'gray.700'}
                focusBorderColor={'orange.300'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              <Button
                isDisabled={!isValid}
                onClick={handleContractSubmit}
                fontFamily={'heading'}
                mt={8}
                w={'full'}
                bgGradient='linear(to-r, red.400,orange.400)'
                color={'white'}
                _active={{
                  bg: 'orange.400',
                  borderColor: 'red.400',
                }}
                _hover={{
                  bgGradient: 'linear(to-r, red.300,orange.300)',
                  boxShadow: 'xl',
                }}>
                Inspect
              </Button>
            </Stack>
          </Box>
          form
        </Stack>
      </Container>
      <Blur
        position={'absolute'}
        top={0}
        zIndex={-1}
        left={-10}
        style={{ filter: 'blur(100px)' }}
      />
    </Box>
  )
};


