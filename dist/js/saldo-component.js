let saldo = 3000;
// alert('Testando de novo!!');
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoSaldo != null) {
    elementoSaldo.textContent = formatarMoeda(saldo); // saldo.toLocaleString("pt-br", { currency: "BRL", style: "currency" });    // toString();
}
if (elementoDataAcesso != null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso); // dataAcesso.toLocaleString("pt-br", {
    //     weekday: "long",
    //     day: '2-digit',
    //     month: '2-digit',
    //     year: 'numeric'
    // });
}
