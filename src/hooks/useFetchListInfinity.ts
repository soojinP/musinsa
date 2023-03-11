import { useInfiniteQuery } from 'react-query'

interface Props {
    startPage: number
    maxPagNum: number
}

const getItemList = async (pageNum: number) => {
    const response = await fetch(
        `https://www.anapioficeandfire.com/api/characters?page=${pageNum}&pageSize=10`
    )
    const data = await response.json()
    return data
}

export default function useFetchListInfinity({ startPage, maxPagNum }: Props) {
    return useInfiniteQuery(
        `itemList`,
        ({ pageParam = startPage }) => {
            return getItemList(pageParam)
        },
        {
            getNextPageParam: (lastPage, allPages) => {
                const currentPage = +startPage + allPages.length - 1
                const nextPage = currentPage < maxPagNum ? currentPage + 1 : undefined
                return nextPage
            },
        }
    )
}
