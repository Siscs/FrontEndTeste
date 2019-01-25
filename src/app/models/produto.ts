import { Base } from "./base";

export interface Produto extends Base{
    id: number;
    codigo: string;
    ean: string;
    descricao: string;
    ncm: string;
    custo: number;
    venda: number;
    //tamanho: Tamanho;
    //cor: Cor;
}
