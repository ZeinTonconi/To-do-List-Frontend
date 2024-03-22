import { Observable, map, of } from "rxjs";
import { NewTask, Task } from "../../interfaces/task.interface";
import { Command } from "./command..abstract";
import { TaskService } from "../../services/task.service";
import { Tag } from "../../interfaces/tag.insterface";


export class CreateTaskCommand extends Command{

    
    constructor(private newTask: any,
                private taskData: Task[],
                private taskService: TaskService){
        super()
    }
    
    public override execute(): Observable<void> {
        return this.taskService.createTask(this.newTask.name,this.newTask.category).pipe(
            map( (res) => {
                const {description, id_category, id, status} = res.newTask;
                const {category} = res;  
                const tags:Tag[] = []
                this.newTask.tags.forEach((tag:Tag) => {
                this.taskService.addTag(id,tag.id);
                tags.push(tag)  
                });

                const task = {
                id, 
                description, 
                status, 
                id_category,
                category,
                tags
                }
                this.taskData.push(task)
            })
        )
        
    }

}