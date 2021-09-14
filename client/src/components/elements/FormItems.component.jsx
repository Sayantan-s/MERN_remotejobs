import { forwardRef, useEffect, useRef, useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { Text, View, Flex, Button } from 'components';
import styled, { useTheme } from 'styled-components';
import css from '@styled-system/css';
import { compose, layout, space } from 'styled-system';
import { useToggle } from 'hooks';
import { StackVertical } from 'components/index';

const Radio = ({ options, value, uncheckedBg, checkedBg, size, ...rest }) => {
    let [val, setValue] = useState(value);

    const theme = useTheme();

    if (!Array.isArray(options)) {
        throw new Error('options prop needs to be an array!');
    }

    const Option = styled(Flex)({
        cursor: 'pointer'
    });

    return (
        <RadioGroup value={val} onChange={setValue} {...rest}>
            {options.map((option, key) => (
                <View
                    as={RadioGroup.Option}
                    value={option}
                    key={key}
                    my={5}
                    border="borders.1"
                    borderColor="blue.4"
                >
                    {({ checked }) => (
                        <Option alignItems="center">
                            <View size={30}>
                                <svg
                                    width={size}
                                    height={size}
                                    viewBox="0 0 24 24"
                                    fill={checked ? checkedBg : uncheckedBg}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85"
                                        stroke={checkedBg}
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                   { checked && <>
                                    <path
                                        d="M15 10.38L16.12 9.25"
                                        stroke={checked ? uncheckedBg : checkedBg}
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M7.88086 12L10.6209 14.75L13.1709 12.21"
                                        stroke={checked ? uncheckedBg : checkedBg}
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                   </> }
                                </svg>
                            </View>
                            <Text ml={4} fontSize={'l'}>
                                {option}
                            </Text>
                        </Option>
                    )}
                </View>
            ))}
        </RadioGroup>
    );
};

//INPUT

const ElementInput = styled('input')(
    css({
        py: 5,
        outline: 'none',
        border: 'none',
        fontFamily: 'body',
        fontSize: 'base',
        width: '100%',
        color: 'text.2',
        fontWeight: 'regular',
        bg: 'transparent',
        '::placeholder': {
            color: 'text.1'
        }
    }),
    compose(layout, space)
);

const Input = ({
    iconBefore: IconBefore,
    before,
    after,
    as,
    iconAfter: IconAfter,
    width,
    simpleInput,
    onIconClickAfter,
    onIconClickBefore,
    danger,
    ...rest
}) => {
    const handleIconBefore = (eve) => {
        eve.preventDefault();
        onIconClickBefore();
    };

    const handleIconAfter = (eve) => {
        eve.preventDefault();
        onIconClickAfter();
    };

    return (
        <View width={width}>
            <Flex
                alignItems="center"
                alignContent="center"
                {...(!simpleInput && { border: '1', borderColor: danger ? 'danger.1' : 'text.0' })}
                {...(danger && { bg: 'danger.0' })}
                borderRadius={7}
                px="4"
            >
                {before && (
                    <Button
                        onClick={handleIconBefore}
                        p="0"
                        variant="transparent.normal"
                        minWidth="max-content"
                    >
                        {IconBefore}
                    </Button>
                )}
                <ElementInput ml={before ? '5' : ''} mr={after ? '5' : ''} {...rest} />
                {after && (
                    <Button
                        onClick={handleIconAfter}
                        p="0"
                        variant="transparent.normal"
                        minWidth="max-content"
                    >
                        {IconAfter}
                    </Button>
                )}
            </Flex>
            {danger && (
                <Text ml={4} mt={3} color={'danger.3'} fontSize="1.3rem">
                    {danger}
                </Text>
            )}
        </View>
    );
};

const StyledCheckBox = styled(Flex)(
    css({
        cursor: 'pointer',
        maxWidth: 'max-content'
    })
);

const Checkbox = forwardRef(
    ({ checkedBg, uncheckedBg, size, name, value, textColor, isOption, getValue }, ref) => {
        let checkboxRef = useRef(null);

        const [toggle, handleToggle] = useToggle();

        useEffect(() => {
            checkboxRef.checked = toggle;
            getValue((prevState) => ({
                ...prevState,
                checkedValues: toggle
                    ? prevState.checkedValues.concat(checkboxRef.value)
                    : prevState.checkedValues.filter((val) => val !== value)
            }));
        }, [handleToggle]);

        return (
            <StyledCheckBox alignItems="center" onClick={handleToggle} ref={ref}>
                <Flex alignItems="center">
                    {isOption ? (
                        <svg
                            width={size}
                            height={size}
                            viewBox="0 0 24 24"
                            fill={toggle ? checkedBg : uncheckedBg}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85"
                                stroke={toggle ? checkedBg : uncheckedBg}
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M15 10.38L16.12 9.25"
                                stroke={toggle ? uncheckedBg : checkedBg}
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M7.88086 12L10.6209 14.75L13.1709 12.21"
                                stroke={toggle ? uncheckedBg : checkedBg}
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    ) : (
                        <svg
                            width={size}
                            height={size}
                            viewBox="0 0 24 24"
                            fill={toggle ? checkedBg : 'none'}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 12.96V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
                                stroke={toggle ? checkedBg : uncheckedBg}
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            {toggle && (
                                <>
                                    <path
                                        d="M15 10.38L16.12 9.25"
                                        stroke={uncheckedBg}
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M7.88086 12L10.6209 14.75L13.1709 12.21"
                                        stroke={uncheckedBg}
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </>
                            )}
                        </svg>
                    )}
                </Flex>
                <Text as="span" ml={4} color={textColor}>
                    {name}
                </Text>
                <input
                    type="checkbox"
                    id="vehicle1"
                    name={name}
                    value={toggle ? value : ''}
                    ref={(ele) => (checkboxRef = ele)}
                    style={{ display: 'none' }}
                />
            </StyledCheckBox>
        );
    }
);

const CheckboxGroup = ({
    checkedBg,
    uncheckedBg,
    color,
    size,
    gap,
    data,
    textColor,
    isOption,
    setCheckedValue
}) => {
    return (
        <StackVertical gap={gap}>
            {data?.map((inp, id) => (
                <Checkbox
                    key={id}
                    checkedBg={checkedBg}
                    uncheckedBg={uncheckedBg}
                    color={color}
                    size={size}
                    textColor={textColor}
                    isOption={isOption}
                    getValue={setCheckedValue}
                    {...inp}
                />
            ))}
        </StackVertical>
    );
};

export { Radio, Checkbox, Input, CheckboxGroup };
