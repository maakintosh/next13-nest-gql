import { Injectable } from '@nestjs/common';
import {
  CreateOneUserArgs,
  DeleteOneUserArgs,
  FindUniqueUserArgs,
  UpdateOneUserArgs,
} from '../../@generated';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  createUser(createOneUserArgs: CreateOneUserArgs) {
    return this.prisma.user.create(createOneUserArgs);
  }

  findAll() {
    return this.prisma.user.findMany({
      include: { posts: true }
    });
  }

  findOne(findUniqueUserArgs: FindUniqueUserArgs) {
    return this.prisma.user.findUnique({
      where: { id: findUniqueUserArgs.where.id },
      include: { posts: true }
    });
  }

  update(updateOneUserArgs: UpdateOneUserArgs) {
    return this.prisma.user.update(updateOneUserArgs);
  }

  remove(deleteOneUserArgs: DeleteOneUserArgs) {
    return this.prisma.user.delete(deleteOneUserArgs);
  }
}
