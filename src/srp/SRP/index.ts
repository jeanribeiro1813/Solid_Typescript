import { Menssagin } from "./services/msg"
import { Order } from "./entities/oder"
import { Persistency } from "./services/persistence"
import { Produto } from "./entities/produto"
import { ShoppingCarLegacy } from "./entities/shopping-car-com SRP"

const shopping = new ShoppingCarLegacy()
const menssagin =  new Menssagin()
const persistency = new Persistency()
const order = new Order(shopping, menssagin,persistency)

shopping.addItem(new Produto ('Camiseta', 60))
shopping.addItem(new Produto ('Mala',80))
shopping.addItem(new Produto ('Camiseta',60))

console.log(shopping.items)
console.log(shopping.total())
order.checkout()
console.log(order.ordemStatus)
