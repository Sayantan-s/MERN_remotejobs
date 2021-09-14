import React, { forwardRef } from 'react';
import { View, Heading, Radio as RadioGroup, Flex, Text, Button } from 'components';
import { useTheme } from 'styled-components'

const QuesAns = forwardRef(({ question, value, options, type, addExplanations, ...rest }, ref) => {

    const theme = useTheme()

    return (
        <View
            ml="6"
            {...rest}
            ref={ref}
            maxWidth={'100.2rem'}
            maxHeight={'40rem'}
            minHeight={'40rem'}
        >
            <Heading level={1}>{question || 'The script tag must be placed in __________'}</Heading>
            {addExplanations && <Text>Hellooooooo</Text>}
            <RadioGroup
                value={value || ''}
                checkedBg={theme.colors.success[3]}
                uncheckedBg={theme.colors.success[0]}
                size="4rem"
                options={
                    options || [
                        'the head tag',
                        'the head or body',
                        'the title or head',
                        'after the body tag'
                    ]
                }
            />
        </View>
    );
});

export default QuesAns;
