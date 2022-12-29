import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({
    description: 'Title Post',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Content Post',
  })
  @IsString()
  @IsOptional()
  content: string;

  @ApiProperty({
    description: 'User email',
  })
  @IsEmail()
  authorEmail: string;
}
