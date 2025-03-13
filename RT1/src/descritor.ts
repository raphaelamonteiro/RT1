import Empresa from "./empresa";
import Funcionario from "./funcionario";
import Telefone from "./telefone";

export default class Descritor {
  public descrever(empresa: Empresa): void {
    let text: string =
      `Razão Social: ${empresa.razaoSocial}\n` +
      `Nome Fantasia: ${empresa.nomeFantasia}\n` +
      `CNPJ: ${empresa.cnpj}\n` +
      `Endereço:\n` +
      `Rua: ${empresa.endereco.rua}, ${empresa.endereco.numero} - Bairro: ${empresa.endereco.bairro}, Cidade: ${empresa.endereco.cidade}\n`;

    text += `-----------------------\n` + `Funcionários: \n`;

    empresa.funcionarios.forEach((func: Funcionario): void => {
      text +=
        `Nome: ${func.nome}\n` +
        `Matrícula: ${func.matricula}\n` +
        `CPF: ${func.cpf}\n` +
        `Telefone: (${func.telefone.ddd}) ${func.telefone.numero}\n` +
        `Rua: ${empresa.endereco.rua}, ${empresa.endereco.numero} - Bairro: ${empresa.endereco.bairro}, Cidade: ${empresa.endereco.cidade}\n` +
        `-----------------------\n`;
    });

    console.log(text);
  }
}
