import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-endereco',
  templateUrl: './form-endereco.component.html',
  styleUrls: ['./form-endereco.component.css']
})
export class FormEnderecoComponent implements OnInit {

  @Input() endereco: any={};

  constructor() { }

  ngOnInit() {
  }

}
