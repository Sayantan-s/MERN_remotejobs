import { CheckboxGroup, Heading, StackVertical, View } from 'components/index'
import React from 'react'
import { useTheme } from 'styled-components'

const JobSearchSidebar = () => {

    const theme = useTheme(); 

    return (
        <StackVertical width={[2/10]} gap={10} >
            <View>
                <Heading level={5} mb={7}>
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
            <View>
                <Heading level={5}>
                    Salary
                </Heading>
                <View>
                </View>
            </View>
            <View>
                <Heading level={5} mb={7}>
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
          
        </StackVertical>
    )
}

export default JobSearchSidebar
