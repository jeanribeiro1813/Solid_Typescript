import {Order} from './classes/ordem'
import { DescontoClass } from './classes/desconto';
import {ProdutosClasse} from './classes/produtos'
import { Menssagin } from './services/msg';



const desconto = new DescontoClass(20)
const shopping = new ProdutosClasse(desconto)
const mensagem = new Menssagin()

const ordem = new Order(shopping,mensagem)


shopping.addCar({name:'Camiseta',price:666})
shopping.addCar({name:'Calça',price:1050.40})
shopping.addCar({name:'Regata',price:45.6})
shopping.addCar({name:'sapato',price:46})


ordem.checkout()



console.log(`Total a ser pago`, shopping.total())

console.log('Com desconto fica : ' + shopping.totalWithDicount())
