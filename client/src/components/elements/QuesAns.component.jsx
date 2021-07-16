import React from 'react'
import { View, Text, Radio } from 'components'


const QuesAns = ({ question,value, options }) => {
    return (
        <View> 
            <Text>
               {question || 'The script tag must be placed in __________'}
            </Text>
            <Radio value={'the head tag'} options={['the head tag','the head or body','the title or head', 'after the body tag']}/>
        </View>
    ) 
}

export default QuesAns




 