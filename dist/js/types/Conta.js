"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TipoTransacao_js_1 = require("./TipoTransacao.js");
let saldo = 3000;
const Conta = {
    getSaldo() {
        return saldo;
    },
    getDataAcesso() {
        return new Date();
    },
    registrarTransacao(novaTransacao) {
        if (novaTransacao.tipoTransacao == TipoTransacao_js_1.TipoTransacao.DEPOSITO) {
            saldo += novaTransacao.valor;
        }
        else if (novaTransacao.tipoTransacao == TipoTransacao_js_1.TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao_js_1.TipoTransacao.PAGAMENTO_BOLETO) {
            saldo -= novaTransacao.valor;
        }
        else {
            alert("Tipo de Transação é inválido!");
            return;
        }
        console.log(novaTransacao);
    }
};
exports.default = Conta;
