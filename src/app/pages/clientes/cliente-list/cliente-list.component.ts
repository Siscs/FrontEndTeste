import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html'
})
export class ClienteListComponent implements OnInit {

  public title: string;

  public clientes: Cliente[] = [];

  constructor() {

    
  }

  ngOnInit() {
    this.title = "Listagem de Clientes";

    this.clientes = [
      {
        id: 1, cnpj: '84.202.794/0001-66', nomeFantasia: 'Luiza e José Restaurante ME', razaoSocial: 'Luiza e José',
        endereco: {
          id: 45,
          bairro: 'Barro',
          cep: '321',
          cidade: 'cidade',
          complemento: 'comple', estado: 'SP',
          logradouro: 'rua', numero: '12',
          clienteId: 1
        }
      },

      {
        id: 2, cnpj: '93.186.613/0001-46', nomeFantasia: 'Adriana e Benedito Comercio de Bebidas Ltda', razaoSocial: 'Adriana e Benedito',
        endereco: {
          id: 45,
          bairro: 'Barro',
          cep: '321',
          cidade: 'cidade',
          complemento: 'comple', estado: 'SP',
          logradouro: 'rua', numero: '12',
          clienteId: 1
        }
      },
      {
        id: 3, cnpj: '54.013.708/0001-06', nomeFantasia: 'Ricardo e Gael Comercio de Bebidas Ltda', razaoSocial: 'Ricardo e Gael',
        endereco: {
          id: 45,
          bairro: 'Barro',
          cep: '321',
          cidade: 'cidade',
          complemento: 'comple', estado: 'SP',
          logradouro: 'rua', numero: '12',
          clienteId: 1
        }
      },
      {
        id: 4, cnpj: '01.956.378/0001-26', nomeFantasia: 'Beatriz e Diogo Telecomunicações Ltda', razaoSocial: 'Beatriz e Diogo',
        endereco: {
          id: 45,
          bairro: 'Barro',
          cep: '321',
          cidade: 'cidade',
          complemento: 'comple', estado: 'SP',
          logradouro: 'rua', numero: '12',
          clienteId: 1
        }
      },
      {
        id: 5, cnpj: '02.964.387/0001-21', nomeFantasia: 'Aurora e Kauê Consultoria Financeira ME', razaoSocial: 'Aurora e Kauê',
        endereco: {
          id: 45,
          bairro: 'Barro',
          cep: '321',
          cidade: 'cidade',
          complemento: 'comple', estado: 'SP',
          logradouro: 'rua', numero: '12',
          clienteId: 1
        }
      },

      {
        id: 6, cnpj: '19.355.862/0001-65', nomeFantasia: 'Alícia e Andreia Ferragens ME', razaoSocial: 'Alícia e Andreia',
        endereco: {
          id: 45,
          bairro: 'Barro',
          cep: '321',
          cidade: 'cidade',
          complemento: 'comple', estado: 'SP',
          logradouro: 'rua', numero: '12',
          clienteId: 1
        }
      },
      {
        id: 7, cnpj: '89.580.483/0001-54', nomeFantasia: 'Gustavo e Erick Telas Ltda', razaoSocial: 'Gustavo e Erick ',
        endereco: {
          id: 45,
          bairro: 'Barro',
          cep: '321',
          cidade: 'cidade',
          complemento: 'comple', estado: 'SP',
          logradouro: 'rua', numero: '12',
          clienteId: 1
        }
      },
      {
        id: 8, cnpj: '81.407.066/0001-00', nomeFantasia: 'Jennifer e João Buffet M', razaoSocial: 'Jennifer e João',
        endereco: {
          id: 45,
          bairro: 'Barro',
          cep: '321',
          cidade: 'cidade',
          complemento: 'comple', estado: 'SP',
          logradouro: 'rua', numero: '12',
          clienteId: 1
        }
      },
      {
        id: 9, cnpj: '92.864.496/0001-60', nomeFantasia: 'Hugo e Cristiane Buffet Ltda', razaoSocial: 'Hugo e Cristiane',
        endereco: {
          id: 45,
          bairro: 'Barro',
          cep: '321',
          cidade: 'cidade',
          complemento: 'comple', estado: 'SP',
          logradouro: 'rua', numero: '12',
          clienteId: 1
        }
      },
      {
        id: 10, cnpj: '18.635.829/0001-26', nomeFantasia: 'André e Davi Contábil Ltda', razaoSocial: 'André e Davi',
        endereco: {
          id: 45,
          bairro: 'Barro',
          cep: '321',
          cidade: 'cidade',
          complemento: 'comple', estado: 'SP',
          logradouro: 'rua', numero: '12',
          clienteId: 1
        }
      },

      {
        id: 11, cnpj: '64.612.383/0001-31', nomeFantasia: 'Luan e Evelyn Construções ME', razaoSocial: 'Luan e Evelyn',
        endereco: {
          id: 45,
          bairro: 'Barro',
          cep: '321',
          cidade: 'cidade',
          complemento: 'comple', estado: 'SP',
          logradouro: 'rua', numero: '12',
          clienteId: 1
        }
      },
      {
        id: 12, cnpj: '27.281.202/0001-05', nomeFantasia: 'Tereza e Beatriz Ferragens ME', razaoSocial: 'Tereza e Beatriz',
        endereco: {
          id: 45,
          bairro: 'Barro',
          cep: '321',
          cidade: 'cidade',
          complemento: 'comple', estado: 'SP',
          logradouro: 'rua', numero: '12',
          clienteId: 1
        }
      },
      {
        id: 13, cnpj: '17.720.239/0001-39', nomeFantasia: 'Rafaela e Cláudio Buffet Ltda', razaoSocial: 'Rafaela e Cláudio',
        endereco: {
          id: 45,
          bairro: 'Barro',
          cep: '321',
          cidade: 'cidade',
          complemento: 'comple', estado: 'SP',
          logradouro: 'rua', numero: '12',
          clienteId: 1
        }
      },
      {
        id: 14, cnpj: '01.402.086/0001-41', nomeFantasia: 'Luciana e Calebe Lavanderia Ltda', razaoSocial: 'Luciana e Calebe ',
        endereco: {
          id: 45,
          bairro: 'Barro',
          cep: '321',
          cidade: 'cidade',
          complemento: 'comple', estado: 'SP',
          logradouro: 'rua', numero: '12',
          clienteId: 1
        }
      },
      {
        id: 15, cnpj: '20.663.644/0001-77', nomeFantasia: 'Laura e Ricardo Doces & Salgados Ltda', razaoSocial: 'Laura e Ricardo',
        endereco: {
          id: 45,
          bairro: 'Barro',
          cep: '321',
          cidade: 'cidade',
          complemento: 'comple', estado: 'SP',
          logradouro: 'rua', numero: '12',
          clienteId: 1
        }
      },
    ];
  }
}
