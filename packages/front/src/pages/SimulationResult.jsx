import {
    Box,
    Button,
    Flex,
    Grid,
    Progress,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    Link,
    useColorMode,
    useColorModeValue,
    Badge,
    Stack,
    Divider,
    TableCaption,
    Tfoot,
    TableContainer,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    GridItem,
    InputGroup,
    InputLeftElement,
    Input,
    Container
} from "@chakra-ui/react";

import Web3 from "web3";

import { ArrowForwardIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { getContract } from "../services/contract";
import { simulate } from "../services/simulation";

import {
    WalletIcon,
} from "../components/Icons";

import Card from "../components/Card";
import IconBox from "../components/IconBox";
import LineChart from "../components/LineChart";

import '../css/SimulationResult.css';
import { useEffect, useState } from "react";


const SimulationResult = () => {

    const [contractData, setContractData] = useState({
        addressCallCount: [],
        timePlot: [],
    });

    const [simulationData, setSimulationData] = useState({
        loaded: false,
        standards: ["ERC20", "ERC721"],
        token_data: {},
        balance_diff: { original: "-1", dirty: "-1" },
    });

    useEffect(() => {
        getContract("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2").then((data) => {
            console.log(data.data.resp)
            setContractData(data.data.resp);
        });
    }, []);

    const callSimulationService = function () {
        simulate("", "", "", "").then((data) => {
            console.log(data.data.res)
            data.data.res["loaded"] = true;
            setSimulationData(data.data.res);
        });
    }

    const iconBoxInside = useColorModeValue("white", "white");

    return <Flex paddingTop={"2rem"} flexDirection='column' backgroundColor={'gray.50'} >
        <SimpleGrid padding={{ base: "0 0.5rem", md: "0 2rem" }} className="simulationDataGrid" columns={{ sm: 1, md: 1, xl: 3 }} mb='20px' gap='20px'>
            <Card>
                <Flex
                    flexDirection='row'
                    align='center'
                    justify='center'>
                    <Stat me='auto'>
                        <StatLabel
                            fontSize='xs'
                            color='gray.400'
                            fontWeight='bold'
                            textTransform='uppercase'>
                            Creator address
                        </StatLabel>
                        <Link fontSize='sm' fontWeight='bold' color='orange.500' href={`https://etherscan.io/address/${contractData.creatorAddress}`}>
                            {contractData.creatorAddress}
                        </Link>
                    </Stat>
                    <IconBox
                        borderRadius='1rem'
                        as='box'
                        h={"45px"}
                        w={"45px"}
                        padding={"0.5rem"}
                        bg={'orange'}>
                        <WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />
                    </IconBox>
                </Flex>
            </Card>
            <Card>
                <Flex
                    flexDirection='row'
                    align='center'
                    justify='center'>
                    <Stat me='auto'>
                        <StatLabel
                            fontSize='xs'
                            color='gray.400'
                            fontWeight='bold'
                            textTransform='uppercase'>
                            Creation date
                        </StatLabel>
                        <Text fontSize='sm' fontWeight='bold' color='orange.500'>
                            {new Date(contractData.creationDate).toLocaleDateString()}
                        </Text>
                    </Stat>
                    <IconBox
                        borderRadius='1rem'
                        as='box'
                        h={"45px"}
                        w={"45px"}
                        padding={"0.5rem"}
                        bg={'orange'}>
                        <WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />
                    </IconBox>
                </Flex>
            </Card>
            <Card>
                <Flex
                    flexDirection='row'
                    align='center'
                    justify='center'>
                    <Stat me='auto'>
                        <StatLabel
                            fontSize='xs'
                            color='gray.400'
                            fontWeight='bold'
                            textTransform='uppercase'>
                            {`Total calls after ${new Date(contractData.oldestTimeStamp).toLocaleDateString()}`}
                        </StatLabel>
                        <Text fontSize='sm' fontWeight='bold' color='orange.500' href='https://etherscan.io/address/0x0D4F8Ecb3140eda5cbDb32459720189e739E5B1B'>
                            {Object.values(contractData.addressCallCount).reduce((partialSum, a) => partialSum + a, 0)}
                        </Text>
                    </Stat>
                    <IconBox
                        borderRadius='1rem'
                        as='box'
                        h={"45px"}
                        w={"45px"}
                        padding={"0.5rem"}
                        bg={'orange'}>
                        <WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />
                    </IconBox>
                </Flex>
            </Card>
        </SimpleGrid>
        <Grid
            padding={{ base: "0 0.5rem", md: "0 2rem" }}
            templateColumns={{ sm: "1fr", lg: "2fr 1fr" }}
            templateRows={{ lg: "repeat(2, auto)" }}
            gap='20px'
            margin={"0 0 3rem 0"}>
            <Card borderRadius='1rem'
                bg={"white"}
                p='0px'
                maxW={{ md: "100%" }}>
                <Flex direction='column' mb='40px' p='1rem 1.5rem'>
                    <Text color='gray.400' fontSize='sm' fontWeight='bold' mb='6px'>
                        SMART CONTRACT CALLS
                    </Text>
                    <Text color='#6492aa' fontSize='sm'>
                        <Text as='span' color='orange.400' fontWeight='bold'>
                            {Object.keys(contractData.addressCallCount).length}{" "}
                        </Text>
                        unique users
                    </Text>
                </Flex>
                <Box minH='300px'>
                    <LineChart
                        chartData={[
                            {
                                name: "Calls to contract",
                                data: contractData.transactionOverTime,
                            }
                        ]}
                        chartOptions={{
                            chart: {
                                toolbar: {
                                    show: false,
                                },
                            },
                            tooltip: {
                                theme: "dark",
                            },
                            dataLabels: {
                                enabled: false,
                            },
                            stroke: {
                                curve: "smooth",
                            },
                            xaxis: {
                                type: "string",
                                categories: contractData.timePlot.map(function (ts) {
                                    return new Date(ts).toLocaleDateString();
                                }),
                                axisTicks: {
                                    show: false
                                },
                                axisBorder: {
                                    show: false,
                                },
                                labels: {
                                    style: {
                                        colors: "#a8b5c5",
                                        fontSize: "12px",
                                    },
                                },
                            },
                            yaxis: {
                                labels: {
                                    style: {
                                        colors: "#a8b5c5",
                                        fontSize: "12px",
                                    },
                                },
                            },
                            legend: {
                                show: false,
                            },
                            grid: {
                                strokeDashArray: 5,
                            },
                            fill: {
                                type: "gradient",
                                gradient: {
                                    shade: "light",
                                    type: "vertical",
                                    shadeIntensity: 0.5,
                                    inverseColors: true,
                                    opacityFrom: 0.8,
                                    opacityTo: 0,
                                    stops: [],
                                },
                                colors: ["#D18700", "#3182CE"],
                            },
                            colors: ["#FFA500", "#FFA500"],
                        }} />
                </Box>
            </Card>
            <Card p='0px' maxW={{ md: "100%" }} backgroundColor='white' borderRadius="1rem">
                <Flex display={simulationData.loaded ? "block" : "none"} direction='column' mb='40px' p='1rem 1.5rem'>
                    <Text color='gray.400' fontSize='sm' fontWeight='bold' mb='6px'>
                        SIMULATION RESULT
                    </Text>
                    <Stack direction='row'>
                        {
                            simulationData.standards.forEach(standard => {
                                <Badge colorScheme='orange' displayName={standard}></Badge>
                            })
                        }
                    </Stack>
                    <Accordion margin={"0.5rem 0"} defaultIndex={[0, 1]} allowMultiple>
                        <AccordionItem display={simulationData.token_data != {} ? "block" : "none"}>
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
                                                <Td>{simulationData.token_data.name}</Td>
                                                <Td>{simulationData.token_data.symbol}</Td>
                                                <Td isNumeric>{simulationData.token_data.decimals}</Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem display={simulationData.balance_diff != { original: -1, dirty: -1 } ? "block" : "none"}>
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
                                            Web3.utils.fromWei(simulationData.balance_diff.original, 'ether').match("[0-9]*.[0-9]{3}")
                                        } ETH</Badge>
                                    </GridItem>
                                    <GridItem colSpan={"2"} w='100%' h='10'>
                                        <ArrowForwardIcon color={"gray.400"} height={"100%"} width={"100%"} />
                                    </GridItem>
                                    <GridItem colSpan={"9"} w='100%' h='10'>
                                        <Badge textAlign={"center"} width={"100%"} padding={"0.5rem"} fontSize={"lg"} colorScheme='green'>{
                                            Web3.utils.fromWei(simulationData.balance_diff.dirty, 'ether').match("[0-9]*.[0-9]{3}")
                                        } ETH</Badge>
                                    </GridItem>
                                </Grid>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Flex>
                <Flex display={simulationData.loaded ? "none" : "block"} className="formContainer" direction='column' mb='40px' p='1rem 1.5rem'>
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
                        <Input placeholder='Contract address' isDisabled isReadOnly value={contractData.contractAdress} bg={'gray.100'} focusBorderColor={'orange.200'} />

                    </InputGroup>
                    <Input margin={"0.5rem 0"} placeholder='From' bg={'gray.100'} focusBorderColor={'orange.200'} />
                    <Input margin={"0.5rem 0"} placeholder='Input data' bg={'gray.100'} focusBorderColor={'orange.200'} />
                    <Input margin={"0.5rem 0"} placeholder='Value' bg={'gray.100'} focusBorderColor={'orange.200'} />

                    <Link to='/simulationResult'>
                        <Button leftIcon={<ArrowRightIcon />} fontFamily={'heading'}
                            mt={8}
                            w={'full'}
                            bgGradient="linear(to-r, red.400,orange.400)"
                            color={'white'}
                            _hover={{
                                bgGradient: 'linear(to-r, red.400,orange.400)',
                                boxShadow: 'xl',
                            }}
                            onClick={callSimulationService}>
                            Submit
                        </Button>
                    </Link>
                </Flex>
            </Card>
        </Grid>
    </Flex >
}
export default SimulationResult;
