import { ReturnModelType } from '@typegoose/typegoose'
import { lowerCase } from 'lodash'
import { Arg, Args, Authorized, Mutation, Query, ClassType, Resolver } from 'type-graphql'
import { getPageInfo } from '../utils/getPageInfo'
import { PaginationArgs } from '../args/PaginationArgs'
import { createCRUDResponse } from './createCRUDResponse'
import { createPaginagedResponse } from './createPaginatedResponse'

export function createBaseResolver<TItem>(
  TItemClass: ClassType<TItem>,
  TItemModel: ReturnModelType<typeof TItemClass>,
) {
  const PaginatedResponse = createPaginagedResponse(TItemClass)
  const CRUDResponse = createCRUDResponse(TItemClass)
  const name = lowerCase(TItemClass.name)

  @Resolver({ isAbstract: true })
  abstract class BaseResolver {
    @Authorized()
    @Query(() => TItemClass, { name })
    async get(@Arg('_id', () => String) _id: string): Promise<InstanceType<typeof TItemClass>> {
      const item = await TItemModel.findOne({ _id })
      // const DocumentClass = getClassForDocument(item)
      // Object.setPrototypeOf(convertedDocument, DocumentClass.prototype)
      return item.toObject<TItem>()
    }

    @Authorized()
    @Query(() => PaginatedResponse, { name: `${name}s` })
    async getAll(
      @Args(() => PaginationArgs) { skip, limit, order }: PaginationArgs,
    ): Promise<InstanceType<typeof PaginatedResponse>> {
      // const [{ items, [{totalCount}] }] = await TItemModel.aggregate([
      //   {
      //     $facet: {
      //       items: [{ $skip: skip || 0 }, { $limit: limit || 10 }],
      //       totalCount: [{ $count: 'totalCount' }]
      //     }
      //   }
      // ]).

      const totalCount = await TItemModel.find().count()
      const items = await TItemModel.find()
        // .sort(order ? { [order.orderBy]: order.orderDirection } : {})
        .sort()
        .skip(skip)
        .limit(limit)
        .exec()

      return {
        items: items.map((item) => item.toObject<TItem>()),
        pageInfo: getPageInfo(skip, limit, totalCount),
      }
    }

    @Authorized()
    @Mutation(() => CRUDResponse, { name: `${name}Update` })
    async update(
      @Arg('_id', () => String) _id: string,
    ): Promise<InstanceType<typeof CRUDResponse>> {
      const updatedItem = await TItemModel.findOneAndUpdate({ _id })
      return { success: Boolean(updatedItem), item: updatedItem }
    }

    @Authorized()
    @Mutation(() => CRUDResponse, { name: `${name}Delete` })
    async delete(
      @Arg('_id', () => String) _id: string,
    ): Promise<InstanceType<typeof CRUDResponse>> {
      const deletedItem = await TItemModel.findOneAndDelete({ _id })
      return { success: Boolean(deletedItem), item: deletedItem || null }
    }
  }

  return BaseResolver
}
