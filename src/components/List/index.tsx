import { useEffect, useCallback } from 'react'
import { ReactQueryDevtools } from 'react-query/devtools'
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil'
import styled from '@emotion/styled'
import { itemListState, displayItemListState } from '@/recoil/store'
import { Item } from '@/types/global'
import usePageParam from '@/hooks/usePageParam'
import useFetchListInfinity from '@/hooks/useFetchListInfinity'
import useScrollBottomEffect from '@/hooks/useScrollBottomEffect'
import ListItem from './ListItem'
import Loading from './Loading'

const MAX_PAGE = 10

function ListContainer() {
    const [itemList, setItemList] = useRecoilState(itemListState)
    const displayItemList = useRecoilValue(displayItemListState)

    const { data, isLoading, hasNextPage, fetchNextPage } = useFetchListInfinity({
        startPage: usePageParam(),
        maxPagNum: MAX_PAGE,
    })

    useScrollBottomEffect(() => {
        if (hasNextPage && !isLoading) {
            fetchNextPage()
        }
    }, [data])

    useEffect(() => {
        if (!isLoading && data) {
            const newList = data.pages.flat().map((item) => {
                return { ...item, deleted: false }
            })
            setItemList((prev) => [...prev, ...newList.slice(prev.length, newList.length)])
        }
    }, [isLoading, data])

    const onClickDelete = useCallback(
        (item: Item) => {
            setItemList((prev) =>
                prev.map((ele) => (ele === item ? { ...ele, deleted: true } : ele))
            )
        },
        [itemList]
    )

    return (
        <ListContainerWrapper>
            {isLoading && <Loading />}
            {displayItemList.length === 0 &&
                !isLoading &&
                (hasNextPage ? (
                    <NextPageButton onClick={() => fetchNextPage()}>
                        !!다음 페이지 불러오기!!
                    </NextPageButton>
                ) : (
                    <LastPageText>마지막 페이지</LastPageText>
                ))}
            {displayItemList.map((item, index) => (
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

const NextPageButton = styled.button`
    align-self: center;
    width: 10rem;
    padding: 0.5rem;
    border: 1px solid black;
    border-radius: 4rem;
    box-shadow: 2px 2px 2px grey;
    background-color: black;
    color: #fff;
    &:active {
        background-color: white;
        color: black;
    }
`
const LastPageText = styled.div`
    align-self: center;
`
