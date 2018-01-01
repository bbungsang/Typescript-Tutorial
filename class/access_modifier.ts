class Pikachu {
    public name: string;
    protected attack: string;
    private secret: string;

    constructor(name: string, attack: string, secret: string) {
        this.name = name;
        this.attack = attack;
        this.secret = secret;
    }
}

const pikachu = new Pikachu('피카츄', '백만볼트', '인기투표 1위');
console.log(pikachu.name);
console.log(pikachu.attack); // Error: Property 'attack' is protected and only accessible within class 'Pikachu' and its subclasses.
console.log(pikachu.secret); // Error: Property 'secret' is private and only accessible within class 'Pikachu'.

class Pichu extends Pikachu {
    constructor(name: string, attack: string, secret: string) {
        super(name, attack, secret);
        console.log(this.name);
        console.log(this.attack);
        console.log(this.secret); // Error: Property 'secret' is private and only accessible within class 'Pikachu'.
    }
}

const pichu = new Pichu('피츄', '십만볼트', '귀여워서 사망')