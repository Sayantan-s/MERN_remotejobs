import React from 'react';
import styled from 'styled-components';
import { css } from '@styled-system/css';

const Styledsvg = styled.svg(
    css({
        width: (props) => props.size || '2.5rem',
        height: (props) => props.size || '2.5rem',
        fill: (props) => props.fill || 'none',
        path: {
            stroke: (props) => props.stroke || 'text.5',
            strokeWidth: (props) => props.strokeWidth || '1.5'
        }
    })
);

const Svg = ({ icon, ...rest }) => {
    return <Styledsvg {...rest}>{icon}</Styledsvg>;
};

export default Svg;
