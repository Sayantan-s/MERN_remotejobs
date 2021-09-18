import { Broken } from 'assets/icons/index';
import { Flex, Input, View, Button } from 'components';
import React from 'react';
import { useTheme } from 'styled-components';

const HomeSearchBar = ({ hitApi }) => {
    const theme = useTheme();

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
                iconBefore={<Broken.Location size="2.5rem" stroke={theme.colors.text[3]} strokeWidth={1.8} />}
            />
            <Button borderRadius={10} lay="lg">
                Search
            </Button>
        </Flex>
    );
};

export default HomeSearchBar;
