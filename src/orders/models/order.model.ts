import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ProductOrder } from './product-order.model';

@ObjectType()
export class Order {
  @Field(() => ID)
  _id: string;

  @Field(() => [ProductOrder])
  productsOrder: ProductOrder[];

  @Field()
  creditCard: string;
}

