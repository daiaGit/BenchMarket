import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-telefone',
  templateUrl: './form-telefone.component.html',
  styleUrls: ['./form-telefone.component.css']
})
export class FormTelefoneComponent implements OnInit {

  @Input() telefone: any = {};

  constructor() { }

  ngOnInit() {
  }

}
