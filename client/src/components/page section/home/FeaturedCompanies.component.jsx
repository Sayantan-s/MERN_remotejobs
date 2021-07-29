import { View, Flex, Text, Link } from 'components'
import React from 'react'

const FeaturedCompanies = () => {
    return (
       <View bg="blue.1" py="8">
           <Flex width={[10/12]} m="0 auto" justifyContent="space-between">
               <Text as="span" fontSize="m" color="text.4">
                   Featured Companies
               </Text>
               <Link to="/jobs" fontSize="m">
                   See all companies
               </Link> 
           </Flex>
       </View>
    )
}

export default FeaturedCompanies
