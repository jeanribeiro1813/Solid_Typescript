import { ShoppingCarLegacy } from "./shopping-car-com SRP";
import { OrderStatus } from "../interfaces/protocols/orderStatus";
import { Menssagin } from '../services/msg';
import { Persistency } from '../services/persistence';

export class Order{
  private _ordemStatus : OrderStatus = 'open'



  constructor(private readonly cart:ShoppingCarLegacy,
     private readonly message:Menssagin,
     private readonly persistency:Persistency){  }

  get ordemStatus(): OrderStatus{
    return this._ordemStatus
  }

  checkout():void{

    if(this.cart.isEmpty()){
      console.log('Seu carrinho esta vazio');
      return;
    }

    this.message.sendMessage('Seu pedido esta sendo processado')
    this.persistency.saveOrder()
    this.cart.closed()
  }


}
