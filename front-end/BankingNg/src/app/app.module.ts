import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AuthGuard } from './guards/auth.guard';
import { AplicationErrorHandle } from './app.error-handle';
import { CheckTokenInterceptor } from './interceptors/check-token.interceptors';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LogoComponent } from './components/logo/logo.component';
import { ExtratoComponent } from './pages/extrato/extrato.component';
import { HttpModule } from '@angular/http';
import { LoginService } from './services/login.service';
import { TransfComponent } from './pages/transferencia/transf.component';
import { ExtratoService } from './services/extrato.service';

import { TextMaskModule } from 'angular2-text-mask';
import { TransferenciaService } from './services/transferencia.service';
import { ModalComponent } from './components/modal/modal.component';
import { SidebarModule } from 'ng-sidebar';
import { FavorecidosComponent } from './pages/transferencia/favorecidos/favorecidos.component';
import { OutraContaComponent } from './pages/transferencia/outra-conta/outra-conta.component';
import { SucessoComponent } from './pages/transferencia/sucesso/sucesso.component';
import { ConfirmacaoComponent } from './pages/transferencia/confirmacao/confirmacao.component';
import { FalhaComponent } from './pages/transferencia/falha/falha.component';
import { ValorComponent } from './pages/transferencia/valor/valor.component';
import { MasterComponent } from './pages/master/master.component';
import { TokenTranferenciaComponent } from './pages/transferencia/token-tranferencia/token-tranferencia.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    LogoComponent,
    ExtratoComponent,
    TransfComponent,
    ModalComponent,
    SidebarComponent,
    FavorecidosComponent,
    OutraContaComponent,
    SucessoComponent,
    FalhaComponent,
    ValorComponent,
    MasterComponent,
    ConfirmacaoComponent,
    TokenTranferenciaComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    TextMaskModule,
    NgbModule.forRoot(),
    SidebarModule.forRoot()
  ],
  providers: [
    LoginService,
    ExtratoService,
    TransferenciaService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: CheckTokenInterceptor, multi: true },
    { provide: ErrorHandler, useClass: AplicationErrorHandle }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
