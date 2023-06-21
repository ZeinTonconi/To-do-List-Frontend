

export interface Category {
    id: string,
    categoryName: string,
    id_user: string
}

export interface Categories{
    categories: Category[]
}

export interface CategoryResponse{
    msg: string,
    category: Category
}

export interface CategoryErrorResponse{
    msg: string
}