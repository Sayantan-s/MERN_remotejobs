import { Flex, Heading, Image, Link, Text, View } from 'components/index'
import React from 'react'
import styled, { useTheme } from 'styled-components'
import Utilities from 'utils/Utilties'

const CompanyIntro = styled(Text)`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical;
`

const SimilarJobCard = ({ logo, role, roleOverview, jobtype, location, salary, id, name }) => {
  
    const theme = useTheme();

    return (
       <View p={6} boxShadow={`0px 15px 20px ${theme.colors.blue[2]}30`} borderRadius={5}>
           <Image.Thumbnail  src={logo} alt="logo_company" thumbheight="40" thumbWidth="40"/> 
           <Heading level={5} mt={5}>
               {role}
           </Heading>
           <View mt={4} color="text.1">
                { jobtype } &middot; { location }
           </View>
           <CompanyIntro mt={5} color="text.1">
               {roleOverview}
           </CompanyIntro>
           <Flex mt={6} alignItems="center" justifyContent="space-between">
               <Text as="span" color="text.4" fontWeight="bold">
                    ${Utilities.salaryMeter(salary.min)}k-${Utilities.salaryMeter(salary.max)}k
               </Text>
               <Link to={`/jobs/${name}_${id}`}>
                    Read More
               </Link>
           </Flex>
       </View>
    )
}

export default SimilarJobCard
