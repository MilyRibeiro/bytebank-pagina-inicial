"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatters_js_1 = require("../utils/formatters.js");
const FormatoData_js_1 = require("../types/FormatoData.js");
const Conta_js_1 = require("../types/Conta.js");
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoDataAcesso != null) {
    elementoDataAcesso.textContent = (0, formatters_js_1.formatarData)(Conta_js_1.default.getDataAcesso(), FormatoData_js_1.FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
renderizarSaldo();
function renderizarSaldo() {
    if (elementoSaldo != null) {
        elementoSaldo.textContent = (0, formatters_js_1.formatarMoeda)(Conta_js_1.default.getSaldo());
    }
}
const SaldoComponent = {
    atualizar() {
        renderizarSaldo();
    }
};
exports.default = SaldoComponent;
