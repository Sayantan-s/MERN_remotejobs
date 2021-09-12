import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { color, layout, space, typography, variant, flex } from 'styled-system';
import { motion } from 'framer-motion';

const variants = {
    1: {
        color: 'text.4',
        fontWeight: 'bold',
        fontFamily: 'body',
        lineHeight: 'heading',
        fontSize: 'xl'
    },
    2: {
        color: 'text.4',
        fontWeight: 'bold',
        fontFamily: 'body',
        lineHeight: 'heading',
        fontSize: 'semil'
    },
    3: {
        color: 'text.4',
        fontWeight: 'bold',
        fontFamily: 'body',
        lineHeight: 'heading',
        fontSize: 'l'
    },
    4: {
        color: 'text.3',
        fontWeight: 'bold',
        fontFamily: 'body',
        lineHeight: 'heading',
        fontSize: 'm'
    },
    5: {
        color: 'text.3',
        fontWeight: 'semibold',
        fontFamily: 'body',
        lineHeight: 'heading',
        fontSize: 'ms'
    },
    6: {
        color: 'text.2',
        fontWeight: 'semibold',
        fontFamily: 'body',
        lineHeight: 'heading',
        fontSize: 's'
    }
};

const Base = forwardRef(({ level, as: Component = motion[`h${level}`], ...rest }, ref) => (
    <Component {...rest} ref={ref} />
));

const Heading = styled(Base)(
    {
        margin: 0,
        marginBlockStart: 0,
        marginBlockEnd: 0,
        lineHeight: 1
    },
    variant({ variants, prop: 'level' }),
    space,
    typography,
    color,
    layout,
    flex
);

export default Heading;
