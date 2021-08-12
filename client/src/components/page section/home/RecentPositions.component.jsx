import HomeJobCards from 'components/elements/HomeJobCards.component';
import { Flex, Link, StackVertical, Text, View } from 'components/index'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import http from 'utils/http';

const RecentPositions = () => {

    const theme = useTheme();

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        (async() => {
            const { data } = await http.get('/jobs');
            setJobs(data.data)
        })()
    },[])

    console.log(jobs)

    return (
        <View 
        as="section" 
        bg="blue.1" 
        py={13}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundImage={
            `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1131%26quot%3b)' fill='none'%3e%3cpath d='M -1683.0171796204613%2c915 C -1491.02%2c804.8 -1107.02%2c362.6 -723.0171796204614%2c364 C -339.02%2c365.4 -147.02%2c921.4 236.98282037953857%2c922 C 620.98%2c922.6 860.38%2c386.8 1196.9828203795387%2c367 C 1533.59%2c347.2 1775.4%2c731.8 1920%2c823' stroke='rgba(207%2c 210%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -161.8047467269871%2c741 C 30.2%2c651.4 414.2%2c290.4 798.1952532730129%2c293 C 1182.2%2c295.6 1374.2%2c752 1758.195253273013%2c754 C 2142.2%2c756 2685.83%2c303.2 2718.195253273013%2c303 C 2750.56%2c302.8 2079.64%2c663 1920%2c753' stroke='rgba(207%2c 210%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -1293.4213383824044%2c477 C -1101.42%2c537 -717.42%2c787.8 -333.4213383824045%2c777 C 50.58%2c766.2 242.58%2c423.4 626.5786616175956%2c423 C 1010.58%2c422.6 1327.89%2c789 1586.5786616175956%2c775 C 1845.26%2c761 1853.32%2c437.4 1920%2c353' stroke='rgba(207%2c 210%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -1028.1160253518776%2c603 C -836.12%2c570.4 -452.12%2c411.8 -68.1160253518776%2c440 C 315.88%2c468.2 507.88%2c764 891.8839746481224%2c744 C 1275.88%2c724 1646.26%2c357.4 1851.8839746481224%2c340 C 2057.51%2c322.6 1906.38%2c593.6 1920%2c657' stroke='rgba(207%2c 210%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -1672.759976639592%2c432 C -1480.76%2c473.6 -1096.76%2c686.6 -712.7599766395921%2c640 C -328.76%2c593.4 -136.76%2c157.6 247.24002336040792%2c199 C 631.24%2c240.4 872.69%2c799.2 1207.240023360408%2c847 C 1541.79%2c894.8 1777.45%2c519.8 1920%2c438' stroke='rgba(207%2c 210%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -1178.7691988658282%2c472 C -986.77%2c544 -602.77%2c844 -218.76919886582826%2c832 C 165.23%2c820 357.23%2c464.8 741.2308011341718%2c412 C 1125.23%2c359.2 1465.48%2c604.4 1701.2308011341718%2c568 C 1936.98%2c531.6 1876.25%2c297.6 1920%2c230' stroke='rgba(207%2c 210%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1131'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`
        }
        >
            <View width="desktop" m="0 auto">
            <Flex alignItems="center" justifyContent="space-between">
                <Flex flexDirection="column">
                    <Text as="span" fontSize="m" color="text.4">
                        Featured recent positions
                    </Text>
                    <Text mt="2">
                        We think these jobs might be of your interest.
                    </Text>
                </Flex>
                <Link to="/jobs">
                        <Text as="span" mr="3" fontSize="m" color="blue.6">See all positions</Text>
                            <svg width={'2.6rem'} height={'2.6rem'} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <title>Iconly/Broken/Arrow - Right</title>
                                <g id="Iconly/Broken/Arrow---Right" stroke={theme.colors.blue[4]} strokeWidth={1} fill="none" fillRule="evenodd">
                                    <g id="Arrow---Right" transform="translate(3.000000, 4.500000)" fill="#000000" fillRule="nonzero">
                                    <path d="M0,7.49983393 C0,7.07673708 0.312322754,6.7272223 0.71559664,6.67595432 L0.818181818,6.66948082 L17.1818182,6.66948082 C17.5134545,6.66948082 17.8112727,6.87208698 17.9378182,7.18319261 C17.9792727,7.28504926 18,7.39244159 18,7.49983393 C18,7.67974377 17.9424242,7.85811592 17.8316919,8.00419656 L17.7589091,8.08772393 L11.1589091,14.7582273 C10.8392727,15.0815114 10.3210909,15.0804043 10.0025455,14.756013 C9.71054545,14.4576394 9.68621212,13.990881 9.93122601,13.6661489 L10.0047273,13.5813401 L15.2007273,8.33018704 L0.818181818,8.33018704 C0.366545455,8.33018704 0,7.95818885 0,7.49983393 Z M10.0046182,1.41865989 C9.68389091,1.09537574 9.68389091,0.569485439 10.0024364,0.243987019 C10.2944364,-0.0533716559 10.7541864,-0.0790818485 11.0758253,0.167709219 L11.1598909,0.241772744 L14.7991636,3.92079059 C14.9606182,4.0835398 15.0402545,4.2961102 15.0402545,4.50978773 C15.0402545,4.72125099 14.9606182,4.93271425 14.8013455,5.09546346 C14.5093455,5.39383701 14.0505121,5.41963178 13.729026,5.17199498 L13.6449818,5.09767774 L10.0046182,1.41865989 Z" />
                                    </g>
                                </g>
                            </svg>
                </Link>
                </Flex>
                <StackVertical mt={12} gap={7}>
                    {
                        jobs?.map(({ _id, company, roleInfo }) => (
                            <HomeJobCards key={_id} {...company} {...roleInfo} />
                        ))
                    }
                </StackVertical> 
            </View>
        </View>
    )
}

export default RecentPositions
