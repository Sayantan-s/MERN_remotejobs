import styled from 'styled-components'
import { variant } from 'styled-system'

const Button = styled('button')(
  {
    appearance: 'button',
    border: 0,
    outline: 0,
    fontFamily: 'inherit',
  },
  variant({
    variants: {
      primary: {
        color: 'white',
        bg: 'primary',
      },
      secondary: {
        color: 'white',
        bg: 'secondary',
      },
    }
  })
)

export default Button;