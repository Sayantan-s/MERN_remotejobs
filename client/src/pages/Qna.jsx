import React, { useContext, useState } from 'react'
import { Page, View, Text, Button, Flex } from 'components'
import { QuesAns } from 'components/elements'
import { NavContext } from 'context'
import data from '../mockdata.json'

const Qna = () => {

   const { height } = useContext(NavContext)

   const [qid ,setId] = useState(0);

   console.log(data.data.length)

   const nextQuestion = _ => {
      if(qid > data.data.length - 2){
         return;
      }
      setId(prevId => prevId + 1);
   }

   return (
       <Page display="flex" alignItems="center" justifyContent="center" cuttSpace={height}>
          <Flex>
                <Text fontSize="xl" color="text.1">0{qid + 1}</Text>
                <View ml="6">
                    <View>
                        {
                           data.data.map((qna,id) => (
                              id === qid  && <QuesAns {...qna} />
                           ))
                        }
                        <Button size="5rem" onClick={nextQuestion}>
                            <svg width="2.5rem" height="2.5rem" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <title>Iconly/Curved/Arrow - Right 2</title>
                                <g id="Iconly/Curved/Arrow---Right-2" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                                    <g id="Arrow---Right-2" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000) translate(5.000000, 8.500000)" stroke="#fff" strokeWidth="2">
                                    <path d="M14,0 C14,0 9.856,7 7,7 C4.145,7 0,0 0,0" id="Stroke-1" />
                                    </g>
                                </g>
                            </svg>
                        </Button>
                    </View>
                </View>
            </Flex>
       </Page>
    )
}

export default Qna
