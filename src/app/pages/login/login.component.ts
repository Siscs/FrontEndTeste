import { Component, OnInit } from '@angular/core';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private usuarioService: UsuarioService,
    private fb: FormBuilder,
    private router: Router) {
    this.form = this.fb.group({
      usuario: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(60),
        Validators.required
      ])],
      senha: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    });

    if (localStorage.getItem('solp.usuario')) {
      this.router.navigateByUrl('/dashboard');
    }
  }

  ngOnInit() {
  }

  submit() {
    this.usuarioService.login(this.form.value)
      .subscribe(
        resp => {
          console.log('resp',resp);
          localStorage.setItem('solp.usuario', resp.login);
          localStorage.setItem('solp.imagem', resp.imagem);
          localStorage.setItem('solp.email', resp.email);

          this.router.navigateByUrl('/dashboard');
        },
        error => {
          swal("Error", "Erro ao tentar acessar API!", "error")
        }
      );
  }
}
