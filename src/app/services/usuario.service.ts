import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';

import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends BaseService {

  constructor(private http: HttpClient) { super(); }

  login(usuario: Usuario) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let response = this.http.get<Usuario>(`${this.UrlServiceV1}/login`);
    console.log('aaa',response);
    return response;
  }
}
