import { InputGroup, InputLeftElement, Input, Container } from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'

import '../css/Insights.css'

const Insights = (props) => {
  return (
    <>
      <h1>Insights</h1>
      <p>
        Should have:
        <ul>
          <li>Form for transaction</li>
          <li>Snap install</li>
        </ul>
      </p>
      <Container className='formContainer' maxW='md'>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            color='gray.300'
            fontSize='1.2em'
          // children={<LinkIcon color='green.500' />}
          />
          <Input placeholder='To' />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            color='gray.300'
            fontSize='1.2em'
          // children={<LinkIcon color='green.500' />}
          />
          <Input placeholder='From' />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            color='gray.300'
            fontSize='1.2em'
          // children={<LinkIcon color='green.500' />}
          />
          <Input placeholder='Input data' />
        </InputGroup>
        <Button rightIcon={<ArrowRightIcon />} colorScheme='blue' variant='outline'>
          Submit
        </Button>
      </Container>
    </>
  )
};

export default Insights;