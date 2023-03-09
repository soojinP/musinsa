import { useLocation } from 'react-router-dom'
import styled from '@emotion/styled'
import Filter from '../components/Filter'
import Title from '../components/Title'
import List from '../components/List'

type Props = {}

function Page({}: Props) {
    const { pathname, search } = useLocation()
    const urlParams = new URLSearchParams(search)
    const page = pathname === '/homework' ? urlParams.get('page') || 1 : 1

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
