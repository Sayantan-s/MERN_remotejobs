import { View } from 'components/index'
import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const Portal = ({ id, children, as: Component = View, ...rest }) => {

    const [ hasMounted, setHasMounted ] = useState(false);

    useEffect(() => {
        setHasMounted(true)
    },[])

    if(!hasMounted) return null;

    return createPortal(
        <Component {...rest}>
            { children }
        </Component>,
        document.getElementById(id)
    )
}

export default Portal
