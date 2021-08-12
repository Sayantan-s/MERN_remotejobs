import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { Text, View, Flex, Button } from 'components';
import styled, { useTheme } from 'styled-components';
import css from '@styled-system/css';
import { compose, layout, space, variant, border, color } from 'styled-system';

const Radio = ({ options, value, ...rest }) => {
  let [val, setValue] = useState(value)

  const theme = useTheme();

  if(!Array.isArray(options)){
        throw new Error("options prop needs to be an array!");
  }

  const Option = styled(Flex)({
      cursor: 'pointer'
  })

  return (
    <RadioGroup value={val} onChange={setValue} {...rest}>
        {
            options.map((option, key) => (
                <View as={RadioGroup.Option} value={option} key={key} my={5} border="borders.1" borderColor='blue.4'>
                    {({ checked }) => (
                       <Option alignItems="center">
                            <View size={30}>
                            <svg id="visual" viewBox="0 0 24 24" width={36} height={36} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
                                <g transform="translate(11.572985150758472 11.909436947096392)">
                                    <path d="M8.4 -4.8C9.8 -2.3 9.2 1.3 7.5 4.1C5.8 6.8 2.9 8.7 0 8.7C-2.9 8.7 -5.8 6.8 -7.2 4.3C-8.7 1.7 -8.7 -1.7 -7.2 -4.2C-5.8 -6.7 -2.9 -8.3 0.3 -8.5C3.5 -8.7 6.9 -7.3 8.4 -4.8" fill={checked ? theme.colors.blue[4] : 'none'} stroke={theme.colors.blue[2]} strokeWidth={2} />
                                </g>
                            </svg>
                            </View>
                            <Text ml={4} fontSize={'l'}>{option}</Text>
                       </Option>
                    )}
                </View>
            ))
        }
    </RadioGroup>
  )
}


//INPUT

const ElementInput = styled('input')(css(
    {
        py : 5,
        outline: 'none',
        border: 'none',
        fontFamily : 'body',
        fontSize : 'base',
        width: '100%',
        color: 'text.2',
        fontWeight: 'regular',
        bg: 'transparent',
        '::placeholder' : {
            color : 'text.1' 
        }
    }),
    compose(layout, space)
    )

const Input = ({ iconBefore : IconBefore, before, after, as, iconAfter: IconAfter, width, simpleInput,onIconClickAfter,onIconClickBefore, danger,  ...rest }) => {

    const handleIconBefore = eve => {
        eve.preventDefault()
        onIconClickBefore();
    }

    const handleIconAfter = eve => {
        eve.preventDefault()
        onIconClickAfter();
    }
 
    return(
        <View width={width}>
            <Flex alignItems="center" alignContent="center" {...( !simpleInput && {border:"1", borderColor: danger ? 'danger.1' : "text.0" } )} 
                {...( danger && { bg : 'danger.0' } )} borderRadius={7} px="4">
                {before && <Button onClick={handleIconBefore} p="0" variant="transparent.normal" minWidth="max-content">{IconBefore}</Button>}
                <ElementInput 
                    ml={before ? '5' : ''}
                    mr={after ? '5' : ''}
                    {...rest}
                />
                {after && <Button onClick={handleIconAfter}  p="0" variant="transparent.normal" minWidth="max-content">{IconAfter}</Button>}
            </Flex>
           {danger && <Text ml={4} mt={3} color={'danger.3'}>{danger}</Text>}
        </View>
    )
}

const CheckBoxGroup = () => {
    const theme = useTheme();
    return (
          <svg viewBox="0 0 24 24" fill="none">
          <circle cx={12} cy={12} r={12} fill={theme.colors.blue[1]} />
          {
              1 && <path
              d="M7 13l3 3 7-7"
              stroke={theme.colors.blue[4]}
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              />
          }
      </svg>
    )
}

export { Radio, CheckBoxGroup, Input }

