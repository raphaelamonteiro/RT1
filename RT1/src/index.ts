import Descritor from "./descritor";
import Empresa from "./empresa";
import Endereco from "./endereco";
import Funcionario from "./funcionario";
import Telefone from "./telefone";

const funcionarios: Funcionario[] = [
  new Funcionario(
    "Norman Osborn",
    "456",
    "121212121212",
    new Endereco(616, "Earth-616", "Earth", "New York"),
    new Telefone("16", "899988998")
  ),
  new Funcionario(
    "Harry Osborn",
    "789",
    "9090909099090",
    new Endereco(616, "Earth-616", "Earth", "New York"),
    new Telefone("16", "3445544567889")
  ),
];
const telefone: Telefone[] = [new Telefone("61", "987912871")];
const empresa = new Empresa(
  funcionarios,
  "Oscorp, Inc.",
  "Osborn Industries",
  "616",
  new Endereco(123, "New York", "New York City", "Manhattan")
);

const descritor = new Descritor();
descritor.descrever(empresa);
