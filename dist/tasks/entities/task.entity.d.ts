import { TaskStatus } from '../enums/task-status.enum';
export declare class Task {
    id: string;
    title: string;
    description?: string;
    status: TaskStatus;
    createdAt: Date;
    updatedAt?: Date;
}
