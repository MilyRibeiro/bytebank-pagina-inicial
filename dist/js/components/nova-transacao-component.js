"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const saldo_component_js_1 = require("./saldo-component.js");
const Conta_js_1 = require("../types/Conta.js");
const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }
    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    const inputValor = elementoFormulario.querySelector("#valor");
    const inputData = elementoFormulario.querySelector("#data");
    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.valueAsNumber;
    let data = new Date(inputData.value);
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    Conta_js_1.default.registrarTransacao(novaTransacao);
    saldo_component_js_1.default.atualizar();
    elementoFormulario.reset();
});
