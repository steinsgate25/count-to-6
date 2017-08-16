class Saludo {
  constructor(name) {
    this.name = name
    this.namelowercase = name.toLowerCase()
  }

  saludo() {
    return `Hello, ${this.name}!
Your name lowercased is "${this.namelowercase}".`
  }
}

var greeting = new Saludo(process.argv[2])

console.log(greeting.saludo());
