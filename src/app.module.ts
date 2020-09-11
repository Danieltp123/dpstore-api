import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ProductModule } from './products/product.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ProductModule,
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      useCreateIndex: true
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
