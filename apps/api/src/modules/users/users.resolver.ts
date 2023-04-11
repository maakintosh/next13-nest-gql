import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import {
  CreateOneUserArgs,
  DeleteOneUserArgs,
  FindUniqueUserArgs,
  UpdateOneUserArgs,
  User,
} from '../../@generated';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args() createOneUserArgs: CreateOneUserArgs) {
    return this.usersService.createUser(createOneUserArgs);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'findUniqueUser' })
  findOne(@Args() findUniqueUserArgs: FindUniqueUserArgs) {
    return this.usersService.findOne(findUniqueUserArgs);
  }

  @Mutation(() => User)
  updateUser(@Args() updateOneUserArgs: UpdateOneUserArgs) {
    return this.usersService.update(updateOneUserArgs);
  }

  @Mutation(() => User)
  removeUser(@Args() deleteOneUserArgs: DeleteOneUserArgs) {
    return this.usersService.remove(deleteOneUserArgs);
  }
}
