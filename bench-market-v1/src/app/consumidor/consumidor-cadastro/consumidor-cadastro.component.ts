import { Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-consumidor-cadastro',
  templateUrl: './consumidor-cadastro.component.html',
  styleUrls: ['./consumidor-cadastro.component.css']
})

export class ConsumidorCadastroComponent implements OnInit {

  consumidorForm: NgForm;
  @ViewChild('consumidorForm') currentForm: NgForm;

  submitted: boolean = false;
  
  consumidor: any = {
    nome: '',
    sobrenome: '',
    ddd: '',
    numero_telefone: '',
    email: '',
    senha: '',
    senha_confirma: ''
  };

  formErrors: any = {
    nome: '',
    sobrenome: '',
    ddd: '',
    numero_telefone: '',
    email: '',
    senha: '',
    senha_confirma: ''
  };

  validationMessages = {
    nome: {
      'required':  'Nome obrigatório.',
      'minlength': 'Nome menor que 4.',
      'maxlength': 'Nome maior que 24'
    },
    sobrenome: {
      'required':  'Sobrenome obrigatório.',
      'minlength': 'Sobrenome menor que 4.',
      'maxlength': 'Sobrenome maior que 24'
    },
    ddd: {
      'required':  'DDD obrigatório.',
      'minlength': 'DDD menor que 4.',
      'maxlength': 'DDD maior que 24'
    },
    numero_telefone: {
      'required':  'Número obrigatório.',
      'minlength': 'Número menor que 4.',
      'maxlength': 'Número maior que 24'
    },
    email: {
      'required':  'Email obrigatório.',
      'minlength': 'Email menor que 4.',
      'maxlength': 'Email maior que 24'
    },
    senha: {
      'required':  'Senha obrigatório.',
      'minlength': 'Senha menor que 4.',
      'maxlength': 'Senha maior que 24'
    },
    senha_confirma: {
      'required':  'Senha Confirma obrigatório.',
      'minlength': 'Senha Confirma menor que 4.',
      'maxlength': 'Senha Confirma maior que 24'
    }
  };

  constructor() {

  }

  ngOnInit() {

  }

 ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    if (this.currentForm === this.consumidorForm) {
       return; 
      }
    this.consumidorForm = this.currentForm;
    if (this.consumidorForm) {
      this.consumidorForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
    }
  }

  onValueChanged(data?: any) {
    if (!this.consumidorForm) { 
      return; 
    }
    const form = this.consumidorForm.form;
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && (control.dirty || control.touched) && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  onSubmit() {
    this.submitted = true;
  }

}
