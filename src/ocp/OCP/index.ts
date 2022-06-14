/*
Open/closed principle
Entidades devem estar abertas para extensão, mas fechadas para modificação.
*/

import { Menssagin } from "./services/msg"
import { Order } from "./classes/oder"
import { Persistency } from "./services/persistence"
import { Produto } from "./classes/produto"
import { ShoppingCarLegacy } from "./classes/shopping-car-com SRP"
import { FiftyPercentDiscount } from './classes/discount';

const fify = new FiftyPercentDiscount(50)
const shopping = new ShoppingCarLegacy(fify)
const menssagin =  new Menssagin()
const persistency = new Persistency()
const order = new Order(shopping, menssagin,persistency)

shopping.addItem(new Produto ('Camiseta', 60))
shopping.addItem(new Produto ('Mala',80))
shopping.addItem(new Produto ('Camiseta',60))

console.log(shopping.items)
console.log(shopping.total())
console.log(shopping.totalWithDicount())
order.checkout()
console.log(order.ordemStatus)
