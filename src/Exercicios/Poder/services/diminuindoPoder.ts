
export class Diminuindo implements Abaixando{

  constructor(private readonly diminuindo:number){}

  fraco(valor:number):number{
    return valor - this.diminuindo
  }

}
