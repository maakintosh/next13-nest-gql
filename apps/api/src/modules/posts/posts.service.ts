import { Injectable } from '@nestjs/common';
import {
  CreateOnePostArgs,
  DeleteOnePostArgs,
  FindUniquePostArgs,
  UpdateOnePostArgs,
} from '../../@generated';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createOnePostArgs: CreateOnePostArgs) {
    return this.prisma.post.create(createOnePostArgs);
  }

  findAll() {
    return this.prisma.post.findMany({
      where: { published: true },
      include: { user: true },
    });
  }

  findOne(findUniquePostArgs: FindUniquePostArgs) {
    return this.prisma.post.findUnique({
      where: { id: findUniquePostArgs.where.id },
      include: { user: true },
    });
  }

  update(updateOnePostArgs: UpdateOnePostArgs) {
    return this.prisma.post.update(updateOnePostArgs);
  }

  remove(deleteOnePostArgs: DeleteOnePostArgs) {
    return this.prisma.post.delete(deleteOnePostArgs);
  }
}
