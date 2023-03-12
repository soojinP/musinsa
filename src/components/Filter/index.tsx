import { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import styled from '@emotion/styled'
import { filterListState, itemListState } from '@/recoil/store'
import { Filter } from '@/types/global'
import FilterItem from './FilterItem'

function FilterList() {
    const [filterList, setFilterList] = useRecoilState(filterListState)
    const [itemList, setItemList] = useRecoilState(itemListState)

    const onClickFilter = useCallback(
        (item: Filter) => {
            setFilterList((prev) =>
                prev.map((ele) => (ele === item ? { ...ele, selected: !ele.selected } : ele))
            )
        },
        [filterList]
    )

    const handleClickClear = useCallback(() => {
        setItemList((prev) => prev.map((ele) => ({ ...ele, deleted: false })))
    }, [itemList])

    return (
        <FilterListWrapper>
            {filterList.map((filter, index) => (
                <FilterItem key={`filter-${index}`} item={filter} onClick={onClickFilter} />
            ))}
            <ClearButton onClick={handleClickClear}>초기화</ClearButton>
        </FilterListWrapper>
    )
}

export default FilterList

const FilterListWrapper = styled.div`
    width: 100%;
    height: 3.125rem;
    display: flex;
    align-items: center;
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
