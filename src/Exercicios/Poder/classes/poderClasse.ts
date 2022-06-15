import{Tudo} from '../interfaces/personagem'
import{Habilidade} from '../interfaces/habilidade'
import {Pessoa} from '../interfaces/pessoa'

export abstract class Poder implements Tudo{

  public readonly pessoa: Pessoa
  public readonly habilidade: Habilidade


constructor( pessoa:Pessoa, habilidade: Habilidade ){

  this.habilidade = habilidade
  this.pessoa = pessoa

  }

}
