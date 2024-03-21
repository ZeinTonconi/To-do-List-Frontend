import { Observable, map } from "rxjs";
import { Command } from "./command..abstract";
import { Task } from "../../interfaces/task.interface";
import { TaskService } from "../../services/task.service";


export class UpdateTaskCommand extends Command{
    

    constructor(private res: any,
                private taskData: Task[],
                private index: number,
                private taskService: TaskService){
        super()
    }

    public override execute(): Observable<void> {
        const newDescription = this.res.name;
        const newCategory = this.res.category;
        const task = this.taskData[this.index];
        return this.taskService.updateTask(task.id,newDescription,newCategory).pipe(

            map( (res) => {
                this.taskData[this.index].description = newDescription;
                this.taskData[this.index].category = task.category;
            })
        )
        
    }
}