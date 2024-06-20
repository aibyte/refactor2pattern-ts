export class List {
    private readonly readonly: Boolean;
    private size: number;
    private elements: Object[];
    constructor() {
        this.readonly = false;
        this.size = 0;
        this.elements = [];

    }

    public getSize(){
        return this.size;
    }

    public add(element: Object) {
        if (this.readonly) {
            return
        }
        if (this.overCapacity()) {
            this.grow();
        }
        this.addElement(element);

    }

    private addElement(element: Object) {
        this.elements[this.size++] = element;
    }

    private grow() {
        let newElements = new Array((this.size + 1) * 2);
        for (let i = 0; i < this.size; i++) {
            newElements[i] = this.elements[i];
        }
        this.elements = newElements;
    }

    private overCapacity() {
        return this.size + 1 > this.elements.length;
    }
}
export default List;