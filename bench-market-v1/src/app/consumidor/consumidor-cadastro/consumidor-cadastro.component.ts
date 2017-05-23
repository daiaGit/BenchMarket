import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, NgForm } from '@angular/forms';

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
    numero: '',
    email: '',
    senha: '',
    senhaConfirma: ''
  };

  formErrors: any = {
    txt_nome: '',
    txt_sobrenome: '',
    txt_ddd: '',
    txt_numero: '',
    txt_email: '',
    txt_senha: '',
    txt_senhaConfirma: ''
  };

  validationMessages = {
    txt_nome: {
      'required': 'Nome obrigatório.',
      'minlenght': 'Nome menor que 4.',
      'maxlength': 'Nome maior que 24'
    },
    txt_sobrenome: {
      'required': 'Nome obrigatório.',
      'minlenght': 'Nome menor que 4.',
      'maxlength': 'Nome maior que 24'
    },
    txt_ddd: {
      'required': 'Nome obrigatório.',
      'minlenght': 'Nome menor que 4.',
      'maxlength': 'Nome maior que 24'
    },
    txt_numero: {
      'required': 'Nome obrigatório.',
      'minlenght': 'Nome menor que 4.',
      'maxlength': 'Nome maior que 24'
    },
    txt_email: {
      'required': 'Nome obrigatório.',
      'minlenght': 'Nome menor que 4.',
      'maxlength': 'Nome maior que 24'
    },
    txt_senha: {
      'required': 'Nome obrigatório.',
      'minlenght': 'Nome menor que 4.',
      'maxlength': 'Nome maior que 24'
    },
    txt_senhaConfirma: {
      'required': 'Nome obrigatório.',
      'minlenght': 'Nome menor que 4.',
      'maxlength': 'Nome maior que 24'
    },
  };

  constructor() {

  }

  ngOnInit() {

  }

  onSubmit() {
    this.submitted = true;
  }

  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    if (this.currentForm === this.consumidorForm) {
      return;
    }
    if (this.consumidorForm) {
      this.consumidorForm.valueChanges.subscribe(data => this.onValueChanged(data));
    }
  }

  onValueChanged(data?: any) {
    if (!this.consumidorForm) {
      return;
    }
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + '';
        }
      }
    }
  }

}
