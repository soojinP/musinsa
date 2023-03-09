import styled from '@emotion/styled'

type Props = {}

function Title({}: Props) {
    return <TitleWrapper>무신사 과제</TitleWrapper>
}

export default Title

const TitleWrapper = styled.div`
    width: 100%;
    height: 6.25rem;
    background-color: black;
    color: white;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`
