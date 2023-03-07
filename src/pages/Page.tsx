import styled from '@emotion/styled'
import Filter from '../components/Filter'
import Title from '../components/Title'
import List from '../components/List'

type Props = {}

function Page({}: Props) {
    return (
        <StyledPage>
            <Title />
            <Filter />
            <List />
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
