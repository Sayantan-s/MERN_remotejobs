import styled from 'styled-components'
import { variant } from 'styled-system'
import css from '@styled-system/css'

const variants = {
    primary : {
      normal : {
        color: 'text.0',
        bg: 'blue.4',
      },
      danger : {
        color: 'text.0',
        bg: 'danger.4',
      },
      success : {
        color: 'text.0',
        bg: 'success.4',
      }
    },
    secondary : {
      normal : {
        color: 'blue.5',
        bg: 'blue.1'
      },
      danger : {
        color: 'danger.4',
        bg: 'danger.0',
      },
      success : {
        color: 'success.4',
        bg: 'success.0',
      }
    },
    outlined : {
      normal : {
        color: 'blue.5',
        bg: 'transparent',
      },
      danger : {
        color: 'danger.4',
        bg: 'transparent'
      },
      success : {
        color: 'success.4',
        bg: 'transparent'
      }
    }
}

const size = {
  lg: {
    
  }
}

const Button = styled('button')(css({
    appearance: 'button',
    border: "none",
    outline: 'none',
    fontFamily: 'body',
    textDecoration : 'none',
  }),
  variant({ variants }),
  variant({ variants : size, prop : 'size'})
)

Button.defaultProps = {
  variant : 'primary.normal'
}

export default Button;