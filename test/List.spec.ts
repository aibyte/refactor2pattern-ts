import List from '../src/List';

test("should pass create an empty list", async () => {
    let list = new List();
    expect(list).not.toBe(null);
    expect(list.getSize()).toBe(0)
})

test("should pass create a new list with one element added", async () => {
    let list = new List();
    list.add("element")
    expect(list.getSize()).toBe(1)
})