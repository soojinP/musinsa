import { atom, selector } from 'recoil'
import { FilterType, ItemType } from '../types/global'

export const itemListState = atom<ItemType[]>({
    key: 'itemListState',
    default: [],
})

export const displayItemListState = selector({
    key: 'displayItemListState',
    get: ({ get }) => {
        const displayList = get(itemListState).filter((item) => !item.deleted)
        return displayList
    },
})

export const filterListState = atom<FilterType[]>({
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
                return item.tvSeries.length <= 0
            },
        },
    ],
})

export const filteredItemListState = selector({
    key: 'filteredItemListState',
    get: ({ get }) => {
        const filterList = get(filterListState).filter((filter) => filter.selected)
        let list = get(displayItemListState)

        for (const filter of filterList) {
            list = list.filter((item) => {
                return filter.checkItem(item)
            })
        }

        return list
    },
})
