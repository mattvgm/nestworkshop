import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { Inventory, InventoryDocument } from '../model/inventory.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { InventoriesRepositoryInterface } from '../repositories/repository.interface';

@Controller('inventories')
export class ControllersController {
  constructor(
    @Inject('INVENTORIES_REPOSITORY')
    private inventoryModel: InventoriesRepositoryInterface,
  ) {}

  @Get()
  async getAllInventories(): Promise<Inventory[]> {
    return this.inventoryModel.getAllInventories();
  }

  @Get('/estates')
  async getAllInventoriesForEstates(): Promise<string> {
    return 'hey shai';
  }

  @Get('/estates/:id')
  async getAllInventoriesForEstatesById(
    @Param('id') estateId: string,
  ): Promise<string> {
    return 'hey shai' + estateId;
  }

  @Get('/estates2/')
  async getAllInventoriesForEstatesSearch(
    @Query('keyword') keyword: string,
  ): Promise<string> {
    throw new HttpException('OOPS made a mistake', HttpStatus.NOT_FOUND);
    return 'hey ' + keyword;
  }

  @Post()
  async createInventories(@Body() inventory: Inventory): Promise<Inventory> {
    return this.inventoryModel.createInventory(inventory);
  }
}
