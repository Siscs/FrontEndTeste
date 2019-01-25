import { Http, Headers, Response, RequestOptions } from '@angular/http';

export abstract class BaseService {

  public Token: string = "";
  protected UrlServiceV1: string = "http://demo8733358.mockable.io";

  constructor() { }

  protected obterAuthHeader(): RequestOptions {
    this.Token = localStorage.getItem('solp.token');
    
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', `Bearer ${this.Token}`);

    return new RequestOptions({ headers: headers });
  }
}
