import css from '@styled-system/css';
import { Button, Flex, Text, View } from 'components';
import React, { forwardRef } from 'react';
import styled, { useTheme } from 'styled-components';
import { compose, layout, space, variant } from 'styled-system';
import { Field, ErrorMessage } from 'formik';
import { Broken } from 'assets/icons';

export const inpVariants = {
    primary: {
        normal: {
            border: 1,
            borderColor: 'text.0',
            'input, textarea': {
                color: 'text.2',
                resize: 'none',
                '::placeholder': {
                    color: 'text.1'
                }
            },
            button: {
                svg: {
                    ['path, g']: {
                        fill: 'text.1'
                    }
                }
            }
        },
        danger: {
            border: 1,
            borderColor: 'danger.1',
            bg: 'danger.0',
            'input, textarea': {
                color: 'danger.1',
                '::placeholder': {
                    color: 'danger.1'
                }
            },
            button: {
                svg: {
                    ['path, g']: {
                        fill: 'danger.1'
                    }
                }
            }
        }
    },
    underline: {
        normal: {
            borderBottom: 1,
            borderColor: 'text.0',
            'input, textarea': {
                color: 'text.2',
                resize: 'none',
                '::placeholder': {
                    fontStyle: 'oblique',
                    color: 'text.1'
                }
            },
            button: {
                svg: {
                    ['path, g']: {
                        fill: 'text.1'
                    }
                }
            }
        },
        danger: {
            borderBottom: 1,
            borderColor: 'danger.1',
            bg: 'danger.0',
            'input, textarea': {
                color: 'danger.1',
                '::placeholder': {
                    color: 'danger.1'
                }
            },
            button: {
                svg: {
                    ['path, g']: {
                        fill: 'danger.1'
                    }
                }
            }
        }
    }
};

const ElementInput = styled.input(compose(layout, space));

const Input = styled(Flex)(
    css({
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 7,
        px: 4,
        button: {
            svg: {
                width: '2.5rem',
                height: '2.5rem'
            }
        },
        'input, textarea': {
            py: 5,
            outline: 'none',
            border: 'none',
            fontFamily: 'body',
            fontSize: 'base',
            width: '100%',
            fontWeight: 'regular',
            bg: 'transparent'
        }
    }),
    variant({ variants: inpVariants })
);

const TextField = (
    {
        iconBefore: IconBefore,
        before,
        after,
        iconAfter: IconAfter,
        width,
        onIconClickAfter,
        onIconClickBefore,
        variant = 'primary.normal',
        label,
        labelicon: IconLabel = Broken.ArrowRight,
        hasIconLabel,
        ...rest
    },
    ref
) => {
    const handleIconBefore = (eve) => {
        eve.preventDefault();
        return onIconClickBefore?.();
    };

    const handleIconAfter = (eve) => {
        eve.preventDefault();
        return onIconClickAfter?.();
    };

    const theme = useTheme();

    return (
        <View width={width} ref={ref}>
            {label && (
                <Flex as="label" alignItems="center">
                    <Text as="span" color="text.3" fontSize="ms" fontWeight="semibold" mr="2">
                        {label}
                    </Text>
                    {hasIconLabel && (
                        <IconLabel size="2rem" stroke={theme.colors.text[3]} strokeWidth="2" />
                    )}
                </Flex>
            )}
            <Input variant={variant} {...(label && { mt: 4 })}>
                {before && (
                    <Button
                        onClick={handleIconBefore}
                        p="0"
                        variant="transparent.normal"
                        minWidth="max-content"
                    >
                        <IconBefore />
                    </Button>
                )}
                <Field
                    as={ElementInput}
                    autoComplete="new-password"
                    ml={before ? '5' : ''}
                    mr={after ? '5' : ''}
                    {...rest}
                />
                {after && (
                    <Button
                        onClick={handleIconAfter}
                        p="0"
                        variant="transparent.normal"
                        minWidth="max-content"
                    >
                        <IconAfter />
                    </Button>
                )}
            </Input>
            <ErrorMessage
                name={rest.name}
                component={Text}
                ml={4}
                mt={3}
                color={'danger.3'}
                fontSize="1.2rem"
            />
        </View>
    );
};

export default forwardRef(TextField);
