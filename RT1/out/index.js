"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var descritor_1 = __importDefault(require("./descritor"));
var empresa_1 = __importDefault(require("./empresa"));
var endereco_1 = __importDefault(require("./endereco"));
var funcionario_1 = __importDefault(require("./funcionario"));
var telefone_1 = __importDefault(require("./telefone"));
var funcionarios = [
    new funcionario_1.default("Norman Osborn", "456", "121212121212", new endereco_1.default(616, "Earth-616", "Earth", "New York"), new telefone_1.default("16", "899988998")),
    new funcionario_1.default("Harry Osborn", "789", "9090909099090", new endereco_1.default(616, "Earth-616", "Earth", "New York"), new telefone_1.default("16", "3445544567889")),
];
var telefone = [new telefone_1.default("61", "987912871")];
var empresa = new empresa_1.default(funcionarios, "Oscorp, Inc.", "Osborn Industries", "616", new endereco_1.default(123, "New York", "New York City", "Manhattan"));
var descritor = new descritor_1.default();
descritor.descrever(empresa);
