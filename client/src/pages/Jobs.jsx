import { Flex, View } from 'components/index'
import JobSearchSidebar from 'components/page section/jobseacrh/JobSearchSidebar.component'
import JobSearchHeader from 'components/page section/jobseacrh/JobSearchHeader.component'
import JobSearchJobs from 'components/page section/jobseacrh/JobSearchJobs.component'
import React, { useEffect, useState } from 'react'
import http from 'utils/http'

const Jobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        (async() => {
            const { data, status } = await http.get('/jobs');
            if (status === 200) setJobs(data.data);
        })()
    },[])

    return (
       <View maxWidth="desktop" m="0 auto">
           <JobSearchHeader />
            <Flex py={12}>
                <JobSearchSidebar />
                <JobSearchJobs jobs={jobs}/>
            </Flex>
       </View>
    )
}

export default Jobs
