export class Product {
    private readonly _code: string;
    private readonly _name: string;
    private readonly _color: string;
    private readonly _price: number;


    constructor(code: string, name: string, color: string, price: number) {
        this._code = code;
        this._name = name;
        this._color = color;
        this._price = price;
    }

    get code(): string {
        return this._code;
    }

    get name(): string {
        return this._name;
    }

    get color(): string {
        return this._color;
    }

    get price(): number {
        return this._price;
    }
}

export class ProductRepository {
    private products: Product[] = new Array<Product>();

    public getIterator() {
        return this.products[Symbol.iterator]();
    }

    public add(product: Product) {
        this.products.push(product);
    }
}

export class ProductFinder {
    private readonly productRepository: ProductRepository;


    constructor(productRepository: ProductRepository) {
        this.productRepository = productRepository;
    }

    public byCode(code: string): Product[] {
        let result: Product[] = new Array<Product>();
        for (let product of this.productRepository.getIterator()) {
            if (product.code === code) {
                result.push(product);
            }
        }
        return result;
    }

    public byName(nameToBeFound: string) {
        let result: Product[] = new Array<Product>();
        for (let product of this.productRepository.getIterator()) {
            if (product.name === nameToBeFound) {
                result.push(product);
            }
        }
        return result;
    }

    public byColor(color: string) {
        let result: Product[] = new Array<Product>();
        for (let product of this.productRepository.getIterator()) {
            if (product.color === color) {
                result.push(product);
            }
        }
        return result;
    }

    public byPrice(price: number) {
        let result: Product[] = new Array<Product>();
        for (let product of this.productRepository.getIterator()) {
            if (product.price === price) {
                result.push(product);
            }
        }
        return result;
    }

    public byColorAndBelowPrice(color: string, price: number) {
        let result: Product[] = new Array<Product>();
        for (let product of this.productRepository.getIterator()) {
            if (product.color === color && product.price < price) {
                result.push(product);
            }
        }
        return result;
    }

    public byBelowPriceAvoidColor(price: number, color: string) {
        let result: Product[] = new Array<Product>();
        for (let product of this.productRepository.getIterator()) {
            if (product.price < price && product.color !== color) {
                result.push(product);
            }
        }
        return result;
    }
}