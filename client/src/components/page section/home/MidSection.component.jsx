import css from '@styled-system/css'
import { Flex, Heading, Image, StackVertical, Text, View } from 'components/index'
import React from 'react'
import styled from 'styled-components'

const points = [
    {
        header : 'Set up your profile',
        body : 'Create your startup account, add your information and your available positions.'
    },
    {
        header : 'Respond to job inquiries',
        body : 'We will notify you whenever someone responds to one of your positions.'
    },
    {
        header : 'Grow your startup',
        body : 'Our system will match you with the best candidates in our ever-expanding community.'
    }
]


const Headertext = styled(Heading)`
align-items: center;
&::before{
    content : '';
    width: 2rem;
    height : 2px;
    margin-right: 1rem;
    background-color: ${props => props.theme.colors.blue[6]};
}
`

const MidSection = () => {
    return (
        <View maxWidth="desktop" m="0 auto" py={13}>
            <Flex justifyContent="center" alignItems="center">
                <View>
                    <View>
                        <Heading level={3}>
                            Hire the best people
                        </Heading>
                        <Text fontSize="ms" mt={3}>
                            Join our worldwide startup community.
                        </Text>
                    </View>
                    <StackVertical gap={9} mt={9}>
                        {
                            points.map(({ header, body }, id) => {
                               return(
                                <Flex key={id}>
                                    <Flex size="6rem" borderRadius="50%" bg="blue.6" justifyContent="center" alignItems="center">
                                        <Text color="blue.0" fontSize="m">
                                            0{ id + 1 }
                                        </Text>
                                    </Flex>
                                    <View ml={7}>
                                        <Headertext level={4} 
                                            color="blue.6"  
                                            fontWeight="semibold" 
                                            display="flex" 
                                        >
                                            {header}
                                        </Headertext>
                                        <Text mt="4" maxWidth="m">
                                            {body}
                                        </Text>
                                    </View>
                                </Flex>
                               )
                            })
                        }
                    </StackVertical>
                </View>
                <View ml={9}>
                    <Image 
                        src={'https://images.unsplash.com/photo-1623122245120-7eef6faa39c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'} 
                        size={'l'}
                        alt="photo_office" 
                    />
                </View>
            </Flex>
        </View>
    )
}

export default MidSection
