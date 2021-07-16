import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

const Radio = ({ options, value }) => {
  let [val, setValue] = useState(value)

  if(!Array.isArray(options)){
        throw new Error("options prop needs to be an array!");
  }

  return (
    <RadioGroup value={val} onChange={setValue}>
        {
            options.map(option => (
                <RadioGroup.Option value={option}>
                    {({ checked }) => (
                        <span className={checked ? 'bg-blue-200' : ''}>{option}</span>
                    )}
                </RadioGroup.Option>
            ))
        }
    </RadioGroup>
  )
}

export { Radio }