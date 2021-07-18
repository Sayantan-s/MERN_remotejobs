import React, { useContext } from 'react'
import { Page } from 'components'
import { QuesAns } from 'components/elements'
import { NavContext } from 'context'

const Qna = () => {

   const { height } = useContext(NavContext)

    return (
       <Page display="flex" alignItems="center" justifyContent="center" cuttSpace={height}>
          <QuesAns />
       </Page>
    )
}

export default Qna
