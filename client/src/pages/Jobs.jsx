import { Stack, View } from 'components/index'
import JobSearchSidebar from 'components/page section/jobseacrh/JobSearchSidebar.component'
import JobSearchHeader from 'components/page section/jobseacrh/JobSearchHeader.component'
import JobSearchJobs from 'components/page section/jobseacrh/JobSearchJobs.component'
import React, { useEffect, useState } from 'react'
import http from 'utils/http'

const Jobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        (async() => {
            const { data, status, headers } = await http.get('/jobs');
            console.log(headers);
            if (status === 200) setJobs(data.data);
        })()
    },[])

    return (
       <View maxWidth="desktop" m="0 auto">
           <JobSearchHeader />
            <Stack py={12} gap={10}>
                <JobSearchSidebar />
                <JobSearchJobs jobs={jobs}/>
            </Stack>
       </View>
    )
}

export default Jobs
