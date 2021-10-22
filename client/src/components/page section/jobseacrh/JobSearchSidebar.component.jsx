import { CheckboxGroup, Flex, Heading, StackVertical, Text, View } from 'components/index';
import React, { useContext } from 'react';
import { useTheme } from 'styled-components';
import { Range } from 'react-range';
import Button from 'components/library/Button.component';
import { FilterContext } from 'context';

const JobSearchSidebar = () => {
    const theme = useTheme();

    const { range, onRangeChange, experience, setExperience, jobType, setJobType, dept, setDept } =
        useContext(FilterContext);

    return (
        <StackVertical width={[2 / 10]} gap={9} overflowY="scroll" px={4} as="aside">
            <View>
                <Heading level={5} mb={6}>
                    Job Type
                </Heading>
                <CheckboxGroup
                    uncheckedBg={theme.colors.blue[1]}
                    checkedBg={theme.colors.blue[6]}
                    color={theme.colors.blue[1]}
                    size="2.3rem"
                    gap={6}
                    data={jobType.data}
                    setCheckedValue={setJobType}
                />
            </View>
            <StackVertical gap={6}>
                <Heading level={5}>Salary</Heading>
                <Flex justifyContent="space-between">
                    <Text as="span" color="text.1">
                        ${range[0]}
                    </Text>
                    <Text as="span" color="text.1">
                        ${range[1]}
                    </Text>
                </Flex>
                <View>
                    <Range
                        step={0.1}
                        min={200}
                        max={300000}
                        values={range}
                        onChange={onRangeChange}
                        renderTrack={({ props, children }) => (
                            <div
                                {...props}
                                style={{
                                    ...props.style,
                                    height: '0.3rem',
                                    width: '100%',
                                    backgroundColor: theme.colors.blue[4],
                                    borderRadius: '50rem',
                                    zIndex: 1400
                                }}
                            >
                                {children}
                            </div>
                        )}
                        renderThumb={({ props, value }) => (
                            <div
                                {...props}
                                style={{
                                    ...props.style,
                                    height: '2.3rem',
                                    width: '2.3rem',
                                    backgroundColor: theme.colors.blue[6],
                                    border: `0.6rem solid ${theme.colors.blue[1]}`,
                                    boxShadow: `0px 8px 15px ${theme.colors.blue[6]}40`,
                                    borderRadius: '50%',
                                    outline: 'none',
                                    zIndex: 1400
                                }}
                            />
                        )}
                    />
                </View>
            </StackVertical>
            <View>
                <Heading level={5} mb={6}>
                    Experience level
                </Heading>
                <CheckboxGroup
                    uncheckedBg={theme.colors.blue[1]}
                    checkedBg={theme.colors.blue[6]}
                    color={theme.colors.blue[1]}
                    size="2.3rem"
                    gap={6}
                    data={experience.data}
                    setCheckedValue={setExperience}
                />
            </View>
            <View>
                <Heading level={5} mb={6}>
                    Department
                </Heading>
                <CheckboxGroup
                    uncheckedBg={theme.colors.blue[1]}
                    checkedBg={theme.colors.blue[6]}
                    color={theme.colors.blue[1]}
                    size="2.3rem"
                    gap={6}
                    data={dept.data}
                    setCheckedValue={setDept}
                />
            </View>
            <View>
                <Button width="100%">Apply filters</Button>
                <Button variant="transparent.normal" m="0 auto" mt={5}>
                    Reset all filters
                </Button>
            </View>
        </StackVertical>
    );
};

export default JobSearchSidebar;
