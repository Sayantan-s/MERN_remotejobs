import React from 'react';
import { View } from 'components';
import { useTheme } from 'styled-components'

const Backdrop = ({...rest}) => {
    
    const theme = useTheme();
    
    return (
        <View
            {...rest}
            width="100vw"
            height="100vh"
            bg={`${theme.colors.text[4]}40`}
            position="fixed"
            top="0"
            left="0"
            zIndex="500"
        />
    );
};

export default Backdrop;
