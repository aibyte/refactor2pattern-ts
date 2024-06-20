export class TagNode {
    private tagName: string;
    private attributes: string;
    private value: string;
    private children: TagNode[];

    constructor(tagName: string) {
        this.tagName = tagName;
        this.attributes = "";
        this.value = "";
        this.children = new Array<TagNode>();
    }

    public toXML() {
        let result = `<${this.tagName}${this.attributes}>`;

        for (let child of this.children) {
            result += child.toXML();
        }
        if (this.value) {
            result += this.value;
        }
        result += `</${this.tagName}>`;
        return result;
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