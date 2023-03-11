import styled from '@emotion/styled'

export default function ItemProperty({ name, value }: { name: string; value: string | number }) {
    return (
        <PropertyWrapper>
            <div>{`${name}`}</div>
            <p>{value || '없음'}</p>
        </PropertyWrapper>
    )
}

const PropertyWrapper = styled.div`
    display: flex;
    display: row;
    align-items: baseline;
    & > div {
        padding: 0.2rem 0.4rem;
        background-color: #c9ccd5;
        border-radius: 10%;
        margin-right: 0.3rem;
    }

    & > p {
        min-width: 1.6rem;
        margin-right: 0.6rem;
    }
`
