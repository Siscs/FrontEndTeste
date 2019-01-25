export interface Cliente {
    id: number;
    razaoSocial: string;
    nomeFantasia: string;
    cnpj: string;
    endereco: Endereco;
}

export class Endereco {
    id: number;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cep: string;
    cidade: string;
    estado: string;
    clienteId: number;
}