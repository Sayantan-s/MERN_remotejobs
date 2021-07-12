import styled from 'styled-components'
import { variant } from 'styled-system'

const variants = {
    primary : {
      normal : {
        color: 'white',
        bg: 'primary',
      },
      danger : {
        color: 'white',
        bg: 'primary',
      },
      success : {
        color: 'white',
        bg: 'primary',
      }
    },
    secondary : {
      normal : {
        color: 'white',
        bg: 'primary',
      },
      danger : {
        color: 'white',
        bg: 'primary',
      },
      success : {
        color: 'white',
        bg: 'primary',
      }
    },
    outlined : {
      normal : {
        color: 'white',
        bg: 'primary',
      },
      danger : {
        color: 'white',
        bg: 'primary',
      },
      success : {
        color: 'white',
        bg: 'primary',
      }
    }
}

const Button = styled('button')(
  {
    appearance: 'button',
    border: "none",
    outline: 'none',
    fontFamily: 'body',
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