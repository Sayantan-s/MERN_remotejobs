import { View } from 'components/index'
import JobSeacrhSidebar from 'components/page section/jobseacrh/JobSeacrhSidebar.component'
import JobSearchHeader from 'components/page section/jobseacrh/JobSearchHeader.component'
import JobSearchJobs from 'components/page section/jobseacrh/JobSearchJobs.component'
import React from 'react'

const Jobs = () => {
    return (
       <View maxWidth="desktop" m="0 auto">
           <JobSearchHeader />
           <JobSeacrhSidebar />
           <JobSearchJobs />
       </View>
    )
}

export default Jobs
