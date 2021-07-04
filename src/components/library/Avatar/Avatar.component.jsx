import { Box } from 'components'
import React from 'react'
import styled from 'styled-components'

const Avatar = ({ src }) => {
    const imgLink = "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=798&q=80";
    return (
       <ProfilePic>
           <img src={src || imgLink} alt="potrait_dp" />
       </ProfilePic>
    )
}

export default Avatar

const ProfilePic = styled(Box)`
width : ${props => props.size || '4.5' }rem;
height : ${props => props.size || '4.5' }rem;
border-radius: ${props => props.borderRadius || '50%'};
position: relative;
overflow: hidden;
img{
    object-fit: cover;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
`