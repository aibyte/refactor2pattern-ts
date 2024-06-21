import {Product} from "./ProductFinder";

export abstract class Spec {
    abstract isSatisfiedBy(product: Product): boolean ;
}

export class CodeSpec extends Spec {
    private readonly _code: string;

    constructor(code: string) {
        super();
        this._code = code;
    }
    
    get code(): string {
        return this._code;
    }

    isSatisfiedBy(product: Product) {
        return product.code === this.code;
    }

}

export class NameSpec extends Spec {
    private readonly _name: string;

    constructor(name: string) {
        super();
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    isSatisfiedBy(product: Product) {
        return product.name === this.name;
    }

}

export class ColorSpec extends Spec {
    private readonly _color: string;

    constructor(color: string) {
        super();
        this._color = color;
    }

    get color(): string {
        return this._color;
    }

    isSatisfiedBy(product: Product) {
        return product.color === this.color;
    }
}

export class PriceSpec extends Spec {
    private readonly _price: number;

    constructor(price: number) {
        super()
        this._price = price;
    }

    get price(): number {
        return this._price;
    }

    isSatisfiedBy(product: Product) {
        return product.price === this.price;
    }
}

export class BelowPrice extends Spec {
    private readonly price: number;

    constructor(price: number) {
        super();
        this.price = price;
    }

    isSatisfiedBy(product: Product) {
        return product.price < this.price;
    }
}

export class AndSpec extends Spec {
    private readonly spec1: Spec;
    private readonly spec2: Spec;

    constructor(spec1: Spec, spec2: Spec) {
        super();
        this.spec1 = spec1;
        this.spec2 = spec2;
    }

    isSatisfiedBy(product: Product) {
        return this.spec1.isSatisfiedBy(product) && this.spec2.isSatisfiedBy(product);
    }
}

export class NotSpec extends Spec {
    private readonly spec: Spec;

    constructor(spec: Spec) {
        super();
        this.spec = spec;
    }

    isSatisfiedBy(product: Product) {
        return !this.spec.isSatisfiedBy(product);
    }
}