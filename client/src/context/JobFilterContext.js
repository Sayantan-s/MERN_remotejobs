import React, { createContext, useState } from 'react'

export const FilterContext = createContext();

const JobFilterContext = ({ children }) => {

    const [ range, setRange ] = useState([40000, 200000]);

    const [ jobType, setJobType ] = useState({
        data : [
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
        ],
        checkedValues : []
    })

    const [ experience, setExperience ] = useState({
        data : [
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
        ],
        checkedValues : []
    })

    const [ dept, setDept ] = useState({
        data : [
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
        ],
        checkedValues : []
    })
    
    const filterJobsController = jobs => {
        const [ min, max ] = range;
        return jobs.filter(job => job.roleInfo.salary.max > min || job.roleInfo.salary.max > max)
    }

    return (
        <FilterContext.Provider value={{
            range,
            onRangeChange : val => setRange(val),
            experience, setExperience,
            jobType, setJobType,
            dept, setDept,
            dispatchJobFilter : jobs => filterJobsController(jobs)
         }}>
            { children }
        </FilterContext.Provider>
    )
}

export default JobFilterContext