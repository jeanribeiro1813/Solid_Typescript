import { Personagem } from "./classes/personagemClasse"
import {heroi,habilidades} from './services/preenchimentoPersona'
import { Diminuindo } from './services/diminuindoPoder';


const abaixo = new Diminuindo(20)
const personagem = new Personagem(heroi,habilidades,abaixo)

console.log(personagem)
console.log('--------------------')
console.log('Seu volume aumentou: ' + personagem.aumentoVolume(70))
console.log('--------------------')
personagem.mostrarForca()
console.log('--------------------')
console.log(personagem.qualidadePoder)
console.log('--------------------')
console.log(personagem.totalPoderBaixo(personagem.aumentoVolume(70)))


