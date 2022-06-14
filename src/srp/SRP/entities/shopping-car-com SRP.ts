import { Product } from "../interfaces/protocols/carItems";
import { OrderStatus } from "../interfaces/protocols/orderStatus";



export class ShoppingCarLegacy{
  private readonly _items:Product[] = []

  addItem(item:Product):void{
    this._items.push(item);
  }

  removeItems(index:number):void{
    this._items.splice(index, 1)
  }

  //Readonly - só permiti leitura
  get items():Readonly<Product[]>{
    return this._items
  }

  total():number {
    return this._items.reduce((total,next) => total + next.price,0)
  }

  isEmpty():boolean{
      return this._items.length === 0
  }

  closed():void{
      this._items.length = 0
  }
  }


