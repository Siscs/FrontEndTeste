import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html'
})
export class MenuSuperiorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('solp.usuario');
    localStorage.removeItem('solp.imagem');
    localStorage.removeItem('solp.email');
    
    this.router.navigateByUrl('/login');
  }
}
