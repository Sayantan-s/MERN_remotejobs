import css from '@styled-system/css';
import { Broken } from 'assets/icons/index';
import { Flex, Input, View, Button, Portal, Backdrop } from 'components';
import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';

const HomeSearchBar = ({ hitApi }) => {
    const theme = useTheme();

    const [ focus, setFocus ] = useState(false);

    const handleFocus = ({ focusNow }) => focusNow === "FOCUS" ? setFocus(true) : focusNow === "REMOVE FOCUS" ? setFocus(false) : false 

    return (
        <Flex
            boxShadow={`0px 15px 20px ${theme.colors.blue[2]}30`}
            bg="white"
            width="90rem"
            m="0 auto"
            borderRadius={13}
            mt="8"
            alignItems="center"
            p="5"
            overflow="hidden"
            onClick={() => handleFocus({ focusNow: "FOCUS" })}
        >
            <Input
                type="search"
                before
                placeholder="Job title or keyword"
                width={[1 / 2]}
                simpleInput
                iconBefore={
                    <Broken.Search size="2.4rem" stroke={theme.colors.text[3]} strokeWidth={1.8} />
                }
            />
            <View as={'span'} bg="text.1" width="1.5px" height="30px" mx="3rem" opacity="50%" />
            <Input
                simpleInput
                width={[1 / 2]}
                before
                type="search"
                placeholder="New York, USA"
                iconBefore={
                    <Broken.Location
                        size="2.5rem"
                        stroke={theme.colors.text[3]}
                        strokeWidth={1.8}
                    />
                }
            />
            <Button borderRadius={10} lay="lg">
                Search
            </Button>
           {focus && <MacLikeSearch onhandleFocus={() => handleFocus({ focusNow: "REMOVE FOCUS" })}/>}
        </Flex>
    );
};

export default HomeSearchBar;

const StyledSearch = styled(Portal)(css({
    transform: "translate(-50%, 0%)"
}))

const MacLikeSearch = ({ onhandleFocus }) => {
    const theme = useTheme();

    return (
        <>
            <Backdrop onClick={onhandleFocus}/>
            <StyledSearch id="search" position="fixed" top="10%" left="50%" zIndex="600">
                <Flex
                    boxShadow={`0px 15px 20px ${theme.colors.blue[2]}30`}
                    bg="white"
                    width="90rem"
                    m="0 auto"
                    borderRadius={13}
                    alignItems="center"
                    p="5"
                    overflow="hidden"
                >
                    <Input
                        type="search"
                        before
                        placeholder="Job title or keyword"
                        width={[1 / 2]}
                        simpleInput
                        iconBefore={
                            <Broken.Search
                                size="2.4rem"
                                stroke={theme.colors.text[3]}
                                strokeWidth={1.8}
                            />
                        }
                    />
                    <View
                        as={'span'}
                        bg="text.1"
                        width="1.5px"
                        height="30px"
                        mx="3rem"
                        opacity="50%"
                    />
                    <Input
                        simpleInput
                        width={[1 / 2]}
                        before
                        type="search"
                        placeholder="New York, USA"
                        iconBefore={
                            <Broken.Location
                                size="2.5rem"
                                stroke={theme.colors.text[3]}
                                strokeWidth={1.8}
                            />
                        }
                    />
                    <Button borderRadius={10} lay="lg">
                        Search
                    </Button>
                </Flex>
            </StyledSearch>
        </>
    );
};
