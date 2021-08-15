import JobPageJobCards from 'components/elements/JobPageJobCards.component'
import { Button, Dropdown, Flex, StackVertical, Text, View } from 'components/index'
import React from 'react'

const JobSearchJobs = ({ jobs }) => {

    console.log(jobs)

    return (
       <View width={[8/10]}>
           <Flex  alignItems="center" justifyContent="space-between" pb={6} position="sticky">
                <Text as="span" fontSize="ms" color="text.1">
                    Showing {jobs.length} results
                </Text>
                <Flex alignItems="center">
                    <Text as="span" color="text.1" fontSize="ms">  Sort by : &nbsp;</Text>
                    <Dropdown btncolor="text.3"/>
                </Flex>
           </Flex>
           <StackVertical gap={7} height="100vh" overflowY="scroll" borderRadius={6}>
                {
                    jobs?.map(({ _id, company, roleInfo, tags, createdAt }) => <JobPageJobCards key={_id} {...company} {...roleInfo} tags={tags} createdAt={createdAt} />)
                }
           </StackVertical>
       </View>
    )
}

export default JobSearchJobs
