import { snapshot_UNSTABLE } from 'recoil'
import {
    displayItemListState,
    itemListState,
    filterListState,
    filteredItemListState,
} from './store'

test('test displayItemListState', () => {
    const testSnapshot = snapshot_UNSTABLE(({ set }) =>
        set(itemListState, [
            {
                url: 'https://www.anapioficeandfire.com/api/characters/1',
                name: '',
                gender: 'Female',
                culture: 'Braavosi',
                born: '',
                died: '',
                titles: [''],
                aliases: ['The Daughter of the Dusk'],
                father: '',
                mother: '',
                spouse: '',
                allegiances: [],
                books: ['https://www.anapioficeandfire.com/api/books/5'],
                povBooks: [],
                tvSeries: [''],
                playedBy: [''],
                deleted: true,
            },
        ])
    )
    expect(testSnapshot.getLoadable(displayItemListState).getValue()).toEqual([])
})

test('test filteredItemListState', () => {
    const testSnapshot = snapshot_UNSTABLE(({ set }) => {
        set(itemListState, [
            {
                url: 'https://www.anapioficeandfire.com/api/characters/1',
                name: '',
                gender: 'Female',
                culture: 'Braavosi',
                born: '',
                died: '',
                titles: [''],
                aliases: ['The Daughter of the Dusk'],
                father: '',
                mother: '',
                spouse: '',
                allegiances: [],
                books: ['https://www.anapioficeandfire.com/api/books/5'],
                povBooks: [],
                tvSeries: [''],
                playedBy: [''],
                deleted: false,
            },
            {
                url: 'https://www.anapioficeandfire.com/api/characters/1',
                name: '',
                gender: 'Male',
                culture: 'Braavosi',
                born: '',
                died: '',
                titles: [''],
                aliases: ['The Daughter of the Dusk'],
                father: '',
                mother: '',
                spouse: '',
                allegiances: [],
                books: ['https://www.anapioficeandfire.com/api/books/5'],
                povBooks: [],
                tvSeries: [''],
                playedBy: [''],
                deleted: false,
            },
            {
                url: 'https://www.anapioficeandfire.com/api/characters/1',
                name: '',
                gender: 'Female',
                culture: 'Braavosi',
                born: '',
                died: '',
                titles: [''],
                aliases: ['The Daughter of the Dusk'],
                father: '',
                mother: '',
                spouse: '',
                allegiances: [],
                books: ['https://www.anapioficeandfire.com/api/books/5'],
                povBooks: [],
                tvSeries: ['testTvSeries'],
                playedBy: [''],
                deleted: false,
            },
            {
                url: 'https://www.anapioficeandfire.com/api/characters/1',
                name: '',
                gender: 'Female',
                culture: 'Braavosi2',
                born: '2012-01-02',
                died: '',
                titles: [''],
                aliases: ['The Daughter of the Dusk'],
                father: '',
                mother: '',
                spouse: '',
                allegiances: [],
                books: ['https://www.anapioficeandfire.com/api/books/5'],
                povBooks: [],
                tvSeries: [''],
                playedBy: [''],
                deleted: false,
            },
        ])
        set(filterListState, [
            {
                title: '#생존인물만',
                selected: true,
                checkItem: (item) => {
                    return item.born !== '' && item.died === ''
                },
            },
            {
                title: '#여자',
                selected: true,
                checkItem: (item) => {
                    return item.gender === 'Female'
                },
            },
            {
                title: '#tvSeries 없음',
                selected: true,
                checkItem: (item) => {
                    return item.tvSeries.filter((ele) => ele !== '').length <= 0
                },
            },
        ])
    })
    expect(testSnapshot.getLoadable(filteredItemListState).getValue()).toEqual([
        {
            url: 'https://www.anapioficeandfire.com/api/characters/1',
            name: '',
            gender: 'Female',
            culture: 'Braavosi2',
            born: '2012-01-02',
            died: '',
            titles: [''],
            aliases: ['The Daughter of the Dusk'],
            father: '',
            mother: '',
            spouse: '',
            allegiances: [],
            books: ['https://www.anapioficeandfire.com/api/books/5'],
            povBooks: [],
            tvSeries: [''],
            playedBy: [''],
            deleted: false,
        },
    ])
})
