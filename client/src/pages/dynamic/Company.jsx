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
            <View bg="blue.1" py={8}>
                <View maxWidth="desktop" m="0 auto" my={11}>
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
