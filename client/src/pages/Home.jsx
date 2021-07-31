import { View } from 'components';
import CTA from 'components/page section/home/CTA.component.jsx';
import FeaturedCompanies from 'components/page section/home/FeaturedCompanies.component';
import RecentPositions from 'components/page section/home/RecentPositions.component';
import SponseredCompanies from 'components/page section/home/SponseredCompanies.component';
import React from 'react'

const Home = () => {
    return (
      <View>
         <CTA />
         <FeaturedCompanies />
         <SponseredCompanies />
         <RecentPositions />
      </View>
    )
}

export default Home