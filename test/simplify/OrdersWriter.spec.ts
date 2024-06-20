import {Order, Orders, OrderWriter, Product} from "../../src/simplify/OrdersWriter";

test("should pass create an empty list", async () => {
    let orders = new Orders([]);
    let orderWriter = new OrderWriter(orders);
    expect(orderWriter).not.toBe(null);
    expect(orderWriter.getContents()).toEqual("<orders></orders>")
})

test("should pass create a new list with one element added", async () => {
    let order: Order = new Order(-1, []);
    let orders: Orders = new Orders([order]);
    let orderWriter: OrderWriter = new OrderWriter(orders);
    expect(orderWriter).not.toBe(null);
    expect(orderWriter.getContents()).toEqual("<orders><order id='-1'></order></orders>")
})

test("should pass happy path with one Order ", async () => {
    let order: Order = new Order(1, []);
    let orders: Orders = new Orders([order]);
    let orderWriter: OrderWriter = new OrderWriter(orders);
    expect(orderWriter).not.toBe(null);
    expect(orderWriter.getContents()).toEqual("<orders><order id='1'></order></orders>")
})

test("should pass happy path with one order and one product ", async () => {
    let order: Order = new Order(1, [new Product('', 0)]);
    let orders: Orders = new Orders([order]);
    let orderWriter: OrderWriter = new OrderWriter(orders);
    expect(orderWriter).not.toBe(null);
    expect(orderWriter.getContents()).toEqual("<orders><order id='1'><product><price>0</price></product></order></orders>")
})

test("should pass happy path with one order and two products ", async () => {
    let order: Order = new Order(1, [new Product('product1', 1), new Product('product2', 2)]);
    let orders: Orders = new Orders([order]);
    let orderWriter: OrderWriter = new OrderWriter(orders);
    expect(orderWriter).not.toBe(null);
    expect(orderWriter.getContents()).toEqual("<orders><order id='1'><product><price>1</price>product1</product><product><price>2</price>product2</product></order></orders>")
})