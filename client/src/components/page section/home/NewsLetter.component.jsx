import { Heading, Text, View } from 'components/index'
import React from 'react'

const NewsLetter = () => {
    return (
       <View py={12} bg="blue.1">
           <Heading level={2} textAlign="center">
                Subscribe to get instant job alerts
           </Heading>
           <Text maxWidth="l" textAlign="center" m="0 auto" mt={6}>
            Don’t wanna miss something? Subscribe right now and get
            special promtion and monthly newsletter
           </Text>
       </View>
    )
}

export default NewsLetter
