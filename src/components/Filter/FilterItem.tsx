import { useRecoilState } from 'recoil'
import { filterListState } from '../../recoil/store'
import { Filter } from '../../types/global'
import * as S from './styles'

interface Props {
    item: Filter
    onClick: (item: Filter) => void
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
