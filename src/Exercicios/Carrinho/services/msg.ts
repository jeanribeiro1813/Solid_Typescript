import { MSGProtocols } from "../interface/mensagemInterface";

export class Menssagin implements MSGProtocols{

  sendMessage(msg:string):void{
  console.log('Mensagem enviada:', msg)
 }
}
