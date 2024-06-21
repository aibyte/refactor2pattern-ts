import {AndSpec, BelowPrice, CodeSpec, ColorSpec, NameSpec, NotSpec, PriceSpec, Spec} from "./Spec";

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
        let codeSpec = new CodeSpec(code);
        return this.selectBy(codeSpec);
    }

    public byName(nameToBeFound: string) {
        let nameSpec = new NameSpec(nameToBeFound)
        return this.selectBy(nameSpec);
    }

    public byColor(color: string) {
        let colorSpec = new ColorSpec(color)
        return this.selectBy(colorSpec);
    }

    public byPrice(price: number) {
        let priceSpec = new PriceSpec(price)
        return this.selectBy(priceSpec);
    }

    public byColorAndBelowPrice(color: string, price: number) {
        let colorSpec = new ColorSpec(color)
        let belowPriceSpec = new BelowPrice(price)
        let andSpec = new AndSpec(colorSpec, belowPriceSpec)

        return this.selectBy(andSpec);
    }

    public byBelowPriceAvoidColor(price: number, color: string) {
        let belowPriceSpec = new BelowPrice(price)
        let colorSpec = new ColorSpec(color)
        let notSpec = new NotSpec(colorSpec)
        let andSpec = new AndSpec(belowPriceSpec, notSpec)
        return this.selectBy(andSpec);
    }

    private selectBy(spec: Spec) {
        let result: Product[] = new Array<Product>();
        for (let product of this.productRepository.getIterator()) {
            if (spec.isSatisfiedBy(product)) {
                result.push(product);
            }
        }
        return result;
    }
}

