import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import swal from 'sweetalert';

import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { NotaFiscalService } from 'src/app/services/notafical.service';


@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
})
export class ProdutoListComponent implements OnInit {

  @ViewChild('uploadXML') myInputVariable: ElementRef;

  public title: string;
  public produtos: Produto[] = [];

  public blockedPanel: boolean = false;

  public desabiltarBusca: boolean;
  public registroPagina = 10;

  constructor(
    private produtoService: ProdutoService,
    private notaFiscalService: NotaFiscalService) {
  }

  ngOnInit() {
    this.title = "Listagem de Produtos";

    this.obter();
  }

  obter() {
    this.blockedPanel = true;
    this.desabiltarBusca = true;

    this.produtoService.getAll().subscribe(
      resp => {
        this.desabiltarBusca = false;
        this.blockedPanel = false;
        this.produtos = resp;
      }, error => {
        this.desabiltarBusca = false;
        this.blockedPanel = false;
        swal("Error", `Erro ao tentar acessar API! ${error}`, "error");
      });
  }

  excluir(produto: Produto) {
    this.blockedPanel = true;

    this.produtoService.remove(produto.id)
      .subscribe(
        resp => {
          this.blockedPanel = false;

          if (resp.sucesso) {
            this.produtos = this.produtos.filter(p => p !== produto);
            swal("Sucesso", resp.msg, "success");
          } else {
            swal("Falha", resp.msg, "warning");
          }
        },
        error => {
          this.blockedPanel = false;
          swal("Error", `Erro ao tentar acessar API! ${error}`, "error");
        }
      );
  }

  importarProdutoXML(arquivo: any) {
    this.blockedPanel = true;

    this.notaFiscalService.importarProduto(arquivo).subscribe(
      resp => {
        console.log('resp', resp);
        this.blockedPanel = false;
      }, error => {
        this.blockedPanel = false;
        swal("Error", `Erro ao tentar acessar API! ${error}`, "error");
      });
  }
}
