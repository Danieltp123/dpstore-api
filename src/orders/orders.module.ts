import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsService } from 'src/products/products.service';
import { Product, ProductSchema } from 'src/products/schemas/product.schema';
import { OrdersResolver } from './orders.resolver';
import { OrdersService } from './orders.service';
import { Order, OrderSchema } from './schemas/order.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Order.name, schema: OrderSchema },
    { name: Product.name, schema: ProductSchema }
  ])],
  providers: [OrdersResolver, OrdersService, ProductsService],
})
export class OrdersModule {}
