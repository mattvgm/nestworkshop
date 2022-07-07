import { Module } from '@nestjs/common';
import { InventoriesModule } from './inventories/inventories.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/workshop'),
    InventoriesModule,
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
