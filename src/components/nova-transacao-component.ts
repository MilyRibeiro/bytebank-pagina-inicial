// import { formatarMoeda } from "../utils/formatters.js";
import { Transacao } from "../types/Transacao.js";
import { TipoTransacao } from "../types/TipoTransacao.js";
import { atualizarSaldo, getSaldo } from "./saldo-component.js";

const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
elementoFormulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    if(!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação!")
        return;
    }

    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
    const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
    const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;

    // let tipoTransacao: string = inputTipoTransacao.value;
    let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value);
    let saldo: number = getSaldo();

    if(tipoTransacao == TipoTransacao.DEPOSITO) {
        saldo += valor;
    } else if(tipoTransacao == TipoTransacao.TRANSFERENCIA || tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
        saldo -= valor;
    } else {
        alert("Tipo de transação inválido!");
        return;
    }

    atualizarSaldo(saldo);   // elementoSaldo.textContent = formatarMoeda(saldo)    //saldo.toLocaleString("pt-br", { currency: "BRL", style: "currency" });      // toString();

    const novaTransacao: Transacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    }

    console.log(novaTransacao);
    elementoFormulario.reset();
})

