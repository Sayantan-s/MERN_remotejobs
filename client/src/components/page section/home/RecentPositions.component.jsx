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
        <View width="desktop" py="9" m="0 auto">
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
            <StackVertical mt={8} gap={7}>
                {
                    jobs?.map(({ _id, company, roleInfo }) => (
                        <HomeJobCards key={_id} {...company} {...roleInfo} />
                    ))
                }
            </StackVertical> 
        </View>
    )
}

export default RecentPositions
