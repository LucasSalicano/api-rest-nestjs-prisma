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
      include: {
        posts: {
          select: {
            title: true,
            createdAt: true,
          },
        },
      },
    });
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.prisma.user.findMany({
      include: {
        posts: {
          select: {
            title: true,
            createdAt: true,
          },
        },
      },
    });
  }

  async findOne(id: number): Promise<UserEntity> {
    return await this.prisma.user.findUnique({
      where: {
        id: id,
      },
      include: {
        posts: {
          select: {
            title: true,
            createdAt: true,
          },
        },
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    return await this.prisma.user.update({
      where: {
        id: id,
      },
      data: updateUserDto,
      include: {
        posts: {
          select: {
            title: true,
            createdAt: true,
          },
        },
      },
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
