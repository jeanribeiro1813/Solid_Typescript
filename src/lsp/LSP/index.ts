/*
Liskov substitution principle (Princípio da substituição de Liskov) -
Se ϕ(x) é uma propriedade demonstrável dos objetos x de tipo T. Então ϕ(y)
deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T.
Mais simples: Subtipos precisam ser substituíveis por seus tipos de base.
Mais simples ainda: Se meu programa espera um Animal, algo do tipo
Cachorro (que herda de Animal) deve servir como qualquer outro Animal.
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
