import css from '@styled-system/css'
import ArrowRight from 'assets/icons/ArrowRight'
import { Text, View, Flex, StackVertical, Heading, Button, Image } from 'components/index'
import React from 'react'
import { useHistory } from 'react-router-dom'
import styled, { useTheme } from 'styled-components'
import Tilt from 'react-parallax-tilt'

const HomeJobCards = ({ logo, role, tagline, location, jobtype, name, _id, createdAt }) => {

    const theme = useTheme();

    const StyledArrow = styled(Flex)(css({
        transform: 'rotate(-45deg)'
    }))

    const history = useHistory();

    console.log()

    return (
        <Tilt tiltAxis={'x'} gyroscope={true} tiltMaxAngleY={10}>
            <Flex bg="blue.0" alignItems="center" as="fig" p="8" borderRadius={6}>
            <View width={[2.3/12]}>
                    <Image.Thumbnail src={logo} alt="logo_company" thumbheight="40" />
            </View>
            <StackVertical width={[7.7/12]} gap={4}>
                {(((new Date() - new Date(createdAt)) / (1000 * 60 * 60 * 24))) < 9 && <Text>New</Text>}
                <Heading level={4} fontWeight="semibold">
                    {role}
                </Heading>
                <Text>
                    {tagline}
                </Text>
            </StackVertical>
            <StackVertical width={[2/12]} gap={4}>
               <Button variant="secondary.normal" m="0 auto" onClick={() => history.push(`/jobs/${name}_${_id}`)} width="max-content">
                   {'Apply'.toUpperCase()} 
                   <StyledArrow alignItems="center" justifyContent="center">
                        <ArrowRight size="2rem" fill={theme.colors.blue[6]}/>
                   </StyledArrow>
               </Button>
               <Text textAlign="center">
                   { jobtype } &middot; { location }
               </Text>
            </StackVertical>
        </Flex>
        </Tilt>
    )
}

export default HomeJobCards
