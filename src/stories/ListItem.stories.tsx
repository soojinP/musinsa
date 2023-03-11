import ListItem from '../components/List/ListItem'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
    title: 'ListItem',
    component: ListItem,
    argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof ListItem>

const Template: ComponentStory<typeof ListItem> = (args) => <ListItem {...args} />

export const Default = Template.bind({})
Default.args = {
    item: {
        url: 'https://www.anapioficeandfire.com/api/characters/10',
        name: 'this is long name item',
        gender: 'Female',
        culture: 'Braavosi',
        born: '',
        died: '22',
        titles: ['title1', 'title2', 'title3'],
        aliases: ['The Veiled Lady', 'The Veiled Lady', 'The Veiled Ladys', 'The Veiled Lady'],
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
    onClick: () => {},
}
