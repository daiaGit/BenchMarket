//imports do angular
import { ModuleWithProviders } from "@angular/core/core";
import { Routes, RouterModule } from '@angular/router';

//imports da aplicao
import { ConsumidorCadastroComponent } from './consumidor/consumidor-cadastro/consumidor-cadastro.component';
import { EstabelecimentoCadastroComponent } from './estabelecimento/estabelecimento-cadastro/estabelecimento-cadastro.component';
import { LoginConsumidorComponent } from './login/login-consumidor/login-consumidor.component';
import { LoginEstabelecimentoComponent } from './login/login-estabelecimento/login-estabelecimento.component';
import { HomePageComponent } from './home-page/home-page.component';

const APP_ROUTES: Routes = [

    { path: '', component: HomePageComponent },
    { path: 'login-estabelecimento', component: LoginEstabelecimentoComponent },
    { path: 'login-consumidor', component: LoginConsumidorComponent },
    { path: 'cadastro-estabelecimento', component: EstabelecimentoCadastroComponent },
    { path: 'cadastro-consumidor', component: ConsumidorCadastroComponent }

]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);