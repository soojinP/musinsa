export interface Item {
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

export interface Filter {
    title: string
    selected: boolean
    checkItem: (item: Item) => boolean
}
