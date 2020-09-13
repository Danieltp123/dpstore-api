import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { NewProductInput } from './dto/new-product.input';
import { ProductsArgs } from './dto/product.args';
import { Product } from './models/product.model';
import { ProductsService } from './products.service';

const pubSub = new PubSub();

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query(() => Product)
  async product(@Args('_id') _id: string): Promise<Product> {
    const product = await this.productsService.findOneById(_id);
    if (!product) {
      throw new NotFoundException(_id);
    }
    return product;
  }

  @Query(() => [Product])
  products(@Args() productsArgs: ProductsArgs): Promise<Product[]> {
    return this.productsService.findAll(productsArgs);
  }

  @Mutation(() => Product)
  async addProduct(
    @Args('newProductData') newProductData: NewProductInput,
  ): Promise<Product> {
    const product = await this.productsService.create(newProductData);
    pubSub.publish('productAdded', { productAdded: product });
    return product;
  }

  @Mutation(() => Boolean)
  async removeProduct(@Args('_id') _id: string) {
    return this.productsService.remove(_id);
  }

  @Subscription(() => Product)
  productAdded() {
    return pubSub.asyncIterator('productAdded');
  }
}
