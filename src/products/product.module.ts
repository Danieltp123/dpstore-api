import { CacheModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as redisStore from 'cache-manager-redis-store';

import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';
import { ProductSchema } from './schemas/product.schema';
import { Product } from './interfaces/product.interface';

@Module({
  imports: [
    CacheModule.register(
      {
        store: redisStore,
        host: process.env.REDIS_URL,
        port: Number(process.env.REDIS_PORT || 6379),
        ttl: 10*60 // 10 minutes
      }
    ),
    MongooseModule.forFeature(
      [
        { name: Product.name, schema: ProductSchema }
      ]
    )
  ],
  providers: [ProductResolver, ProductService]
})
export class ProductModule { }
