import { Button } from 'components';
import React from 'react'
import { NavLink as Anchor } from 'react-router-dom';
import styled from 'styled-components';

const Navigator = ({ ...rest }) => <Button as={Anchor} {...rest} />

const Link = styled(Navigator)(
    {
        textDecoration : 'none'
    }
)

Link.defaultProps = {
    variant : 'transparent.normal',
    size : 'none'
}

export default Link
