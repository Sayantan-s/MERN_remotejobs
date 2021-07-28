import React, { forwardRef } from 'react'
import styled from 'styled-components';
import { color, space, typography, variant } from 'styled-system';

const variants = {
    1 : {
        color : 'text.4',
        fontWeight : 'bold',
        fontFamily : 'body',
        lineHeight : 'heading',
        fontSize : 'xxl'
    },
    2 : {
        color : 'text.4',
        fontWeight : 'bold',
        fontFamily : 'body',
        lineHeight : 'heading',
        fontSize : 'l'
    },
    3 : {
        color : 'text.4',
        fontWeight : 'bold',
        fontFamily : 'body',
        lineHeight : 'heading',
        fontSize : 'm'
    },
    4 : {
        color : 'text.3',
        fontWeight : 'bold',
        fontFamily : 'body',
        lineHeight : 'heading',
        fontSize : 'm'
    },
    5 : {
        color : 'text.2',
        fontWeight : 'bold',
        fontFamily : 'body',
        lineHeight : 'heading',
        fontSize : 'm'
    },
    6 : {
        color : 'text.2',
        fontWeight : 'bold',
        fontFamily : 'body',
        lineHeight : 'heading',
        fontSize : 'm'
    }
}

const Base = forwardRef(({
    level,
    as: Component = `h${level}`,
    ...rest
}, ref) => <Component {...rest} ref={ref}/>);

const Heading = styled(Base)(
    {
        margin: 0,
        marginBlockStart : 0,
        marginBlockEnd : 0,
        lineHeight: 1
    },
    variant({ variants, prop : 'level' }),
    space,
    typography,
    color
)

export default Heading
