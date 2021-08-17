import SolidJob from 'assets/icons/solid/SolidJob'
import SolidLocation from 'assets/icons/solid/SolidLocation'
import { Page, Image, View, Text, Heading, Flex, Stack, Checkbox, StackVertical } from 'components/index'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTheme } from 'styled-components'
import http from 'utils/http'

const Job = () => {

    const { id } = useParams();

    const theme = useTheme();

    const [ jobData, setData ] = useState({});

    useEffect(() => {
        (async() => {
            try{
                const { data, status } = await http.get(`/jobs/${id}`);
                if(status === 200) setData(data.data);
            }
            catch(err){
                console.log(err);
            }
        })()
    }, [id])

    const { company, roleInfo } = jobData;  

    return (
        <Page>
            <View
                position="relative"
                px={10}
                py={13}
                backgroundSize="cover"
                backgroundPosition="center" 
                borderRadius={8} 
                backgroundImage={`URL("https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")`}>
                    <Image.Thumbnail src={company?.thumbnail} alt={company?.name} thumbwidth={80} thumbheight={80} bg="white" 
                        width="max-content" p={4} 
                        position="absolute" 
                        bottom={-40} 
                        borderRadius={8}
                        border={2} borderColor={'white'} boxShadow={`0px 15px 20px ${theme.colors.blue[2]}40`}
                    />
            </View>
            <View my={12} px={10}>
                <Text as={'pre'} fontSize="m">
                    {company?.name}
                </Text>
                <Heading level={2} mt={4}>
                    {roleInfo?.role}
                </Heading>
                <Stack mt={6} gap={6} alignItems="center">
                    <Flex alignItems="center" bg={`${theme.colors.text[0]}85`} px={4} py={2} borderRadius={6}>
                        <SolidJob size={'2rem'} fill={theme.colors.text[2]} />
                        <Text as="span" color="text.2" fontWeight="semibold" lineHeight={1} ml={4}> { roleInfo?.jobtype } </Text>
                    </Flex>
                    <Flex alignItems="center" bg={`${theme.colors.text[0]}85`} px={4} py={2} borderRadius={6}>
                        <SolidLocation size={'2rem'} fill={theme.colors.text[2]} />
                        <Text as="span" color="text.2" fontWeight="semibold" lineHeight={1} ml={4}> { roleInfo?.location } </Text>
                    </Flex>
                    <Flex alignItems="center" bg={`blue.1`} px={4} py={2} borderRadius={6}>
                        <Text as="span" color={'blue.6'} fontWeight="semibold" lineHeight={1}> { roleInfo?.dept } </Text>
                    </Flex>
                </Stack>
                <View mt={10}>
                    <Heading level={3}>
                        Working at {company?.name}
                    </Heading>
                    <Text mt={7}>
                        {roleInfo?.roleOverview}
                    </Text>
                </View>
                <View mt={10}>
                    <Heading level={3}>
                        What will you do as a {roleInfo?.role}?
                    </Heading>
                    <StackVertical gap={6} mt={7}>
                        {
                            roleInfo?.mainResponsibilities?.map((resp,_id) => (
                                <Checkbox
                                    key={_id}
                                    checkedBg={theme.colors.success[4]} 
                                    uncheckedBg={theme.colors.success[1]} 
                                    color={theme.colors.text[1]} 
                                    size={'2rem'}  
                                    name={resp}
                                    value={resp}
                                    isOption={true}
                                />
                            ))
                        }
                    </StackVertical>
                </View>
                <View mt={10}>
                    <Heading level={3}>
                        Requirements
                    </Heading>
                    <StackVertical gap={6} mt={7}>
                        {
                            roleInfo?.skillsReq?.map((resp,_id) => (
                                <Checkbox
                                    key={_id}
                                    checkedBg={theme.colors.success[4]} 
                                    uncheckedBg={theme.colors.success[1]} 
                                    color={theme.colors.text[1]} 
                                    size={'2rem'}  
                                    name={resp}
                                    value={resp}
                                    isOption={true}
                                />
                            ))
                        }
                    </StackVertical>
                </View>
            </View>
        </Page>
    )
}

export default Job
