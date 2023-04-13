import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import {
  CreateOnePostArgs,
  DeleteOnePostArgs,
  FindUniquePostArgs,
  Post,
  UpdateOnePostArgs,
} from '../../@generated/prisma-nestjs-graphql';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Mutation(() => Post)
  createPost(@Args() createOnePostArgs: CreateOnePostArgs) {
    return this.postsService.create(createOnePostArgs);
  }

  @Query(() => [Post], { name: 'posts' })
  findAll() {
    return this.postsService.findAll();
  }

  @Query(() => Post, { name: 'findUniquePost' })
  findOne(@Args() findUniquePostArgs: FindUniquePostArgs) {
    return this.postsService.findOne(findUniquePostArgs);
  }

  @Mutation(() => Post)
  updatePost(@Args() updateOnePostArgs: UpdateOnePostArgs) {
    return this.postsService.update(updateOnePostArgs);
  }

  @Mutation(() => Post)
  removePost(@Args() deleteOnePostArgs: DeleteOnePostArgs) {
    return this.postsService.remove(deleteOnePostArgs);
  }
}
