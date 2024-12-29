import { formatarMoeda, formatarData } from "../utils/formatters.js";
import { FormatoData } from "../types/FormatoData.js";

let saldo: number = 3000;

// alert('Testando de novo!!');
const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

if(elementoDataAcesso != null) {
    const dataAcesso: Date = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO);     // dataAcesso.toLocaleString("pt-br", {
    //     weekday: "long",
    //     day: '2-digit',
    //     month: '2-digit',
    //     year: 'numeric'
    // });
}

export function getSaldo(): number {
    return saldo;
}

atualizarSaldo(saldo);
export function atualizarSaldo(novoSaldo: number): void {
    saldo = novoSaldo;
    if(elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(saldo);     // saldo.toLocaleString("pt-br", { currency: "BRL", style: "currency" });    // toString();
    }
}