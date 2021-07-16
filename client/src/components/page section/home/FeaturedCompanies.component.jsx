import { Box, Typography, Link } from 'components'
import React from 'react'

const FeaturedCompanies = () => {
    return (
        <Box>
            <Box flex>
                <Typography as="h4">
                    Featured companies
                </Typography>
                <Link to="/companies">
                    <span>
                        See all companies
                    </span>
                </Link>
            </Box>
        </Box>
    )
}

export default FeaturedCompanies
