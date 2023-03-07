import { useEffect, useState } from 'react'
import ListItem from './ListItem'
import * as S from './styles'

type Props = {}

type DataType = {
    url: string
    name: string
    gender: string
    culture: string
    born: string
    died: string
    titles: string[]
    aliases: string[]
    father: string
    mother: string
    spouse: string
    allegiances: string[]
    books: string[]
    povBooks: never[]
    tvSeries: string[]
    playedBy: string[]
}

function ListContainer({}: Props) {
    const [data, setData] = useState<DataType[]>([])
    useEffect(() => {
        fetch('http://127.0.0.1:5173/data/database.json', {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
    }, [])

    return (
        <S.ListContainer>
            {data.map((ele) => (
                <ListItem
                    key={ele.url}
                    name={ele.name}
                    titles={ele.titles}
                    aliases={ele.aliases}
                    books={ele.books}
                    tvSeries={ele.tvSeries}
                />
            ))}
        </S.ListContainer>
    )
}

export default ListContainer
