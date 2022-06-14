type Product = {name:string,price:number}
type OrderStatus= 'open'| 'close'

export class ShoppingCar{
  private readonly _items:Product[] = []
  private _ordemStatus : OrderStatus = 'open'

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
  get ordemStatus(): OrderStatus{
    return this._ordemStatus
  }

  total():number {
    return this._items.reduce((total,next) => total + next.price,0)
  }

  checkout():void{

    if(this.isEmpty()){
      console.log('Seu carrinho esta vazio');
      return;
    }

    this._ordemStatus = 'close';
    this.sendMessage('Seu pedido esta sendo processado')
    this.saveOrder()
    this.closed()
  }
    isEmpty():boolean{
      return this._items.length === 0
    }

    sendMessage(msg:string):void{
      console.log('Mensagem enviada:', msg)
    }

    saveOrder():void{
      console.log('Pedido salvo com sucesso')
    }

    closed():void{
      this._items.length = 0
    }
  }



const shopping = new ShoppingCar()

shopping.addItem({name:'Camiseta',price:60})
shopping.addItem({name:'Mala',price:80})
shopping.addItem({name:'Camiseta',price:60})

console.log(shopping.items)
console.log(shopping.total())
shopping.checkout()
console.log(shopping.ordemStatus)
