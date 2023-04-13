import { Injectable } from '@nestjs/common';
import {
  CreateOneUserArgs,
  DeleteOneUserArgs,
  FindUniqueUserArgs,
  UpdateOneUserArgs,
} from '../../@generated/prisma-nestjs-graphql';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  createUser(createOneUserArgs: CreateOneUserArgs) {
    return this.prisma.user.create({
      ...createOneUserArgs,
      include: {
        _count: { select: { posts: true } },
      },
    });
  }

  findAll() {
    return this.prisma.user.findMany({
      include: {
        posts: true,
        _count: { select: { posts: true } },
      },
    });
  }

  findOne(findUniqueUserArgs: FindUniqueUserArgs) {
    return this.prisma.user.findUnique({
      ...findUniqueUserArgs,
      include: {
        posts: true,
        _count: { select: { posts: true } },
      },
    });
  }

  // AUTH: a user can only update himself
  // ISSUE: I have no idea that we can only update User when UserWhereUniqueInput.email && UserUpdateInput.email are provided
  update(updateOneUserArgs: UpdateOneUserArgs) {
    return this.prisma.user.update(updateOneUserArgs);
  }

  // AUTH: a user can only delete himself
  // ISSUE: I have no idea that we can only delete User when UserWhereUniqueInput.email is provided
  remove(deleteOneUserArgs: DeleteOneUserArgs) {
    return this.prisma.user.delete(deleteOneUserArgs);
  }
}