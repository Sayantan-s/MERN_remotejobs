import { Box, Avatar, Typography } from 'components'
import React from 'react'
import styled, { useTheme } from 'styled-components'

const UserProfileButton = ({ name, status, onClick }) => {
    const theme = useTheme();
    return (
       <Profile flex alignItems="center" onClick={onClick}>
           <Avatar />
           <Box className="content">
               <Typography as={"h5"} color={theme.color.grey['500']}>
                    { name || 'Josh Paul' }
               </Typography>
               <Typography as="h6" fontSize="1.2rem">{ status || 'Open to Offers' }</Typography>
           </Box>
       </Profile>
    )
}

export default UserProfileButton

const Profile = styled(Box)`
.content{
    margin-left: 1rem;
    h6{
        margin-top : 0.4rem;
        font-weight: 400;
    }
}
`