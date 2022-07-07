import { Module } from '@nestjs/common';
import { ControllersController } from './controllers/controllers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Inventory, InventorySchema } from './model/inventory.schema';
import { MongooseRepository } from './repositories/implementations/MongooseRepository';
import { EstateRepoRepository } from './repositories/implementations/EstateRepoRepository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Inventory', schema: InventorySchema }]),
  ],
  controllers: [ControllersController],
  providers: [
    { provide: 'INVENTORIES_REPOSITORY', useClass: EstateRepoRepository },
  ],
})
export class InventoriesModule {}
