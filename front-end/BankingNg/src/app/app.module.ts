import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { ExtratoComponent } from './pages/extrato/extrato.component';
import { HttpModule } from '@angular/http';
import { LoginService } from './services/login.service';
import { TransfComponent } from './pages/transferencia/transf.component';
import { ExtratoService } from './services/extrato.service';

import { TextMaskModule } from 'angular2-text-mask'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    LogoComponent,
    ExtratoComponent,
    TransfComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    TextMaskModule
  ],
  providers: [LoginService, ExtratoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
