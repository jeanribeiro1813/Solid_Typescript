export abstract class Discount {
  constructor(public discount: number){}

  abstract calculate(valor:number):number
}

export class FiftyPercentDiscount extends Discount{
  calculate(valor: number): number {
      return valor - valor * (this.discount /  100)
  }
}
