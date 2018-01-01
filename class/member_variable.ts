class Pocketmon {
    before: string;
    after: string;

    constructor(before: string, after: string) {
        this.before = before;
        this.after = after;
    }

    evolution() {
        console.log(`${this.before}가 진화하면, ${this.after}!!`);
    }
}

var pocketmon = new Pocketmon('피카츄', '라이츄');
pocketmon.evolution();
