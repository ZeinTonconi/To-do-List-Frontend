import { CompletedOrNot } from "../../enum/completed.enum";
import { Category } from "../../interfaces/category.interface";
import { DateFilter } from "../../interfaces/dateFilter.interface";
import { Tag } from "../../interfaces/tag.insterface";
import { Filter } from "./filter";



export class FilterBuilder{

    category: Category | null = null
    tag: Tag | null = null;
    range: DateFilter = new DateFilter()
    completed: CompletedOrNot = CompletedOrNot.Any

    setCategory(category: Category){
        this.category = category
        return this
    }

    setTag(tag: Tag){
        this.tag =  tag
        return this
    }

    setRange(range: DateFilter){
        this.range = range
        return this
    }

    setCompleted(completed: CompletedOrNot){
        this.completed = completed
        return this
    }

    build(): Filter{
        return new Filter(this);
    }

}