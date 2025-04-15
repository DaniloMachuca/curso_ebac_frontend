function classePricipal(atributo1, atributo2, atributo3) {
  this.atributo1 = atributo1;
  this.atributo2 = atributo2;
  this.atributo3 = atributo3;
  this.metodo1 = function () {
    console.log("metodo 1");
  };
}

function classeSecundaria(
  atributo1,
  atributo2,
  atributo3,
  atributoSecreto,
  atributoDiferente1
) {
  classePricipal.call(this, atributo1, atributo2, atributo3);

  this.atributoDiferente1 = atributoDiferente1;
  let _atributoSecreto = atributoSecreto;

  this.getAtributoSecreto = function () {
    return _atributoSecreto;
  };

  this.setAtributoSecreto = function (newAtributoSecreto) {
    _atributoSecreto = newAtributoSecreto;
  };
}

function classeTercearia(
  atributo1,
  atributo2,
  atributo3,
  atributoSecreto,
  atributoDiferente1,
  atributoDiferente2
) {
  classeSecundaria.call(
    this,
    atributo1,
    atributo2,
    atributo3,
    atributoSecreto,
    atributoDiferente1
  );
  this.atributoDiferente2 = atributoDiferente2;
}

const objeto1 = new classePricipal("valor1", "valor2", "valor3");
const objeto2 = new classeSecundaria(
  "valor1",
  "valor2",
  "valor3",
  "valor secreto objeto2",
  "valor diferente"
);
const objeto3 = new classeTercearia(
  "valor1",
  "valor2",
  "valor3",
  "valor secreto objeto3",
  "valor diferente",
  "valor diferente2"
);

console.log(objeto1);
console.log(objeto2);
console.log(objeto3);
objeto1.metodo1();
objeto2.metodo1();
objeto3.metodo1();
console.log(objeto2.getAtributoSecreto());
console.log(objeto3.getAtributoSecreto());
