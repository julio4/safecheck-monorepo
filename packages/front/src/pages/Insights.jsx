import { Box, InputGroup, InputLeftElement, Input, Container, Button, Stack } from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'
import { Link, Outlet } from 'react-router-dom';

import '../css/Insights.css'

const Insights = (props) => {
  return (
    <>
      <Container className='formContainer' maxW='md'>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            color='gray.300'
            fontSize='1.2em'
          // children={<LinkIcon color='green.500' />}
          />
          <Input placeholder='To' bg={'gray.100'} focusBorderColor={'pink.200'} />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            color='gray.300'
            fontSize='1.2em'
          // children={<LinkIcon color='green.500' />}
          />
          <Input placeholder='From' bg={'gray.100'} focusBorderColor={'pink.200'} />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            color='gray.300'
            fontSize='1.2em'
          // children={<LinkIcon color='green.500' />}
          />
          <Input placeholder='Input data' bg={'gray.100'} focusBorderColor={'pink.200'} />
        </InputGroup>
        <Link to='/simulationResult'>
          <Button leftIcon={<ArrowRightIcon />} fontFamily={'heading'}
            mt={8}
            w={'full'}
            bgGradient="linear(to-r, red.400,pink.400)"
            color={'white'}
            _hover={{
              bgGradient: 'linear(to-r, red.400,pink.400)',
              boxShadow: 'xl',
            }}>
            Submit
          </Button>
        </Link>
      </Container>
    </>
  )
};

export default Insights;