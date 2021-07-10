import styled from 'styled-components';
import { flexbox, border, space, color, layout, shadow, position, background } from 'styled-system';

const View = styled.div(
  {
    boxSizing : 'border-box'
  },
  flexbox,
  border,
  space,
  color, 
  layout, 
  shadow, 
  position,
  background
)

export default View;
