class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'mago':
                ataque = ' magia';
                break;
            case 'guerreiro':
                ataque = ' espada';
                break;
            case 'monge':
                ataque = ' artes marciais';
                break;
            case 'ninja':
                ataque = ' shuriken';
                break;
            default:
                ataque = ' um ataque desconhecido';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi1 = new Hero('jadsom', 19, 'guerreiro');
const heroi2 = new Hero('felipão', 79, 'mago');
const heroi3 = new Hero('joão', 40, 'monge');
const heroi4 = new Hero('takamassa nomuro', 18, 'ninja');

const herois = [heroi1, heroi2, heroi3, heroi4];

for (let heroi of herois) {
    heroi.atacar();
}