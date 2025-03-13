"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Descritor = /** @class */ (function () {
    function Descritor() {
    }
    Descritor.prototype.descrever = function (empresa) {
        var text = "Raz\u00E3o Social: ".concat(empresa.razaoSocial, "\n") +
            "Nome Fantasia: ".concat(empresa.nomeFantasia, "\n") +
            "CNPJ: ".concat(empresa.cnpj, "\n") +
            "Endere\u00E7o:\n" +
            "Rua: ".concat(empresa.endereco.rua, ", ").concat(empresa.endereco.numero, " - Bairro: ").concat(empresa.endereco.bairro, ", Cidade: ").concat(empresa.endereco.cidade, "\n");
        text += "-----------------------\n" + "Funcion\u00E1rios: \n";
        empresa.funcionarios.forEach(function (func) {
            text +=
                "Nome: ".concat(func.nome, "\n") +
                    "Matr\u00EDcula: ".concat(func.matricula, "\n") +
                    "CPF: ".concat(func.cpf, "\n") +
                    "Telefone: (".concat(func.telefone.ddd, ") ").concat(func.telefone.numero, "\n") +
                    "Rua: ".concat(empresa.endereco.rua, ", ").concat(empresa.endereco.numero, " - Bairro: ").concat(empresa.endereco.bairro, ", Cidade: ").concat(empresa.endereco.cidade, "\n") +
                    "-----------------------\n";
        });
        console.log(text);
    };
    return Descritor;
}());
exports.default = Descritor;
