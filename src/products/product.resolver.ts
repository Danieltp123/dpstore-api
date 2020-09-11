import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { ProductType } from './dto/create-product.dto';
import { ProductInput } from './inputs/product.input';

@Resolver()
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Query(() => [ProductType])
  async product() {
    return this.productService.findAll();
  }

  @Mutation(() => ProductType)
  async createProduct(@Args('input') input: ProductInput) {
    return this.productService.create(input);
  }
}