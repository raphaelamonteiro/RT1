import Endereco from "./endereco";
import funcionario from "./funcionario";

export default class Empresa {
  public razaoSocial: string;
  public nomeFantasia: string;
  public cnpj: string;
  public endereco: Endereco;
  public funcionarios: funcionario[];

  constructor(
    funcionarios: funcionario[],
    razaoSocial: string,
    nomeFantasia: string,
    cnpj: string,
    endereco: Endereco
  ) {
    this.razaoSocial = razaoSocial;
    this.nomeFantasia = nomeFantasia;
    this.cnpj = cnpj;
    this.endereco = endereco;
    this.funcionarios = funcionarios;
  }
}
