import { Flex, Text } from 'components'
import Danger from 'assets/icons/Danger'
import React from 'react'
import { useTheme } from 'styled-components';

const Toast = ({ toast }) => {
    const { variant, text, hasIcon } = toast;

    const theme = useTheme();

    return (
       <Flex bg={`${variant}.0`} alignItems="start" p={5} width="m" borderRadius={5} boxShadow={`0px 15px 20px ${theme.colors[variant][2]}20`}>
          {hasIcon && <Danger size="3rem" fill={theme.colors[variant][4]}/>}
           <Text color={`${variant}.4`} ml={5} fontSize="ms">
                {text}
           </Text>
       </Flex>
    )
}

export default Toast
