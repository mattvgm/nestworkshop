import { InventoriesRepositoryInterface } from '../repository.interface';
import { Inventory, InventoryDocument } from '../../model/inventory.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MongooseRepository implements InventoriesRepositoryInterface {
  constructor(
    @InjectModel('Inventory') private inventoryModel: Model<InventoryDocument>,
  ) {}

  async createInventory(inventory: Inventory): Promise<Inventory> {
    return this.inventoryModel.create(inventory);
  }

  async getAllInventories(): Promise<Inventory[]> {
    return this.inventoryModel.find({}).exec();
  }
}
