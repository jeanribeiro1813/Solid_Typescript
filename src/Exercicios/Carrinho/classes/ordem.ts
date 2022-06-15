import {Ordem} from '../interface/orderInterface'
import { ProdutosClasse } from '../classes/produtos';
import {Menssagin} from '../services/msg'

export class Order {
  constructor(


    private readonly itens:ProdutosClasse,
    private readonly mensagem:Menssagin
    ){}


  orderStatus(txt:Ordem):void{
    console.log(txt)
  }

  closed():void{
    console.log('Carrinho Fechado')
  }

  public checkout():void{ //Ordem

    if(this.itens.isVazio()){
      console.log('Carrinho Fechado')
      return
    }

    console.log('')

    this.orderStatus('Fechado')
    console.log('')

    this.closed()
    console.log('')

    this.mensagem.sendMessage('Sua compra esta sendo processado')
    console.log('')


    this.itens.itensShow.map((x)=>{
      console.log(x.name, x.price)
      console.log('')

    })


  }


}
