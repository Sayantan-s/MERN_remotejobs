import css from '@styled-system/css';
import styled from 'styled-components';
import {
    flexbox,
    border,
    space,
    color,
    layout,
    shadow,
    position,
    background,
    compose
} from 'styled-system';
import { motion } from 'framer-motion';

const View = styled(motion.div)(
    css({
        boxSizing: 'border-box'
    }),
    compose(flexbox, border, space, color, layout, shadow, position, background)
);

export default View;
