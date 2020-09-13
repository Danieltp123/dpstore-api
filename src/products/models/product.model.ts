import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => ID)
  _id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  availableQty: number;
  
  @Field()
  price: number;
  
  @Field()
  imgUrl: string;
}

