import { Injectable } from '@nestjs/common';
import {
  CreateOnePostArgs,
  DeleteOnePostArgs,
  FindUniquePostArgs,
  UpdateOnePostArgs,
} from '../../@generated/prisma-nestjs-graphql';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createOnePostArgs: CreateOnePostArgs) {
    return this.prisma.post.create({
      ...createOnePostArgs,
      include: {
        user: {
          include: { _count: { select: { posts: true } } },
        },
      },
    });
  }

  findAll() {
    return this.prisma.post.findMany({
      where: { published: true },
      include: {
        user: {
          include: {
            posts: true,
            _count: { select: { posts: true } },
          },
        },
      },
    });
  }

  findOne(findUniquePostArgs: FindUniquePostArgs) {
    return this.prisma.post.findUnique({
      ...findUniquePostArgs,
      include: {
        user: {
          include: {
            posts: true,
            _count: { select: { posts: true } },
          },
        },
      },
    });
  }

  update(updateOnePostArgs: UpdateOnePostArgs) {
    return this.prisma.post.update({
      ...updateOnePostArgs,
      include: {
        user: {
          include: {
            _count: { select: { posts: true } },
          },
        },
      },
    });
  }

  remove(deleteOnePostArgs: DeleteOnePostArgs) {
    return this.prisma.post.delete({
      ...deleteOnePostArgs,
      include: {
        user: {
          include: {
            _count: { select: { posts: true } },
          },
        },
      },
    });
  }
}
