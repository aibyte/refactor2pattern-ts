import {TagNode} from "../../src/simplify/TagNode";

test("should pass create an empty list", async () => {
    let tagNode = new TagNode("price");
    expect(tagNode).not.toBe(null);
    expect(tagNode.toXML()).toEqual("<price></price>")
})

test("should pass create a new list with one element added", async () => {
    let tagNode = new TagNode("price");
    tagNode.addValue("0");
    tagNode.addAttribute("currency", "USD");
    expect(tagNode).not.toBe(null);
    expect(tagNode.toXML()).toEqual("<price currency='USD'>0</price>")
})

test("should pass create a new list with one element added", async () => {
    let tagNode = new TagNode("product");
    let priceTagNode = new TagNode("price");
    tagNode.add(priceTagNode)
    priceTagNode.addValue("0");
    priceTagNode.addAttribute("currency", "USD");

    expect(tagNode).not.toBe(null);
    expect(tagNode.toXML()).toEqual("<product><price currency='USD'>0</price></product>")
})

test("should pass create a new list with one child element and one grand child added", async () => {
    let ordersTagNode = new TagNode("orders");
    let orderTagNode = new TagNode("order");
    let productTagNode = new TagNode("product");
    ordersTagNode.add(orderTagNode)
    orderTagNode.add(productTagNode)
    expect(ordersTagNode).not.toBe(null);
    expect(ordersTagNode.toXML()).toEqual("<orders><order><product></product></order></orders>")
})