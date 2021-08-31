import { View, Text } from 'components'
import React from 'react'

const Toast = ({ toast }) => {
    const { variant, text } = toast;
    return (
       <View bg={`${variant}.0`} >
           <Text color={`${variant}.4`}>
                {text}
           </Text>
       </View>
    )
}

export default Toast
