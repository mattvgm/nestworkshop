import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InventoryDocument = Inventory & Document;

export enum InventoryType {
  ASSET = 'Asset',
  LIABILITY = 'Liability',
}

@Schema()
export class Inventory {
  @Prop()
  inventoryName: string;

  @Prop()
  inventoryId: number;

  @Prop()
  value: number;

  @Prop()
  owner: string;

  @Prop()
  type: InventoryType;

  @Prop([String])
  assets: string[];
}

export const InventorySchema = SchemaFactory.createForClass(Inventory);
