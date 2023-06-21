import { Category } from "./category.interface"
import { Tags } from "./tag.insterface"

export interface Task{
    id: string,
    despcription: string,
    status: boolean,
    id_category: string,
    tags: Tags,
    category: Category,
    imgaes?: []
}

export interface Tasks{
    tasks: Task[]
}