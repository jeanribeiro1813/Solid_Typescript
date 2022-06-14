/*
Interface segregation principle (Princípio da segregação de Interface) -
os clientes não devem ser forçados a depender de types, interfaces ou membros
abstratos que não utilizam
*/

import { Menssagin } from "./services/msg"
import { Order } from "./classes/oder"
import { Persistency } from "./services/persistence"
import { Produto } from "./classes/produto"
import { ShoppingCarLegacy } from "./classes/shopping-car-com SRP"
import { FiftyPercentDiscount } from './classes/discount';
import { IndividualCustomer, EnterPriseCustomer } from './classes/cutomer';

const fify = new FiftyPercentDiscount(50)
const shopping = new ShoppingCarLegacy(fify)
const menssagin =  new Menssagin()
const persistency = new Persistency()
const individual = new IndividualCustomer('Jean','Ribeiro',12345335)
// const entripese = new EnterPriseCustomer('JRS',354345623454423)
const order = new Order(shopping, menssagin,persistency,individual)


shopping.addItem(new Produto ('Camiseta', 60))
shopping.addItem(new Produto ('Mala',80))
shopping.addItem(new Produto ('Camiseta',60))

console.log(shopping.items)
console.log(shopping.total())
console.log(shopping.totalWithDicount())
order.checkout()
console.log(order.ordemStatus)
