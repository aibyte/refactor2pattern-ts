export class Product {
    get name(): string {
        return this._name;
    }

    private readonly _name: string;
    private readonly _price: number;


    constructor(name: string, price: number) {
        this._name = name;
        this._price = price;
    }

    get price(): number {
        return this._price;
    }
}

export class Order {
    private readonly _id: number;
    private readonly productList: Product[];


    constructor(id: number, productList: Product[]) {
        this._id = id;
        this.productList = productList;
    }

    get id(): number {
        return this._id;
    }

    public getProductCount(): number {
        return this.productList.length;
    }

    public getProduct(i: number): Product {
        return this.productList[i];
    }
}

export class Orders {
    private readonly _orders: Order[];

    constructor(orders: Order[]) {
        this._orders = orders;
    }

    get orders(): Order[] {
        return this._orders;
    }
}

export class OrderWriter {
    private orders: Orders;

    constructor(orders: Orders) {
        this.orders = orders;
    }

    public getContents(): String {
        let xml = "";
        xml = this.writeOrderTo(xml);
        return xml;
    }

    private writeOrderTo(xml: string) {
        xml += "<orders>";
        for (let order of this.orders.orders) {
            xml += "<order id='" + order.id + "'>";
            xml = this.writeProductTo(order, xml);
            xml += "</order>";
        }
        xml += "</orders>";
        return xml;
    }

    private writeProductTo(order: Order, xml: string) {
        for (let j = 0; j < order.getProductCount(); j++) {
            let product = order.getProduct(j);
            xml += "<product>";
            xml = this.writePriceTo(product, xml);
            xml += product.name
            xml += "</product>";
        }
        return xml;
    }

    private writePriceTo(product: Product, xml: string) {
        xml += "<price>" + product.price + "</price>";
        return xml;
    }
}