import { Typography as Question } from 'components'
import React from 'react'

const Qna = ({ question, answerType }) => {

    let answer;

    switch (answerType){
        case 'Explain the following':
            answer = '';
        case 'Mcq':
            answer = '';
        case 'Choose only one':
            answer = '';
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
