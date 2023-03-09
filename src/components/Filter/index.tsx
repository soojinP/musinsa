import { useSetRecoilState, useRecoilState } from 'recoil'
import * as S from './styles'
import FilterItem from './FilterItem'
import { filterListState, itemListState } from '../../store/atoms'
import { Filter } from '../../types/global'

type Props = {}

function FilterContainer({}: Props) {
    const [filterList, setFilterList] = useRecoilState(filterListState)
    const setItemList = useSetRecoilState(itemListState)
    const onClickFilter = (item: Filter) => {
        setFilterList((prev) =>
            prev.map((ele) => (ele === item ? { ...ele, selected: !ele.selected } : ele))
        )
    }
    const handleClickClear = () => {
        setItemList((prev) => prev.map((ele) => ({ ...ele, deleted: false })))
    }

    return (
        <S.FilterContainer>
            {filterList.map((filter, index) => (
                <FilterItem key={`filter-${index}`} item={filter} onClick={onClickFilter} />
            ))}
            <S.ClearButton onClick={handleClickClear}>초기화</S.ClearButton>
        </S.FilterContainer>
    )
}

export default FilterContainer
