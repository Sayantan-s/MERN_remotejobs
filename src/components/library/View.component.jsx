import React, { forwardRef } from 'react'
import styled from 'styled-components';
import { compose, flexbox, space, color, layout, shadow, position } from 'styled-system';

const View = ({...rest}, ref) => {
    return (
      <Container {...rest} ref={ref} />
    )
}

export default forwardRef(View)

const Container = styled("div")(compose(flexbox, space, color, layout, shadow, position ));