export class TagNode {
    private readonly tagName: string;
    private attributes: string;
    private value: string;
    private readonly children: TagNode[];

    constructor(tagName: string) {
        this.tagName = tagName;
        this.attributes = "";
        this.value = "";
        this.children = new Array<TagNode>();
    }

    public toXML() {
        let resultArray : Array<String> = new Array<String>()
        this.writeContentsTo(resultArray);
        return resultArray.join("");
    }

    private writeContentsTo(result: Array<String>) {
        this.writeOpenTagTo(result);
        this.writeChildrenTo(result);
        this.writeValueTo(result);
        this.writeCloseTagTo(result);
    }

    private writeCloseTagTo(result: Array<String>) {
        result.push(`</${this.tagName}>`)
    }

    private writeValueTo(result: Array<String>) {
        if (this.value) {
            result.push(this.value)
        }
    }

    private writeChildrenTo(result: Array<String>) {
        for (let child of this.children) {
            child.writeContentsTo(result)
        }
    }

    private writeOpenTagTo(result: Array<String>) {
        result.push(`<${this.tagName}${this.attributes}>`)
    }

    public addValue(value: string) {
        this.value = value;
    }

    public add(child: TagNode) {
        this.children.push(child);
    }

    public addAttribute(attribute: string, value: string) {
        this.attributes += " ";
        this.attributes += attribute;
        this.attributes += "='";
        this.attributes += value;
        this.attributes += "'";
    }
}