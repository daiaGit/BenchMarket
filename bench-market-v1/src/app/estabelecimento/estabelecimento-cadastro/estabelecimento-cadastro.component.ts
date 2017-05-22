import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estabelecimento-cadastro',
  templateUrl: './estabelecimento-cadastro.component.html',
  styleUrls: ['./estabelecimento-cadastro.component.css']
})
export class EstabelecimentoCadastroComponent implements OnInit {

  sucesso: boolean = false;

  contratante: any = {
    nome_contratante: '',
    sobrenome_contratante: '',
    cfp_contratante: '',
    cargo_contratante: '',
    ddd_fone_contratante: '',
    numero_fone_contratante: '',
    email_contratante: ''
  };

  endereco: any = {
    logradouro: '',
    numero: '',
    complemeto: '',
    bairro: '',
    cep: '',
    estado: '',
    cidade: ''
  };

  estabelecimento: any = {
    cnpj: '',
    razao_social: '',
    nome_fantasia: '',
    inscricao_estadual: '',
    inscricao_municipal: ''
  };

  telefone: any = {
    tipo_telefone: '',
    ddd_fone: '',
    numero_fone: ''
  };

  email: any = {
    descricao: ''
  };


  constructor() { }

  ngOnInit() {}

}
