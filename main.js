function Veiculo(nome) {
  this.nome = nome;
  this.dizVeiculo = function () {
    console.log(this.nome);
  };
}

function Carro(nome, marca, preco) {
  this.marca = marca;
  let _preco = preco;

  this.getPreco = function () {
    return _preco;
  };

  this.setPreco = function (valor) {
    if (typeof valor === "number") {
      _preco = valor;
    }
  };

  this.taxa = function () {
    const novoPreco = _preco * 1.03;
    _preco = novoPreco;
  };

  this.descreverVeiculo = function () {
    console.log(`Veículo: ${this.nome} - marca: ${this.marca}`);
  };

  Veiculo.call(this, nome);
}

function Sedan(nome) {
  Carro.call(this, nome, "Honda", 120000);

  this.taxa = function () {
    const novoPreco = this.getPreco() * 1.09;
    this.setPreco(novoPreco);
  };
}

function Hatch(nome) {
  Carro.call(this, nome, "Fiat", 56000);

  this.taxa = function () {
    const novoPreco = this.getPreco() * 1.04;
    this.setPreco(novoPreco);
  };
}

const carro1 = new Carro("Civic", "Honda", 150000);
const carro2 = new Carro("Fit", "Honda", 90000);
const carro3 = new Hatch("Palio");
const carro4 = new Sedan("Fiesta");

carro4.dizVeiculo();
carro1.descreverVeiculo();
carro3.descreverVeiculo();

carro3.taxa();
console.log(carro3.getPreco());
