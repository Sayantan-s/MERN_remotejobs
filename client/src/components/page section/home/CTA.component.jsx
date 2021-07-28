import { View, Heading, Text } from 'components'
import { HomeSearchBar } from 'components/elements'
import React from 'react'

const CTA = () => {
    return (
       <View>
           <Heading level={1} textAlign="center" mt="7">
               Get the <Text as="span" fontSize="xxl" fontWeight="bold" color="blue.6">Right job</Text> <br/>
               you deserve
           </Heading>
           <Text fontSize="m" textAlign="center" my="6">
               1,80,507 jobs listed here! Find your dream job!
           </Text>
           <HomeSearchBar />
       </View>
    )
}

export default CTA
