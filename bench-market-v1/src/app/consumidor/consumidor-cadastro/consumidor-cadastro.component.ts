import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-consumidor-cadastro',
  templateUrl: './consumidor-cadastro.component.html',
  styleUrls: ['./consumidor-cadastro.component.css']
})
export class ConsumidorCadastroComponent implements OnInit {

  consumidorForm: FormGroup;

  sucesso: boolean = false;

  consumidor: any = {
    nome: '',
    sobrenome: '',
    ddd: '',
    numero: '',
    email: '',
    senha: '',
    senhaConfirma: ''
  };

  constructor(fb: FormBuilder) {
    this.buildForm(fb);      
  }

  //método que declara todas regras de validaçao do formulario
  buildForm(fb: FormBuilder): void {
    this.consumidorForm = fb.group({
      txt_nome: [this.consumidor.nome, ['', Validators.required]],
      txt_sobrenome: ['', Validators.required],
      txt_ddd: ['', Validators.required],
      txt_telefone: ['', Validators.required],
      txt_email: ['', Validators.compose([
                      Validators.required])],
      txt_senha: ['', Validators.required],
      txt_senha_confirma: ['', Validators.required]
    });
  }

  //método que verifica se possui algum erro de validaçao
  hasErrors():boolean {
    var hasErrors: boolean = false;
    for(var controlName in this.consumidorForm.controls){
      var control: AbstractControl = this.consumidorForm.controls[controlName];
      if(!control.valid && !control.pristine) {
        hasErrors = true;
        break;
      }
    }
    return hasErrors;
  }

  enviar(): void {
    this.sucesso = true;
  }

  debug(): string {
    return JSON.stringify(this.consumidor);
  }

  ngOnInit() {

  }

}
