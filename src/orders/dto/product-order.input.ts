import { Field, InputType } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';

@InputType()
export class NewProductOrderInput {
  @Field()
  @MaxLength(30)
  productId: string;

  @Field()
  productQty: number;
}
