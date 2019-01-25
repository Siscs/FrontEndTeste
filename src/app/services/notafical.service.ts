import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { NotaFiscal } from '../models/notaFiscal';

@Injectable()
export class NotaFiscalService extends BaseService {

  private endpoint: string = "notasfiscais";

  constructor(private http: HttpClient) {
    super();
    this.UrlServiceV1 = `${this.UrlServiceV1}/${this.endpoint}`;
  }

  getAll() {
    return this.http.get<NotaFiscal[]>(this.UrlServiceV1);
  }

  importarProduto(arquivo) {
    const arq = arquivo[0];

    if (arq.length === 0)
      return;

    let formData: FormData = new FormData();
    formData.append(arq.name, arq);

     return this.http.post<any>("https://localhost:5001/api/notafiscal", formData);
  }
}
