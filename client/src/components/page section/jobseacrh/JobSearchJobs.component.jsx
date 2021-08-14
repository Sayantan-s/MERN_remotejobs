import JobPageJobCards from 'components/elements/JobPageJobCards.component'
import { Button, Flex, StackVertical, Text, View } from 'components/index'
import React from 'react'

const JobSearchJobs = ({ jobs }) => {

    console.log(jobs)

    return (
       <View width={[8/10]}>
           <Flex  alignItems="center" justifyContent="space-between" position="sticky">
                <Text as="span" fontSize="ms">
                    Showing {jobs.length} results
                </Text>
                <Button variant="transparent.normal" color="text.1">
                    Sort by
                </Button>
           </Flex>
           <StackVertical gap={7} overflowY="scroll" mt={6}>
            {
                jobs?.map(({ _id, company, roleInfo, tags, createdAt }) => <JobPageJobCards key={_id} {...company} {...roleInfo} tags={tags} createdAt={createdAt} />)
            }
           </StackVertical>
       </View>
    )
}

export default JobSearchJobs
