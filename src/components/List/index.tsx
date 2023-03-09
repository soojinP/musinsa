import { useCallback, useEffect } from 'react'
import { useInfiniteQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import ListItem from './ListItem'
import styled from '@emotion/styled'
import { itemListState, filteredItemListState } from '../../recoil/store'
import { Item } from '../../types/global'

const MAX_PAGE = 10

interface Props {
    firstPage: number | string
}
function ListContainer({ firstPage = 1 }: Props) {
    const setItemList = useSetRecoilState(itemListState)
    const filteredItemList = useRecoilValue(filteredItemListState)

    const getItemList = async (pageNum: number | string) => {
        const response = await fetch(
            `https://www.anapioficeandfire.com/api/characters?page=${pageNum}&pageSize=10`
        )
        const data = await response.json()
        return data
    }

    const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery(
        `itemList`,
        ({ pageParam = firstPage }) => getItemList(pageParam),
        {
            getNextPageParam: (lastPage, allPages) => {
                const currentPage = +firstPage + allPages.length - 1
                const nextPage = currentPage < MAX_PAGE ? currentPage + 1 : undefined
                return nextPage
            },
        }
    )

    const handleScroll = useCallback(() => {
        const scrollPosition = window.innerHeight + window.pageYOffset
        const pageBottom = document.body.scrollHeight
        if (scrollPosition >= pageBottom && hasNextPage && !isLoading) {
            fetchNextPage()
        }
    }, [fetchNextPage, isLoading])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [handleScroll])

    useEffect(() => {
        if (!isLoading && data) {
            const newList = data.pages.flat().map((item) => {
                return { ...item, deleted: false }
            })
            setItemList(newList)
        }
    }, [isLoading, data, setItemList])

    const onClickDelete = (item: Item) => {
        setItemList((prev) => prev.map((ele) => (ele === item ? { ...ele, deleted: true } : ele)))
    }

    return (
        <ListContainerWrapper>
            {isLoading && <div>Loading...</div>}
            {filteredItemList.map((item, index) => (
                <ListItem key={`item-${index}`} item={item} onClick={onClickDelete} />
            ))}
            <ReactQueryDevtools initialIsOpen />
        </ListContainerWrapper>
    )
}

export default ListContainer

const ListContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0.625rem;
`
