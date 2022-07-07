import { Inventory } from '../model/inventory.schema';

export interface InventoriesRepositoryInterface {
  getAllInventories(): Promise<Inventory[]>;
  createInventory(inventory: Inventory): Promise<Inventory>;
}
