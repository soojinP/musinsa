export interface ItemType {
    url: string
    name: string
    gender: string
    culture: string
    born: string
    died: string
    titles: string[]
    aliases: string[]
    father: string
    mother: string
    spouse: string
    allegiances: string[]
    books: any[]
    povBooks: never[]
    tvSeries: string[]
    playedBy: string[]
    deleted: boolean
}

export interface ListItemType extends ItemType {
    deleted: boolean
}

export interface FilterType {
    title: string
    selected: boolean
    checkItem: (item: ItemType) => boolean
}

// interface RootObject {
//     url: string
//     name: string
//     gender: string
//     culture: string
//     born: string
//     died: string
//     titles: string[]
//     aliases: string[]
//     father: string
//     mother: string
//     spouse: string
//     allegiances: any[]
//     books: string[]
//     povBooks: any[]
//     tvSeries: string[]
//     playedBy: string[]
// }
