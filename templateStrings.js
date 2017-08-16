class Saludo {
  constructor(name) {
    this.name = name
  }

  saludo() {
    return `Hello, ${this.name}!
Your name lowercased is "${this.name.toLowerCase()}".`
  }

}

var greeting = new Saludo(process.argv[2])

console.log(greeting.saludo());
