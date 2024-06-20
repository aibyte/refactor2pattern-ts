export class List {
    private readonly readonly: Boolean;
    private size: number;
    private elements: Object[];
    constructor() {
        this.readonly = false;
        this.size = 0;
        this.elements = [];

    }

    getSize(){
        return this.size;
    }

    add(element: Object) {

        if (!this.readonly) {
            let newSize = this.size + 1;
            if (newSize > this.elements.length) {
                let newElements = new Array(newSize * 2);
                for (let i = 0; i < this.size; i++) {
                    newElements[i] = this.elements[i];
                }
                this.elements = newElements;
            }
            this.elements[this.size++] = element;
        }

    }
}
export default List;