interface Category {
    id: number,
    name: string
}
interface Page {
    id: number,
    text: string
    pageNumber: number
}
export interface Book {
    id: number,
    author: string,
    realeseDate: string,
    title: string
    description: string,
    cover: string,
    category: Category[],
    pages: Page[]
}