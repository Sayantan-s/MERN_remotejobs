import css from '@styled-system/css';
import { Broken } from 'assets/icons/index';
import { Flex, Input, View, Button, Portal, Backdrop } from 'components';
import { useClickOutside } from 'hooks';
import React, { useState, forwardRef, useRef, useEffect } from 'react';
import styled, { useTheme } from 'styled-components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const HomeSearchBar = () => {
    const theme = useTheme();

    const [focus, setFocus] = useState(false);

    const searchBarRef = useRef(null);

    useClickOutside(
        {
            ref: searchBarRef,
            callback: () => setFocus(false)
        },
        [focus]
    );

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
            onClick={() => setFocus(true)}>
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
            {focus && <MacLikeSearch ref={searchBarRef} />}
        </Flex>
    );
};

export default HomeSearchBar;

const StyledSearch = styled(Portal)(
    css({
        transform: 'translate(-50%, 0%)'
    })
);

const MacLikeSearch = forwardRef((_, ref) => {
    const theme = useTheme();

    return (
        <>
            <Backdrop />
            <StyledSearch id="search" position="fixed" top="10%" left="50%" zIndex="600" ref={ref}>
                <Formik
                    onSubmit={(values) => console.log(values)}
                    initialValues={{
                        jobsearch: '',
                        location: ''
                    }}
                    validationSchema={Yup.object().shape({
                        jobsearch: Yup.string(),
                        location: Yup.string()
                    })}>
                    <Flex
                        as={Form}
                        boxShadow={`0px 15px 25px ${theme.colors.text[4]}20`}
                        bg="white"
                        width="90rem"
                        m="0 auto"
                        borderRadius={13}
                        alignItems="center"
                        p="5"
                        overflow="hidden">
                        <Input
                            type="search"
                            name="jobsearch"
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
                            name="location"
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
                </Formik>
            </StyledSearch>
        </>
    );
});
