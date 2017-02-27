import { Component, Input } from '@angular/core';
import { ItemData } from './item-data';

@Component({
    selector:'ui-item',
    template:`
    <div class="itemContainer simpleCart_shelfItem" *ngIf="item">
        <div *ngIf="showDescScreen" class="itemDesc"><div class="closeDesc" (click)="showDesc(false)"> X </div> 
            <div class="disc"> {{item.description}}</div>
            <div class="price"> Price : {{item.price}}</div>
            <a  class="imgBase buyItem item_add" click> Add To Cart </a>
        </div>
        <div class="imgBase imgHead item_name"> {{item.name}}</div>
        <div class="imgCont"> <img src='../../assets/img/{{item.cdName}}.jpg' \> </div>
        <div  class="imgBase imgBot buyItem" (click)="showDesc(true)"> BUY </div>
    </div>
`
})

export class ItemComponent{
    @Input() item: ItemData;
    showDescScreen:boolean = false;

    showDesc(flag:boolean):void{
       this.showDescScreen = flag;
    }

}
