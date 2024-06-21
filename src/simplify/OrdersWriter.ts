import {TagNode} from "./TagNode";

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
        return this.writeOrderTo();
    }

    private writeOrderTo() {
        let ordersTagNode = new TagNode("orders");
        for (let order of this.orders.orders) {
            let orderTagNode: TagNode = new TagNode("order");
            orderTagNode.addAttribute("id", order.id.toString());
            this.writeProductTo(order, orderTagNode)
            ordersTagNode.add(orderTagNode);
        }
        return ordersTagNode.toXML();
    }

    private writeProductTo(order: Order, orderTagNode: TagNode) {
        for (let j = 0; j < order.getProductCount(); j++) {
            let product = order.getProduct(j);
            let productTagNode = new TagNode("product");
            productTagNode.addValue(product.name);
            this.writePriceTo(product, productTagNode);
            orderTagNode.add(productTagNode);
        }
    }

    private writePriceTo(product: Product, productTagNode: TagNode) {
        let priceTagNode: TagNode  = new TagNode("price");
        priceTagNode.addValue(product.price.toString());
        productTagNode.add(priceTagNode)
    }
}