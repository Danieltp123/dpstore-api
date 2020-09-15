import { Field, InputType  } from '@nestjs/graphql';
import { ArrayMinSize, IsArray, MaxLength } from 'class-validator';
import { NewProductOrderInput } from './product-order.input';

@InputType()
export class NewOrderInput  {
  @Field()
  @MaxLength(30)
  creditCard: string;

  @IsArray()
  @ArrayMinSize(1)
  @Field(() => [NewProductOrderInput])
  productsOrder: NewProductOrderInput[];
}
