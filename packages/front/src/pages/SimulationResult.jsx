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
} from "@chakra-ui/react";

import {
    CartIcon,
    DocumentIcon,
    GlobeIcon,
    WalletIcon,
} from "../components/Icons";

import Card from "../components/Card";
import IconBox from "../components/IconBox";
import BarChart from "../components/BarChart";
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
    const iconBlue = useColorModeValue("blue.500", "blue.500");
    const iconBoxInside = useColorModeValue("white", "white");
    const textColor = useColorModeValue("gray.700", "white");
    const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
    const borderColor = useColorModeValue("gray.200", "gray.600");
    const textTableColor = useColorModeValue("gray.500", "white");

    const { colorMode } = useColorMode();


    return <Flex flexDirection='column' backgroundColor={'gray.50'} pt={{ base: "120px", md: "75px" }}>
        <SimpleGrid padding={{ base: "0 0.5rem", md: "0 2rem" }} className="simulationDataGrid" columns={{ sm: 1, md: 1, xl: 3 }} spacing='24px' mb='20px'>
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
            gap='20px'>
            <Card borderRadius='1rem'
                bg={
                    "white"
                    //"linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
                }
                p='0px'
                maxW={{ md: "100%" }}>
                <Flex direction='column' mb='40px' p='28px 0px 0px 22px'>
                    <Text fontSize='lg' fontWeight='bold' mb='6px'>
                        Smart contract calls
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
                        chartOptions={lineChartOptions}
                    />
                </Box>
            </Card>
            <Card p='0px' maxW={{ sm: "320px", md: "100%" }}>
                <Flex direction='column' mb='40px' p='28px 0px 0px 22px'>
                    <Text color='gray.400' fontSize='sm' fontWeight='bold' mb='6px'>
                        SIMULATION RESULT
                    </Text>
                    <Text color={textColor} fontSize='lg' fontWeight='bold'>
                        Total orders
                    </Text>
                </Flex>
                <Box minH='300px'>
                    {/* <BarChart chartData={barChartData} chartOptions={barChartOptions} /> */}
                </Box>
            </Card>
            <Card p='0px' maxW={{ sm: "320px", md: "100%" }}>
                <Flex direction='column'>
                    <Flex align='center' justify='space-between' p='22px'>
                        <Text fontSize='lg' color={textColor} fontWeight='bold'>
                            Page visits
                        </Text>
                        <Button variant='primary' maxH='30px'>
                            SEE ALL
                        </Button>
                    </Flex>
                    <Box overflow={{ sm: "scroll", lg: "hidden" }}>
                        <Table>
                            <Thead>
                                <Tr bg={tableRowColor}>
                                    <Th color='gray.400' borderColor={borderColor}>
                                        Page name
                                    </Th>
                                    <Th color='gray.400' borderColor={borderColor}>
                                        Visitors
                                    </Th>
                                    <Th color='gray.400' borderColor={borderColor}>
                                        Unique users
                                    </Th>
                                    <Th color='gray.400' borderColor={borderColor}>
                                        Bounce rate
                                    </Th>
                                </Tr>
                            </Thead>
                        </Table>
                    </Box>
                </Flex>
            </Card>
            <Card p='0px' maxW={{ sm: "320px", md: "100%" }}>
                <Flex direction='column'>
                    <Flex align='center' justify='space-between' p='22px'>
                        <Text fontSize='lg' color={textColor} fontWeight='bold'>
                            Social traffic
                        </Text>
                        <Button variant='primary' maxH='30px'>
                            SEE ALL
                        </Button>
                    </Flex>
                </Flex>
                <Box overflow={{ sm: "scroll", lg: "hidden" }}>
                    <Table>
                        <Thead>
                            <Tr bg={tableRowColor}>
                                <Th color='gray.400' borderColor={borderColor}>
                                    Referral
                                </Th>
                                <Th color='gray.400' borderColor={borderColor}>
                                    Visitors
                                </Th>
                                <Th color='gray.400' borderColor={borderColor}></Th>
                            </Tr>
                        </Thead>
                        <Tbody>

                        </Tbody>
                    </Table>
                </Box>
            </Card>
        </Grid>
    </Flex>
}

export default SimulationResult;