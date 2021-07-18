import React from 'react'
import { View, Heading, Radio as RadioGroup, Flex, Text,Button } from 'components'
import { useTheme } from 'styled-components'

const QuesAns = ({ question,value, options }) => {

    const theme = useTheme();

    return (
        <View>
            <Flex>
                <Text fontSize="xl" color="text.1">01</Text>
                <View ml="6"> 
                    <Heading level={1}>
                    {question || 'The script tag must be placed in __________'}
                    </Heading>
                    <RadioGroup value={value || ''} options={options || ['the head tag','the head or body','the title or head', 'after the body tag']}/>
                    <View>
                        <Button >
                            <Text>Next</Text>
                            <svg width="2.5rem" height="2.5rem" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <title>Iconly/Curved/Arrow - Right 2</title>
                                <g id="Iconly/Curved/Arrow---Right-2" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                                    <g id="Arrow---Right-2" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000) translate(5.000000, 8.500000)" stroke="#fff" strokeWidth="2">
                                    <path d="M14,0 C14,0 9.856,7 7,7 C4.145,7 0,0 0,0" id="Stroke-1" />
                                    </g>
                                </g>
                            </svg>
                        </Button>
                    </View>
                </View>
            </Flex>
        </View>
    ) 
}

export default QuesAns




 