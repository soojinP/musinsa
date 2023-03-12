import styled from '@emotion/styled'
import { Item } from '@/types/global'
import ItemProperty from './ItemProperty'
import { useState } from 'react'

interface Props {
    item: Item
    onClick: (item: Item) => void
}

function ListItem({ item, onClick }: Props) {
    const handleDeleteClick = (e: React.MouseEvent<HTMLDivElement>) => {
        onClick(item)
        e.stopPropagation()
    }

    return (
        <ItemWrapper>
            <div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <ItemProperty name="name" value={item.name} />
                    <ItemProperty name="aliases" value={item.aliases.join(', ')} />
                </div>
                <ItemProperty name="titles" value={item.titles.join(', ')} />
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <ItemProperty
                        name="books"
                        value={item.books.filter((ele) => ele !== '').length}
                    />
                    <ItemProperty
                        name="tvSeries"
                        value={item.tvSeries.filter((ele) => ele !== '').length}
                    />
                </div>
            </div>
            <DeleteButton onClick={handleDeleteClick}>삭제</DeleteButton>
        </ItemWrapper>
    )
}

export default ListItem

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    align-items: center;
    margin-bottom: 14px;
    box-shadow: 10px 10px 17px grey;
`

const DeleteButton = styled.div`
    position: absolute;
    right: 1.25rem;
    padding: 0.375rem;
    border-radius: 0.375rem;
    border: 1.5px solid red;
    background-color: #fff;
    font-size: 0.75rem;
    color: red;
    align-items: center;

    &:active {
        background-color: red;
        color: #fff;
    }
`
