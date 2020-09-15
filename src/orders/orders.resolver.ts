import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { NewOrderInput } from './dto/new-order.input';
import { Order } from './models/order.model';
import { OrdersService } from './orders.service';

const pubSub = new PubSub();

@Resolver(() => Order)
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  @Query(() => Order)
  async order(@Args('_id') _id: string): Promise<Order> {
    const order = await this.ordersService.findOneById(_id);
    if (!order) {
      throw new NotFoundException(_id);
    }
    return order as any;
  }

  @Query(() => [Order])
  orders(): Promise<Order[]> {
    return this.ordersService.findAll() as any;
  }

  @Mutation(() => Order)
  async addOrder(
    @Args('newOrderData') newOrderData: NewOrderInput,
  ): Promise<Order> {
    const order = await this.ordersService.create(newOrderData);
    pubSub.publish('orderAdded', { orderAdded: order });
    return order as any;
  }

  @Mutation(() => Boolean)
  async removeOrder(@Args('_id') _id: string) {
    return this.ordersService.remove(_id);
  }

  @Subscription(() => Order)
  orderAdded() {
    return pubSub.asyncIterator('orderAdded');
  }
}
