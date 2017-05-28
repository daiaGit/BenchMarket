//imports angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

//imports style
import { MaterializeModule } from 'angular2-materialize';

//imports aplicacao
import { AppComponent } from './app.component';
import { CabecalhoHomePageComponent } from './cabecalho-home-page/cabecalho-home-page.component';
import { ConsumidorCadastroComponent } from './consumidor/consumidor-cadastro/consumidor-cadastro.component';
import { ConsumidorComponent } from './consumidor/consumidor.component';
import { EstabelecimentoComponent } from './estabelecimento/estabelecimento.component';
import { EstabelecimentoCadastroComponent } from './estabelecimento/estabelecimento-cadastro/estabelecimento-cadastro.component';
import { FormsComponent } from './forms/forms.component';
import { FormContratanteComponent } from './forms/form-contratante/form-contratante.component';
import { FormEmailComponent } from './forms/form-email/form-email.component';
import { FormEnderecoComponent } from './forms/form-endereco/form-endereco.component';
import { FormEstabelecimentoComponent } from './forms/form-estabelecimento/form-estabelecimento.component';
import { FormTelefoneComponent } from './forms/form-telefone/form-telefone.component';
import { GenericMaskDirective } from './shared/mask/generic-mask.directive';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { LoginConsumidorComponent } from './login/login-consumidor/login-consumidor.component';
import { LoginEstabelecimentoComponent } from './login/login-estabelecimento/login-estabelecimento.component';
import { routing } from "app/app.routing";
import { SharedComponent } from './shared/shared.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsumidorComponent,
    ConsumidorCadastroComponent,
    EstabelecimentoComponent,
    EstabelecimentoCadastroComponent,
    FormsComponent,
    FormContratanteComponent,
    FormEmailComponent,
    FormEnderecoComponent,
    FormEstabelecimentoComponent,
    FormTelefoneComponent,
    LoginComponent,
    HomePageComponent,
    CabecalhoHomePageComponent,
    LoginEstabelecimentoComponent,
    LoginConsumidorComponent,
    SharedComponent,
    GenericMaskDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    routing,
    TranslateModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, './assets/i18n', '.json'),
      deps: [Http]
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
