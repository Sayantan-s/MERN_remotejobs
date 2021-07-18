import React, { forwardRef } from 'react'
import { View, Heading, Radio as RadioGroup, Flex, Text,Button } from 'components'

const QuesAns = forwardRef(({ question,value, options, ...rest }, ref) => {
    return (
        <View ml="6" {...rest} ref={ref} maxWidth={'100.2rem'}> 
            <Heading level={1}>
                {question || 'The script tag must be placed in __________'}
            </Heading>
            <RadioGroup value={value || ''} options={options || ['the head tag','the head or body','the title or head', 'after the body tag']}/>
        </View>
    ) 
})

export default QuesAns




 