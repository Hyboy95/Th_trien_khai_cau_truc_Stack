export class Stack<G> {
    list: G[] = [];
    constructor() {
    }
    push(data: G) {
        this.list.push(data);
    }
    pop(): G {
        return this.list.pop();
    }
    size(): number {
        return this.list.length;
    }
}