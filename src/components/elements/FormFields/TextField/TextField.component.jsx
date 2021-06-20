import { Box } from 'components'
import React, { forwardRef } from 'react'
import styled, { css, useTheme } from 'styled-components'

const TextField = ({ icon: Icon, tertiary = false, className, ...otherProps }, ref) => {
    const theme = useTheme();
    return (
       <Wrapper ref={ref} flex alignItems="center" tertiary={tertiary} className={className}>
           <Icon color={theme.color.grey['500']}/>
           <Input {...otherProps} hasIcon={Icon ? true : false} tertiary={tertiary}/>
       </Wrapper>
    )
}

export default forwardRef(TextField)

const Wrapper = styled(Box)`
padding : 1.2rem 3rem;
svg{
    width: 2.5rem;
    order : ${props => props.tertiary ? '1' : '0'};
}
`

const Input = styled.input`
outline: none;
font-family: ${props => props.theme.font.family};
font-size : 2rem;
font-weight : 500;
order : ${props => props.tertiary ? '0' : '1'};
background-color : ${props => props.bg || 'transparent'};
color : ${props => props.theme.color.grey['400']};
margin: ${props => {
    if(props.hasIcon && props.tertiary){
        return '0 1rem 0 0';
    }
    else if(props.hasIcon && !props.tertiary){
        return '0 0 0 1rem';
    }
    else return '0rem';
}};
&::placeholder{
    color : ${props => props.theme.color.grey['300']};
}
border: none;
${props => props.as === "textarea" && css`
    resize: none;
`}
${props => props.type === 'search' && css`
    &::-webkit-search-cancel-button{
        display : none;
    }
`}
`