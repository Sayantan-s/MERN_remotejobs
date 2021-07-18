import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { Text, View, Flex } from 'components';
import styled, { useTheme } from 'styled-components';

const Radio = ({ options, value }) => {
  let [val, setValue] = useState(value)

  const theme = useTheme();

  if(!Array.isArray(options)){
        throw new Error("options prop needs to be an array!");
  }

  const Option = styled(Flex)({
      cursor: 'pointer'
  })

  return (
    <RadioGroup value={val} onChange={setValue}>
        {
            options.map((option, key) => (
                <View as={RadioGroup.Option} value={option} key={key} my={5} border="borders.1" borderColor='blue.4'>
                    {({ checked }) => (
                       <Option alignItems="center">
                            <View size={30}>
                                <svg viewBox="0 0 24 24" fill="none">
                                    <circle cx={12} cy={12} r={12} fill={theme.colors.blue[1]} />
                                    {
                                        checked && <path
                                        d="M7 13l3 3 7-7"
                                        stroke={theme.colors.blue[5]}
                                        strokeWidth={1.5}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        />
                                    }
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

export { Radio }

