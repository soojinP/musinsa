import styled from '@emotion/styled'

interface FilterItemProps {
    selected: boolean
}

export const FilterContainer = styled.div`
    width: 100%;
    height: 3.125rem;
    display: flex;
    align-items: center;
`
export const FilterItem = styled.div<FilterItemProps>`
    display: flex;
    height: 2rem;
    margin-left: 0.5rem;
    padding: 0 0.5rem;
    border-radius: 0.25rem;
    background-color: #f3f3f3;
    font-size: 0.875rem;
    color: ${(props) => (props.selected ? '#0078ff' : '#6e6e6e')};
    align-items: center;
    cursor: default;
`
export const ClearButton = styled.div`
    display: flex;
    position: absolute;
    right: 0.875rem;
    padding: 0.375rem;
    border-radius: 0.375rem;
    border: 1.5px solid #0078ff;
    background-color: #fff;
    font-size: 0.75rem;
    color: #0078ff;
    align-items: center;

    &:active {
        background-color: #0078ff;
        color: #fff;
    }
`
