import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { CommandModule } from 'nestjs-command';
import { SeedsModule } from './seeds/seeds.module';

@Module({
  imports: [
    CommandModule,
    ProductsModule,
    OrdersModule,
    SeedsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      useCreateIndex: true
    }),
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
  ],
})
export class AppModule {}
