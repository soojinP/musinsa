import { atom, selector, snapshot_UNSTABLE } from 'recoil'
import { Filter, Item } from '../types/global'

export const itemListState = atom<Item[]>({
    key: 'itemListState',
    default: [],
})

export const filterListState = atom<Filter[]>({
    key: 'filterListState',
    default: [
        {
            title: '#생존인물만',
            selected: false,
            checkItem: (item) => {
                return item.born !== '' && item.died === ''
            },
        },
        {
            title: '#여자',
            selected: false,
            checkItem: (item) => {
                return item.gender === 'Female'
            },
        },
        {
            title: '#tvSeries 없음',
            selected: false,
            checkItem: (item) => {
                return item.tvSeries.filter((ele) => ele !== '').length <= 0
            },
        },
    ],
})

export const filteredItemListState = selector({
    key: 'filteredItemListState',
    get: ({ get }) => {
        const filterList = get(filterListState).filter((filter) => filter.selected)
        let list = get(itemListState)

        for (const filter of filterList) {
            list = list.filter((item) => {
                return filter.checkItem(item)
            })
        }

        return list
    },
})

export const displayItemListState = selector({
    key: 'displayItemListState',
    get: ({ get }) => {
        const displayList = get(filteredItemListState).filter((item) => !item.deleted)
        return displayList
    },
})
