import css from '@styled-system/css';
import ArrowRight from 'assets/icons/ArrowRight';
import Email from 'assets/icons/Email';
import { Button, Flex, Heading, Link, Logo, Page, View } from 'components/index';
import Text from 'components/library/Text.component';
import TextField from 'components/library/TextField.component';
import useToggle from 'hooks/useToggle';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled, { useTheme } from 'styled-components'



const Company = () => {

    const theme = useTheme();

    return (
       <Page height={'100vh'} maxWidth={["full"]} as={Flex}>
           <View
            position="relative"
            background={`linear-gradient(60deg, ${theme.colors.blue[6]}80, ${theme.colors.blue[6]}), url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)`}
            backgroundSize="cover"
            backgroundPosition="center"
            bg={'blue.6'} flex="50%">
               <Heading level={1} color="text.0" fontWeight="bold" fontSize="xxl" mt={10} ml={10}>
                   Find the candidates exactly your Company needs.
               </Heading>
               <Link to="/jobs" variant="secondary.normal" lay="xl" borderRadius={10} alignItems="center" position="absolute" bottom="10" right="10">
                    <Text color="blue.6" as="span" mr="3" fontWeight="semibold">Apply for Jobs</Text>
                    <ArrowRight size="2.5rem" fill={theme.colors.blue[6]}/>
               </Link>
           </View>
           <View flex="50%">
           </View>
       </Page>
    )
}

export default Company

