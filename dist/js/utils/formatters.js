"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatarMoeda = formatarMoeda;
exports.formatarData = formatarData;
const FormatoData_js_1 = require("../types/FormatoData.js");
function formatarMoeda(valor) {
    return valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}
function formatarData(data, formato = FormatoData_js_1.FormatoData.PADRAO) {
    if (formato === FormatoData_js_1.FormatoData.DIA_SEMANA_DIA_MES_ANO) {
        return data.toLocaleDateString("pt-br", {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
    }
    else if (formato === FormatoData_js_1.FormatoData.DIA_MES) {
        return data.toLocaleDateString("pt-br", { day: "2-digit", month: "2-digit" });
    }
    return data.toLocaleDateString("pt-br");
}
