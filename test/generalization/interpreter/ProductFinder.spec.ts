import {Product, ProductFinder, ProductRepository} from '../../../src/generalization/interpreter/ProductFinder'

let productFinder: ProductFinder
let fireTruck: Product = new Product('f1234', 'Fire Truck', 'red', 8.95);
let barbieClassic: Product = new Product('b7654', 'Barbie Classic', 'yellow', 15.95);
let toyPorsche: Product = new Product('p1112', 'Toy Porsche', 'red', 230.00);

function createProductRepository() {
    let productRepository = new ProductRepository()
    productRepository.add(fireTruck)
    productRepository.add(barbieClassic)
    productRepository.add(toyPorsche)
    return productRepository
}

beforeAll(() => {
    productFinder = new ProductFinder(createProductRepository())
})

test("should pass by code exist ", async () => {
    let foundedProducts = productFinder.byCode('f1234');
    expect(foundedProducts).not.toBeNull()
    expect(foundedProducts.length).toBe(1)
    expect(foundedProducts[0]).toEqual(fireTruck)
})

test("should pass by code not exist ", async () => {
    expect(productFinder.byCode('4')).not.toBeNull()
    expect(productFinder.byCode('4').length).toBe(0)
})

test("should pass by name exist", async () => {
    let foundedProducts = productFinder.byName('Fire Truck');
    expect(foundedProducts).not.toBeNull()
    expect(foundedProducts.length).toBe(1)
    expect(foundedProducts[0]).toEqual(fireTruck)
})

test("should pass by name not exist", async () => {
    expect(productFinder.byName('Car')).not.toBeNull()
    expect(productFinder.byName('Car').length).toBe(0)
})

test("should pass by color exist", async () => {
    let foundedProducts = productFinder.byColor('red');
    expect(foundedProducts).not.toBeNull()
    expect(foundedProducts.length).toBe(2)
    expect(foundedProducts.includes(fireTruck)).toBe(true)
    expect(foundedProducts.includes(toyPorsche)).toBe(true)
})

test("should pass by color not exist", async () => {
    expect(productFinder.byColor('blue')).not.toBeNull()
    expect(productFinder.byColor('blue').length).toBe(0)
})

test("should pass by price exist", async () => {
    let foundedProducts = productFinder.byPrice(8.95);
    expect(foundedProducts).not.toBeNull()
    expect(foundedProducts.length).toBe(1)
    expect(foundedProducts[0]).toEqual(fireTruck)
})

test("should pass by price not exist", async () => {
    expect(productFinder.byPrice(0)).not.toBeNull()
    expect(productFinder.byPrice(0).length).toBe(0)
})

test("should pass by color and below price", async () => {
    let foundedProducts = productFinder.byColorAndBelowPrice('red', 9.00)
    expect(foundedProducts).not.toBeNull()
    expect(foundedProducts.length).toBe(1)
    expect(foundedProducts[0]).toEqual(fireTruck)
})

test("should pass by color and below price not exist", async () => {
    expect(productFinder.byColorAndBelowPrice('red', 8.00)).not.toBeNull()
    expect(productFinder.byColorAndBelowPrice('red', 8.00).length).toBe(0)
})

test("should pass by below price and avoid color exist", async () => {
    let foundedProducts = productFinder.byBelowPriceAvoidColor(9.00, 'yellow')
    expect(foundedProducts).not.toBeNull()
    expect(foundedProducts.length).toBe(1)
    expect(foundedProducts[0]).toEqual(fireTruck)
})

test("should pass by below price and avoid color not exist", async () => {
    let foundedProducts = productFinder.byBelowPriceAvoidColor(9.00, 'red');
    expect(foundedProducts).not.toBeNull()
    expect(foundedProducts.length).toBe(0)
})