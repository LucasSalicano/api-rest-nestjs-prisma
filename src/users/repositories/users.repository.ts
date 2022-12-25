import { UpdateUserDto } from './../dto/update-user.dto';
import { PrismaService } from './../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    return await this.prisma.user.create({
      data: createUserDto,
    });
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.prisma.user.findMany();
  }

  async findOne(id: number): Promise<UserEntity> {
    return await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    return await this.prisma.user.update({
      where: {
        id: id,
      },
      data: updateUserDto,
    });
  }

  async remove(id: number): Promise<UserEntity> {
    return await this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}
