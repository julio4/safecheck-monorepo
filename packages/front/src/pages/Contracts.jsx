import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Link,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
  Center
} from '@chakra-ui/react';

export default function Contracts() {
  const [contract, setContract] = useState('')
  const [isValid, setValid] = useState(false)
  const navigate = useNavigate();

  const handleContractChange = (event) => {
    setContract(event.target.value)
    setValid(event.target.value.match("^0x[a-fA-F0-9]{40}$") != null)
  }
  const handleContractSubmit = (event) => {
    event.preventDefault()
    if(isValid) {
      // todo post backend
      navigate(`/contract/${contract}`, { replace: true })
    }
  }

  return (
    <Box position={'relative'}>
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}>
        <Stack spacing={{ base: 10, md: 20 }} justifyContent={"center"} pl={{ base: 20}}>
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
        left={-10}
        style={{ filter: 'blur(100px)' }}
      />
    </Box>
  )
};

export const Blur = (props) => {
  return (
    <Icon
      width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
      zIndex={0}
      height="760px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <circle cx="71" cy="61" r="111" fill="#FF3300" />
      <circle cx="244" cy="106" r="139" fill="#F56515" />
      <circle cy="291" r="139" fill="#ED8936" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ECC94B" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ED8936" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#FF3300" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#F56565" />
    </Icon>
  );
};
