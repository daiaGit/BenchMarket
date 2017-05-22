import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-email',
  templateUrl: './form-email.component.html',
  styleUrls: ['./form-email.component.css']
})
export class FormEmailComponent implements OnInit {

  @Input() email: any = {};

  constructor() { }

  ngOnInit() {
  }

}
