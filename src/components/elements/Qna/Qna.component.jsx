import { Typography as Question } from 'components'
import React from 'react'

const Qna = ({ question, answerType, answer }) => {

    let ele;

    switch (answerType){
        case 'Explain the following':
            ele = '';
        case 'Mcq':
            ele = '';
        case 'Choose only one':
            ele = '';
    }
    

    return (
        <Box>
            <Question>
                {question || "What do you understand by Virtual DOM? Explain its working?"}
            </Question>
            
        </Box>
    )
}

export default Qna
