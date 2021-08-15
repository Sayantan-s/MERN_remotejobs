import { Listbox } from '@headlessui/react'
import css from '@styled-system/css';
import { Flex, View } from 'components/index';
import { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { background, color, compose, typography } from 'styled-system';

const StyledButton = styled(Listbox.Button)(
    css({
        position: 'flex',
        outline: 'none',
        border: 'none',
        fontFamily: 'body',
        fontWeight: 'semibold',
        fontSize: 'base',
        cursor: 'pointer'
    }),
    compose(color, background, typography)
)

const people = [
    { id: 1, name: 'Durward Reynolds', disabled: false },
    { id: 2, name: 'Kenton Towne', disabled: false },
    { id: 3, name: 'Therese Wunsch', disabled: false },
    { id: 4, name: 'Benedict Kessler', disabled: true },
    { id: 5, name: 'Katelyn Rohan', disabled: false },
  ]

const StyledOption = styled(Listbox.Option)(css({
    cursor: 'pointer',
    color: 'text.1',
    '&:hover' : {
        bg: 'blue.0',
        color : 'blue.6'
    }
}))

const MyDropdown = ({ btnbg, btncolor }) => {

    const [selectedPerson, setSelectedPerson] = useState(people[0])

    const theme = useTheme();

  return (
    <Listbox as={View} position="relative" value={selectedPerson} onChange={setSelectedPerson}>
      <StyledButton  bg={btnbg || 'transparent'} color={btncolor}>{selectedPerson.name}</StyledButton>
      <Listbox.Options as={Flex} 
      borderRadius={6} 
      bg={'white'} 
      width="sm"  
      boxShadow={`0px 15px 20px ${theme.colors.blue[2]}50`} 
      flexDirection="column" 
      position="absolute"
      mt={4} 
      >
        {people.map((person) => (
          <StyledOption
            as={View}
            px={5}
            py={4}
            key={person.id}
            value={person}
            disabled={person.disabled}
          >
            {person.name}
          </StyledOption>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}

export default MyDropdown;