import { Flex, Heading, Text, View } from 'components/index'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import http from 'utils/http';

const Company = () => {

    const { company } = useParams();

    console.log(company)

    const [ data, setData ] = useState();

    useEffect(() => {

        (async() => {
            try{
                const { data, status } = await http.get(`/companies/${company}`);
                if(status === 200) setData(data.data);
            }
            catch(err){
                console.log(err.response);
            }
        })()
    },[])

    console.log(data)

    return (
       <View>
          <View
            py={10}  
            backgroundSize="cover"    
            backgroundPosition="center" 
            backgroundImage={`URL("/gradients/2.jpg")`}>
            <Flex maxWidth="desktop" m="0 auto" justifyContent="space-between"  position="relative">
                    <Heading level={1} maxWidth="l">
                        {data?.tagline}
                    </Heading>
                    <Text maxWidth="l" position="absolute" bottom="0" right="0">
                        {data?.info}
                    </Text>
            </Flex>
          </View>
       </View>
    )
}

export default Company
