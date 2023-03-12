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
            <DeleteButton onClick={handleDeleteClick}>X</DeleteButton>
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
    box-shadow: 2px 2px 2px grey;
`

const DeleteButton = styled.div`
    position: absolute;
    right: 1.25rem;
    width: 2.125rem;
    height: 2.125rem;
    border-radius: 50%;
    color: white;
    align-items: center;
    justify-content: center;
    display: flex;
    background-color: #df2e38;
    font-size: 1rem;
    &:active {
        border: 2px solid red;
    }
`
