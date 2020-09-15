import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductsService } from 'src/products/products.service';
import { NewOrderInput } from './dto/new-order.input';
import { ProductOrderDto } from './dto/product-order.dto';
import { Order } from './schemas/order.schema';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private readonly orderModel: Model<Order>,
    private productsService : ProductsService
  ) {}

  async create(data: NewOrderInput): Promise<Order> {
    if (data.creditCard !== "1111111111111111")
      throw new BadRequestException("credit-card-invalid")

    const productsOrderArr = data.productsOrder.map(async productOrder => {
      const { productId, productQty } = productOrder;
      const { 
        _id,
        title,
        description,
        price,
        imgUrl,
        availableQty
      } = await this.productsService.findOneById(productId);

      if(availableQty < productQty) throw new BadRequestException("product-unavailable");

      return {
        productId: _id,
        productQty,
        title,
        description,
        price,
        imgUrl 
      } as ProductOrderDto;
    });
    const productsOrder = await Promise.all(productsOrderArr);
    const result = await this.orderModel.create({ ...data, productsOrder});
    await this.decrementProductAvailableQty(productsOrder);
    return result;
  }

  async findOneById(_id: string): Promise<Order> {
    return this.orderModel.findById(_id);
  }

  async findAll(): Promise<Order[]> {
    return this.orderModel.find();
  }

  async remove(_id: string): Promise<boolean> {
    await this.orderModel.deleteOne({ _id });
    return true;
  }

  private async decrementProductAvailableQty(productsOrder: ProductOrderDto[]) {
    const productsUpdate = productsOrder.map(async productOrder =>{
      const product = await this.productsService.findOneById(productOrder.productId);
      product.availableQty -= productOrder.productQty;
      product.inShoppingCart -= productOrder.productQty;
      return product.save()
    })

    return Promise.all(productsUpdate)
  }
}
