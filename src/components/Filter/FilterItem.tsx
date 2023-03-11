import styled from '@emotion/styled'
import { Filter } from '@/types/global'

interface Props {
    item: Filter
    onClick: (item: Filter) => void
}

function FilterItem({ item, onClick }: Props) {
    return (
        <FilterItemWrapper
            selected={item.selected}
            onClick={(e) => {
                onClick(item)
                e.stopPropagation()
            }}
        >
            {item.title}
        </FilterItemWrapper>
    )
}

export default FilterItem

interface FilterItemProps {
    selected: boolean
}

const FilterItemWrapper = styled.div<FilterItemProps>`
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
