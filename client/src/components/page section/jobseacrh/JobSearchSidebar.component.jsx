import { CheckboxGroup, Flex, Heading, StackVertical, Text, View } from 'components/index'
import React, { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { Range } from 'react-range';
import Button from 'components/library/Button.component';

const JobSearchSidebar = () => {

    const theme = useTheme(); 

    const [ range, setRange ] = useState([40000, 200000]);

    return (
        <StackVertical width={[2/10]} gap={9} overflowY="scroll" >
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
                    data={[
                        {
                            name : 'Full Time Job',
                            value : 'Full Time'
                        },
                        {
                            name : 'Part Time Job',
                            value : 'Part Time'
                        },
                        {
                            name : 'Internship Job',
                            value : 'Internship'
                        },
                        {
                            name : 'Remote Job',
                            value : 'Remote'
                        },
                        {
                            name : 'Contract',
                            value : 'Contract'
                        }
                    ]}
                />
            </View>
            <StackVertical gap={6}>
                <Heading level={5}>
                    Salary
                </Heading>
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
                        onChange={(values) => setRange(values)}
                        renderTrack={({ props, children }) => (
                            <div
                              {...props}
                              style={{
                                ...props.style,
                                height: '0.3rem',
                                width: '100%',
                                backgroundColor: theme.colors.blue[4],
                                borderRadius : '50rem'
                              }}
                            >
                              {children}
                            </div>
                          )}

                          renderThumb={({ props,value }) => (
                            <div
                              {...props}
                              style={{
                                ...props.style,
                                height: '2.3rem',
                                width: '2.3rem',
                                backgroundColor: theme.colors.blue[6],
                                border : `0.6rem solid ${theme.colors.blue[1]}`, 
                                boxShadow : `0px 8px 15px ${theme.colors.blue[6]}40`,
                                borderRadius : '50%',
                                outline: 'none'
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
                    data={[
                        {
                            name : 'Entry/Junior',
                            value : 'Entry'
                        },
                        {
                            name : 'Middle',
                            value : 'Middle'
                        },
                        {
                            name : 'Senior',
                            value : 'Senior'
                        }
                    ]}
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
                    data={[
                        {
                            name : 'Technology',
                            value : 'technology'
                        },
                        {
                            name : 'Design',
                            value : 'design'
                        },
                        {
                            name : 'Sales & Marketing',
                            value : 'sales'
                        }
                    ]}
                />
            </View>
            <View>
                <Button width="100%">
                    Apply filters
                </Button>
                <Button variant="transparent.normal" m="0 auto" mt={5}>
                    Reset all filters
                </Button>
            </View>
        </StackVertical>
    )
}

export default JobSearchSidebar
