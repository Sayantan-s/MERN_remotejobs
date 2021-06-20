import { Link } from 'components/index'
import React, { forwardRef } from 'react'
const Button = ({ children, ...otherProps }, ref) => {
    return (
       <Link as={'button'} {...otherProps} ref={ref}>
           {children}
       </Link>
    )
}

export default forwardRef(Button)