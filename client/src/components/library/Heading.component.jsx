import React, { forwardRef } from 'react'
import styled from 'styled-components';
import { color, space, typography, variant } from 'styled-system';

const variants = {
    1 : {
        color : 'text',
        fontWeight : 'bold',
        fontFamily : 'body',
        lineHeight : 'heading',
        fontSize : 'xl'
    },
    2 : {
        color : 'text',
        fontWeight : 'bold',
        fontFamily : 'body',
        lineHeight : 'heading',
        fontSize : 'l'
    },
    3 : {
        color : 'text',
        fontWeight : 'bold',
        fontFamily : 'body',
        lineHeight : 'heading',
        fontSize : 'm'
    },
    4 : {
        color : 'text',
        fontWeight : 'bold',
        fontFamily : 'body',
        lineHeight : 'heading',
        fontSize : 'm'
    },
    5 : {
        color : 'text',
        fontWeight : 'bold',
        fontFamily : 'body',
        lineHeight : 'heading',
        fontSize : 'm'
    },
    6 : {
        color : 'text',
        fontWeight : 'bold',
        fontFamily : 'body',
        lineHeight : 'heading',
        fontSize : 'm'
    }
}

const Base = ({
    level,
    as : Component = `h${level}`,
    ...rest
}, ref) => forwardRef(
    <Component {...rest} ref={ref} />
);

const Heading = styled(Base)(
    {
        margin: 0
    },
    variant({ variants, prop : 'level' }),
    space,
    typography,
    color
)

export default Heading
