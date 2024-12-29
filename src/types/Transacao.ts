import { TipoTransacao } from './TipoTransacao.js';

export type Transacao = {
    tipoTransacao: TipoTransacao;   // string;
    valor: number;
    data: Date;
}