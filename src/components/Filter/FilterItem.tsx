import { useRecoilState } from 'recoil'
import { filterListState } from '../../store/atoms'
import { FilterType } from '../../types/global'
import * as S from './styles'

interface Props {
    item: FilterType
    onClick: (item: FilterType) => void
}

function FilterItem({ item, onClick }: Props) {
    return (
        <S.FilterItem
            selected={item.selected}
            onClick={(e) => {
                onClick(item)
                e.stopPropagation()
            }}
        >
            {item.title}
        </S.FilterItem>
    )
}

export default FilterItem
