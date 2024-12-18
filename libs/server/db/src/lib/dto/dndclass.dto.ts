import { IDndClassModel } from '@interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class DndClassDto implements IDndClassModel {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  id!: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty()
  @IsNumber()
  level!: number;
}
