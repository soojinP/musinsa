import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Filter from '../components/Filter'
import Title from '../components/Title'
import List from '../components/List'

type Props = {}

function Page({}: Props) {
    const location = useLocation()
    const urlParams = new URLSearchParams(location.search)
    const page = urlParams.get('page') || 1

    return (
        <StyledPage>
            <Title />
            <Filter />
            <List firstPage={+page} />
        </StyledPage>
    )
}

const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export default Page
