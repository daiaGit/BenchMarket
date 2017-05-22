import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-estabelecimento',
  templateUrl: './form-estabelecimento.component.html',
  styleUrls: ['./form-estabelecimento.component.css']
})
export class FormEstabelecimentoComponent implements OnInit {

  @Input() estabelecimento: any = {};

  constructor() { }

  ngOnInit() {
  }

}
