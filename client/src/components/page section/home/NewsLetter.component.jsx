import { Button, Heading, Input, Text, View, Flex } from 'components/index';
import React from 'react';
import { useTheme } from 'styled-components';

const NewsLetter = () => {
    const theme = useTheme();

    return (
        <View
            maxWidth="desktop"
            m="0 auto"
            borderRadius={8}
            py={12}
            bg="blue.1"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundImage={`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1300' height='424' preserveAspectRatio='none' viewBox='0 0 1300 424'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1031%26quot%3b)' fill='none'%3e%3cpath d='M1476.28 93.1C1328.96 95.06 1127.28 267.43 913.17 266.94 699.06 266.45 733.14-19.06 631.61-48.39' stroke='rgba(207%2c 210%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1398.7 88.72C1245.61 90.27 1032.66 254.45 809.04 254.08 585.42 253.71 616.24-20.18 514.21-44.68' stroke='rgba(207%2c 210%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1452.71 202.25C1348.37 202.14 1245.72 149.25 1038.73 149.25 831.75 149.25 836.06 203.13 624.76 202.25 413.45 201.37 328.14-13.85 210.78-20.8' stroke='rgba(207%2c 210%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1307.72 282.11C1195.73 279.12 1115.65 122.98 891.21 116.75 666.78 110.52 587.15-50.26 474.71-53.51' stroke='rgba(207%2c 210%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1527.14 318.26C1429.39 316.99 1356.99 210.72 1153.23 203.78 949.48 196.84 886.4 0.08 779.33-7.01' stroke='rgba(207%2c 210%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1031'%3e%3crect width='1300' height='424' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`}
        >
            <Heading level={2} textAlign="center" fontSize="semil">
                Subscribe to Get{' '}
                <Text as="span" color="blue.6" fontSize="semil" fontWeight="bold">
                    Instant Job
                </Text>{' '}
                Alerts
            </Heading>
            <Text maxWidth="l" textAlign="center" m="0 auto" mt={7} fontSize={'ms'}>
                Don’t wanna miss something? Subscribe right now and get special promtion and monthly
                newsletter
            </Text>
            <View
                bg="blue.0"
                maxWidth="l"
                m="0 auto"
                p={5}
                borderRadius={5}
                mt={10}
                boxShadow={`0px 15px 20px ${theme.colors.blue[2]}30`}
            >
                <Flex as="form" width="100%">
                    <Input
                        simpleInput
                        type="email"
                        placeholder="Enter your email address"
                        width="inherit"
                    />
                    <Button width="max-content" lay="xl" ml={5}>
                        Explore Now
                    </Button>
                </Flex>
            </View>
        </View>
    );
};

export default NewsLetter;
