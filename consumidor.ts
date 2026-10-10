class Consumidor {
  nome: string;
  idade: number;
  email: string;

  constructor(nome: string, idade: number, email: string) {
    if (nome == "") {
      throw new Error("Nome inválido");
    }

    if (idade <= 0) {
      throw new Error("Idade inválida");
    }

    if (email == "" || !email.includes("@")) {
      throw new Error("Email inválido");
    }

    this.nome = nome;
    this.idade = idade;
    this.email = email;
  }

  exibir(): string {
    return "Consumidor: " + this.nome + " (" + this.idade + " anos) - " + this.email;
  }
}

const listaConsumidores: Consumidor[] = [];

listaConsumidores.push(new Consumidor("Ana Silva", 30, "ana@email.com"));
listaConsumidores.push(new Consumidor("Carlos Souza", 22, "carlos@email.com"));
listaConsumidores.push(new Consumidor("Mariana Lima", 45, "mariana@email.com"));
listaConsumidores.push(new Consumidor("Roberto Alves", 19, "roberto@email.com"));
listaConsumidores.push(new Consumidor("Fernanda Dias", 33, "fernanda@email.com"));

console.log("=== LISTA DE CONSUMIDORES ===");

for (const consumidor of listaConsumidores) {
  console.log(consumidor.exibir());
}

let somaIdades: number = 0;

for (const consumidor of listaConsumidores) {
  somaIdades += consumidor.idade;
}

let media: number = somaIdades / listaConsumidores.length;

let maisVelho: Consumidor = listaConsumidores[0];
let maisNovo: Consumidor = listaConsumidores[0];

for (const consumidor of listaConsumidores) {
  if (consumidor.idade > maisVelho.idade) {
    maisVelho = consumidor;
  }

  if (consumidor.idade < maisNovo.idade) {
    maisNovo = consumidor;
  }
}

console.log("\n=== ANÁLISE ESTATÍSTICA ===");
console.log("Média das Idades: " + media.toFixed(1) + " anos");
console.log("Mais Velho(a): " + maisVelho.nome + " (" + maisVelho.idade + " anos)");
console.log("Mais Novo(a): " + maisNovo.nome + " (" + maisNovo.idade + " anos)");