import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html'
})
export class PerfilUsuarioComponent implements OnInit {

  public form: FormGroup;
  public title: string;
  public url: string = '';

  constructor(private fb: FormBuilder,
    private router: Router) {
    this.form = this.fb.group({
      nome: ['', Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(60),
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])],
      login: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])],
      senha: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])],
      confirmarSenha: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    });
  }

  ngOnInit() {
    this.title = "Perfil";
  }

  submit() {

    // if (localStorage.getItem('solp.usuario')) {
    //   this.router.navigateByUrl('/dashboard');
    // }

    this.router.navigateByUrl('/dashboard');
  }
}

