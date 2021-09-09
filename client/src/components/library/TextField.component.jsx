import css from '@styled-system/css'
import { Button, Flex, Text, View } from 'components/index'
import React from 'react'
import styled from 'styled-components'
import { compose, layout, space, variant } from 'styled-system'

const variants = {
    normal : {
        borderColor : 'text.0',
        'input, textarea' : {
            color : 'text.2',
            '::placeholder' : {
                color : 'text.1' 
            }
        },
        'button' : {
            'svg': {
                'g':{
                    fill : 'text.1'
                }
            }
        }
    },
    danger : {
        borderColor : 'danger.1',
        bg: 'danger.0',
        'input, textarea' : {
            color : 'danger.1',
            '::placeholder' : {
                color : 'danger.1' 
            }
        },
        'button' : {
            'svg': {
                'g':{
                    fill : 'danger.1'
                }
            }
        }
    },
}

const ElementInput = styled('input')(compose(layout, space))

const Input = styled(Flex)(css(
    {
        alignItems: "center",
        alignContent: "center",
        border : 1,
        borderRadius : 7,
        px : 4,
        'button': {
            'svg': {
                width: '2.5rem',
                height : '2.5rem'
            }
        },
        'input, textarea' :   {
            py : 5,
            outline: 'none',
            border: 'none',
            fontFamily : 'body',
            fontSize : 'base',
            width: '100%',
            fontWeight: 'regular',
            bg: 'transparent'
        }
    }),
    variant({ variants })
)

const TextField = ({ iconBefore : IconBefore, before, after, as, iconAfter: IconAfter, width, simpleInput,onIconClickAfter,onIconClickBefore, danger, variant,  ...rest  }) => {
    const handleIconBefore = eve => {
        eve.preventDefault()
        onIconClickBefore();
    }

    const handleIconAfter = eve => {
        eve.preventDefault()
        onIconClickAfter();
    }
    return (
        <View width={width}>
            <Input variant={variant}>
                { before && 
                    <Button onClick={handleIconBefore} p="0" variant="transparent.normal" minWidth="max-content">
                        <IconBefore />
                    </Button>
                }
                <ElementInput 
                    ml={before ? '5' : ''}
                    mr={after ? '5' : ''}
                    {...rest}
                />
                { after && 
                    <Button onClick={handleIconAfter}  p="0" variant="transparent.normal" minWidth="max-content">
                       <IconAfter />
                    </Button>
                }
            </Input>
           {danger && <Text ml={4} mt={3} color={'danger.3'} fontSize="1.2rem">{danger}</Text>}
        </View>
    )
}

export default TextField
