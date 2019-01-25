import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { PerfilUsuarioComponent } from './shared/menu-lateral/informacao-usuario/perfil-usuario/perfil-usuario.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';
import { ImportarNotaficalComponent } from './pages/importar-notafical/importar-notafical.component';
import { ProdutoFormComponent } from './pages/produtos/produto-form/produto-form.component';
import { ProdutoListComponent } from './pages/produtos/produto-list/produto-list.component';
import { ClienteFormComponent } from './pages/clientes/cliente-form/cliente-form.component';
import { ClienteListComponent } from './pages/clientes/cliente-list/cliente-list.component';
import { LayoutComponent } from './shared/layout/layout.component';


const appRoutes: Routes = [

    // {
    //     path: '',
    //     children: [
    //         { path: '', component: LoginComponent, pathMatch: 'full' },
    //     ]
    // },
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },

            { path: 'perfil', component: PerfilUsuarioComponent },

            { path: 'configuracoes', component: ConfiguracoesComponent },
            { path: 'importarnotafiscal', component: ImportarNotaficalComponent },

            { path: 'produtos', component: ProdutoListComponent },
            { path: 'produto', component: ProdutoFormComponent },
            { path: 'produto/:id', component: ProdutoFormComponent },

                   { path: 'clientes', component: ClienteListComponent },
            { path: 'cliente', component: ClienteFormComponent },
            { path: 'cliente/:id', component: ClienteFormComponent },
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: '**', component: NotFoundComponent }
];

export const routing = RouterModule.forRoot(appRoutes);