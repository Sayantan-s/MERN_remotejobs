import { Flex, Heading, Text, View, Image, Button, StackVertical } from 'components/index'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import http from 'utils/http';
import styled, { useTheme } from 'styled-components'
import { css } from '@styled-system/css'
import Play from 'assets/icons/Play';
import HomeJobCards from 'components/elements/HomeJobCards.component';

const PlayButton = styled(Button)(css({
    position: "absolute",
    zIndex: 100,
    transform: "translate(-50%,-50%)",
    top: "50%",
    left : "50%",
    borderRadius: '50%',
    boxShadow: '0px 15px 20px #3743e640',
}))

const Company = () => {

    const { company } = useParams();

    const theme = useTheme()

    const [ data, setData ] = useState();

    useEffect(() => {

        (async() => {
            try{
                const { data, status } = await http.get(`/companies/${company}`);
                if(status === 200) setData(data.data);
            }
            catch(err){
                console.log(err.response);
            }
        })()
    },[])

    console.log(data?.jobs)

    return (
       <View>
          <View
            py={10}  
            //backgroundSize="cover"    
            //backgroundPosition="center" 
            //backgroundImage={`URL("/gradients/2.jpg")`}>
            >
            <Flex maxWidth="desktop" m="0 auto" justifyContent="space-between"  position="relative">
                    <Heading level={1} maxWidth="l">
                        {data?.tagline}
                    </Heading>
                    <Text maxWidth="l" position="absolute" bottom="0" right="0" fontSize="ms">
                        {data?.info}
                    </Text>
            </Flex>
            <View maxWidth="desktop" m="0 auto" my={11}>
                <View position="relative">
                    <PlayButton size="xs">
                        <Play fill={theme.colors.blue[1]} size="4rem" />
                    </PlayButton>
                    <Image.Picture src={data?.culture.videoThumbnail} alt={company?.name} width="100%" height="l" borderRadius={6}/> 
                </View>
            </View>
            <View
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundImage={
                `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1131%26quot%3b)' fill='none'%3e%3cpath d='M -1683.0171796204613%2c915 C -1491.02%2c804.8 -1107.02%2c362.6 -723.0171796204614%2c364 C -339.02%2c365.4 -147.02%2c921.4 236.98282037953857%2c922 C 620.98%2c922.6 860.38%2c386.8 1196.9828203795387%2c367 C 1533.59%2c347.2 1775.4%2c731.8 1920%2c823' stroke='rgba(207%2c 210%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -161.8047467269871%2c741 C 30.2%2c651.4 414.2%2c290.4 798.1952532730129%2c293 C 1182.2%2c295.6 1374.2%2c752 1758.195253273013%2c754 C 2142.2%2c756 2685.83%2c303.2 2718.195253273013%2c303 C 2750.56%2c302.8 2079.64%2c663 1920%2c753' stroke='rgba(207%2c 210%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -1293.4213383824044%2c477 C -1101.42%2c537 -717.42%2c787.8 -333.4213383824045%2c777 C 50.58%2c766.2 242.58%2c423.4 626.5786616175956%2c423 C 1010.58%2c422.6 1327.89%2c789 1586.5786616175956%2c775 C 1845.26%2c761 1853.32%2c437.4 1920%2c353' stroke='rgba(207%2c 210%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -1028.1160253518776%2c603 C -836.12%2c570.4 -452.12%2c411.8 -68.1160253518776%2c440 C 315.88%2c468.2 507.88%2c764 891.8839746481224%2c744 C 1275.88%2c724 1646.26%2c357.4 1851.8839746481224%2c340 C 2057.51%2c322.6 1906.38%2c593.6 1920%2c657' stroke='rgba(207%2c 210%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -1672.759976639592%2c432 C -1480.76%2c473.6 -1096.76%2c686.6 -712.7599766395921%2c640 C -328.76%2c593.4 -136.76%2c157.6 247.24002336040792%2c199 C 631.24%2c240.4 872.69%2c799.2 1207.240023360408%2c847 C 1541.79%2c894.8 1777.45%2c519.8 1920%2c438' stroke='rgba(207%2c 210%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -1178.7691988658282%2c472 C -986.77%2c544 -602.77%2c844 -218.76919886582826%2c832 C 165.23%2c820 357.23%2c464.8 741.2308011341718%2c412 C 1125.23%2c359.2 1465.48%2c604.4 1701.2308011341718%2c568 C 1936.98%2c531.6 1876.25%2c297.6 1920%2c230' stroke='rgba(207%2c 210%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1131'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`
            } 
            bg="blue.1" pt={13} pb={8} mt={"-18rem"}>
                <View maxWidth="desktop" m="0 auto" my={12}>
                    <Heading level={2} textAlign="center">
                        Open roles
                    </Heading>
                    <Text textAlign="center" maxWidth="l" m="0 auto" mt={6} fontSize={'ms'}>
                        These companies release their own versions of the operating systems with minor changes, and yet always.
                    </Text>
                    <StackVertical gap={8} mt={10}>
                            {
                                data?.jobs.map(({ _id, companyInfo, roleInfo }) => (
                                    <HomeJobCards key={_id} {...companyInfo} {...roleInfo} />
                                ))
                            }
                    </StackVertical>
                </View>
            </View>
          </View>
       </View>
    )
}

export default Company
