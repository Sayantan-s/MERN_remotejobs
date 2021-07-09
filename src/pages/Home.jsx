import { Box, Typography, JobSearch } from 'components'
import FeaturedCompanies from 'components/page section/home/FeaturedCompanies.component';
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

const Container = styled(Box)`
`
const Header = styled(Box)`
min-height: 55vh;
display: flex;
justify-content: center;
flex-direction: column;
text-align: center;
.header{
    &_text{
        text-align: center;
        &--highlight{
            color : ${props => props.theme.color.blue['600']}
        }
    }
    &_subtext{
        margin-top : 3rem;
    }
}
`