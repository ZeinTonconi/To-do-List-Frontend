

export interface Category {
    id: string,
    categoryName: string,
    id_user: string
}

export interface CategoryResponseGet{
    categories: Category[]
}

export interface CategoryResponse{
    msg: string,
    tag: Category
}
