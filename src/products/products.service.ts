import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NewProductInput } from './dto/new-product.input';
import { Product } from './schemas/product.schema';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private readonly productModel: Model<Product>) {}

  async create(data: NewProductInput): Promise<Product> {
    return this.productModel.create({ ...data, inShoppingCart: 0 });
  }

  async findOneById(_id: string): Promise<Product> {
    const product = await this.productModel.findById(_id);
    if(!product) throw new NotFoundException();
    return product;
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find();
  }

  async findProductsInShoppingCart(): Promise<Product[]> {
    return await this.productModel.find({ inShoppingCart: { $gte: 1 }});
  }

  async incrementInShoppingCart(_id: string): Promise<Product>{
    const product = await this.productModel.findById(_id);

    if(!product) throw new NotFoundException();
    if((product.availableQty - product.inShoppingCart) < 1) 
      throw new BadRequestException("product-unavailable")

    product.inShoppingCart += 1;
    return product.save();
  }
  
  async decrementInShoppingCart(_id: string): Promise<Product>{
    const product = await this.productModel.findById(_id);
    if(!product) throw new NotFoundException();

    product.inShoppingCart -= 1;
    return product.save();
  }
  
  async removeInShoppingCart(_id: string): Promise<Product>{
    const product = await this.productModel.findById(_id);
    if(!product) throw new NotFoundException();
    product.inShoppingCart = 0;
    return product.save();
  }

  async remove(_id: string): Promise<boolean> {
    await this.productModel.deleteOne({ _id });
    return true;
  }
}
