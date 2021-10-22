import { View } from 'components/index';
import React, { forwardRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ id, children, as: Component = View, ...rest }, ref) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null;

    return createPortal(<Component {...rest} ref={ref}>{children}</Component>, document.getElementById(id));
};

export default forwardRef(Portal);
