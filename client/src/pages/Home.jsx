import { View } from 'components';
import CTA from 'components/page section/home/CTA.component.jsx';
import FeaturedCompanies from 'components/page section/home/FeaturedCompanies.component';
import MidSection from 'components/page section/home/MidSection.component';
import NewsLetter from 'components/page section/home/NewsLetter.component';
import RecentPositions from 'components/page section/home/RecentPositions.component';
import SponseredCompanies from 'components/page section/home/SponseredCompanies.component';
import React from 'react'

const Home = () => {
    return (
      <View>
         <CTA />
         <FeaturedCompanies />
         <MidSection />
         <RecentPositions />
         <SponseredCompanies />
         <NewsLetter />
      </View>
    )
}

export default Home