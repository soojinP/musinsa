import styled from '@emotion/styled'

interface FilterItemProps {
    selected: boolean
}

export const FilterContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
`
export const FilterItem = styled.div<FilterItemProps>`
    display: flex;
    height: 32px;
    margin-left: 8px;
    padding: 0 8px;
    border-radius: 4px;
    background-color: #f3f3f3;
    font-size: 14px;
    color: ${(props) => (props.selected ? '#0078ff' : '#6e6e6e')};
    align-items: center;
    cursor: default;
`
export const ClearButton = styled.div`
    display: flex;
    position: absolute;
    right: 14px;
    padding: 6px;
    border-radius: 6px;
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
