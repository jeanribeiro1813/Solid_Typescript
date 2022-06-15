import {Produto} from '../interface/produtoInterface'
import {DescontoClass} from '../classes/desconto'

export class ProdutosClasse{

  private readonly itens:Produto[] = []

  constructor(private readonly dicount:DescontoClass){}

  public addCar(itens:Produto):void{
    this.itens.push(itens)
  }

  public removeCar():void{
    this.itens.pop()
  }

  isVazio (): boolean{
    return this.itens.length === 0
  }

  total ():number{
    return this.itens.reduce((total,next) => total + next.price,0)
  }

  totalWithDicount():number{
    return this.dicount.desconto(this.total())
  }


  get itensShow():Readonly<Produto[]>{
    return this.itens
  }


}
