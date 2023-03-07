import React from 'react'
import * as S from './styles'
import FilterItem from './FilterItem'

type Props = {}

function FilterContainer({}: Props) {
    const filter = ['생존인물만', '여자', 'tvSeries 없음', '초기화']

    return (
        <S.FilterContainer>
            {filter.map((data) => (
                <FilterItem title={data} />
            ))}
        </S.FilterContainer>
    )
}

export default FilterContainer
