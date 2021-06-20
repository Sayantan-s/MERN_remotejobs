import React from 'react'
import styled from 'styled-components'
import { Box, TextField, Button } from 'components'
import { Location, Search } from 'utils/Icons'

const JobSearch = () => {
    return (
       <SearchBar flex alignItems="center">
           <TextField 
                type="search"
                placeholder="Job title or keyword"
                icon={Search}
           />
            <TextField 
                type="search"
                placeholder="New york, USA"
                icon={Location}
           />
           <Button type="primary" width="lg" rounded="xl">
                Search
           </Button>
       </SearchBar>
    )
}

export default JobSearch

const SearchBar = styled(Box)`
background-color: ${props => props.theme.color.blue['50']};
border-radius: 3rem;
box-shadow: 0px 5px 15px ${props => `${props.theme.color.grey['400']}10`};
margin: 5rem auto;
width: max-content;
padding : 1.5rem;
`