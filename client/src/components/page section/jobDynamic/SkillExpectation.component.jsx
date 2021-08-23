import css from '@styled-system/css'
import { Flex, Heading, Text, View } from 'components/index'
import React, { useState } from 'react'
import styled from 'styled-components'

const Progress = styled(View)(css({
    position: "relative"
}))

const SkillExpectation = ({ requiredXP, company }) => {

    const [ xp, setXp ] = useState(22);

    return (
        <View mt={8}>
            <Heading level={3}>
                Skill XP
            </Heading>
            <View mt={6}>
                <View>
                    <Progress>
                        <View bg="blue.1" width="100%" position="absolute" height="0.8rem" borderRadius={3} />
                        <View bg="blue.5" width={`${requiredXP}%`} position="absolute" height="0.8rem" borderRadius={3}/>
                    </Progress>
                </View>
                <Flex justifyContent="space-between" pt={6}>
                    <Text color="text.1" maxWidth="25rem">
                        {company} wants your minimum Skill XP to be {requiredXP}%
                    </Text>
                    <Text as="span" color="text.4" fontWeight="bold">
                        {requiredXP}%
                    </Text>
                </Flex>
            </View>
            <View mt={6}>
                <View>
                    <Progress>
                        <View bg="danger.0" width="100%" position="absolute" height="0.8rem" borderRadius={3} />
                        <View bg="danger.4" width={`${xp}%`} position="absolute" height="0.8rem" borderRadius={3}/>
                    </Progress>
                </View>
                <Flex justifyContent="space-between" pt={6}>
                    <Text color="text.1" maxWidth="25rem">
                        Your current Skill XP is &#8594;
                    </Text>
                    <Text as="span" color="text.4" fontWeight="bold">
                        {xp}%
                    </Text>
                </Flex>
            </View>
        </View>
    )
}

export default SkillExpectation
