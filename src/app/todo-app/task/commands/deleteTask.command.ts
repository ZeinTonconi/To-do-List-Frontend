import { Observable, map } from "rxjs";
import { Command } from "./command..abstract";
import { TaskService } from "../../services/task.service";
import { Task } from "../../interfaces/task.interface";


export class DeleteTaskCommand extends Command{

    constructor(private index: number,
                private taskData: Task[],
                private taskService: TaskService){
                    super()
                }

    public override execute(): Observable<void> {
        const task=this.taskData[this.index];


        return this.taskService.deleteTask(task.id).pipe(
            map(res => {
                this.taskData.splice(this.index,1)
            })
        )
        
    }
}