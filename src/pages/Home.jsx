import React from 'react'
import styled from 'styled-components';

const Home = () => {
    return (
       <Container>
          <Header>
            <Typography as={'h1'} className="header_text">
                Get the <span className="header_text--highlight">right job</span> <br/> you deserve
            </Typography>
            <Typography as={'pre'} className="header_subtext">
                    1,80,570 job listed here! Your dream job is waiting 
            </Typography>
            <JobSearch />
          </Header>
          <FeaturedCompanies />
       </Container>
    )
}

export default Home