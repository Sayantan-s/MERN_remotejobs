import css from '@styled-system/css'
import { View, Text, Flex, Button } from 'components'
import React from 'react'

const HomeCompanyCards = ({ logo, info, typeOfCorporation }) => {
    return (
       <Flex width={[4/12]} bg="blue.0" p="6" borderRadius={6} flexDirection="column" justifyContent="space-between">
           <View mb="4">
                <img src={logo} alt="logo_company" width="40" />
           </View>
           <Text color="text.3" css={css({
               textOverflow : 'ellipsis',
               whitespace : 'nowrap',
               overflow: 'hidden'
           }) }>
               {info}
           </Text>
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
