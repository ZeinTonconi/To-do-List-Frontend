import { CompletedOrNot } from "../../enum/completed.enum";
import { Category } from "../../interfaces/category.interface";
import { DateFilter } from '../../interfaces/dateFilter.interface';
import { Tag } from "../../interfaces/tag.insterface";
import { Task } from "../../interfaces/task.interface";
import { FilterBuilder } from "./filter.builder";

export class Filter {
    category: Category | null = null
    tag: Tag | null = null;
    range: DateFilter = new DateFilter()

    completed: CompletedOrNot = CompletedOrNot.Any

    constructor(builder: FilterBuilder){
        this.category = builder.category
        this.tag = builder.tag
        this.range = builder.range
        this.completed = builder.completed
    }

    applyFilter(tasks: Task[]){
        if(this.tag){
            tasks = tasks.filter( (task) => 
                task.tags.find( (tag) => tag.id === this.tag?.id)
            )
        }

        if(this.category){
            tasks = tasks.filter( (task) => task.category.id === this.category?.id)
        }

        if(this.completed != CompletedOrNot.Any){
            if(this.completed === CompletedOrNot.Completed)
                tasks = tasks.filter( (task) => task.status)
            else
                tasks = tasks.filter( (task) => !task.status)
        }
        return tasks
    }

}