interface Desconto {

  discount:number
  desconto(valor:number):number
}
export class  DescontoClass implements Desconto{

  constructor(public readonly discount : number){}

  desconto(valor:number):number{
    return valor - valor * (this.discount /  100)
  }
}
