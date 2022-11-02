import {
    Box,
    Flex,
    Grid,
    SimpleGrid,
    Text,
} from "@chakra-ui/react";

import { getContract } from "../services/contract";

import Card from "../components/Card";
import LineChart from "../components/LineChart";
import { useEffect, useState } from "react";
import { InfoCard } from "../components/InfoCard";
import { SimulationForm } from "../components/SimulationForm";

import '../css/SimulationResult.css';

const SimulationResult = () => {
    const contractAddr = window.location.href.split("/").pop();

    const [contractData, setContractData] = useState({
        contractAddr: undefined,
        contractCreator: undefined,
        creationTimestamp: undefined,
        oldestTimeStamp: undefined,
        newestTimeStamp: undefined,
        addressCallCount: [],
        timePlot: [],
        transactionOverTime: [],
        valueOverTime: [],
    });

    const [simulationResult, setSimulationResult] = useState({
        loaded: false,
        balance_diff: {
            address: undefined,
            original: undefined,
            dirty: undefined,
            is_miner: undefined,
        },
        standards: [],
        token_data: {
            name: undefined,
            symbol: undefined,
            decimals: undefined,
        },
        error: {
            message: undefined,
        },
    });

    useEffect(() => {
        getContract(contractAddr).then((data) => {
            setContractData(data.data);
            console.log(data.data);
        });
    }, []);

    return <Flex paddingTop={"2rem"} flexDirection='column' backgroundColor={'gray.50'} >
        <SimpleGrid padding={{ base: "0 0.5rem", md: "0 2rem" }} className="simulationDataGrid" columns={{ sm: 1, md: 1, xl: 3 }} mb='20px' gap='20px'>
            <InfoCard icon={"at"} label={"Creator address"} value={contractData.contractCreator} url={`https://etherscan.io/address/${contractData.contractCreator}`} />
            <InfoCard icon={"time"} label={"Creation date"} value={contractData.creationTimestamp ? new Date(contractData.creationTimestamp).toLocaleDateString() : undefined} />
            <InfoCard icon={"drag"} label={`Total calls after ${contractData.oldestTimeStamp ? new Date(contractData.oldestTimeStamp).toLocaleDateString() : undefined}`} value={Object.values(contractData.addressCallCount).reduce((partialSum, a) => partialSum + a, 0)} />
        </SimpleGrid>
        <Grid
            padding={{ base: "0 0.5rem", md: "0 2rem" }}
            templateColumns={{ sm: "1fr", lg: "2fr 1fr" }}
            templateRows={{ lg: "repeat(2, auto)" }}
            gap='20px'
            margin={"0 0 3rem 0"}>
            {/* Chart */}
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
            {/* Simulation */}
            <SimulationForm simulation={simulationResult} contractData={contractData} setSimulationResult={setSimulationResult}></SimulationForm>
        </Grid>
    </Flex >
}
export default SimulationResult;
