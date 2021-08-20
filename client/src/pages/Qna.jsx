import React, { useContext, useEffect, useState } from 'react'
import { Page, View, Text, Button, Flex } from 'components'
import { QuesAns } from 'components/elements'
import { NavContext } from 'context'
import { useTheme } from 'styled-components'
import http from 'utils/http'

const Qna = () => {

   const { height } = useContext(NavContext)

   const [qid ,setId] = useState(0);

   const [qnas, setQnas] = useState([]);

   const theme = useTheme();

   const handleTraverse = traverse => {
        switch(traverse){
            case "NEXT":
                if(qid >= qnas.length - 1){
                    return;
                 }
                return setId(prevId => prevId + 1);
            case "PREVIOUS":
                if(qid <= 0){
                    return;
                 }
                return setId(prevId => prevId - 1);
            default : return qid;
        }
   }

   useEffect(() => {
        (async() => {
            const { data } = await http.get('/qna');
            setQnas(() => {
                return data.data.map((q,id) => ({
                    qn_id : id,
                    ...q
                }))
            });
        })()
   },[])

   return (
       <Page display="flex" alignItems="center" justifyContent="center" cuttSpace={height}>
          <Flex>
                <Text fontSize="xl" color="text.1">0{qid + 1}</Text>
                <View ml="6">
                    <View>
                        {
                           qnas?.map(({qn_id,_id,...qna}) => (
                              qn_id === qid  && <QuesAns {...qna} key={_id}/>
                           ))
                        }
                       <Flex ml="6" mt={6}>
                            <Button size="5rem" onClick={() => handleTraverse("PREVIOUS")}>
                                <svg width="2.8rem" height="2.8rem" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <title>Iconly/Broken/Arrow - Left</title>
                                    <g id="Iconly/Broken/Arrow---Left" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        <g id="Arrow---Left" transform="translate(2.500000, 4.000000)" fill={theme.colors.blue[0]} fillRule="nonzero">
                                        <path d="M9.49983393,17 C9.07673708,17 8.7272223,16.6876772 8.67595432,16.2844034 L8.66948082,16.1818182 L8.66948082,-0.181818182 C8.66948082,-0.513454545 8.87208698,-0.811272727 9.18319261,-0.937818182 C9.28504926,-0.979272727 9.39244159,-1 9.49983393,-1 C9.67974377,-1 9.85811592,-0.942424242 10.0041966,-0.831691919 L10.0877239,-0.758909091 L16.7582273,5.84109091 C17.0815114,6.16072727 17.0804043,6.67890909 16.756013,6.99745455 C16.4576394,7.28945455 15.990881,7.31378788 15.6661489,7.06877399 L15.5813401,6.99527273 L10.330187,1.79927273 L10.330187,16.1818182 C10.330187,16.6334545 9.95818885,17 9.49983393,17 Z M3.41865989,6.99538182 C3.09537574,7.31610909 2.56948544,7.31610909 2.24398702,6.99756364 C1.94662834,6.70556364 1.92091815,6.24581364 2.16770922,5.92417475 L2.24177274,5.84010909 L5.92079059,2.20083636 C6.0835398,2.03938182 6.2961102,1.95974545 6.50978773,1.95974545 C6.72125099,1.95974545 6.93271425,2.03938182 7.09546346,2.19865455 C7.39383701,2.49065455 7.41963178,2.94948788 7.17199498,3.27097399 L7.09767774,3.35501818 L3.41865989,6.99538182 Z" transform="translate(9.500000, 8.000000) rotate(-90.000000) translate(-9.500000, -8.000000) " />
                                        </g>
                                    </g>
                                </svg>
                            </Button>
                            <Button size="5rem" onClick={() => handleTraverse("NEXT")} ml="4">
                                <svg width="2.8rem" height="2.8rem" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <title>Iconly/Broken/Arrow - Right</title>
                                    <g id="Iconly/Broken/Arrow---Right" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        <g id="Arrow---Right" transform="translate(3.000000, 4.500000)" fill={theme.colors.blue[0]} fillRule="nonzero">
                                        <path d="M0,7.49983393 C0,7.07673708 0.312322754,6.7272223 0.71559664,6.67595432 L0.818181818,6.66948082 L17.1818182,6.66948082 C17.5134545,6.66948082 17.8112727,6.87208698 17.9378182,7.18319261 C17.9792727,7.28504926 18,7.39244159 18,7.49983393 C18,7.67974377 17.9424242,7.85811592 17.8316919,8.00419656 L17.7589091,8.08772393 L11.1589091,14.7582273 C10.8392727,15.0815114 10.3210909,15.0804043 10.0025455,14.756013 C9.71054545,14.4576394 9.68621212,13.990881 9.93122601,13.6661489 L10.0047273,13.5813401 L15.2007273,8.33018704 L0.818181818,8.33018704 C0.366545455,8.33018704 0,7.95818885 0,7.49983393 Z M10.0046182,1.41865989 C9.68389091,1.09537574 9.68389091,0.569485439 10.0024364,0.243987019 C10.2944364,-0.0533716559 10.7541864,-0.0790818485 11.0758253,0.167709219 L11.1598909,0.241772744 L14.7991636,3.92079059 C14.9606182,4.0835398 15.0402545,4.2961102 15.0402545,4.50978773 C15.0402545,4.72125099 14.9606182,4.93271425 14.8013455,5.09546346 C14.5093455,5.39383701 14.0505121,5.41963178 13.729026,5.17199498 L13.6449818,5.09767774 L10.0046182,1.41865989 Z" />
                                        </g>
                                    </g>
                                </svg>
                            </Button>
                       </Flex>
                    </View>
                </View>
            </Flex>
       </Page>
    )
}

export default Qna
