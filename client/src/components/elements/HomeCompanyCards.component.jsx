import css from '@styled-system/css'
import { View, Text, Flex, Button } from 'components'
import React from 'react'
import styled from 'styled-components'

const HomeCompanyCards = ({ logo, info, typeOfCorporation }) => {

    const CompanyIntro = styled(Text)`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
    -webkit-box-orient: vertical;
    `

    return (
       <Flex width={[4/12]} bg="blue.0" p="6" borderRadius={6} flexDirection="column" justifyContent="space-between" height="23rem">
           <View>
                <View>
                        <img src={logo} alt="logo_company" height="40" />
                </View>
                <CompanyIntro color="text.3" mt="6"> 
                    {info}
                </CompanyIntro>
           </View>
           <Flex alignItems="center" justifyContent="space-between">
               <Button variant="secondary.normal">
                    12 jobs
               </Button>
               <Text as="span" fontSize="s">
                    {typeOfCorporation} &middot; Dublin
               </Text>
           </Flex>
       </Flex>
    )
}

export default HomeCompanyCards
