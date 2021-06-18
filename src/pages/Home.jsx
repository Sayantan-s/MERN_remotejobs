import { Box, Typography } from 'components'
import React from 'react'
import styled from 'styled-components';
import { color } from 'styled-system';

const Home = () => {
    return (
       <Box as={"section"}>
          <Typography as={'h1'} backgroundColor="red">
              Get the right job <br/> you deserve
          </Typography>
       </Box>
    )
}

export default Home

const Text = styled(Typography)`
${color}
`