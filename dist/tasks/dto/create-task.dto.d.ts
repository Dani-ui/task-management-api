import { TaskStatus } from '../enums/task-status.enum';
export declare class CreateTaskDto {
    title: string;
    description?: string;
    status?: TaskStatus;
}
