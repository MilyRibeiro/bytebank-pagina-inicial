"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSaldo = getSaldo;
exports.atualizarSaldo = atualizarSaldo;
const formatters_js_1 = require("../utils/formatters.js");
const FormatoData_js_1 = require("../types/FormatoData.js");
let saldo = 3000;
// alert('Testando de novo!!');
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoDataAcesso != null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = (0, formatters_js_1.formatarData)(dataAcesso, FormatoData_js_1.FormatoData.DIA_SEMANA_DIA_MES_ANO); // dataAcesso.toLocaleString("pt-br", {
    //     weekday: "long",
    //     day: '2-digit',
    //     month: '2-digit',
    //     year: 'numeric'
    // });
}
function getSaldo() {
    return saldo;
}
atualizarSaldo(saldo);
function atualizarSaldo(novoSaldo) {
    saldo = novoSaldo;
    if (elementoSaldo != null) {
        elementoSaldo.textContent = (0, formatters_js_1.formatarMoeda)(saldo); // saldo.toLocaleString("pt-br", { currency: "BRL", style: "currency" });    // toString();
    }
}
