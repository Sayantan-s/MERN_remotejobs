import { Listbox } from '@headlessui/react';
import css from '@styled-system/css';
import ChevronDown from 'assets/icons/ChevronDown';
import { Flex, Text, View } from 'components/index';
import { useState, useRef, useEffect } from 'react';
import styled, { useTheme } from 'styled-components';
import { background, color, compose, typography } from 'styled-system';

const StyledButton = styled(Listbox.Button)(
    css({
        display: 'flex',
        alignItems: 'center',
        outline: 'none',
        border: 'none',
        fontFamily: 'body',
        fontWeight: 'semibold',
        fontSize: 'base',
        cursor: 'pointer'
    }),
    compose(color, background, typography)
);

const people = [
    { id: 1, name: 'Durward Reynolds', disabled: false },
    { id: 2, name: 'Kenton Towne', disabled: false },
    { id: 3, name: 'Therese Wunsch', disabled: false },
    { id: 4, name: 'Benedict Kessler', disabled: true },
    { id: 5, name: 'Katelyn Rohan', disabled: false }
];

const StyledOption = styled(Listbox.Option)(
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

const MyDropdown = ({ btnbg, btncolor, data, btnicon: BtnIcon = ChevronDown }) => {
    const [selectedPerson, setSelectedPerson] = useState(data[0]);

    const theme = useTheme();

    let dropdownRef = useRef(null);

    const [animationState, setAnimation] = useState(false);

    return (
        <Listbox as={View} position="relative" value={selectedPerson} onChange={setSelectedPerson}>
            <StyledButton bg={btnbg || 'transparent'}>
                <Text as="span" mr={3} color={btncolor}>
                    {selectedPerson.value}
                </Text>
                <BtnIcon size="2rem" fill={theme.colors.text[3]} />
            </StyledButton>
            <Listbox.Options
                className={'optionlist'}
                as={Flex}
                borderRadius={6}
                bg={'white'}
                width="sm"
                boxShadow={`0px 15px 20px ${theme.colors.blue[2]}50`}
                flexDirection="column"
                position="absolute"
                mt={4}
            >
                {data.map((x) => (
                    <StyledOption key={x.id} value={x} disabled={x.disabled}>
                        {x.value}
                    </StyledOption>
                ))}
            </Listbox.Options>
        </Listbox>
    ); 
};

export default MyDropdown;
