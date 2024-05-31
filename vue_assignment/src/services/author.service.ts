import authors from '../datas/authors.json'

export const getAuthors = () => {
     return authors;
}

export const getAuthorById = (id: number) => {
     const author = authors.find((author) => author.id === id)
     return author
}