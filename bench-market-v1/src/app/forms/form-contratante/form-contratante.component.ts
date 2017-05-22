import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-contratante',
  templateUrl: './form-contratante.component.html',
  styleUrls: ['./form-contratante.component.css']
})
export class FormContratanteComponent implements OnInit {

  @Input() contratante: any = {};

  constructor() { }

  ngOnInit() {
  }

}
