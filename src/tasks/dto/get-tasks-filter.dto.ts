import { IsEnum, IsString, IsOptional } from 'class-validator';
import { TaskStatus } from '../task.model';
export class GetTasksFilterDto {
  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;

  @IsString()
  @IsOptional()
  search?: string;
}
