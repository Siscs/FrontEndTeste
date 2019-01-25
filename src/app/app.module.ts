import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//NG Prime
import {BlockUIModule} from 'primeng/blockui';
import {TableModule} from 'primeng/table';
import {ProgressBarModule} from 'primeng/progressbar';
import {FileUploadModule} from 'primeng/fileupload';

//Currency
import { CurrencyMaskModule } from "ng2-currency-mask";
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from "ng2-currency-mask/src/currency-mask.config";

//SweetAlert
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

//routes
import { routing } from './app.routes';

//shared
import { FooterComponent } from './shared/footer/footer.component';
import { MenuSuperiorComponent } from './shared/menu-superior/menu-superior.component';
import { MenuLateralComponent } from './shared/menu-lateral/menu-lateral.component';
import { InformacaoUsuarioComponent } from './shared/menu-lateral/informacao-usuario/informacao-usuario.component';

//components
import { CardComponent } from './shared/card/card.component';

//pages
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProdutoListComponent } from './pages/produtos/produto-list/produto-list.component';
import { ProdutoFormComponent } from './pages/produtos/produto-form/produto-form.component';
import { ClienteFormComponent } from './pages/clientes/cliente-form/cliente-form.component';
import { ClienteListComponent } from './pages/clientes/cliente-list/cliente-list.component';
import { ImportarNotaficalComponent } from './pages/importar-notafical/importar-notafical.component';
import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';
import { PerfilUsuarioComponent } from './shared/menu-lateral/informacao-usuario/perfil-usuario/perfil-usuario.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './shared/layout/layout.component';

//Service
import { ProdutoService } from './services/produto.service';
import { NotaFiscalService } from './services/notafical.service';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: "."
};

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuSuperiorComponent,
    MenuLateralComponent,
    InformacaoUsuarioComponent,
    CardComponent,
    DashboardComponent,
    ProdutoListComponent,
    ProdutoFormComponent,
    ClienteFormComponent,
    ClienteListComponent,
    ImportarNotaficalComponent,
    ConfiguracoesComponent,
    PerfilUsuarioComponent,
    NotFoundComponent,
    LoginComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    SweetAlert2Module.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    CurrencyMaskModule,
    BlockUIModule,
    TableModule,
    ProgressBarModule,
    FileUploadModule
  ],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
    ProdutoService,
    NotaFiscalService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
