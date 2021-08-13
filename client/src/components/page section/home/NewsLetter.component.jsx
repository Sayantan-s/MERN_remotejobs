import { Button, Heading, Input, Text, View, Flex } from 'components/index'
import React from 'react'

const NewsLetter = () => {
    return (
       <View py={13} bg="blue.1"  
       backgroundSize="cover"
       backgroundPosition="center"
       backgroundImage={
        `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='584' preserveAspectRatio='none' viewBox='0 0 1920 584'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1014%26quot%3b)' fill='none'%3e%3cpath d='M2238.75 486.38C2099.07 484.76 1997.19 340.14 1702.7 328.7 1408.22 317.26 1323.81 9.35 1166.66-3.78' stroke='rgba(207%2c 210%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M2292.13 194.28C2065.12 196.94 1752.49 452.04 1421.13 451.24 1089.77 450.44 1141.68 14.74 985.63-29.11' stroke='rgba(207%2c 210%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M2147.52 428.98C1893.44 428.6 1540.53 290.16 1141.74 282.98 742.95 275.8 794.14-70.33 638.85-89.93' stroke='rgba(207%2c 210%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1944.26 120.88C1801.75 120.73 1661.59 47.88 1378.93 47.88 1096.26 47.88 1098.07 121.09 813.59 120.88 529.11 120.67 398.26-77.47 248.26-80.44' stroke='rgba(207%2c 210%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M2004.26 201.95C1796.5 206.41 1521.61 489.06 1223.82 488.11 926.03 487.16 983.37 37.56 833.6-18.14' stroke='rgba(207%2c 210%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1014'%3e%3crect width='1920' height='584' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`
        }>
           <View width="desktop" m="0 auto">
                <Heading level={2} textAlign="center" fontSize="semil">
                        Subscribe to get instant job alerts
                </Heading>
                <Text maxWidth="l" textAlign="center" m="0 auto" mt={7} fontSize={'ms'}>
                        Don’t wanna miss something? Subscribe right now and get
                        special promtion and monthly newsletter
                </Text>
                <View bg="blue.0" maxWidth="l" m="0 auto" p={5} borderRadius={5} mt={10}>
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
       </View>
    )
}

export default NewsLetter
