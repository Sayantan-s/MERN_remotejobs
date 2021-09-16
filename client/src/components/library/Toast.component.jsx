import { Flex, Text } from 'components';
import Danger from 'assets/icons/Danger';
import React from 'react';
import styled, { useTheme } from 'styled-components';
import css from '@styled-system/css';

const Toast = ({ toast }) => {
    const { variant, text, hasIcon } = toast;

    const theme = useTheme();

    return (
        <Flex
            initial={{
                y: 20,
                opacity: 0
            }}
            animate={{
                y: 0,
                opacity: 1
            }}
            bg={`white`}
            alignItems="center"
            px={5}
            py={4}
            width="m"
            borderRadius={6}
            boxShadow={`0px 15px 20px ${theme.colors.blue[4]}20`}
        >
            {hasIcon && (
                <Flex
                    backgroundImage={`linear-gradient(46.64deg, ${theme.colors[variant][4]} 0%, ${theme.colors[variant][3]} 73%)`}
                    p="4"
                    borderRadius={'50%'}
                >
                    <Danger size="3rem" fill={theme.colors[variant][0]} />
                </Flex>
            )}
            <Text color={`text.3`} ml={5} fontSize="base">
                {text}
            </Text>
        </Flex>
    );
};

export default Toast;
