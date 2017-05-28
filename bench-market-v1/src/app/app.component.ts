import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  constructor(private translate: TranslateService){
    translate.addLangs(["en", "fr", "pt", "es"]);
    translate.setDefaultLang("pt");
  }

  changeLanguage(lang){
    this.translate.use(lang);
  }

} 