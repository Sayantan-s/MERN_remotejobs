import styled from 'styled-components'
import { variant, color, compose, space, typography, layout, border } from 'styled-system'
import css from '@styled-system/css'

const variants = {
    primary : {
      normal : {
        color: 'text.0',
        bg: 'blue.6',
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
        color: 'blue.6',
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
    outline : {
      normal : {
        color: 'blue.6',
        bg: 'transparent',
        border : 1,
        borderColor : 'blue.4',
        borderRadius : 10
      },
      danger : {
        color: 'danger.4',
        bg: 'transparent',
        border : 1,
        borderColor : 'danger.4',
        borderRadius : 10
      },
      success : {
        color: 'success.4',
        bg: 'transparent',
        border : 1,
        borderColor : 'success.4',
        borderRadius : 10
      }
    },
    transparent : {
      normal : {
        color: 'blue.6',
        bg: 'transparent',
        width: 'max-content',
        
      },
      danger : {
        color: 'danger.4',
        bg: 'transparent',
        width: 'max-content',
        
      },
      success : {
        color: 'success.4',
        bg: 'transparent',
        width: 'max-content',
       
      }
    }
}

const size = {
  none : {
    minHeight : 'auto',
    px : 0,
    py : 0    
  },
  sm: {
      minWidth: '5rem',
      px : '1.2rem',
      py : '0.8rem'
  },
  md : {
    minWidth : '8rem',
    px : '1.6rem',
    py : '1.2rem'
  },
  lg : {
    minWidth : '12rem',
    px : '1.8rem',
    py : '1.4rem'
  },
  xl : {
    minWidth : '16rem',
    px : '1.8rem',
    py : '1.2rem'
  }

}

const Button = styled('button')(css({
    appearance: 'button',
    border: "none",
    outline: 'none',
    fontFamily: 'body',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius : '1rem',
    fontSize : 'base',
    fontWeight : 'regular'
  }),
  variant({ variants }),
  variant({ variants : size, prop : 'size'}),
  compose(
    color,
    space,
    typography,
    layout,
    border
  )
)

Button.defaultProps = {
  variant : 'primary.normal',
  size : 'md'
}

export default Button;