import css from '@styled-system/css'
import ArrowRight from 'assets/icons/ArrowRight'
import { Link } from 'components/index'
import React from 'react'
import styled, { useTheme } from 'styled-components'

const CompanyRegistration = styled(Link)(css({
    m: "0 auto",
    mt: 5,
    alignItems: "center",
    fontWeight : 'semibold',
    'svg' : {
        transform: 'rotate(-45deg)'
    }
}))


const CompanyRegistrationButton = () => {

    const theme = useTheme();

    return (
        <CompanyRegistration to="/auth/company" p="0">
            Register as Company
            <ArrowRight size="2rem" fill={theme.colors.blue[6]}/>
        </CompanyRegistration>
    )
}

export default CompanyRegistrationButton
