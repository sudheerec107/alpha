import { Injectable } from '@angular/core';
import { ITEMS } from './item-db';
import { ItemData } from './item-data';

@Injectable()
export class ItemService{

getItems():Promise<ItemData[]>{
    return Promise.resolve(ITEMS);    
}
}