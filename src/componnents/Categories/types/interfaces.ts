type Categories = { trivia_categories: CategoryName[] }

interface CategoryName {
    id: number;
    name: string;
}

export type {
    Categories,
    CategoryName
}