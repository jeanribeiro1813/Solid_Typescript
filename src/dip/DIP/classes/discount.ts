interface Desconto{
  discount:number;
  calculate(valor:number):number
}

//Forçando para que o Desconto só receba number
export abstract class Discount implements Desconto{
  constructor(public discount: number){}

  abstract calculate(valor:number):number
}

export class FiftyPercentDiscount extends Discount{
  calculate(valor: number): number {
      return valor - valor * (this.discount /  100)
  }
}
