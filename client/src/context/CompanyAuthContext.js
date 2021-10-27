import React, { createContext, useState } from 'react'

export const CompanyContext = createContext();

const CompanyAuthContext = ({ children }) => {

    const [companyData, setCompanyData] = useState({
        logo: '',
        name: '',
        email: '',
        tagline: '',
        typeOfCorporation: '',
        info: '',
        size: {
            minSize: 0,
            maxSize: 0
        },
        website: '',
        raised: 0,
        established: 0,
        address: '',
        culture: {
            youtube: '',
            videoThumbnail: ''
        }
    });

    return (
       <CompanyContext.Provider value={{ companyData, setCompanyData }}>
           {children}
       </CompanyContext.Provider>
    )
}

export default CompanyAuthContext
