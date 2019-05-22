export type Maybe<T> = T | undefined | null;

import { GraphQLResolveInfo } from "graphql";

import { User } from "./src/entity/User";

import { ModuleContext } from "@graphql-modules/core";

export type Resolver<Result, Parent = {}, TContext = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, TContext, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: TContext,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: TContext,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  TContext = {},
  Args = {}
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, TContext, Args>)
  | ISubscriptionResolverObject<Result, Parent, TContext, Args>;

export type TypeResolveFn<Types, Parent = {}, TContext = {}> = (
  parent: Parent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export namespace QueryResolvers {
  export interface Resolvers<TContext = ModuleContext, TypeParent = {}> {
    me?: MeResolver<Maybe<User>, TypeParent, TContext>;

    users?: UsersResolver<Maybe<(Maybe<User>)[]>, TypeParent, TContext>;

    user?: UserResolver<Maybe<User>, TypeParent, TContext>;
  }

  export type MeResolver<
    R = Maybe<User>,
    Parent = {},
    TContext = ModuleContext
  > = Resolver<R, Parent, TContext>;
  export type UsersResolver<
    R = Maybe<(Maybe<User>)[]>,
    Parent = {},
    TContext = ModuleContext
  > = Resolver<R, Parent, TContext>;
  export type UserResolver<
    R = Maybe<User>,
    Parent = {},
    TContext = ModuleContext
  > = Resolver<R, Parent, TContext, UserArgs>;
  export interface UserArgs {
    id: string;
  }
}

export namespace UserResolvers {
  export interface Resolvers<TContext = ModuleContext, TypeParent = User> {
    id?: IdResolver<Maybe<string>, TypeParent, TContext>;

    email?: EmailResolver<Maybe<string>, TypeParent, TContext>;

    password?: PasswordResolver<Maybe<string>, TypeParent, TContext>;
  }

  export type IdResolver<
    R = Maybe<string>,
    Parent = User,
    TContext = ModuleContext
  > = Resolver<R, Parent, TContext>;
  export type EmailResolver<
    R = Maybe<string>,
    Parent = User,
    TContext = ModuleContext
  > = Resolver<R, Parent, TContext>;
  export type PasswordResolver<
    R = Maybe<string>,
    Parent = User,
    TContext = ModuleContext
  > = Resolver<R, Parent, TContext>;
}

export namespace MutationResolvers {
  export interface Resolvers<TContext = ModuleContext, TypeParent = {}> {
    addUser?: AddUserResolver<Maybe<User>, TypeParent, TContext>;
  }

  export type AddUserResolver<
    R = Maybe<User>,
    Parent = {},
    TContext = ModuleContext
  > = Resolver<R, Parent, TContext, AddUserArgs>;
  export interface AddUserArgs {
    email?: Maybe<string>;

    password?: Maybe<string>;
  }
}

/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  SkipDirectiveArgs,
  ModuleContext
>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  IncludeDirectiveArgs,
  ModuleContext
>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  DeprecatedDirectiveArgs,
  ModuleContext
>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string;
}

export type IResolvers<TContext = ModuleContext> = {
  Query?: QueryResolvers.Resolvers<TContext>;
  User?: UserResolvers.Resolvers<TContext>;
  Mutation?: MutationResolvers.Resolvers<TContext>;
} & { [typeName: string]: never };

export type IDirectiveResolvers<Result> = {
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
} & { [directiveName: string]: never };
