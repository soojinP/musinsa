import styled from '@emotion/styled'
import { Item } from '@/types/global'

interface Props {
    item: Item
    onClick: (item: Item) => void
}

function ListItem({ item, onClick }: Props) {
    return (
        <ItemWrapper>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p>{`name: ${item.name}`}</p>
                <p>{`aliases: ${item.aliases?.join(', ')}`}</p>
                <p>{`title: ${item.titles?.join(', ')}`}</p>
                <p>{`books: ${item.books?.length}`}</p>
                <p>{`tvSeries: ${item.tvSeries?.length}`}</p>
            </div>
            <DeleteButton
                onClick={(e) => {
                    onClick(item)
                    e.stopPropagation()
                }}
            >
                삭제
            </DeleteButton>
        </ItemWrapper>
    )
}

export default ListItem

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 0.5rem;
    border: 1px solid #000;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    align-items: center;
    margin-bottom: 14px;
`

const DeleteButton = styled.div`
    position: absolute;
    right: 1.875rem;
    border: 0.0625rem solid #000;
    border-radius: 0.25rem;
    padding: 0.3125rem 0.625rem;
    &:active {
        background-color: #000;
        color: #fff;
    }
`
