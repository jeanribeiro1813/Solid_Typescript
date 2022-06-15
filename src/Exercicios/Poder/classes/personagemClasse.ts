import {Poder} from './poderClasse'
import{Habilidade} from '../interfaces/habilidade'
import {Pessoa} from '../interfaces/pessoa'
import { Diminuindo } from '../services/diminuindoPoder'

export class Personagem extends Poder{

  private readonly abaixo: Diminuindo

constructor( pessoa:Pessoa, habilidade: Habilidade ,abaixo:Diminuindo){
  super(pessoa,habilidade)
  this.abaixo = abaixo
  }

  public mostrarForca():void{
    console.log(`Seu nome é ${this.pessoa.name} você tem o poder ${this.habilidade.poder}`)
  }

  public aumentoVolume(valor:number):number{
    return this.habilidade.volume + valor
  }

  get qualidadePoder():Readonly<string>{
    return this.habilidade.qualidade
  }

  totalPoderBaixo(valor:number):number{
    return this.abaixo.fraco(valor)
  }
}
