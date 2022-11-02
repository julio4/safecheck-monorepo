import {
    Flex,
    Text,
    Stack,
    Badge,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Thead,
    Table,
    Tr,
    Th,
    Td,
    Tbody,
    GridItem,
    Code,
    Box,
    Grid,
    TableContainer,
    InputGroup,
    Input,
    Link,
    Button,
    InputLeftElement,
    Alert,
    AlertIcon,
    AlertTitle,
} from "@chakra-ui/react"
import {
    ArrowForwardIcon,
    ArrowRightIcon,
} from "@chakra-ui/icons"

import Card from "./Card"

import Web3 from "web3"
import { useState } from "react"
import { valueToDisplay } from "../utils/utils"
import { simulate } from "../services/simulation"

export const SimulationForm = (props) => {
    let formResult = {}
    const [display, setDisplay] = useState("none")
    let alertBox = <Alert status='error' borderRadius={"0.5rem"} display={display}>
        <AlertIcon />
        <AlertTitle>Invalid input</AlertTitle>
    </Alert>


    const callSimulationService = function (contractData) {
        formResult["to"] = contractData.contractAdress;
        if (formResult.from && formResult.from.match("^0x[a-fA-F0-9]{40}$") != null) {
            simulate(formResult.from, formResult.to, formResult.data, formResult.value).then((data) => {
                data.data["loaded"] = true;
                props.setSimulationResult(data.data);
                console.log(data.data)
            });
        }
        else {
            setDisplay("inline-flex")
            setTimeout(() => {
                setDisplay("none")
            }, 1000)
        }
    }

    return <Card p='0px' maxW={{ md: "100%" }} backgroundColor='white' borderRadius="1rem">
        {/* Result */}
        <Flex display={valueToDisplay(props.simulation.error.message, props.simulation.loaded)} direction='column' mb='40px' p='1rem 1.5rem'>
            <Text color='gray.400' fontSize='sm' fontWeight='bold' mb='6px'>
                SIMULATION RESULT
            </Text>
            <Stack direction='row'>
                {
                    props.simulation.standards.map((standard, index) => {
                        return <Badge key={index} colorScheme='orange'>{standard}</Badge>
                    })
                }
            </Stack>
            <Accordion margin={"0.5rem 0"} defaultIndex={[0, 1]} allowMultiple>
                <AccordionItem display={valueToDisplay(props.simulation.token_data)}>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                Token data
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <TableContainer>
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>Name</Th>
                                        <Th>Symbol</Th>
                                        <Th isNumeric>Decimals</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>{props.simulation.token_data.name}</Td>
                                        <Td>{props.simulation.token_data.symbol}</Td>
                                        <Td isNumeric>{props.simulation.token_data.decimals}</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem display={valueToDisplay(props.simulation.balance_diff)}>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                Balance diff
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Grid templateColumns='repeat(20, 1fr)' gap={"0.2rem"}>
                            <GridItem colSpan={"9"} w='100%' h='10'>
                                <Badge textAlign={"center"} width={"100%"} padding={"0.5rem"} fontSize={"lg"} colorScheme='red'>{
                                    Web3.utils.fromWei(props.simulation.balance_diff.original ? props.simulation.balance_diff.original : "", 'ether').match("[0-9]*.[0-9]{3}")
                                } ETH</Badge>
                            </GridItem>
                            <GridItem colSpan={"2"} w='100%' h='10'>
                                <ArrowForwardIcon color={"gray.400"} height={"100%"} width={"100%"} />
                            </GridItem>
                            <GridItem colSpan={"9"} w='100%' h='10'>
                                <Badge textAlign={"center"} width={"100%"} padding={"0.5rem"} fontSize={"lg"} colorScheme='green'>{
                                    Web3.utils.fromWei(props.simulation.balance_diff.dirty ? props.simulation.balance_diff.dirty : "", 'ether').match("[0-9]*.[0-9]{3}")
                                } ETH</Badge>
                            </GridItem>
                        </Grid>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Flex>
        {/* Error */}
        <Flex display={valueToDisplay(props.simulation.error.message)} direction='column' mb='40px' p='1rem 1.5rem'>
            <Text color='gray.400' fontSize='sm' fontWeight='bold' mb='6px'>
                SIMULATION ERROR
            </Text>
            <Code colorScheme='red' children={props.simulation.error.message} />
        </Flex>
        {/* Form */}
        <Flex display={valueToDisplay(undefined, !props.simulation.loaded)} className="formContainer" direction='column' mb='40px' p='1rem 1.5rem'>
            <Text color='gray.400' fontSize='sm' fontWeight='bold' mb='6px'>
                SIMULATION
            </Text>
            <InputGroup margin={"0.5rem 0"}>
                <InputLeftElement
                    pointerEvents='none'
                    color='gray.300'
                    fontSize='1.2em'>
                    <Text fontSize='md'>To :</Text>
                </InputLeftElement>
                <Input placeholder='Contract address' isDisabled isReadOnly value={props.contractData.contractAddr} bg={'gray.100'} focusBorderColor={'orange.200'} />
            </InputGroup>
            <Input onInput={
                (e) => {
                    formResult["from"] = e.target.value;
                }
            } margin={"0.5rem 0"} placeholder='From' bg={'gray.100'} focusBorderColor={'orange.200'} />
            <Input onInput={
                (e) => {
                    formResult["data"] = e.target.value;
                }
            } margin={"0.5rem 0"} placeholder='Input data' bg={'gray.100'} focusBorderColor={'orange.200'} />
            <Input onInput={
                (e) => {
                    formResult["value"] = Web3.utils.toWei(e.target.value, 'ether');
                }
            } margin={"0.5rem 0"} placeholder='Value' bg={'gray.100'} focusBorderColor={'orange.200'} />
            {
                alertBox
            }
            <Link to='/simulationResult'>
                <Button onClick={callSimulationService} leftIcon={<ArrowRightIcon />} fontFamily={'heading'}
                    mt={8}
                    w={'full'}
                    bgGradient="linear(to-r, red.400,orange.400)"
                    color={'white'}
                    _hover={{
                        bgGradient: 'linear(to-r, red.400,orange.400)',
                        boxShadow: 'xl',
                    }}>
                    Submit
                </Button>
            </Link>
        </Flex>
    </Card>
}