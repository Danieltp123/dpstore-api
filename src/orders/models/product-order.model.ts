import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProductOrder {
  @Field(() => ID)
  _id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  productQty: number;
  
  @Field()
  price: number;
  
  @Field()
  imgUrl: string;
}

