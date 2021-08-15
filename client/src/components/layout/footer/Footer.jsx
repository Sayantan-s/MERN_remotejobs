import React from 'react'
import { View as Bottom } from 'components'
import { Logo, Link, Flex, StackVertical, View, Divider, Text  } from 'components'
import { useTheme } from 'styled-components'

const Footer = () => {

    const theme = useTheme();

    const FooterRoutes = [
        [
            "About",
            "Press",
            "Partners Relations",
            "Blog"
        ],
        [
            "Job",
            "Job Referrals",
            "Contact Us",
            "Help"
        ],
        [
            "Careers",
            "Blog",
            "Help and Support",
            "Affiliate"
        ],
        [
            "Terms",
            "Privacy Policy"
        ]
    ]
    return (
       <Bottom as="footer" pt={13} pb={12}>
            <View width={['desktop']} m="0 auto">
                <Flex alignItems="start">
                    <Link to="/">
                        <Logo />
                    </Link>
                    <Flex width="100%" justifyContent="space-between" ml={10}>
                        {
                            FooterRoutes.map((routes, id) => (
                                <StackVertical key={id} gap={6}>
                                    {
                                        routes.map(link => (
                                            <Link to="/" key={link} color="text.4" fontSize="1.8rem">{link}</Link>
                                        ))
                                    }
                                </StackVertical> 
                            ))
                        }
                    </Flex>
                </Flex>
                <Divider width="100%" mt={9} color={theme.colors.text[1]}/>
                <Text mt={7} color="text.3">&copy;<Text as={"span"} color="blue.5">Jobseek</Text>  {new Date().getFullYear()}. All rights reserved </Text>
            </View>
       </Bottom>
    )
}

export default Footer
