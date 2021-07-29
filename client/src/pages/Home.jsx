import { View } from 'components';
import CTA from 'components/page section/home/CTA.component.jsx';
import FeaturedCompanies from 'components/page section/home/FeaturedCompanies.component';
import React from 'react'

const Home = () => {
    return (
      <View>
         <CTA />
         <FeaturedCompanies />
      </View>
    )
}

export default Home