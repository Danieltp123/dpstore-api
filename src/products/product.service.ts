import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './interfaces/product.interface';
import { ProductInput } from './inputs/product.input';

@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}

  async create(createProductDto: ProductInput): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    return await createdProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }
}