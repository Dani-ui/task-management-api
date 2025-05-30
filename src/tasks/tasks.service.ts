// src/tasks/tasks.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepo: Repository<Task>,
  ) {}

  create(dto: CreateTaskDto) {
    const task = this.taskRepo.create(dto);
    return this.taskRepo.save(task);
  }

  findAll() {
    return this.taskRepo.find();
  }

  async findOne(id: string) {
    const task = await this.taskRepo.findOneBy({ id });
    if (!task) throw new NotFoundException(`Task with ID '${id}' not found`);
    return task;
  }

  async update(id: string, dto: UpdateTaskDto) {
    const task = await this.findOne(id);
    Object.assign(task, dto);
    return this.taskRepo.save(task);
  }

  async remove(id: string) {
    const result = await this.taskRepo.delete(id);
    if (!result.affected) {
      throw new NotFoundException(`Task with ID '${id}' not found`);
    }
  }
}
