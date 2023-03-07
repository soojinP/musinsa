import * as S from './styles'

type Props = { title: string }

function FilterItem({ title }: Props) {
    return <S.FilterItem>{title}</S.FilterItem>
}

export default FilterItem
