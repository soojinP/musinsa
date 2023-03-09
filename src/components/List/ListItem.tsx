import styled from '@emotion/styled'
import { ItemType } from '../../types/global'

interface Props {
    item: ItemType
    onClick: (item: ItemType) => void
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
    padding: 0 8px;
    border: 1px solid #000;
    border-radius: 4px;
    font-size: 14px;
    align-items: center;
    margin-bottom: 14px;
`

const DeleteButton = styled.div`
    position: absolute;
    right: 30px;
    border: 1px solid #000;
    border-radius: 4px;
    padding: 5px 10px;
    &:active {
        background-color: #000;
        color: #fff;
    }
`
