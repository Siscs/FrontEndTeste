import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';

import { Produto } from '../models/produto';

@Injectable()
export class ProdutoService extends BaseService {

  private endpoint: string = "produtos";

  constructor(private http: HttpClient) {
    super();
    this.UrlServiceV1 = `${this.UrlServiceV1}/${this.endpoint}`;
  }

  getAll() {
    return this.http.get<Produto[]>(this.UrlServiceV1);
  }

  getById(id: number) {
    return this.http.get<Produto>(`${this.UrlServiceV1}/${id}`);
  }

  insert(produto: Produto) {
    return this.http.post<Produto>(this.UrlServiceV1, produto);
  }

  update(produto: Produto) {
    return this.http.put<Produto>(this.UrlServiceV1, produto);
  }

  remove(id: number) {
    return this.http.delete<Produto>(`${this.UrlServiceV1}/${id}`);
  }

}
