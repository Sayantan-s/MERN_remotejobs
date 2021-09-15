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

const StyledFlex = styled('div')(
    css({
        background: ({ variant }) =>
            `radial-gradient(50% 123.47% at 50% 50%, #00FF94 0%, #720059 100%), linear-gradient(121.28deg, #669600 0%, #FF0000 100%), linear-gradient(360deg, #0029FF 0%, #8FFF00 100%), radial-gradient(100% 164.72% at 100% 100%, #6100FF 0%, #00FF57 100%), radial-gradient(100% 148.07% at 0% 0%, #FFF500 0%, #51D500 100%)`,
        backgroundBlendMode: `screen, color-dodge, overlay, difference, normal`,
        width: '5rem',
        height: '5rem'

        //background-blend-mode: screen, color-dodge, overlay, difference, normal;
    })
);
