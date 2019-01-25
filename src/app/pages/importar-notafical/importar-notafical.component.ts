import { Component, OnInit } from '@angular/core';

import { NotaFiscalService } from 'src/app/services/notafical.service';
import { NotaFiscal } from 'src/app/models/notaFiscal';

@Component({
  selector: 'app-importar-notafical',
  templateUrl: './importar-notafical.component.html'
})
export class ImportarNotaficalComponent implements OnInit {

  public title: string;
  public notasFiscais: NotaFiscal[] = [];

  public uploadedFiles: any[] = [];

  public blockedPanel: boolean = false;
  public desabiltarBusca: boolean;

  constructor(private notafiscalService: NotaFiscalService) { }

  ngOnInit() {

    this.title = "Importação de Nota Fiscal";

    this.obter();
  }

  obter() {
    this.desabiltarBusca = true;

    this.notafiscalService.getAll().subscribe(
      resp => {
        this.desabiltarBusca = false;
        this.notasFiscais = resp;
      }, error => {
        this.blockedPanel = false;
        swal("Error", `Erro ao tentar acessar API! ${error}`, "error");
      });
  }

  onBasicUploadAuto(event) {
    console.log('ARQUIVO', event);
    // this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode'});
  }

  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);

      this.notasFiscais.push(
        {
          "id": 455, 
          "arquivo": "file",
          "dataimportacao":new Date,
          "dataprocessamento":new Date,
          "msg":"-",
          "sucesso":true
        });
    }

    console.log('ARQUIVO', event);
  }

}
