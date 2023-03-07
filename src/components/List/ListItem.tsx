import * as S from './styles'

type Props = {
    name: string
    titles: string[]
    aliases: string[]
    books: string[]
    tvSeries: string[]
}

function ListItem(props: Props) {
    return (
        <S.ListItem>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <p>{`name: ${props.name}`}</p>
                    <p>{`aliases: ${props.aliases.join(', ')}`}</p>
                </div>
                <p>{`title: ${props.titles.join(', ')}`}</p>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <p>{`book: ${props.books.length}`}</p>
                    <p>{`tvSeries: ${props.tvSeries.length}`}</p>
                </div>
            </div>
            <div>삭제</div>
        </S.ListItem>
    )
}

export default ListItem
