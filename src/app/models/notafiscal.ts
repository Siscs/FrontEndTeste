import { Base } from "./base";

export interface NotaFiscal extends Base {
    id: number;
    arquivo: string;
    dataimportacao: Date;
    dataprocessamento: Date;
}
