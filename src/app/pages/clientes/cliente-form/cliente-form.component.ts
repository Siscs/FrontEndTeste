import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html'
})
export class ClienteFormComponent implements OnInit {

  public title: string;

  constructor(private route: ActivatedRoute,
    private router: Router, ) {
  }

  ngOnInit() {

    this.title = "Novo Cliente";

    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // this.produtoService.getById(parseInt(id)).subscribe(resp => {
      // this.produto = resp;
      this.title = `Alterando o Cliente: ${id}`;
      //  });
    }
  }

  voltar(){
    this.router.navigate(['/clientes']);
  }

}
