import React, { forwardRef, useState } from 'react';
import { View, Heading, Radio as RadioGroup, Flex, Text, Button } from 'components';
import { useTheme } from 'styled-components';
import { TextField } from 'components/index';

const QuesAns = forwardRef(({ question, value, options, type, explanations, ...rest }, ref) => {
    const theme = useTheme();

    const [explain, setExplain] = useState('');

    return (
        <View
            ml="6"
            {...rest}
            ref={ref}
            maxWidth={'100.2rem'}
            maxHeight={'40rem'}
            minHeight={'40rem'}
        >
            <Heading level={2}>{question || 'The script tag must be placed in __________'}</Heading>
            {explanations?.add && (
                <View mt={4}>
                    <TextField
                        type="text"
                        variant="underline.normal"
                        placeholder={`Explain why?${explanations.optional ? '(Optional)' : ''}`}
                        fontSize="2rem"
                        name="name"
                        value={explain}
                        onChange={(eve) => setExplain(eve.target.value)}
                        danger={''}
                    />
                </View>
            )}
            <RadioGroup
                mt={8}
                value={value || ''}
                uncheckedBg={theme.colors.blue[2]}
                checkedBg={theme.colors.blue[6]}
                color={theme.colors.text[0]}
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
