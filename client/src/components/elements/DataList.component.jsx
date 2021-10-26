import css from '@styled-system/css';
import { TextField } from 'components';
import { Flex, View } from 'components/index';
import { useClickOutside } from 'hooks';
import React, { useRef, useState } from 'react';
import styled, { useTheme } from 'styled-components';

const StyledOption = styled(View)(
    css({
        cursor: 'pointer',
        color: 'text.1',
        px: 5,
        py: 4,
        listStyle: 'none',
        '&:hover': {
            bg: 'blue.0',
            color: 'blue.6'
        }
    })
);

const DataList = ({ data = [], ...rest }) => {
    const theme = useTheme();

    const inpRef = useRef(null);

    const dropDownRef = useRef(null);

    const [showDropDown, setDropDown] = useState(false);

    useClickOutside({
        ref: dropDownRef,
        callback: () => setDropDown(false)
    });

    const setDataListValue = (value) => {
        inpRef.current.value = value;
        setDropDown(false);
    };

    const handleDropDown = () => setDropDown(!showDropDown);

    return (
        <View position="relative" ref={dropDownRef}>
            <TextField ref={inpRef} onFocus={handleDropDown} {...rest} />
            {showDropDown && (
                <Flex
                    borderRadius={6}
                    bg={'white'}
                    width="sm"
                    boxShadow={`0px 15px 20px ${theme.colors.blue[2]}50`}
                    flexDirection="column"
                    position="absolute"
                    mt={4}
                    maxHeight="15rem"
                    overflowY="scroll"
                    zIndex="100">
                    {data.map((x) => (
                        <StyledOption
                            key={x.id}
                            value={x}
                            disabled={x.disabled}
                            onClick={() => setDataListValue(x.value)}>
                            {x.value}
                        </StyledOption>
                    ))}
                </Flex>
            )}
        </View>
    );
};

export default DataList;
