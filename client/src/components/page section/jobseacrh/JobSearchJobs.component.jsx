import JobPageJobCards from 'components/elements/JobPageJobCards.component';
import { Button, Dropdown, Flex, StackVertical, Text, View } from 'components/index';
import { FilterContext } from 'context';
import React, { useContext, useEffect } from 'react';

const JobSearchJobs = ({ jobs }) => {
    const { dispatchJobFilter } = useContext(FilterContext);

    let rangedJobs = dispatchJobFilter(jobs);

    return (
        <View width={[8 / 10]}>
            <Flex alignItems="center" justifyContent="space-between" pb={6} position="sticky">
                <Text as="span" fontSize="ms" color="text.1">
                    Showing {jobs.length} results
                </Text>
                <Flex alignItems="center">
                    <Text as="span" color="text.1">
                        {' '}
                        Sort by : &nbsp;
                    </Text>
                    <Dropdown
                        btncolor="text.3"
                        data={[
                            {
                                id: 1,
                                value: 'Anonymously',
                                disabled: false
                            },
                            {
                                id: 2,
                                value: 'Newest Post',
                                disabled: false
                            },
                            {
                                id: 3,
                                value: 'Oldest Post',
                                disabled: false
                            }
                        ]}
                    />
                </Flex>
            </Flex>
            <StackVertical gap={7} height="100vh" overflowY="scroll" borderRadius={6}>
                {rangedJobs?.map(({ _id, company, roleInfo, tags, createdAt }) => (
                    <JobPageJobCards
                        key={_id}
                        id={_id}
                        {...company}
                        {...roleInfo}
                        tags={tags}
                        createdAt={createdAt}
                    />
                ))}
            </StackVertical>
        </View>
    );
};

export default JobSearchJobs;
