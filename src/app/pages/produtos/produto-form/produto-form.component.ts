import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html'
})
export class ProdutoFormComponent implements OnInit {

  title: string;
  form: FormGroup;
  errors: any[] = [];

  blockedPanel: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService) {

    this.title = "Criação de Produto";

    this.form = this.fb.group({
      id: ['', Validators.compose([])],
      codigo: ['', Validators.compose([
        Validators.minLength(4),
        Validators.maxLength(12),
        Validators.required
      ])],
      ean: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])],
      ncm: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])],
      descricao: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(100),
        Validators.required
      ])],
      custo: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(12),
        Validators.required
      ])],
      venda: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(12),
        Validators.required
      ])],
    });
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.blockedPanel = true;
      
      this.title = "Alteração de produto";

      this.produtoService.getById(parseInt(id))
        .subscribe(resp => {
          this.form.setValue(resp);
          this.blockedPanel = false;
          // this.form.controls['title'].setValue(data.title);
        }, error => {
          console.log('>>>>', error);
          this.blockedPanel = false;
          //   this.errors = JSON.parse(error._body).errors;
        });
    }
  }

  voltar() {
    this.router.navigate(['/produtos']);
  }

}
