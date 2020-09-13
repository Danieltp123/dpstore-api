import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NewProductInput } from './dto/new-product.input';
import { ProductsArgs } from './dto/product.args';
import { Product } from './schemas/product.schema';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private readonly productModel: Model<Product>) {}

  async create(data: NewProductInput): Promise<Product> {
    return this.productModel.create({ ...data });
  }

  async findOneById(_id: string): Promise<Product> {
    return this.productModel.findById(_id);
  }

  async findAll(productsArgs: ProductsArgs): Promise<Product[]> {
    return this.productModel.find();
  }

  async remove(_id: string): Promise<boolean> {
    await this.productModel.deleteOne({ _id });
    return true;
  }
}
