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

import { ArrowForwardIcon, ArrowRightIcon } from "@chakra-ui/icons";

import {
    WalletIcon,
} from "../components/Icons";

import axios from "axios";

import Card from "../components/Card";
import IconBox from "../components/IconBox";
import LineChart from "../components/LineChart";

import '../css/SimulationResult.css';

const lineChartData = [
    {
        name: "Mobile apps",
        data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
    }
];
const lineChartOptions = {
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
        type: "datetime",
        categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
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
};

const SimulationResult = () => {
    const iconBoxInside = useColorModeValue("white", "white");

    //const result = axios.get('http://localhost:3001/api/v1/contract/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2')

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
                        <Link fontSize='sm' fontWeight='bold' color='orange.500' href='https://etherscan.io/address/0x0D4F8Ecb3140eda5cbDb32459720189e739E5B1B'>
                            0x0D4F8Ecb3140eda5cbDb32459720189e739E5B1B
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
                        <Text fontSize='sm' fontWeight='bold' color='orange.500' href='https://etherscan.io/address/0x0D4F8Ecb3140eda5cbDb32459720189e739E5B1B'>
                            29-10-2022
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
                            30 days calls
                        </StatLabel>
                        <Text fontSize='sm' fontWeight='bold' color='orange.500' href='https://etherscan.io/address/0x0D4F8Ecb3140eda5cbDb32459720189e739E5B1B'>
                            560
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
                        SMART CONTRACT CALL
                    </Text>
                    <Text color='#6492aa' fontSize='sm'>
                        <Text as='span' color='orange.400' fontWeight='bold'>
                            19.942{" "}
                        </Text>
                        in 2022
                    </Text>
                </Flex>
                <Box minH='300px'>
                    <LineChart
                        chartData={lineChartData}
                        chartOptions={lineChartOptions} />
                </Box>
            </Card>
            <Card p='0px' maxW={{ md: "100%" }} backgroundColor='white' borderRadius="1rem">
                <Flex display={"none"} direction='column' mb='40px' p='0.5rem 1.5rem'>
                    <Text color='gray.400' fontSize='sm' fontWeight='bold' mb='6px'>
                        SIMULATION RESULT
                    </Text>
                    <Stack direction='row'>
                        <Badge colorScheme='orange'>ERC20</Badge>
                        <Badge colorScheme='orange'>ERC721</Badge>
                    </Stack>
                    <Accordion margin={"0.5rem 0"} defaultIndex={[0, 1]} allowMultiple>
                        <AccordionItem>
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
                                                <Td>Wrapped Ether</Td>
                                                <Td>WETH</Td>
                                                <Td isNumeric>18</Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
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
                                        <Badge textAlign={"center"} width={"100%"} padding={"0.5rem"} fontSize={"lg"} colorScheme='red'>0.35ETH</Badge>
                                    </GridItem>
                                    <GridItem colSpan={"2"} w='100%' h='10'>
                                        <ArrowForwardIcon color={"gray.400"} height={"100%"} width={"100%"} />
                                    </GridItem>
                                    <GridItem colSpan={"9"} w='100%' h='10'>
                                        <Badge textAlign={"center"} width={"100%"} padding={"0.5rem"} fontSize={"lg"} colorScheme='green'>0.05ETH</Badge>
                                    </GridItem>
                                </Grid>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Flex>
                <Flex className="formContainer" direction='column' mb='40px' p='0.5rem 1.5rem'>
                    <Text color='gray.400' fontSize='sm' fontWeight='bold' mb='6px'>
                        SIMULATION
                    </Text>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            color='gray.300'
                            fontSize='1.2em'>
                            <Text fontSize='md'>To :</Text>
                        </InputLeftElement>
                        <Input placeholder='To' isDisabled isReadOnly value={"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"} bg={'gray.100'} focusBorderColor={'orange.200'} />

                    </InputGroup>
                    <Input placeholder='From' bg={'gray.100'} focusBorderColor={'orange.200'} />
                    <Input placeholder='Input data' bg={'gray.100'} focusBorderColor={'orange.200'} />
                    <Input placeholder='Value' bg={'gray.100'} focusBorderColor={'orange.200'} />

                    <Link to='/simulationResult'>
                        <Button leftIcon={<ArrowRightIcon />} fontFamily={'heading'}
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
        </Grid>
    </Flex>
}

export default SimulationResult;