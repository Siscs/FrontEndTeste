import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacao-usuario',
  templateUrl: './informacao-usuario.component.html'
})
export class InformacaoUsuarioComponent implements OnInit {

  public usuario: string;
  public imagem: string;
  public email: string;

  constructor() { }

  ngOnInit() {
    this.usuario = localStorage.getItem('solp.usuario');
    this.imagem = localStorage.getItem('solp.imagem');
    this.email = localStorage.getItem('solp.email');
  }
}
