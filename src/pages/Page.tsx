import styled from '@emotion/styled'
import Filter from '@/components/Filter'
import Title from '@/components/Title'
import List from '@/components/List'

function Page() {
    return (
        <PageWrapper>
            <Title />
            <Filter />
            <List />
        </PageWrapper>
    )
}

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export default Page
