import { Category } from "./category.interface"
import { Tag } from "./tag.insterface"

export interface Task{
    id: string,
    description: string,
    status: boolean,
    id_category: string,
    tags: Tag[],
    category: Category,
    images?: []
}

export interface Tasks{
    tasks: Task[]
}

export interface NewTask{
    msg: string,
    newTask: {
        status: boolean,
        id: string,
        description: string,
        id_category: string,
        id_user: string
    },
    category: Category
}