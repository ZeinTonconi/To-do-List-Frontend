import { Observable } from "rxjs";
import { Task } from "../../interfaces/task.interface";

export abstract class Command {

    public abstract execute(): Observable<void>;
}